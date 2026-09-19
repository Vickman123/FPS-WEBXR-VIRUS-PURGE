import * as THREE from 'three';
import { Enemy, EnemyState } from './Enemy';
import { ModelLoader } from '../utils/ModelLoader';

export class TrojanCarrier extends Enemy {
  private visualGroup: THREE.Group;
  private glbModel: THREE.Group | null = null;
  private shieldMesh: THREE.Mesh;
  private shieldWire: THREE.Mesh;
  private coreHitbox: THREE.Mesh;
  private bodyHitbox: THREE.Mesh;

  private animTimer: number = 0;
  private currentRockPitch: number = 0;

  constructor(spawnPos: THREE.Vector3) {
    super({
      name: 'Trojan.Dropper.Carrier // T-03',
      maxHealth: 180,
      speed: 1.6,
      damage: 18,
      attackRange: 2.4,
      attackCooldown: 1.6
    });

    this.model.position.copy(spawnPos);
    this.model.position.y = 0.6;
    this.enemyType = 'trojan';

    this.visualGroup = new THREE.Group();
    this.model.add(this.visualGroup);

    // Instanciar modelo GLB del tanque
    this.glbModel = ModelLoader.getTankModel();

    if (this.glbModel) {
      this.glbModel.scale.set(1.05, 1.05, 1.05);
      this.glbModel.position.set(0, 0, 0);
      this.glbModel.rotation.y = -Math.PI / 2; // Rota 90° para que el cañón frontal apunte al frente (-Z)
      this.visualGroup.add(this.glbModel);

      this.glbModel.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.userData = { isHitbox: true, isHeadshot: false, isShield: false, enemy: this };
          this.hitboxes.push(child as THREE.Mesh);
        }
      });
    } else {
      // Fallback
      const fbGeo = new THREE.BoxGeometry(1.4, 1.0, 1.4);
      const fbMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.35, metalness: 0.85 });
      const fbMesh = new THREE.Mesh(fbGeo, fbMat);
      this.visualGroup.add(fbMesh);
    }

    const hitMat = new THREE.MeshBasicMaterial({ visible: false });

    // Hitbox del chasis blindado (alineado al largo frontal del tanque: 1.4m ancho, 1.2m alto, 2.0m largo)
    const bodyHitGeo = new THREE.BoxGeometry(1.4, 1.2, 2.0);
    this.bodyHitbox = new THREE.Mesh(bodyHitGeo, hitMat);
    this.bodyHitbox.position.set(0, 0.2, 0);
    this.bodyHitbox.userData = { isHitbox: true, isHeadshot: false, isShield: false, enemy: this };
    this.model.add(this.bodyHitbox);
    this.hitboxes.push(this.bodyHitbox);

    // Escudo frontal digital ("svchost.exe / Firewall Shield") frente al cañón
    const shieldGeo = new THREE.PlaneGeometry(1.8, 1.5);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide
    });
    this.shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    this.shieldMesh.position.set(0, 0.4, -1.1);
    this.visualGroup.add(this.shieldMesh);

    const hexWireMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true
    });
    this.shieldWire = new THREE.Mesh(shieldGeo, hexWireMat);
    this.shieldWire.position.set(0, 0.4, -1.11);
    this.visualGroup.add(this.shieldWire);

    this.shieldMesh.userData = { isHitbox: true, isHeadshot: false, isShield: true, enemy: this };
    this.hitboxes.push(this.shieldMesh);

    // Núcleo vulnerable trasero expuesto (Headshot crítico en la bahía de motor)
    const coreHitGeo = new THREE.SphereGeometry(0.4, 8, 8);
    this.coreHitbox = new THREE.Mesh(coreHitGeo, hitMat);
    this.coreHitbox.position.set(0, 0.6, 0.95); // Expuesto en la parte trasera
    this.coreHitbox.userData = { isHitbox: true, isHeadshot: true, isShield: false, enemy: this };
    this.model.add(this.coreHitbox);
    this.hitboxes.push(this.coreHitbox);
  }

  public override update(delta: number, playerPosition: THREE.Vector3): void {
    if (this.isDead) return;

    this.animTimer += delta;

    // 1. Pulso holográfico del escudo frontal
    const pulse = 0.5 + Math.sin(this.animTimer * 4.0) * 0.25;
    (this.shieldMesh.material as THREE.MeshBasicMaterial).opacity = 0.45 + pulse * 0.2;

    const dirToPlayer = new THREE.Vector3(
      playerPosition.x - this.model.position.x,
      0,
      playerPosition.z - this.model.position.z
    );
    const distanceToPlayer = dirToPlayer.length();

    if (distanceToPlayer > 0.1) {
      this.model.lookAt(playerPosition.x, this.model.position.y, playerPosition.z);
    }

    const isMoving = distanceToPlayer > this.config.attackRange;

    // 2. Animación de retumbar de orugas (Tread rumble) y balanceo de suspensión pesada
    if (isMoving) {
      const treadVibration = Math.sin(this.animTimer * 24.0) * 0.012;
      const suspensionRock = Math.sin(this.animTimer * 4.0) * 0.04;
      this.visualGroup.position.y = treadVibration;
      this.currentRockPitch = THREE.MathUtils.lerp(this.currentRockPitch, suspensionRock + 0.03, delta * 5.0);
    } else {
      this.currentRockPitch = THREE.MathUtils.lerp(this.currentRockPitch, 0, delta * 4.0);
      this.visualGroup.position.y = Math.sin(this.animTimer * 3.0) * 0.005; // Ralentí del motor
    }
    this.visualGroup.rotation.x = this.currentRockPitch;

    // 3. Destello de daño
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
              if (m.emissive) m.emissive.setHex(0x000000);
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

    // 4. Lógica de avance del tanque
    if (isMoving) {
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
