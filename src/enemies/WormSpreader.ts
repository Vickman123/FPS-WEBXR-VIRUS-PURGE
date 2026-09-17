import * as THREE from 'three';
import { Enemy, EnemyState } from './Enemy';
import { ModelLoader } from '../utils/ModelLoader';

export class WormSpreader extends Enemy {
  private visualGroup: THREE.Group;
  private glbModel: THREE.Group | null = null;
  private headHitbox: THREE.Mesh;
  private bodyHitbox: THREE.Mesh;

  private animTimer: number = 0;
  private wavePhase: number = Math.random() * Math.PI * 2;
  private baseHeight: number = 0.55;

  constructor(spawnPos: THREE.Vector3) {
    super({
      name: 'Worm.Win32.Replicator // W-02',
      maxHealth: 50,
      speed: 3.8,
      damage: 8,
      attackRange: 1.8,
      attackCooldown: 1.0
    });

    this.model.position.copy(spawnPos);
    this.baseHeight = 0.55;
    this.enemyType = 'worm';

    this.visualGroup = new THREE.Group();
    this.model.add(this.visualGroup);

    // Instanciar modelo GLB optimizado
    this.glbModel = ModelLoader.getWormModel();

    if (this.glbModel) {
      this.glbModel.scale.set(0.75, 0.75, 0.75);
      this.glbModel.position.set(0, 0, 0);
      this.visualGroup.add(this.glbModel);

      this.glbModel.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.userData = { isHitbox: true, isHeadshot: false, enemy: this };
          this.hitboxes.push(child as THREE.Mesh);
        }
      });
    } else {
      // Fallback
      const fbGeo = new THREE.CylinderGeometry(0.2, 0.2, 1.4, 8);
      const fbMat = new THREE.MeshStandardMaterial({ color: 0xc026d3, roughness: 0.3 });
      const fbMesh = new THREE.Mesh(fbGeo, fbMat);
      fbMesh.rotation.x = Math.PI / 2;
      this.visualGroup.add(fbMesh);
    }

    const hitMat = new THREE.MeshBasicMaterial({ visible: false });

    // Hitbox del cuerpo alargado
    const bodyHitGeo = new THREE.BoxGeometry(0.5, 0.6, 1.6);
    this.bodyHitbox = new THREE.Mesh(bodyHitGeo, hitMat);
    this.bodyHitbox.position.set(0, 0.25, 0.2);
    this.bodyHitbox.userData = { isHitbox: true, isHeadshot: false, enemy: this };
    this.model.add(this.bodyHitbox);
    this.hitboxes.push(this.bodyHitbox);

    // Hitbox de cabeza (Headshot crítico al frente)
    const headHitGeo = new THREE.SphereGeometry(0.32, 8, 8);
    this.headHitbox = new THREE.Mesh(headHitGeo, hitMat);
    this.headHitbox.position.set(0, 0.3, -0.7);
    this.headHitbox.userData = { isHitbox: true, isHeadshot: true, enemy: this };
    this.model.add(this.headHitbox);
    this.hitboxes.push(this.headHitbox);
  }

  public override update(delta: number, playerPosition: THREE.Vector3): void {
    if (this.isDead) return;

    this.animTimer += delta;
    this.wavePhase += delta * 9.0;

    // 1. Animación procedimental de serpenteo (Slither S-Curve)
    const slitherYaw = Math.sin(this.wavePhase) * 0.26;
    const slitherRoll = Math.cos(this.wavePhase) * 0.12;
    const lateralSway = Math.sin(this.wavePhase) * 0.14;
    const archingVertical = Math.abs(Math.sin(this.wavePhase * 0.8)) * 0.08;

    this.visualGroup.rotation.y = slitherYaw;
    this.visualGroup.rotation.z = slitherRoll;
    this.visualGroup.position.x = lateralSway;
    this.visualGroup.position.y = archingVertical;

    // Altura base sobre la pista de datos
    this.model.position.y = this.baseHeight + Math.sin(this.animTimer * 4.0) * 0.05;

    // 2. Destello de daño
    if (this.hurtTimer > 0) {
      this.hurtTimer -= delta;
      if (this.glbModel) {
        this.glbModel.traverse((child) => {
          if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
            const m = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
            if (m.emissive) m.emissive.setHex(0xffffff);
          }
        });
      }
      if (this.hurtTimer <= 0) {
        if (this.glbModel) {
          this.glbModel.traverse((child) => {
            if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
              const m = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
              if (m.emissive) m.emissive.setHex(0xd946ef);
            }
          });
        }
        if (this.state === EnemyState.HURT) {
          this.state = EnemyState.CHASE;
        }
      }
    }

    if (this.attackTimer > 0) {
      this.attackTimer -= delta;
    }

    // 3. Persecución del jugador con evasión en zigzag
    const dirToPlayer = new THREE.Vector3(
      playerPosition.x - this.model.position.x,
      0,
      playerPosition.z - this.model.position.z
    );
    const distanceToPlayer = dirToPlayer.length();

    if (distanceToPlayer > 0.1) {
      this.model.lookAt(playerPosition.x, this.model.position.y, playerPosition.z);
    }

    if (distanceToPlayer > this.config.attackRange) {
      this.state = EnemyState.CHASE;
      dirToPlayer.normalize();

      const lateralDir = new THREE.Vector3(-dirToPlayer.z, 0, dirToPlayer.x);
      const zigZag = Math.sin(this.animTimer * 6.5) * 1.6;

      this.model.position.x += (dirToPlayer.x * this.config.speed + lateralDir.x * zigZag) * delta;
      this.model.position.z += (dirToPlayer.z * this.config.speed + lateralDir.z * zigZag) * delta;
    } else {
      this.state = EnemyState.ATTACK;
      if (this.attackTimer <= 0) {
        this.attackTimer = this.config.attackCooldown;
        if (this.onAttackPlayer) {
          this.onAttackPlayer(this.config.damage);
        }
      }
    }
  }
}
