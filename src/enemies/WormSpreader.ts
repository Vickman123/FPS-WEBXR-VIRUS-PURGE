import * as THREE from 'three';
import { Enemy, EnemyState } from './Enemy';

export class WormSpreader extends Enemy {
  private bodyNodes: THREE.Mesh[] = [];
  private headMesh: THREE.Mesh;
  private animTimer: number = 0;
  private wavePhase: number = Math.random() * Math.PI * 2;
  private baseHeight: number = 0.85;

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
    this.baseHeight = 0.85;

    // Materiales: fucsia / violeta neón para el gusano de datos
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xc026d3,
      emissive: 0xa21caf,
      emissiveIntensity: 2.2,
      roughness: 0.25,
      metalness: 0.6
    });

    const headMat = new THREE.MeshStandardMaterial({
      color: 0xff007f,
      emissive: 0xff007f,
      emissiveIntensity: 3.0,
      roughness: 0.1
    });

    const jointMat = new THREE.MeshBasicMaterial({
      color: 0xf472b6,
      wireframe: true
    });

    // 1. Cabeza (Vulnerable a disparos críticos)
    const headGeo = new THREE.SphereGeometry(0.26, 16, 16);
    this.headMesh = new THREE.Mesh(headGeo, headMat);
    this.headMesh.position.set(0, 0, 0);
    this.headMesh.castShadow = true;
    this.model.add(this.headMesh);

    this.headMesh.userData = { isHitbox: true, isHeadshot: true, enemy: this };
    this.hitboxes.push(this.headMesh);

    // 2. Nodos del cuerpo segmentado (4 segmentos que siguen en serpenteo)
    const nodeCount = 4;
    for (let i = 0; i < nodeCount; i++) {
      const scale = 1 - (i * 0.14);
      const geo = new THREE.SphereGeometry(0.22 * scale, 12, 12);
      const node = new THREE.Mesh(geo, nodeMat);
      node.position.set(0, 0, (i + 1) * 0.35);
      node.castShadow = true;
      this.model.add(node);
      this.bodyNodes.push(node);

      // Anillo de datos entre segmentos
      const ringGeo = new THREE.TorusGeometry(0.24 * scale, 0.02, 6, 16);
      const ring = new THREE.Mesh(ringGeo, jointMat);
      ring.position.set(0, 0, (i + 0.5) * 0.35);
      this.model.add(ring);

      node.userData = { isHitbox: true, isHeadshot: false, enemy: this };
      this.hitboxes.push(node);
    }
  }

  public override update(delta: number, playerPosition: THREE.Vector3): void {
    if (this.isDead) return;

    this.animTimer += delta;
    this.wavePhase += delta * 8.0;

    // Movimiento ondulatorio de los segmentos del cuerpo
    this.bodyNodes.forEach((node, idx) => {
      const wave = Math.sin(this.wavePhase - idx * 0.8) * 0.15;
      node.position.x = wave;
      node.position.y = Math.cos(this.wavePhase - idx * 0.6) * 0.08;
    });

    // Altura oscilante suave
    this.model.position.y = this.baseHeight + Math.sin(this.animTimer * 4) * 0.1;

    // Destello de daño
    if (this.hurtTimer > 0) {
      this.hurtTimer -= delta;
      (this.headMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0xffffff);
      if (this.hurtTimer <= 0) {
        (this.headMesh.material as THREE.MeshStandardMaterial).emissive.setHex(0xff007f);
        if (this.state === EnemyState.HURT) {
          this.state = EnemyState.CHASE;
        }
      }
    }

    if (this.attackTimer > 0) {
      this.attackTimer -= delta;
    }

    // Persecución del jugador
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

      // Añadir movimiento lateral en zigzag para dificultar el apuntado
      const lateralDir = new THREE.Vector3(-dirToPlayer.z, 0, dirToPlayer.x);
      const zigZag = Math.sin(this.animTimer * 6.5) * 1.8;

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
