import * as THREE from 'three';
import { Enemy, EnemyState } from './Enemy';

export class RansomwareBoss extends Enemy {
  private lockRings: THREE.Mesh[] = [];
  private coreMesh: THREE.Mesh;
  private eyeMesh: THREE.Mesh;
  private bodyMesh: THREE.Mesh;
  private cubes: THREE.Mesh[] = [];
  private animTimer: number = 0;
  private baseHeight: number = 2.4;

  constructor(spawnPos: THREE.Vector3) {
    super({
      name: 'RANSOMWARE.LOCKBIT.CORE // BOSS',
      maxHealth: 550,
      speed: 1.3,
      damage: 22,
      attackRange: 2.8,
      attackCooldown: 1.8
    });

    this.model.position.copy(spawnPos);
    this.model.position.y = this.baseHeight;

    // Materiales
    const darkObsidian = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.95
    });

    const crimsonBossCore = new THREE.MeshStandardMaterial({
      color: 0xff0033,
      emissive: 0xff0033,
      emissiveIntensity: 3.5,
      roughness: 0.1
    });

    const criticalEyeMat = new THREE.MeshStandardMaterial({
      color: 0xffea00,
      emissive: 0xffea00,
      emissiveIntensity: 4.0,
      roughness: 0.1
    });

    const chainMat = new THREE.MeshBasicMaterial({
      color: 0xff0055,
      wireframe: true
    });

    // 1. Monolito / Pirámide invertida central
    const bodyGeo = new THREE.OctahedronGeometry(1.2, 0);
    this.bodyMesh = new THREE.Mesh(bodyGeo, darkObsidian);
    this.bodyMesh.scale.set(1.1, 1.8, 1.1);
    this.bodyMesh.castShadow = true;
    this.model.add(this.bodyMesh);

    this.bodyMesh.userData = { isHitbox: true, isHeadshot: false, isShield: false, enemy: this };
    this.hitboxes.push(this.bodyMesh);

    // 2. Núcleo corrupto de cifrado
    const coreGeo = new THREE.DodecahedronGeometry(0.7, 1);
    this.coreMesh = new THREE.Mesh(coreGeo, crimsonBossCore);
    this.model.add(this.coreMesh);

    // 3. Ojo Criptográfico (Hitbox de daño crítico x2.5)
    const eyeGeo = new THREE.SphereGeometry(0.35, 16, 16);
    this.eyeMesh = new THREE.Mesh(eyeGeo, criticalEyeMat);
    this.eyeMesh.position.set(0, 0.45, -0.7);
    this.model.add(this.eyeMesh);

    this.eyeMesh.userData = { isHitbox: true, isHeadshot: true, isShield: false, enemy: this };
    this.hitboxes.push(this.eyeMesh);

    // 4. Anillos de cifrado orbitales (cadenas de bloqueo)
    for (let i = 0; i < 2; i++) {
      const ringGeo = new THREE.TorusGeometry(1.8 + i * 0.4, 0.04, 8, 32);
      const ring = new THREE.Mesh(ringGeo, chainMat);
      ring.rotation.x = Math.PI / (2.5 + i * 0.5);
      this.model.add(ring);
      this.lockRings.push(ring);
    }

    // 5. Cubos de datos flotantes en órbita
    for (let i = 0; i < 6; i++) {
      const cubeGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25);
      const cube = new THREE.Mesh(cubeGeo, crimsonBossCore);
      this.model.add(cube);
      this.cubes.push(cube);
    }
  }

  public override update(delta: number, playerPosition: THREE.Vector3): void {
    if (this.isDead) return;

    this.animTimer += delta;

    // Rotación de anillos y monolito
    this.lockRings.forEach((ring, idx) => {
      ring.rotation.z += delta * (idx === 0 ? 1.5 : -1.2);
      ring.rotation.y += delta * 0.8;
    });

    this.bodyMesh.rotation.y += delta * 0.5;

    // Cubos orbitales
    this.cubes.forEach((cube, idx) => {
      const angle = this.animTimer * 2.0 + (idx * Math.PI * 2) / 6;
      const radius = 2.2;
      cube.position.set(
        Math.cos(angle) * radius,
        Math.sin(this.animTimer * 3 + idx) * 0.4,
        Math.sin(angle) * radius
      );
      cube.rotation.x += delta * 2;
      cube.rotation.y += delta * 2;
    });

    // Flotación lenta
    this.model.position.y = this.baseHeight + Math.sin(this.animTimer * 2.0) * 0.25;

    // Destello de daño
    if (this.hurtTimer > 0) {
      this.hurtTimer -= delta;
      (this.coreMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0xffffff);
      (this.eyeMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0xffffff);
      if (this.hurtTimer <= 0) {
        (this.coreMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0xff0033);
        (this.eyeMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0xffea00);
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
