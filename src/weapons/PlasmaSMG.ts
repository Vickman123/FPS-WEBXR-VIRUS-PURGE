import * as THREE from 'three';
import { Weapon } from './Weapon';

export class PlasmaSMG extends Weapon {
  private recoilOffset: THREE.Vector3 = new THREE.Vector3();
  private recoilRotation: THREE.Euler = new THREE.Euler();

  private desktopPosition: THREE.Vector3 = new THREE.Vector3(0.22, -0.21, -0.44);
  private desktopRotation: THREE.Euler = new THREE.Euler(0, 0, 0);

  private vrPosition: THREE.Vector3 = new THREE.Vector3(0, -0.025, -0.06);
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
      name: 'PLASMA SMG // RAPID DEFENDER',
      damage: 22,
      headshotMultiplier: 2.2,
      fireRate: 0.085,
      magSize: 36,
      reloadTime: 1.1,
      isAutomatic: true
    });

    this.muzzleLight = new THREE.PointLight(0xd946ef, 0, 8);
    this.muzzleFlashMesh = this.buildMuzzleFlash();
    this.laserSight = this.buildLaserSight();
    this.laserDot = this.buildLaserDot();
    this.buildModel();

    this.model.position.copy(this.desktopPosition);
  }

  private buildModel(): void {
    const gunGroup = new THREE.Group();

    const stealthMetal = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.3,
      metalness: 0.9
    });

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      roughness: 0.35,
      metalness: 0.8
    });

    const magentaGlow = new THREE.MeshStandardMaterial({
      color: 0xd946ef,
      emissive: 0xc026d3,
      emissiveIntensity: 2.8,
      roughness: 0.1
    });

    // 1. Empuñadura compacta y gatillo
    const gripGeo = new THREE.BoxGeometry(0.042, 0.15, 0.07);
    const grip = new THREE.Mesh(gripGeo, stealthMetal);
    grip.position.set(0, -0.06, 0.03);
    grip.rotation.x = 0.25;
    gunGroup.add(grip);

    // Cargador curvo alargado
    const magGeo = new THREE.BoxGeometry(0.032, 0.16, 0.05);
    const mag = new THREE.Mesh(magGeo, magentaGlow);
    mag.position.set(0, -0.11, -0.02);
    mag.rotation.x = 0.15;
    gunGroup.add(mag);

    // 2. Chasis compacto SMG
    const bodyGeo = new THREE.BoxGeometry(0.058, 0.07, 0.26);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 0.02, -0.06);
    gunGroup.add(body);

    const railGeo = new THREE.BoxGeometry(0.062, 0.012, 0.22);
    const rail = new THREE.Mesh(railGeo, magentaGlow);
    rail.position.set(0, 0.045, -0.06);
    gunGroup.add(rail);

    // 3. Silenciador / Supresor lineal de plasma
    const barrelGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.14, 16);
    const barrel = new THREE.Mesh(barrelGeo, stealthMetal);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.02, -0.22);
    gunGroup.add(barrel);

    // 4. Muzzle point
    this.muzzleObject.position.set(0, 0.02, -0.30);
    gunGroup.add(this.muzzleObject);

    this.muzzleLight.position.set(0, 0.02, -0.30);
    gunGroup.add(this.muzzleLight);

    this.muzzleFlashMesh.position.set(0, 0.02, -0.31);
    gunGroup.add(this.muzzleFlashMesh);

    // Láser táctico magenta
    gunGroup.add(this.laserSight);
    gunGroup.add(this.laserDot);

    this.model.add(gunGroup);
  }

  private buildMuzzleFlash(): THREE.Mesh {
    const flashGeo = new THREE.OctahedronGeometry(0.07, 0);
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xd946ef,
      transparent: true,
      opacity: 0.95
    });
    const mesh = new THREE.Mesh(flashGeo, flashMat);
    mesh.visible = false;
    return mesh;
  }

  private buildLaserSight(): THREE.Line {
    const positions = new Float32Array([
      0, 0.02, -0.30,
      0, 0.02, -30.0
    ]);
    const geo = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(positions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', posAttr);

    const mat = new THREE.LineBasicMaterial({
      color: 0xd946ef,
      transparent: true,
      opacity: 0.65
    });
    const line = new THREE.Line(geo, mat);
    line.frustumCulled = false;
    line.visible = false;
    return line;
  }

  private buildLaserDot(): THREE.Mesh {
    const dotGeo = new THREE.SphereGeometry(0.016, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xd946ef,
      transparent: true,
      opacity: 0.95
    });
    const mesh = new THREE.Mesh(dotGeo, dotMat);
    mesh.position.set(0, 0.02, -30.0);
    mesh.frustumCulled = false;
    mesh.visible = false;
    return mesh;
  }

  public override setVRMode(inVR: boolean): void {
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

    const posAttr = (this.laserSight.geometry as THREE.BufferGeometry).attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;
    array[5] = -0.30 - hitDistance;
    posAttr.needsUpdate = true;

    this.laserDot.position.set(0, 0.02, -0.30 - hitDistance);
  }

  public override playRecoil(): void {
    this.recoilOffset.z = 0.035;
    this.recoilOffset.y = 0.012;
    this.recoilRotation.x = 0.12;
    this.recoilRotation.y = (Math.random() - 0.5) * 0.02;

    this.muzzleLight.intensity = 20;
    this.muzzleFlashMesh.visible = true;
    this.muzzleFlashMesh.rotation.z = Math.random() * Math.PI;
    this.flashTimer = 0.04;
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

    const decaySpeed = 16;
    this.recoilOffset.lerp(new THREE.Vector3(0, 0, 0), delta * decaySpeed);
    this.recoilRotation.x = THREE.MathUtils.lerp(this.recoilRotation.x, 0, delta * decaySpeed);
    this.recoilRotation.y = THREE.MathUtils.lerp(this.recoilRotation.y, 0, delta * decaySpeed);

    let reloadRotX = 0;
    let reloadPosY = 0;
    if (this.isReloading) {
      const progress = 1 - this.reloadTimer / this.config.reloadTime;
      const arc = Math.sin(progress * Math.PI);
      reloadRotX = -0.35 * arc;
      reloadPosY = -0.10 * arc;
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
