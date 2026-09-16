import * as THREE from 'three';
import { Enemy, EnemyState } from './Enemy';

export class VirusDrone extends Enemy {
  private ringMesh1: THREE.Mesh;
  private ringMesh2: THREE.Mesh;
  private coreMesh: THREE.Mesh;
  private headMesh: THREE.Mesh;
  private bodyMesh: THREE.Mesh;

  private normalCoreColor: number = 0xff0055;
  private hurtFlashColor: number = 0xffffff;

  private animTimer: number = 0;
  private baseHeight: number = 1.6;
  private spawnGraceTimer: number = 1.5; // Tiempo antes de iniciar ataques

  constructor(spawnPos: THREE.Vector3) {
    super({
      name: 'Virus Recon Drone // C-01',
      maxHealth: 80,
      speed: 2.4,
      damage: 10,
      attackRange: 2.2,
      attackCooldown: 1.4
    });

    this.model.position.copy(spawnPos);
    this.baseHeight = Math.max(1.5, spawnPos.y);

    // 1. Materiales de alta luminosidad cibernética
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.3,
      metalness: 0.8
    });

    const coreMat = new THREE.MeshStandardMaterial({
      color: this.normalCoreColor,
      emissive: this.normalCoreColor,
      emissiveIntensity: 2.0,
      roughness: 0.2
    });

    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xffaa00,
      emissiveIntensity: 3.0,
      roughness: 0.1
    });

    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff0055,
      wireframe: true
    });

    // 2. Chasis del Cuerpo (Body)
    const bodyGeo = new THREE.CylinderGeometry(0.45, 0.25, 0.55, 6);
    this.bodyMesh = new THREE.Mesh(bodyGeo, chassisMat);
    this.bodyMesh.castShadow = true;
    this.model.add(this.bodyMesh);

    this.bodyMesh.userData = { isHitbox: true, isHeadshot: false, enemy: this };
    this.hitboxes.push(this.bodyMesh);

    // 3. Núcleo corrupto interior resplandeciente
    const coreGeo = new THREE.IcosahedronGeometry(0.3, 1);
    this.coreMesh = new THREE.Mesh(coreGeo, coreMat);
    this.model.add(this.coreMesh);

    // 4. Anillos orbitales dobles
    const ringGeo1 = new THREE.TorusGeometry(0.7, 0.025, 8, 28);
    this.ringMesh1 = new THREE.Mesh(ringGeo1, ringMat);
    this.ringMesh1.rotation.x = Math.PI / 3;
    this.model.add(this.ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(0.85, 0.02, 8, 28);
    this.ringMesh2 = new THREE.Mesh(ringGeo2, ringMat);
    this.ringMesh2.rotation.x = -Math.PI / 3;
    this.model.add(this.ringMesh2);

    // 5. Cabeza / Sensor óptico superior (Hitbox crítica de Headshot)
    const headGeo = new THREE.SphereGeometry(0.24, 16, 16);
    this.headMesh = new THREE.Mesh(headGeo, eyeMat);
    this.headMesh.position.set(0, 0.55, 0);
    this.headMesh.castShadow = true;
    this.model.add(this.headMesh);

    this.headMesh.userData = { isHitbox: true, isHeadshot: true, enemy: this };
    this.hitboxes.push(this.headMesh);

    // 6. 3 propulsores con espinas
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3;
      const legGeo = new THREE.ConeGeometry(0.08, 0.35, 4);
      const leg = new THREE.Mesh(legGeo, chassisMat);
      leg.position.set(Math.cos(angle) * 0.35, -0.38, Math.sin(angle) * 0.35);
      leg.rotation.x = Math.PI;
      this.model.add(leg);
    }
  }

  public override update(delta: number, playerPosition: THREE.Vector3): void {
    if (this.isDead) return;

    this.animTimer += delta;

    if (this.spawnGraceTimer > 0) {
      this.spawnGraceTimer -= delta;
    }

    // Rotación de anillos en direcciones opuestas
    this.ringMesh1.rotation.z += delta * 2.2;
    this.ringMesh1.rotation.y += delta * 1.5;
    this.ringMesh2.rotation.z -= delta * 1.8;
    this.ringMesh2.rotation.x += delta * 1.2;

    // Flotación / levitación a nivel de ojos
    const hoverOffset = Math.sin(this.animTimer * 3.0) * 0.15;
    this.model.position.y = this.baseHeight + hoverOffset;

    // Destello de daño
    if (this.hurtTimer > 0) {
      this.hurtTimer -= delta;
      (this.coreMesh.material as THREE.MeshStandardMaterial).emissive.setHex(this.hurtFlashColor);
      (this.headMesh.material as THREE.MeshStandardMaterial).emissive.setHex(this.hurtFlashColor);
      if (this.hurtTimer <= 0) {
        (this.coreMesh.material as THREE.MeshStandardMaterial).emissive.setHex(this.normalCoreColor);
        (this.headMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0xffaa00);
        if (this.state === EnemyState.HURT) {
          this.state = EnemyState.CHASE;
        }
      }
    }

    if (this.attackTimer > 0) {
      this.attackTimer -= delta;
    }

    const dirToPlayer = new THREE.Vector3(
      playerPosition.x - this.model.position.x,
      0,
      playerPosition.z - this.model.position.z
    );
    const distanceToPlayer = dirToPlayer.length();

    if (distanceToPlayer > 0.1) {
      this.model.lookAt(playerPosition.x, this.model.position.y, playerPosition.z);
    }

    if (this.spawnGraceTimer > 0) {
      return; // Esperar gracia de aparición
    }

    if (distanceToPlayer > this.config.attackRange) {
      this.state = EnemyState.CHASE;
      dirToPlayer.normalize();

      this.model.position.x += dirToPlayer.x * this.config.speed * delta;
      this.model.position.z += dirToPlayer.z * this.config.speed * delta;
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
