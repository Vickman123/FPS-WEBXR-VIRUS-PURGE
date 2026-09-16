import * as THREE from 'three';
import { Enemy } from '../enemies/Enemy';
import { EnemyManager } from '../enemies/EnemyManager';
import { ParticleSystem } from './ParticleSystem';
import { AudioManager } from '../audio/AudioManager';
import { ScoreManager } from './ScoreManager';
import { Weapon } from '../weapons/Weapon';
import { Arena } from '../world/Arena';

export class DamageSystem {
  private raycaster: THREE.Raycaster;
  private enemyManager: EnemyManager;
  private particleSystem: ParticleSystem;
  private audioManager: AudioManager;
  private scoreManager: ScoreManager;
  private arena: Arena;

  // Callback para activar hitmarker en la UI
  public onHitRegistered?: (isHeadshot: boolean) => void;

  constructor(
    enemyManager: EnemyManager,
    particleSystem: ParticleSystem,
    audioManager: AudioManager,
    scoreManager: ScoreManager,
    arena: Arena
  ) {
    this.raycaster = new THREE.Raycaster();
    this.enemyManager = enemyManager;
    this.particleSystem = particleSystem;
    this.audioManager = audioManager;
    this.scoreManager = scoreManager;
    this.arena = arena;
  }

  /**
   * Ejecuta el disparo de un arma mediante raycasting
   */
  public processShot(origin: THREE.Vector3, direction: THREE.Vector3, weapon: Weapon): void {
    this.scoreManager.registerShot();

    // Muzzle position para el origen visual del trazador de plasma
    const muzzlePos = new THREE.Vector3();
    weapon.getMuzzleWorldPosition(muzzlePos);

    this.raycaster.set(origin, direction);
    this.raycaster.far = 100;

    // Obtener hitboxes de todos los enemigos activos
    const enemyHitboxes = this.enemyManager.getAllHitboxes();

    // Obtener mallas de la arena para impacto en paredes/coberturas
    const arenaMeshes: THREE.Object3D[] = [];
    this.arena.group.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        arenaMeshes.push(child);
      }
    });

    const potentialTargets = [...enemyHitboxes, ...arenaMeshes];
    const intersections = this.raycaster.intersectObjects(potentialTargets, false);

    if (intersections.length > 0) {
      const hit = intersections[0];
      const hitMesh = hit.object;
      const hitPoint = hit.point;
      const normal = hit.face ? hit.face.normal.clone().applyQuaternion(hitMesh.getWorldQuaternion(new THREE.Quaternion())) : new THREE.Vector3(0, 1, 0);

      // 1. ¿Es una hitbox de un enemigo?
      if (hitMesh.userData && hitMesh.userData.isHitbox) {
        const isHeadshot = !!hitMesh.userData.isHeadshot;
        const enemy = hitMesh.userData.enemy as Enemy;

        // Calcular daño
        const baseDamage = weapon.config.damage;
        const finalDamage = isHeadshot ? baseDamage * weapon.config.headshotMultiplier : baseDamage;

        // Aplicar daño
        enemy.takeDamage(finalDamage, isHeadshot);

        // Feedback sonoro y visual
        this.audioManager.playHit(isHeadshot);
        this.particleSystem.emitImpactSparks(hitPoint, normal, true, isHeadshot);
        this.particleSystem.createBulletTracer(muzzlePos, hitPoint, isHeadshot);

        this.scoreManager.registerHit();

        if (this.onHitRegistered) {
          this.onHitRegistered(isHeadshot);
        }
      } else {
        // 2. Impacto contra la arena (pared o cobertura)
        this.particleSystem.emitImpactSparks(hitPoint, normal, false, false);
        this.particleSystem.createBulletTracer(muzzlePos, hitPoint, false);
      }
    } else {
      // 3. Disparo al vacío (hasta el rango máximo)
      const distantPoint = origin.clone().add(direction.clone().multiplyScalar(60));
      this.particleSystem.createBulletTracer(muzzlePos, distantPoint, false);
    }
  }
}
