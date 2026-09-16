import * as THREE from 'three';
import { InputManager } from '../input/InputManager';
import { Arena } from '../world/Arena';
import { WeaponManager } from '../weapons/WeaponManager';
import { VRInput } from '../input/VRInput';

export class Player {
  public playerGroup: THREE.Group;
  public camera: THREE.PerspectiveCamera;
  public position: THREE.Vector3;
  private velocity: THREE.Vector3 = new THREE.Vector3();

  public health: number = 100;
  public maxHealth: number = 100;
  public isDead: boolean = false;

  private moveSpeed: number = 6.5;
  private friction: number = 9.0;
  private eyeHeight: number = 1.68;

  // Rotaciones de cámara en PC
  private pitch: number = 0;
  private yaw: number = 0;

  // Balanceo del arma al caminar
  private walkCycle: number = 0;
  private invulnTimer: number = 0;

  private isVR: boolean = false;
  private vrInput: VRInput | null = null;

  private inputManager: InputManager;
  private arena: Arena;
  private weaponManager: WeaponManager;

  // Callbacks
  public onHealthChange?: (health: number, maxHealth: number) => void;
  public onDeath?: () => void;
  public onHurt?: () => void;

  constructor(
    camera: THREE.PerspectiveCamera,
    inputManager: InputManager,
    arena: Arena,
    weaponManager: WeaponManager
  ) {
    this.camera = camera;
    this.inputManager = inputManager;
    this.arena = arena;
    this.weaponManager = weaponManager;

    // Rig principal que contiene la cámara y los mandos VR
    this.playerGroup = new THREE.Group();
    this.playerGroup.position.copy(this.arena.playerStart);
    this.position = this.playerGroup.position;

    // Agregar cámara al rig
    this.playerGroup.add(this.camera);
    this.camera.position.set(0, this.eyeHeight, 0);

    this.updateCameraRotation();

    // En modo desktop, acoplar el arma a la cámara
    this.weaponManager.attachTo(this.camera);
  }

  public setVRMode(inVR: boolean, vrInput?: VRInput): void {
    this.isVR = inVR;
    this.vrInput = vrInput || null;
    this.weaponManager.setVRMode(inVR);

    if (inVR && vrInput) {
      // En VR, acoplar el arma a la mano derecha física
      if (vrInput.rightGrip) {
        this.weaponManager.attachTo(vrInput.rightGrip);
      }
      vrInput.onRightControllerReady = (_controller, grip) => {
        this.weaponManager.attachTo(grip);
      };
      this.camera.position.set(0, 0, 0); // El tracking de Meta Quest gestiona la altura real de pie
    } else {
      // En PC, acoplar el arma a la cámara
      this.weaponManager.attachTo(this.camera);
      this.camera.position.set(0, this.eyeHeight, 0);
      this.updateCameraRotation();
    }
  }

  public takeDamage(amount: number): void {
    if (this.isDead || this.invulnTimer > 0) return;

    this.invulnTimer = 0.5;
    this.health -= amount;

    if (this.isVR && this.vrInput) {
      this.vrInput.triggerHaptic(0.9, 100, 'right');
      this.vrInput.triggerHaptic(0.9, 100, 'left');
    }

    if (this.onHurt) {
      this.onHurt();
    }

    if (this.health <= 0) {
      this.health = 0;
      this.isDead = true;
      if (this.onDeath) {
        this.onDeath();
      }
    }

    if (this.onHealthChange) {
      this.onHealthChange(this.health, this.maxHealth);
    }
  }

  public respawn(): void {
    this.health = this.maxHealth;
    this.isDead = false;
    this.invulnTimer = 1.0;
    this.playerGroup.position.copy(this.arena.playerStart);
    this.velocity.set(0, 0, 0);

    if (!this.isVR) {
      this.pitch = 0;
      this.yaw = 0;
      this.updateCameraRotation();
    }

    if (this.onHealthChange) {
      this.onHealthChange(this.health, this.maxHealth);
    }
  }

  public update(delta: number): void {
    if (this.invulnTimer > 0) {
      this.invulnTimer -= delta;
    }

    if (this.isDead) return;

    if (!this.isVR) {
      // Control de cámara en PC (Mouse Look)
      const look = this.inputManager.getLookDelta();
      this.yaw -= look.x;
      this.pitch -= look.y;

      const maxPitch = (Math.PI / 2) - 0.05;
      this.pitch = Math.max(-maxPitch, Math.min(maxPitch, this.pitch));

      this.inputManager.resetLookDelta();
      this.updateCameraRotation();
    }

    // Movimiento (desacoplado: funciona con WASD en PC o Joystick en VR)
    const move = this.inputManager.getMovement();
    const wishDir = new THREE.Vector3();

    if (this.isVR) {
      // En VR, move ya viene orientado al HMD (cabeza)
      wishDir.set(move.x, 0, move.z);
    } else {
      // En PC, orientar según el yaw de la cámara
      const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
      const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
      wishDir.addScaledVector(forward, move.z);
      wishDir.addScaledVector(right, move.x);
    }

    if (wishDir.lengthSq() > 0.001) {
      wishDir.normalize();
      this.velocity.x += wishDir.x * this.moveSpeed * 10 * delta;
      this.velocity.z += wishDir.z * this.moveSpeed * 10 * delta;
      this.walkCycle += delta * 12;
    } else {
      this.walkCycle = 0;
    }

    // Fricción
    this.velocity.x -= this.velocity.x * this.friction * delta;
    this.velocity.z -= this.velocity.z * this.friction * delta;

    // Aplicar desplazamiento a la posición mundial del jugador
    this.position.x += this.velocity.x * delta;
    this.position.z += this.velocity.z * delta;

    // Colisión contra la arena
    this.arena.resolveCollision(this.position, 0.45);

    if (!this.isVR) {
      const bobOffset = Math.sin(this.walkCycle) * 0.02;
      this.camera.position.set(0, this.eyeHeight + bobOffset, 0);
    }
  }

  public updateCameraRotation(): void {
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    euler.x = this.pitch;
    euler.y = this.yaw;
    this.camera.quaternion.setFromEuler(euler);
  }

  /**
   * Obtiene el rayo de disparo:
   * - En VR: Dirección y origen EXACTOS del cañón del arma (Muzzle Ray) para alineación 100% con el láser
   * - En PC: Centro de la cámara hacia la retícula central
   */
  public getShootRay(): { origin: THREE.Vector3; direction: THREE.Vector3 } {
    if (this.isVR) {
      const activeWeapon = this.weaponManager.getActiveWeapon();
      if (activeWeapon) {
        return activeWeapon.getMuzzleRay();
      }
      if (this.vrInput) {
        return this.vrInput.getAimRay();
      }
    }

    const direction = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    const origin = new THREE.Vector3();
    this.camera.getWorldPosition(origin);
    return {
      origin,
      direction: direction.normalize()
    };
  }
}
