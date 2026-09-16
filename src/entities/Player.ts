import * as THREE from 'three';
import { InputManager } from '../input/InputManager';
import { Arena } from '../world/Arena';
import { WeaponManager } from '../weapons/WeaponManager';

export class Player {
  public camera: THREE.PerspectiveCamera;
  public position: THREE.Vector3;
  private velocity: THREE.Vector3 = new THREE.Vector3();

  public health: number = 100;
  public maxHealth: number = 100;
  public isDead: boolean = false;

  private moveSpeed: number = 6.5;
  private friction: number = 9.0;
  private eyeHeight: number = 1.68;

  // Rotaciones de cámara (inicialmente mirando hacia el centro de la arena en -Z)
  private pitch: number = 0;
  private yaw: number = 0;

  // Balanceo del arma al caminar
  private walkCycle: number = 0;

  // Tiempo de inmunidad breve tras recibir daño (evita insta-kill de múltiples enemigos)
  private invulnTimer: number = 0;

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

    this.position = this.arena.playerStart.clone();
    this.position.y = this.eyeHeight;
    this.camera.position.copy(this.position);

    this.updateCameraRotation();

    // Acoplar arma a la cámara en primera persona
    this.weaponManager.attachTo(this.camera);
  }

  public takeDamage(amount: number): void {
    if (this.isDead || this.invulnTimer > 0) return;

    this.invulnTimer = 0.5; // Medio segundo de gracia entre golpes
    this.health -= amount;

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
    this.position.copy(this.arena.playerStart);
    this.position.y = this.eyeHeight;
    this.velocity.set(0, 0, 0);
    this.pitch = 0;
    this.yaw = 0;
    this.updateCameraRotation();

    if (this.onHealthChange) {
      this.onHealthChange(this.health, this.maxHealth);
    }
  }

  public update(delta: number): void {
    if (this.invulnTimer > 0) {
      this.invulnTimer -= delta;
    }

    if (this.isDead) return;

    // 1. Manejar rotación de cámara (Mouse Look / PC)
    const look = this.inputManager.getLookDelta();
    this.yaw -= look.x;
    this.pitch -= look.y;

    const maxPitch = (Math.PI / 2) - 0.05;
    this.pitch = Math.max(-maxPitch, Math.min(maxPitch, this.pitch));

    this.inputManager.resetLookDelta();
    this.updateCameraRotation();

    // 2. Manejar movimiento (WASD)
    const move = this.inputManager.getMovement();

    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    const wishDir = new THREE.Vector3();
    wishDir.addScaledVector(forward, move.z);
    wishDir.addScaledVector(right, move.x);

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

    this.position.x += this.velocity.x * delta;
    this.position.z += this.velocity.z * delta;

    // Resolver colisión contra paredes y cajas
    this.arena.resolveCollision(this.position, 0.45);

    const bobOffset = Math.sin(this.walkCycle) * 0.02;
    this.camera.position.set(this.position.x, this.eyeHeight + bobOffset, this.position.z);
  }

  public updateCameraRotation(): void {
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    euler.x = this.pitch;
    euler.y = this.yaw;
    this.camera.quaternion.setFromEuler(euler);
  }

  public getShootRay(): { origin: THREE.Vector3; direction: THREE.Vector3 } {
    const direction = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    return {
      origin: this.camera.position.clone(),
      direction: direction.normalize()
    };
  }
}
