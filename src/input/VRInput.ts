import * as THREE from 'three';
import { IInputSource, LookDelta, Vector2D } from './IInputSource';

export class VRInput implements IInputSource {
  private renderer: THREE.WebGLRenderer;
  private playerGroup: THREE.Group;
  private camera: THREE.Camera;

  public rightController: THREE.XRTargetRaySpace | null = null;
  public leftController: THREE.XRTargetRaySpace | null = null;
  public rightGrip: THREE.XRGripSpace | null = null;
  public leftGrip: THREE.XRGripSpace | null = null;

  private shootTriggered: boolean = false;
  private isShooting: boolean = false;
  private reloadTriggered: boolean = false;
  private pauseTriggered: boolean = false;

  private moveVector: Vector2D = { x: 0, z: 0 };

  // Snap Turn con cerrojo de seguridad (Single-Flick Latch)
  // Evita giros continuos e interminables que provocan mareo
  private canSnapTurn: boolean = true;
  private snapTurnAngle: number = Math.PI / 6; // 30 grados por snap (mucho más cómodo que 45)

  // Pestillo para botón de pausa del mando izquierdo (X / Y)
  private canPause: boolean = true;

  public onRightControllerReady?: (controller: THREE.XRTargetRaySpace, grip: THREE.XRGripSpace) => void;
  public onLeftControllerReady?: (controller: THREE.XRTargetRaySpace, grip: THREE.XRGripSpace) => void;

  constructor(renderer: THREE.WebGLRenderer, playerGroup: THREE.Group, camera: THREE.Camera) {
    this.renderer = renderer;
    this.playerGroup = playerGroup;
    this.camera = camera;

    this.setupControllers();
  }

  private setupControllers(): void {
    // Configurar controladores dinámicamente según 'handedness' real (evita invertir manos)
    for (let i = 0; i < 2; i++) {
      const controller = this.renderer.xr.getController(i);
      const grip = this.renderer.xr.getControllerGrip(i);

      this.playerGroup.add(controller);
      this.playerGroup.add(grip);

      controller.addEventListener('connected', (event) => {
        const data = (event as unknown as { data: XRInputSource }).data;
        if (!data) return;

        if (data.handedness === 'right') {
          this.rightController = controller;
          this.rightGrip = grip;
          this.setupRightControllerEvents(controller);
          if (this.onRightControllerReady) {
            this.onRightControllerReady(controller, grip);
          }
        } else if (data.handedness === 'left') {
          this.leftController = controller;
          this.leftGrip = grip;
          this.setupLeftControllerEvents(controller);
          if (this.onLeftControllerReady) {
            this.onLeftControllerReady(controller, grip);
          }
        }
      });
    }
  }

  private setupRightControllerEvents(controller: THREE.XRTargetRaySpace): void {
    controller.addEventListener('selectstart', () => {
      this.isShooting = true;
      this.shootTriggered = true;
      this.triggerHaptic(0.7, 40, 'right');
    });

    controller.addEventListener('selectend', () => {
      this.isShooting = false;
    });
  }

  private setupLeftControllerEvents(controller: THREE.XRTargetRaySpace): void {
    controller.addEventListener('selectstart', () => {
      this.reloadTriggered = true;
      this.triggerHaptic(0.35, 30, 'left');
    });
  }

  public init(): void {
  }

  public dispose(): void {
  }

  public update(_delta: number): void {
    const session = this.renderer.xr.getSession();
    if (!session) return;

    let leftStick = { x: 0, y: 0 };
    let rightStick = { x: 0, y: 0 };

    for (const source of session.inputSources) {
      if (!source.gamepad) continue;
      const gp = source.gamepad;
      const stick = this.getSafeThumbstick(gp);

      if (source.handedness === 'left') {
        leftStick = stick;

        // Botón Grip del mando izquierdo para recargar
        if (gp.buttons[1]?.pressed) {
          this.reloadTriggered = true;
        }

        // Botones X (4) o Y (5) o clic de palanca (3) para PAUSAR con cerrojo
        const isPausePressed = !!(gp.buttons[4]?.pressed || gp.buttons[5]?.pressed || gp.buttons[3]?.pressed);
        if (isPausePressed) {
          if (this.canPause) {
            this.pauseTriggered = true;
            this.canPause = false;
            this.triggerHaptic(0.35, 35, 'left');
          }
        } else {
          this.canPause = true;
        }
      } else if (source.handedness === 'right') {
        rightStick = stick;
        // Botón Grip o botón A/B del mando derecho para recargar
        if (gp.buttons[1]?.pressed || gp.buttons[4]?.pressed || gp.buttons[5]?.pressed) {
          this.reloadTriggered = true;
        }
      }
    }

    // 1. SISTEMA DE SNAP TURN ANTI-MAREO (Single-Flick Latch)
    // El giro solo se ejecuta 1 SOLA VEZ por inclinación.
    // Para volver a girar, el jugador DEBE soltar la palanca al centro (< 0.28).
    if (Math.abs(rightStick.x) < 0.28) {
      this.canSnapTurn = true; // La palanca regresó al centro
    }

    if (this.canSnapTurn) {
      if (rightStick.x > 0.65) {
        this.playerGroup.rotation.y -= this.snapTurnAngle;
        this.canSnapTurn = false; // ¡BLOQUEADO hasta que se suelte!
        this.triggerHaptic(0.25, 25, 'right');
      } else if (rightStick.x < -0.65) {
        this.playerGroup.rotation.y += this.snapTurnAngle;
        this.canSnapTurn = false; // ¡BLOQUEADO hasta que se suelte!
        this.triggerHaptic(0.25, 25, 'right');
      }
    }

    // 2. LOCOMOCIÓN ORIENTADA A LA CABEZA (Head-Gaze Movement)
    // Si la palanca izquierda está dentro de la zona muerta, no se mueve
    if (Math.hypot(leftStick.x, leftStick.y) > 0.18) {
      const forwardInput = -leftStick.y;
      const strafeInput = leftStick.x;

      // Dirección de mirada de la cabeza en el mundo
      const headDir = new THREE.Vector3();
      this.camera.getWorldDirection(headDir);
      headDir.y = 0;
      headDir.normalize();

      const headRight = new THREE.Vector3(-headDir.z, 0, headDir.x);

      const move = new THREE.Vector3();
      move.addScaledVector(headDir, forwardInput);
      move.addScaledVector(headRight, strafeInput);

      this.moveVector.x = move.x;
      this.moveVector.z = move.z;
    } else {
      this.moveVector.x = 0;
      this.moveVector.z = 0;
    }
  }

  /**
   * Extrae los ejes del joystick de manera segura evitando que gatillos o agarres
   * sean leídos accidentalmente como rotación continua.
   */
  private getSafeThumbstick(gp: Gamepad): { x: number; y: number } {
    if (!gp.axes) return { x: 0, y: 0 };

    // Estándar oficial WebXR para Oculus Touch / Meta Quest
    if (gp.mapping === 'xr-standard' && gp.axes.length >= 4) {
      return {
        x: gp.axes[2] ?? 0,
        y: gp.axes[3] ?? 0
      };
    }

    // Fallback para controladores de 2 ejes
    if (gp.axes.length >= 2) {
      return {
        x: gp.axes[0] ?? 0,
        y: gp.axes[1] ?? 0
      };
    }

    return { x: 0, y: 0 };
  }

  public triggerHaptic(intensity: number = 0.7, durationMs: number = 40, hand: 'right' | 'left' = 'right'): void {
    const session = this.renderer.xr.getSession();
    if (!session) return;

    for (const source of session.inputSources) {
      if (source.handedness === hand && source.gamepad) {
        const actuators = (source.gamepad as unknown as { hapticActuators?: Array<{ pulse: (i: number, d: number) => void }> }).hapticActuators;
        if (actuators && actuators.length > 0) {
          actuators[0].pulse(intensity, durationMs);
        }
      }
    }
  }

  public getMovement(): Vector2D {
    return this.moveVector;
  }

  public getLookDelta(): LookDelta {
    return { x: 0, y: 0 };
  }

  public resetLookDelta(): void {
  }

  public isShootHeld(): boolean {
    return this.isShooting;
  }

  public consumeShootTriggered(): boolean {
    const triggered = this.shootTriggered;
    this.shootTriggered = false;
    return triggered;
  }

  public consumeReloadTriggered(): boolean {
    const triggered = this.reloadTriggered;
    this.reloadTriggered = false;
    return triggered;
  }

  public consumePauseTriggered(): boolean {
    const triggered = this.pauseTriggered;
    this.pauseTriggered = false;
    return triggered;
  }

  public getAimRay(): { origin: THREE.Vector3; direction: THREE.Vector3 } {
    const origin = new THREE.Vector3();
    const direction = new THREE.Vector3(0, 0, -1);

    if (this.rightController) {
      this.rightController.getWorldPosition(origin);
      const quat = new THREE.Quaternion();
      this.rightController.getWorldQuaternion(quat);
      direction.applyQuaternion(quat).normalize();
    } else {
      this.camera.getWorldPosition(origin);
      this.camera.getWorldDirection(direction);
    }

    return { origin, direction };
  }
}
