import * as THREE from 'three';
import { Enemy, EnemyState } from './Enemy';

export class TrojanCarrier extends Enemy {
  private shieldMesh: THREE.Mesh;
  private coreMesh: THREE.Mesh;
  private bodyMesh: THREE.Mesh;
  private animTimer: number = 0;

  constructor(spawnPos: THREE.Vector3) {
    super({
      name: 'Trojan.Dropper.Carrier // T-03',
      maxHealth: 180,
      speed: 1.6,
      damage: 18,
      attackRange: 2.2,
      attackCooldown: 1.6
    });

    this.model.position.copy(spawnPos);
    this.enemyType = 'trojan';

    // Materiales
    const armorMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.35,
      metalness: 0.85
    });

    const malwareCoreMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 2.5,
      roughness: 0.2
    });

    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide
    });

    const hexWireMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true
    });

    // 1. Chasis pesado
    const bodyGeo = new THREE.BoxGeometry(1.1, 1.2, 0.9);
    this.bodyMesh = new THREE.Mesh(bodyGeo, armorMat);
    this.bodyMesh.position.set(0, 0.8, 0);
    this.bodyMesh.castShadow = true;
    this.model.add(this.bodyMesh);

    this.bodyMesh.userData = { isHitbox: true, isHeadshot: false, isShield: false, enemy: this };
    this.hitboxes.push(this.bodyMesh);

    // 2. Escudo frontal digital ("svchost.exe / Armor")
    const shieldGeo = new THREE.PlaneGeometry(1.4, 1.5);
    this.shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    this.shieldMesh.position.set(0, 0.8, -0.55);
    this.model.add(this.shieldMesh);

    const shieldWire = new THREE.Mesh(shieldGeo, hexWireMat);
    shieldWire.position.set(0, 0.8, -0.56);
    this.model.add(shieldWire);

    // Hitbox del escudo (mitiga 80% de daño)
    this.shieldMesh.userData = { isHitbox: true, isHeadshot: false, isShield: true, enemy: this };
    this.hitboxes.push(this.shieldMesh);

    // 3. Núcleo vulnerable trasero/superior (Headshot / Critical Spot)
    const coreGeo = new THREE.IcosahedronGeometry(0.3, 1);
    this.coreMesh = new THREE.Mesh(coreGeo, malwareCoreMat);
    this.coreMesh.position.set(0, 1.1, 0.45); // Expuesto en la parte trasera
    this.model.add(this.coreMesh);

    this.coreMesh.userData = { isHitbox: true, isHeadshot: true, isShield: false, enemy: this };
    this.hitboxes.push(this.coreMesh);

    // 4. Faro de alerta de proceso falso en la parte superior
    const beaconGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.25, 8);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.set(0, 1.5, 0);
    this.model.add(beacon);
  }

  public override update(delta: number, playerPosition: THREE.Vector3): void {
    if (this.isDead) return;

    this.animTimer += delta;

    // Pulso del núcleo y escudo
    const pulse = 0.5 + Math.sin(this.animTimer * 4) * 0.25;
    (this.shieldMesh.material as THREE.MeshBasicMaterial).opacity = 0.45 + pulse * 0.2;

    // Destello de daño
    if (this.hurtTimer > 0) {
      this.hurtTimer -= delta;
      (this.coreMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0xffffff);
      if (this.hurtTimer <= 0) {
        (this.coreMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0x10b981);
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
