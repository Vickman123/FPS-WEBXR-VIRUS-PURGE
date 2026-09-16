import * as THREE from 'three';
import { Weapon } from './Weapon';

export class Pistol extends Weapon {
  private recoilOffset: THREE.Vector3 = new THREE.Vector3();
  private recoilRotation: THREE.Euler = new THREE.Euler();

  // Posición desktop en primera persona
  private desktopPosition: THREE.Vector3 = new THREE.Vector3(0.26, -0.24, -0.5);
  private desktopRotation: THREE.Euler = new THREE.Euler(0, 0, 0);

  // Posición ajustada para el mando VR de Meta Quest (encaja en la mano física)
  private vrPosition: THREE.Vector3 = new THREE.Vector3(0, -0.03, -0.07);
  private vrRotation: THREE.Euler = new THREE.Euler(-Math.PI / 5, 0, 0);

  private isVR: boolean = false;

  private muzzleLight: THREE.PointLight;
  private muzzleFlashMesh: THREE.Mesh;
  private laserSight: THREE.Line;
  private laserDot: THREE.Mesh;
  private laserRaycaster: THREE.Raycaster = new THREE.Raycaster();
  private flashTimer: number = 0;

  constructor() {
    super({
      name: 'ANTIVIRUS CANNON // V1',
      damage: 40,
      headshotMultiplier: 2.5,
      fireRate: 0.18,
      magSize: 12,
      reloadTime: 1.2
    });

    this.muzzleLight = new THREE.PointLight(0x00f3ff, 0, 8);
    this.muzzleFlashMesh = this.buildMuzzleFlash();
    this.laserSight = this.buildLaserSight();
    this.laserDot = this.buildLaserDot();
    this.buildModel();

    this.model.position.copy(this.desktopPosition);
  }

  private buildModel(): void {
    const gunGroup = new THREE.Group();

    // Materiales
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

    // 1. Empuñadura ergonómica
    const gripGeo = new THREE.BoxGeometry(0.048, 0.16, 0.08);
    const grip = new THREE.Mesh(gripGeo, darkMetal);
    grip.position.set(0, -0.07, 0.05);
    grip.rotation.x = 0.28;
    gunGroup.add(grip);

    // Celda de energía luminosa
    const cellGeo = new THREE.BoxGeometry(0.024, 0.09, 0.03);
    const cell = new THREE.Mesh(cellGeo, cyanGlow);
    cell.position.set(0, -0.07, 0.05);
    cell.rotation.x = 0.28;
    gunGroup.add(cell);

    // 2. Chasis superior / Corredera
    const slideGeo = new THREE.BoxGeometry(0.065, 0.075, 0.28);
    const slide = new THREE.Mesh(slideGeo, frameMetal);
    slide.position.set(0, 0.02, -0.05);
    gunGroup.add(slide);

    const slatGeo = new THREE.BoxGeometry(0.068, 0.015, 0.2);
    const slat = new THREE.Mesh(slatGeo, cyanGlow);
    slat.position.set(0, 0.035, -0.05);
    gunGroup.add(slat);

    // 3. Cañón cilíndrico de plasma
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

    const dotGeo = new THREE.SphereGeometry(0.003, 8, 8);
    const dot = new THREE.Mesh(dotGeo, cyanGlow);
    dot.position.set(0, 0.105, -0.03);
    gunGroup.add(dot);

    // 5. Muzzle point
    this.muzzleObject.position.set(0, 0.02, -0.27);
    gunGroup.add(this.muzzleObject);

    this.muzzleLight.position.set(0, 0.02, -0.27);
    gunGroup.add(this.muzzleLight);

    this.muzzleFlashMesh.position.set(0, 0.02, -0.28);
    gunGroup.add(this.muzzleFlashMesh);

    // Puntero láser táctico para VR y punto de retícula de impacto
    gunGroup.add(this.laserSight);
    gunGroup.add(this.laserDot);

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

  private buildLaserSight(): THREE.Line {
    const positions = new Float32Array([
      0, 0.02, -0.27,
      0, 0.02, -30.0
    ]);
    const geo = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(positions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', posAttr);

    const mat = new THREE.LineBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.65
    });
    const line = new THREE.Line(geo, mat);
    line.frustumCulled = false;
    line.visible = false; // Solo se activa en modo VR
    return line;
  }

  private buildLaserDot(): THREE.Mesh {
    const dotGeo = new THREE.SphereGeometry(0.016, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.95
    });
    const mesh = new THREE.Mesh(dotGeo, dotMat);
    mesh.position.set(0, 0.02, -30.0);
    mesh.frustumCulled = false;
    mesh.visible = false;
    return mesh;
  }

  public setVRMode(inVR: boolean): void {
    this.isVR = inVR;
    this.laserSight.visible = inVR;
    this.laserDot.visible = inVR;

    if (inVR) {
      this.model.position.copy(this.vrPosition);
      this.model.rotation.copy(this.vrRotation);
    } else {
      this.model.position.copy(this.desktopPosition);
      this.model.rotation.copy(this.desktopRotation);
    }
  }

  /**
   * Actualiza dinámicamente la longitud del haz láser y el punto de mira para que termine
   * exactamente sobre la superficie del objetivo (enemigo o pared) en tiempo real.
   */
  public override updateLaserAim(targets: THREE.Object3D[]): void {
    if (!this.isVR || !this.laserSight.visible) return;

    this.model.updateMatrixWorld(true);
    const origin = new THREE.Vector3();
    this.muzzleObject.getWorldPosition(origin);

    const quat = new THREE.Quaternion();
    this.muzzleObject.getWorldQuaternion(quat);
    const direction = new THREE.Vector3(0, 0, -1).applyQuaternion(quat).normalize();

    this.laserRaycaster.set(origin, direction);
    this.laserRaycaster.far = 40;

    const hits = this.laserRaycaster.intersectObjects(targets, false);
    let hitDistance = 30.0;
    if (hits.length > 0) {
      hitDistance = Math.max(0.1, hits[0].distance);
    }

    // Actualizar el vértice final del haz láser en coordenadas locales de gunGroup
    const posAttr = (this.laserSight.geometry as THREE.BufferGeometry).attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;
    array[5] = -0.27 - hitDistance;
    posAttr.needsUpdate = true;

    // Colocar el punto retícula en el punto exacto de colisión
    this.laserDot.position.set(0, 0.02, -0.27 - hitDistance);
  }

  public override playRecoil(): void {
    this.recoilOffset.z = 0.055;
    this.recoilOffset.y = 0.02;
    this.recoilRotation.x = 0.20;
    this.recoilRotation.y = (Math.random() - 0.5) * 0.025;

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

    const decaySpeed = 14;
    this.recoilOffset.lerp(new THREE.Vector3(0, 0, 0), delta * decaySpeed);
    this.recoilRotation.x = THREE.MathUtils.lerp(this.recoilRotation.x, 0, delta * decaySpeed);
    this.recoilRotation.y = THREE.MathUtils.lerp(this.recoilRotation.y, 0, delta * decaySpeed);

    let reloadRotX = 0;
    let reloadPosY = 0;
    if (this.isReloading) {
      const progress = 1 - this.reloadTimer / this.config.reloadTime;
      const arc = Math.sin(progress * Math.PI);
      reloadRotX = -0.4 * arc;
      reloadPosY = -0.12 * arc;
    }

    const basePos = this.isVR ? this.vrPosition : this.desktopPosition;
    const baseRot = this.isVR ? this.vrRotation : this.desktopRotation;

    this.model.position.x = basePos.x + this.recoilOffset.x;
    this.model.position.y = basePos.y + this.recoilOffset.y + reloadPosY;
    this.model.position.z = basePos.z + this.recoilOffset.z;

    this.model.rotation.x = baseRot.x + this.recoilRotation.x + reloadRotX;
    this.model.rotation.y = baseRot.y + this.recoilRotation.y;
    this.model.rotation.z = baseRot.z;
  }
}
