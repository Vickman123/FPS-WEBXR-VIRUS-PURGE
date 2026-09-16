import * as THREE from 'three';
import { Enemy } from '../enemies/Enemy';
import { EnemyManager } from '../enemies/EnemyManager';
import { ParticleSystem } from './ParticleSystem';
import { AudioManager } from '../audio/AudioManager';
import { ScoreManager } from './ScoreManager';
import { Weapon } from '../weapons/Weapon';
import { Arena } from '../world/Arena';
import { TargetRange } from '../world/TargetRange';
import { TargetDiana, DianaZone } from '../world/TargetDiana';

export class DamageSystem {
  private raycaster: THREE.Raycaster;
  private enemyManager: EnemyManager;
  private particleSystem: ParticleSystem;
  private audioManager: AudioManager;
  private scoreManager: ScoreManager;
  private arena: Arena;
  public targetRange?: TargetRange;

  public onHitRegistered?: (isHeadshot: boolean, isShield?: boolean) => void;

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

  public processShot(origin: THREE.Vector3, direction: THREE.Vector3, weapon: Weapon): void {
    this.scoreManager.registerShot();

    const muzzlePos = new THREE.Vector3();
    weapon.getMuzzleWorldPosition(muzzlePos);

    if (this.targetRange && this.targetRange.isEnabled) {
      this.targetRange.registerShot();
    }

    const pellets = weapon.config.pelletCount ?? 1;
    const spreadAngle = weapon.config.spreadAngle ?? 0.055;

    for (let i = 0; i < pellets; i++) {
      const pelletDir = direction.clone();
      if (pellets > 1) {
        pelletDir.x += (Math.random() - 0.5) * spreadAngle * 2;
        pelletDir.y += (Math.random() - 0.5) * spreadAngle * 2;
        pelletDir.z += (Math.random() - 0.5) * spreadAngle * 2;
        pelletDir.normalize();
      }
      this.processSingleRay(origin, pelletDir, weapon, muzzlePos);
    }
  }

  private processSingleRay(
    origin: THREE.Vector3,
    direction: THREE.Vector3,
    weapon: Weapon,
    muzzlePos: THREE.Vector3
  ): void {
    this.raycaster.set(origin, direction);
    this.raycaster.far = 100;

    const enemyHitboxes = this.enemyManager.getAllHitboxes();
    const rangeHitboxes = this.targetRange ? this.targetRange.getAllHitboxes() : [];
    const potentialTargets = [...enemyHitboxes, ...rangeHitboxes, ...this.arena.targetMeshes];
    const intersections = this.raycaster.intersectObjects(potentialTargets, false);

    if (intersections.length > 0) {
      const hit = intersections[0];
      const hitMesh = hit.object;
      const hitPoint = hit.point;
      const normal = hit.face ? hit.face.normal.clone().applyQuaternion(hitMesh.getWorldQuaternion(new THREE.Quaternion())) : new THREE.Vector3(0, 1, 0);

      // 1. ¿Es una diana del campo de tiro?
      if (hitMesh.userData && hitMesh.userData.isDiana) {
        const diana = hitMesh.userData.diana as TargetDiana;
        const zone = hitMesh.userData.zone as DianaZone;
        const result = diana.registerHit(zone, hitPoint);

        if (this.targetRange) {
          this.targetRange.registerDianaHit(result);
        }

        if (result.isHeadshot) {
          this.audioManager.playHit(true); // Headshot ding!
          this.particleSystem.emitImpactSparks(hitPoint, normal, true, true);
          this.particleSystem.createBulletTracer(muzzlePos, hitPoint, true);
        } else {
          this.audioManager.playHit(false);
          this.particleSystem.emitImpactSparks(hitPoint, normal, true, false);
          this.particleSystem.createBulletTracer(muzzlePos, hitPoint, false);
        }

        this.scoreManager.registerHit();
        if (this.onHitRegistered) {
          this.onHitRegistered(result.isHeadshot, false);
        }
        return;
      }

      // 2. ¿Es el botón 3D de volver a oleadas del campo de tiro?
      if (hitMesh.userData && hitMesh.userData.isReturnToSurvivalButton) {
        if (this.targetRange) {
          this.targetRange.checkReturnButtonClick(hitMesh);
        }
        this.particleSystem.emitImpactSparks(hitPoint, normal, false, false);
        this.particleSystem.createBulletTracer(muzzlePos, hitPoint, false);
        return;
      }

      // 3. ¿Es una hitbox de un enemigo?
      if (hitMesh.userData && hitMesh.userData.isHitbox) {
        const isHeadshot = !!hitMesh.userData.isHeadshot;
        const isShield = !!hitMesh.userData.isShield;
        const enemy = hitMesh.userData.enemy as Enemy;

        let finalDamage = weapon.config.damage;

        if (isShield) {
          finalDamage *= 0.2;
          this.audioManager.playShieldDeflect();
          this.particleSystem.emitImpactSparks(hitPoint, normal, false, false);
          this.particleSystem.createBulletTracer(muzzlePos, hitPoint, false);
        } else {
          if (isHeadshot) {
            finalDamage *= weapon.config.headshotMultiplier;
          }
          this.audioManager.playHit(isHeadshot);
          this.particleSystem.emitImpactSparks(hitPoint, normal, true, isHeadshot);
          this.particleSystem.createBulletTracer(muzzlePos, hitPoint, isHeadshot);
        }

        enemy.takeDamage(finalDamage, isHeadshot);
        this.scoreManager.registerHit();

        if (this.onHitRegistered) {
          this.onHitRegistered(isHeadshot, isShield);
        }
      } else {
        // 4. Impacto contra cobertura / pared
        this.particleSystem.emitImpactSparks(hitPoint, normal, false, false);
        this.particleSystem.createBulletTracer(muzzlePos, hitPoint, false);
      }
    } else {
      // 3. Disparo al vacío
      const distantPoint = origin.clone().add(direction.clone().multiplyScalar(50));
      this.particleSystem.createBulletTracer(muzzlePos, distantPoint, false);
    }
  }
}
