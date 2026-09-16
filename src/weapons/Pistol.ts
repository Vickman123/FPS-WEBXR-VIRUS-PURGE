import * as THREE from 'three';
import { Weapon } from './Weapon';

export class Pistol extends Weapon {
  private recoilOffset: THREE.Vector3 = new THREE.Vector3();
  private recoilRotation: THREE.Euler = new THREE.Euler();
  // Posicionado ergonómicamente en la esquina inferior derecha del campo de visión
  private basePosition: THREE.Vector3 = new THREE.Vector3(0.26, -0.24, -0.5);
  private baseRotation: THREE.Euler = new THREE.Euler(0, 0, 0);

  private muzzleLight: THREE.PointLight;
  private muzzleFlashMesh: THREE.Mesh;
  private flashTimer: number = 0;

  constructor() {
    super({
      name: 'CYBER PISTOL // V1',
      damage: 40,
      headshotMultiplier: 2.5,
      fireRate: 0.18,
      magSize: 12,
      reloadTime: 1.2
    });

    this.muzzleLight = new THREE.PointLight(0x00f3ff, 0, 8);
    this.muzzleFlashMesh = this.buildMuzzleFlash();
    this.buildModel();

    this.model.position.copy(this.basePosition);
  }

  private buildModel(): void {
    const gunGroup = new THREE.Group();

    // Materiales de alta definición y contraste
    const darkMetal = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.25,
      metalness: 0.8
    });

    const frameMetal = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.3,
      metalness: 0.7
    });

    const cyanGlow = new THREE.MeshStandardMaterial({
      color: 0x00f3ff,
      emissive: 0x00f3ff,
      emissiveIntensity: 2.5,
      roughness: 0.1
    });

    const reflexSightGlass = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.7
    });

    // 1. Empuñadura (Grip)
    const gripGeo = new THREE.BoxGeometry(0.05, 0.16, 0.08);
    const grip = new THREE.Mesh(gripGeo, darkMetal);
    grip.position.set(0, -0.07, 0.05);
    grip.rotation.x = 0.28;
    gunGroup.add(grip);

    // Celda de energía luminosa en el cargador
    const cellGeo = new THREE.BoxGeometry(0.024, 0.09, 0.03);
    const cell = new THREE.Mesh(cellGeo, cyanGlow);
    cell.position.set(0, -0.07, 0.05);
    cell.rotation.x = 0.28;
    gunGroup.add(cell);

    // 2. Chasis superior / Corredera (Slide)
    const slideGeo = new THREE.BoxGeometry(0.065, 0.075, 0.28);
    const slide = new THREE.Mesh(slideGeo, frameMetal);
    slide.position.set(0, 0.02, -0.05);
    gunGroup.add(slide);

    // Ranuras de disipación de calor emisivas laterales
    const slatGeo = new THREE.BoxGeometry(0.068, 0.015, 0.2);
    const slat = new THREE.Mesh(slatGeo, cyanGlow);
    slat.position.set(0, 0.035, -0.05);
    gunGroup.add(slat);

    // 3. Cañón de plasma cilíndrico
    const barrelGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.16, 16);
    const barrel = new THREE.Mesh(barrelGeo, darkMetal);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.02, -0.18);
    gunGroup.add(barrel);

    // 4. Mira réflex holográfica
    const sightBaseGeo = new THREE.BoxGeometry(0.04, 0.03, 0.06);
    const sightBase = new THREE.Mesh(sightBaseGeo, darkMetal);
    sightBase.position.set(0, 0.075, -0.03);
    gunGroup.add(sightBase);

    const sightFrameGeo = new THREE.TorusGeometry(0.018, 0.003, 8, 16);
    const sightFrame = new THREE.Mesh(sightFrameGeo, darkMetal);
    sightFrame.position.set(0, 0.105, -0.03);
    gunGroup.add(sightFrame);

    const sightLensGeo = new THREE.CircleGeometry(0.017, 16);
    const sightLens = new THREE.Mesh(sightLensGeo, reflexSightGlass);
    sightLens.position.set(0, 0.105, -0.03);
    gunGroup.add(sightLens);

    // Punto holográfico central
    const dotGeo = new THREE.SphereGeometry(0.003, 8, 8);
    const dot = new THREE.Mesh(dotGeo, cyanGlow);
    dot.position.set(0, 0.105, -0.03);
    gunGroup.add(dot);

    // 5. Muzzle point (salida del cañón)
    this.muzzleObject.position.set(0, 0.02, -0.27);
    gunGroup.add(this.muzzleObject);

    // Luz dinámica del disparo
    this.muzzleLight.position.set(0, 0.02, -0.27);
    gunGroup.add(this.muzzleLight);

    // Destello visual (Muzzle flash)
    this.muzzleFlashMesh.position.set(0, 0.02, -0.28);
    gunGroup.add(this.muzzleFlashMesh);

    this.model.add(gunGroup);
  }

  private buildMuzzleFlash(): THREE.Mesh {
    const flashGeo = new THREE.OctahedronGeometry(0.08, 0);
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.95
    });
    const mesh = new THREE.Mesh(flashGeo, flashMat);
    mesh.visible = false;
    return mesh;
  }

  public override playRecoil(): void {
    this.recoilOffset.z = 0.07;
    this.recoilOffset.y = 0.025;
    this.recoilRotation.x = 0.22;
    this.recoilRotation.y = (Math.random() - 0.5) * 0.03;

    this.muzzleLight.intensity = 25;
    this.muzzleFlashMesh.visible = true;
    this.muzzleFlashMesh.rotation.z = Math.random() * Math.PI;
    this.flashTimer = 0.05;
  }

  public override update(delta: number): void {
    super.update(delta);

    if (this.flashTimer > 0) {
      this.flashTimer -= delta;
      if (this.flashTimer <= 0) {
        this.muzzleLight.intensity = 0;
        this.muzzleFlashMesh.visible = false;
      }
    }

    // Amortiguación elástica de retorno
    const decaySpeed = 12;
    this.recoilOffset.lerp(new THREE.Vector3(0, 0, 0), delta * decaySpeed);
    this.recoilRotation.x = THREE.MathUtils.lerp(this.recoilRotation.x, 0, delta * decaySpeed);
    this.recoilRotation.y = THREE.MathUtils.lerp(this.recoilRotation.y, 0, delta * decaySpeed);

    let reloadRotX = 0;
    let reloadPosY = 0;
    if (this.isReloading) {
      const progress = 1 - this.reloadTimer / this.config.reloadTime;
      const arc = Math.sin(progress * Math.PI);
      reloadRotX = -0.45 * arc;
      reloadPosY = -0.15 * arc;
    }

    this.model.position.x = this.basePosition.x + this.recoilOffset.x;
    this.model.position.y = this.basePosition.y + this.recoilOffset.y + reloadPosY;
    this.model.position.z = this.basePosition.z + this.recoilOffset.z;

    this.model.rotation.x = this.baseRotation.x + this.recoilRotation.x + reloadRotX;
    this.model.rotation.y = this.baseRotation.y + this.recoilRotation.y;
    this.model.rotation.z = this.baseRotation.z;
  }
}
