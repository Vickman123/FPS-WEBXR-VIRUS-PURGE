import * as THREE from 'three';
import { Weapon } from './Weapon';

export class ScatterShotgun extends Weapon {
  private recoilOffset: THREE.Vector3 = new THREE.Vector3();
  private recoilRotation: THREE.Euler = new THREE.Euler();

  private desktopPosition: THREE.Vector3 = new THREE.Vector3(0.24, -0.22, -0.48);
  private desktopRotation: THREE.Euler = new THREE.Euler(0, 0, 0);

  private vrPosition: THREE.Vector3 = new THREE.Vector3(0, -0.04, -0.10);
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
      name: 'SCATTER SHOTGUN // PURGE SPREAD',
      damage: 22,
      headshotMultiplier: 2.0,
      fireRate: 0.55,
      magSize: 8,
      reloadTime: 1.5,
      pelletCount: 6,
      spreadAngle: 0.055,
      isAutomatic: false
    });

    this.muzzleLight = new THREE.PointLight(0xff7700, 0, 10);
    this.muzzleFlashMesh = this.buildMuzzleFlash();
    this.laserSight = this.buildLaserSight();
    this.laserDot = this.buildLaserDot();
    this.buildModel();

    this.model.position.copy(this.desktopPosition);
  }

  private buildModel(): void {
    const gunGroup = new THREE.Group();

    const darkMetal = new THREE.MeshStandardMaterial({
      color: 0x181e29,
      roughness: 0.35,
      metalness: 0.85
    });

    const bodyMetal = new THREE.MeshStandardMaterial({
      color: 0x2e384d,
      roughness: 0.3,
      metalness: 0.75
    });

    const amberGlow = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xff8800,
      emissiveIntensity: 2.8,
      roughness: 0.1
    });

    // 1. Culata y empuñadura pesada
    const gripGeo = new THREE.BoxGeometry(0.052, 0.17, 0.10);
    const grip = new THREE.Mesh(gripGeo, darkMetal);
    grip.position.set(0, -0.08, 0.08);
    grip.rotation.x = 0.32;
    gunGroup.add(grip);

    // Batería / Núcleo de dispersión
    const coreGeo = new THREE.BoxGeometry(0.03, 0.09, 0.05);
    const core = new THREE.Mesh(coreGeo, amberGlow);
    core.position.set(0, -0.06, 0.08);
    core.rotation.x = 0.32;
    gunGroup.add(core);

    // 2. Chasis del receptor ancho
    const receiverGeo = new THREE.BoxGeometry(0.085, 0.09, 0.32);
    const receiver = new THREE.Mesh(receiverGeo, bodyMetal);
    receiver.position.set(0, 0.02, -0.06);
    gunGroup.add(receiver);

    const ventGeo = new THREE.BoxGeometry(0.088, 0.02, 0.22);
    const vent = new THREE.Mesh(ventGeo, amberGlow);
    vent.position.set(0, 0.045, -0.06);
    gunGroup.add(vent);

    // 3. Doble cañón superpuesto de 12 Gauge de Plasma
    const barrelTopGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.26, 16);
    const barrelTop = new THREE.Mesh(barrelTopGeo, darkMetal);
    barrelTop.rotation.x = Math.PI / 2;
    barrelTop.position.set(0, 0.035, -0.26);
    gunGroup.add(barrelTop);

    const barrelBottomGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.26, 16);
    const barrelBottom = new THREE.Mesh(barrelBottomGeo, darkMetal);
    barrelBottom.rotation.x = Math.PI / 2;
    barrelBottom.position.set(0, -0.015, -0.26);
    gunGroup.add(barrelBottom);

    // 4. Muzzle point
    this.muzzleObject.position.set(0, 0.02, -0.39);
    gunGroup.add(this.muzzleObject);

    this.muzzleLight.position.set(0, 0.02, -0.39);
    gunGroup.add(this.muzzleLight);

    this.muzzleFlashMesh.position.set(0, 0.02, -0.40);
    gunGroup.add(this.muzzleFlashMesh);

    // Láser ámbar táctico
    gunGroup.add(this.laserSight);
    gunGroup.add(this.laserDot);

    this.model.add(gunGroup);
  }

  private buildMuzzleFlash(): THREE.Mesh {
    const flashGeo = new THREE.OctahedronGeometry(0.14, 0);
    const flashMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.95
    });
    const mesh = new THREE.Mesh(flashGeo, flashMat);
    mesh.visible = false;
    return mesh;
  }

  private buildLaserSight(): THREE.Line {
    const positions = new Float32Array([
      0, 0.02, -0.39,
      0, 0.02, -30.0
    ]);
    const geo = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(positions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', posAttr);

    const mat = new THREE.LineBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.65
    });
    const line = new THREE.Line(geo, mat);
    line.frustumCulled = false;
    line.visible = false;
    return line;
  }

  private buildLaserDot(): THREE.Mesh {
    const dotGeo = new THREE.SphereGeometry(0.02, 8, 8);
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
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
    array[5] = -0.39 - hitDistance;
    posAttr.needsUpdate = true;

    this.laserDot.position.set(0, 0.02, -0.39 - hitDistance);
  }

  public override playRecoil(): void {
    this.recoilOffset.z = 0.12;
    this.recoilOffset.y = 0.04;
    this.recoilRotation.x = 0.38;
    this.recoilRotation.y = (Math.random() - 0.5) * 0.04;

    this.muzzleLight.intensity = 40;
    this.muzzleFlashMesh.visible = true;
    this.muzzleFlashMesh.rotation.z = Math.random() * Math.PI;
    this.flashTimer = 0.07;
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

    const decaySpeed = 10;
    this.recoilOffset.lerp(new THREE.Vector3(0, 0, 0), delta * decaySpeed);
    this.recoilRotation.x = THREE.MathUtils.lerp(this.recoilRotation.x, 0, delta * decaySpeed);
    this.recoilRotation.y = THREE.MathUtils.lerp(this.recoilRotation.y, 0, delta * decaySpeed);

    let reloadRotX = 0;
    let reloadPosY = 0;
    if (this.isReloading) {
      const progress = 1 - this.reloadTimer / this.config.reloadTime;
      const arc = Math.sin(progress * Math.PI);
      reloadRotX = -0.5 * arc;
      reloadPosY = -0.16 * arc;
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
