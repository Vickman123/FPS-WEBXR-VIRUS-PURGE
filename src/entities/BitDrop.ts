import * as THREE from 'three';

export class BitDrop {
  public model: THREE.Group;
  public value: number;
  public isCollected: boolean = false;

  private mesh: THREE.Mesh;
  private wireframe: THREE.LineSegments;
  private velocity: THREE.Vector3;
  private groundY: number = 0.35;
  private lifeTime: number = 0;
  private isGrounded: boolean = false;

  // Magnetismo hacia el jugador
  private magnetRadius: number = 4.2;
  private pickupRadius: number = 0.9;
  private magnetSpeed: number = 0;

  constructor(position: THREE.Vector3, value: number) {
    this.value = value;
    this.model = new THREE.Group();
    this.model.position.copy(position);

    // Salto inicial tipo loot arcade
    this.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 2.2,
      2.8 + Math.random() * 1.5,
      (Math.random() - 0.5) * 2.2
    );

    // Color según valor (Cian para común, Dorado/Ámbar para alto valor)
    const isHighValue = value >= 25;
    const colorHex = isHighValue ? 0xf59e0b : 0x00f3ff;
    const emissiveHex = isHighValue ? 0xfbbf24 : 0x00ffff;

    const size = isHighValue ? 0.16 : 0.12;
    const geo = new THREE.OctahedronGeometry(size, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: colorHex,
      emissive: emissiveHex,
      emissiveIntensity: 2.2,
      roughness: 0.15,
      metalness: 0.85
    });
    this.mesh = new THREE.Mesh(geo, mat);
    this.model.add(this.mesh);

    const wireGeo = new THREE.WireframeGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8
    });
    this.wireframe = new THREE.LineSegments(wireGeo, wireMat);
    this.model.add(this.wireframe);
  }

  public update(delta: number, playerPos: THREE.Vector3): boolean {
    if (this.isCollected) return true;
    this.lifeTime += delta;

    const distToPlayer = this.model.position.distanceTo(playerPos);

    // 1. Recolección instantánea si el jugador lo toca
    if (distToPlayer <= this.pickupRadius) {
      this.isCollected = true;
      return true;
    }

    // 2. Atracción Magnética suave hacia el jugador (Magnet)
    if (distToPlayer <= this.magnetRadius) {
      this.magnetSpeed = Math.min(18, this.magnetSpeed + delta * 24);
      const dir = new THREE.Vector3().subVectors(playerPos, this.model.position).normalize();
      this.model.position.addScaledVector(dir, this.magnetSpeed * delta);

      // Rotación acelerada al ser absorbido
      this.model.rotation.y += delta * 12;
      this.model.rotation.x += delta * 8;
      return false;
    }

    // 3. Simulación física y rebote en el suelo antes de ser magnetizado
    if (!this.isGrounded) {
      this.velocity.y -= 9.8 * delta;
      this.model.position.x += this.velocity.x * delta;
      this.model.position.y += this.velocity.y * delta;
      this.model.position.z += this.velocity.z * delta;

      if (this.model.position.y <= this.groundY) {
        this.model.position.y = this.groundY;
        this.isGrounded = true;
        this.velocity.set(0, 0, 0);
      }
    } else {
      // Flotación y giro idle estilo holograma
      this.model.position.y = this.groundY + Math.sin(this.lifeTime * 4.0) * 0.08;
      this.model.rotation.y += delta * 2.5;
      this.model.rotation.z = Math.sin(this.lifeTime * 3) * 0.2;
    }

    return false;
  }

  public dispose(): void {
    if (this.mesh) {
      this.mesh.geometry.dispose();
      (this.mesh.material as THREE.Material).dispose();
    }
    if (this.wireframe) {
      this.wireframe.geometry.dispose();
      (this.wireframe.material as THREE.Material).dispose();
    }
  }
}
