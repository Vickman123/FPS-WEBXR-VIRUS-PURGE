import * as THREE from 'three';
import { Enemy, EnemyState } from './Enemy';
import { ModelLoader } from '../utils/ModelLoader';

export class VirusDrone extends Enemy {
  private visualGroup: THREE.Group;
  private glbModel: THREE.Group | null = null;
  private headHitbox: THREE.Mesh;
  private bodyHitbox: THREE.Mesh;

  private animTimer: number = 0;
  private baseHeight: number = 1.6;
  private spawnGraceTimer: number = 1.5;
  private currentRoll: number = 0;
  private currentPitch: number = 0;
  private attackLunge: number = 0;

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

    // Contenedor para animaciones locales (pitch, roll, lunge, vibración)
    this.visualGroup = new THREE.Group();
    this.model.add(this.visualGroup);

    // Intentar instanciar el modelo 3D optimizado
    this.glbModel = ModelLoader.getDroneModel();

    if (this.glbModel) {
      // Escalar y orientar el modelo personalizado
      this.glbModel.scale.set(0.65, 0.65, 0.65);
      this.glbModel.position.set(0, 0, 0);
      this.visualGroup.add(this.glbModel);

      // Etiquetar todas las mallas internas para colisión
      this.glbModel.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.userData = { isHitbox: true, isHeadshot: false, enemy: this };
          this.hitboxes.push(child as THREE.Mesh);
        }
      });
    } else {
      // Geometría fallback si el modelo aún estuviese cargando
      const fallbackGeo = new THREE.CylinderGeometry(0.45, 0.25, 0.55, 6);
      const fallbackMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3, metalness: 0.8 });
      const fbMesh = new THREE.Mesh(fallbackGeo, fallbackMat);
      this.visualGroup.add(fbMesh);
    }

    // Hitbox principal del cuerpo (invisible para raycasting preciso)
    const bodyHitGeo = new THREE.CylinderGeometry(0.55, 0.45, 0.8, 8);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    this.bodyHitbox = new THREE.Mesh(bodyHitGeo, hitMat);
    this.bodyHitbox.userData = { isHitbox: true, isHeadshot: false, enemy: this };
    this.model.add(this.bodyHitbox);
    this.hitboxes.push(this.bodyHitbox);

    // Hitbox crítica de cabeza / sensor superior (Headshot)
    const headHitGeo = new THREE.SphereGeometry(0.32, 8, 8);
    this.headHitbox = new THREE.Mesh(headHitGeo, hitMat);
    this.headHitbox.position.set(0, 0.45, 0);
    this.headHitbox.userData = { isHitbox: true, isHeadshot: true, enemy: this };
    this.model.add(this.headHitbox);
    this.hitboxes.push(this.headHitbox);
  }

  public override update(delta: number, playerPosition: THREE.Vector3): void {
    if (this.isDead) return;

    this.animTimer += delta;

    if (this.spawnGraceTimer > 0) {
      this.spawnGraceTimer -= delta;
    }

    if (this.attackTimer > 0) {
      this.attackTimer -= delta;
    }

    // 1. Flotación vertical viva (Hover Bobbing)
    const hoverOffset = Math.sin(this.animTimer * 3.5) * 0.12;
    this.model.position.y = this.baseHeight + hoverOffset;

    // 2. Microvibración de propulsores iónicos / turbinas
    const turbineVibration = Math.sin(this.animTimer * 30.0) * 0.012;
    this.visualGroup.position.y = turbineVibration;

    // 3. Orientación y dirección hacia el jugador
    const dirToPlayer = new THREE.Vector3(
      playerPosition.x - this.model.position.x,
      0,
      playerPosition.z - this.model.position.z
    );
    const distanceToPlayer = dirToPlayer.length();

    if (distanceToPlayer > 0.1) {
      const prevYaw = this.model.rotation.y;
      this.model.lookAt(playerPosition.x, this.model.position.y, playerPosition.z);
      const targetYaw = this.model.rotation.y;

      // Calcular giro angular para inclinar el dron en las curvas (Banking / Roll)
      let yawDiff = targetYaw - prevYaw;
      if (yawDiff > Math.PI) yawDiff -= Math.PI * 2;
      if (yawDiff < -Math.PI) yawDiff += Math.PI * 2;

      const targetRoll = THREE.MathUtils.clamp(-yawDiff * 8.0, -0.35, 0.35);
      this.currentRoll = THREE.MathUtils.lerp(this.currentRoll, targetRoll, delta * 6.0);
    }

    // 4. Inclinación hacia adelante al avanzar (Pitch)
    const isMoving = this.spawnGraceTimer <= 0 && distanceToPlayer > this.config.attackRange;
    const targetPitch = isMoving ? 0.20 : 0.0;
    this.currentPitch = THREE.MathUtils.lerp(this.currentPitch, targetPitch, delta * 4.0);

    // 5. Animación de embestida de ataque (Attack Lunge)
    if (this.attackLunge > 0) {
      this.attackLunge -= delta * 3.0;
    }
    const lungeOffset = Math.sin(Math.max(0, this.attackLunge) * Math.PI) * 0.35;

    // Aplicar transformaciones procedimentales al contenedor visual
    this.visualGroup.rotation.x = this.currentPitch;
    this.visualGroup.rotation.z = this.currentRoll;
    this.visualGroup.position.z = lungeOffset;

    // 6. Destello de daño al recibir impactos
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

    if (this.spawnGraceTimer > 0) {
      return;
    }

    // 7. Lógica de persecución y ataque
    if (distanceToPlayer > this.config.attackRange) {
      this.state = EnemyState.CHASE;
      dirToPlayer.normalize();

      this.model.position.x += dirToPlayer.x * this.config.speed * delta;
      this.model.position.z += dirToPlayer.z * this.config.speed * delta;
    } else {
      this.state = EnemyState.ATTACK;
      if (this.attackTimer <= 0) {
        this.attackTimer = this.config.attackCooldown;
        this.attackLunge = 1.0; // Dispara animación de embestida hacia adelante
        if (this.onAttackPlayer) {
          this.onAttackPlayer(this.config.damage);
        }
      }
    }
  }
}
