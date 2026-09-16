import * as THREE from 'three';
import { IInputSource, LookDelta, Vector2D } from './IInputSource';

export class VRInput implements IInputSource {
  private renderer: THREE.WebGLRenderer;
  private playerGroup: THREE.Group;
  private camera: THREE.Camera;

  public rightController: THREE.XRTargetRaySpace;
  public leftController: THREE.XRTargetRaySpace;
  public rightGrip: THREE.XRGripSpace;
  public leftGrip: THREE.XRGripSpace;

  private shootTriggered: boolean = false;
  private isShooting: boolean = false;
  private reloadTriggered: boolean = false;
  private pauseTriggered: boolean = false;

  private moveVector: Vector2D = { x: 0, z: 0 };
  private snapTurnCooldown: number = 0;
  private snapTurnAngle: number = Math.PI / 4; // 45 grados por snap turn

  constructor(renderer: THREE.WebGLRenderer, playerGroup: THREE.Group, camera: THREE.Camera) {
    this.renderer = renderer;
    this.playerGroup = playerGroup;
    this.camera = camera;

    // Controladores WebXR (Target Ray y Grip)
    this.rightController = this.renderer.xr.getController(0);
    this.leftController = this.renderer.xr.getController(1);
    this.rightGrip = this.renderer.xr.getControllerGrip(0);
    this.leftGrip = this.renderer.xr.getControllerGrip(1);

    this.playerGroup.add(this.rightController);
    this.playerGroup.add(this.leftController);
    this.playerGroup.add(this.rightGrip);
    this.playerGroup.add(this.leftGrip);
  }

  public init(): void {
    // Escuchar eventos estándar de gatillo en WebXR
    this.rightController.addEventListener('selectstart', () => {
      this.isShooting = true;
      this.shootTriggered = true;
      this.triggerHaptic(0.75, 45); // Vibración háptica en el mando derecho
    });

    this.rightController.addEventListener('selectend', () => {
      this.isShooting = false;
    });

    this.leftController.addEventListener('selectstart', () => {
      // Gatillo izquierdo también puede recargar
      this.reloadTriggered = true;
      this.triggerHaptic(0.4, 30, 'left');
    });
  }

  public dispose(): void {
    // Limpieza de controladores
  }

  public update(delta: number): void {
    if (this.snapTurnCooldown > 0) {
      this.snapTurnCooldown -= delta;
    }

    const session = this.renderer.xr.getSession();
    if (!session) return;

    let leftStickX = 0;
    let leftStickY = 0;
    let rightStickX = 0;

    for (const source of session.inputSources) {
      if (!source.gamepad) continue;
      const gp = source.gamepad;

      // 1. Mando Izquierdo (Locomoción y Recarga)
      if (source.handedness === 'left') {
        // En Meta Quest / WebXR: axes[2] es eje X, axes[3] es eje Y
        const ax = gp.axes[2] ?? gp.axes[0] ?? 0;
        const ay = gp.axes[3] ?? gp.axes[1] ?? 0;

        // Zona muerta (Deadzone) para evitar deriva
        if (Math.abs(ax) > 0.15) leftStickX = ax;
        if (Math.abs(ay) > 0.15) leftStickY = ay;

        // Botón Grip o botón X/Y para recargar
        if (gp.buttons[1]?.pressed || gp.buttons[4]?.pressed || gp.buttons[5]?.pressed) {
          this.reloadTriggered = true;
        }
      }

      // 2. Mando Derecho (Gatillo, Giro y Recarga)
      if (source.handedness === 'right') {
        const ax = gp.axes[2] ?? gp.axes[0] ?? 0;
        if (Math.abs(ax) > 0.15) rightStickX = ax;

        // Botón A/B o Grip derecho para recargar
        if (gp.buttons[1]?.pressed || gp.buttons[4]?.pressed || gp.buttons[5]?.pressed) {
          this.reloadTriggered = true;
        }
      }
    }

    // 3. Procesar Giro Rápido (Snap Turn) con el joystick derecho
    if (this.snapTurnCooldown <= 0) {
      if (rightStickX > 0.65) {
        this.playerGroup.rotation.y -= this.snapTurnAngle;
        this.snapTurnCooldown = 0.28;
        this.triggerHaptic(0.2, 20, 'right');
      } else if (rightStickX < -0.65) {
        this.playerGroup.rotation.y += this.snapTurnAngle;
        this.snapTurnCooldown = 0.28;
        this.triggerHaptic(0.2, 20, 'right');
      }
    }

    // 4. Locomoción orientada hacia la dirección de la Cabeza (HMD)
    // Extraer el ángulo Yaw de la cámara
    const cameraWorldDir = new THREE.Vector3();
    this.camera.getWorldDirection(cameraWorldDir);
    const headYaw = Math.atan2(cameraWorldDir.x, cameraWorldDir.z);

    // Convertir el joystick izquierdo en vector relativo al HMD
    if (Math.hypot(leftStickX, leftStickY) > 0.15) {
      const forward = -leftStickY;
      const strafe = leftStickX;

      const cos = Math.cos(headYaw);
      const sin = Math.sin(headYaw);

      // Rotación en el plano XZ según hacia dónde mira la cabeza
      const worldX = strafe * cos + forward * sin;
      const worldZ = -strafe * sin + forward * cos;

      this.moveVector.x = worldX;
      this.moveVector.z = worldZ;
    } else {
      this.moveVector.x = 0;
      this.moveVector.z = 0;
    }
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
    // En VR la rotación de la cabeza es 6DOF física directa
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

    this.rightController.getWorldPosition(origin);
    const quat = new THREE.Quaternion();
    this.rightController.getWorldQuaternion(quat);
    direction.applyQuaternion(quat).normalize();

    return { origin, direction };
  }
}
