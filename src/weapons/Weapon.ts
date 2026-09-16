import * as THREE from 'three';

export interface WeaponConfig {
  name: string;
  damage: number;
  headshotMultiplier: number;
  fireRate: number; // Intervalo en segundos entre disparos
  magSize: number;
  reloadTime: number;
  isAutomatic?: boolean;
  pelletCount?: number;
  spreadAngle?: number;
}

export abstract class Weapon {
  public baseConfig: WeaponConfig;
  public config: WeaponConfig;
  public currentAmmo: number;
  public isReloading: boolean = false;
  public isAutomatic: boolean = false;
  protected reloadTimer: number = 0;
  protected fireCooldown: number = 0;

  public model: THREE.Group;
  public muzzleObject: THREE.Object3D;

  public onAmmoChange?: (current: number, max: number) => void;
  public onReloadStart?: () => void;
  public onReloadEnd?: () => void;

  constructor(config: WeaponConfig) {
    this.baseConfig = { ...config };
    this.config = { ...config };
    this.isAutomatic = !!config.isAutomatic;
    this.currentAmmo = config.magSize;
    this.model = new THREE.Group();
    this.muzzleObject = new THREE.Object3D();
    this.model.add(this.muzzleObject);
  }

  public applyUpgrades(damageMult: number, fireRateMult: number, magBonus: number, reloadMult: number): void {
    this.config.damage = Math.round(this.baseConfig.damage * damageMult);
    this.config.fireRate = Math.max(0.04, Number((this.baseConfig.fireRate * fireRateMult).toFixed(3)));
    this.config.magSize = this.baseConfig.magSize + magBonus;
    this.config.reloadTime = Math.max(0.3, Number((this.baseConfig.reloadTime * reloadMult).toFixed(2)));
    this.currentAmmo = Math.min(this.currentAmmo, this.config.magSize);
    if (this.onAmmoChange) {
      this.onAmmoChange(this.currentAmmo, this.config.magSize);
    }
  }

  public canFire(): boolean {
    return !this.isReloading && this.fireCooldown <= 0 && this.currentAmmo > 0;
  }

  public fire(): boolean {
    if (!this.canFire()) {
      return false;
    }
    this.currentAmmo--;
    this.fireCooldown = this.config.fireRate;
    this.playRecoil();
    if (this.onAmmoChange) {
      this.onAmmoChange(this.currentAmmo, this.config.magSize);
    }
    return true;
  }

  public reload(): boolean {
    if (this.isReloading || this.currentAmmo >= this.config.magSize) {
      return false;
    }
    this.isReloading = true;
    this.reloadTimer = this.config.reloadTime;
    if (this.onReloadStart) {
      this.onReloadStart();
    }
    return true;
  }

  public update(delta: number): void {
    if (this.fireCooldown > 0) {
      this.fireCooldown -= delta;
    }

    if (this.isReloading) {
      this.reloadTimer -= delta;
      if (this.reloadTimer <= 0) {
        this.isReloading = false;
        this.currentAmmo = this.config.magSize;
        if (this.onAmmoChange) {
          this.onAmmoChange(this.currentAmmo, this.config.magSize);
        }
        if (this.onReloadEnd) {
          this.onReloadEnd();
        }
      }
    }
  }

  public getMuzzleWorldPosition(target: THREE.Vector3): THREE.Vector3 {
    return this.muzzleObject.getWorldPosition(target);
  }

  /**
   * Devuelve el origen y la dirección del cañón del arma en coordenadas del mundo.
   * En VR esto garantiza que la bala y el haz láser coincidan con 100% de precisión milimétrica.
   */
  public getMuzzleRay(): { origin: THREE.Vector3; direction: THREE.Vector3 } {
    this.model.updateMatrixWorld(true);
    const origin = new THREE.Vector3();
    this.muzzleObject.getWorldPosition(origin);

    const quat = new THREE.Quaternion();
    this.muzzleObject.getWorldQuaternion(quat);
    const direction = new THREE.Vector3(0, 0, -1).applyQuaternion(quat).normalize();

    return { origin, direction };
  }

  public updateLaserAim?(_targets: THREE.Object3D[]): void;

  public abstract playRecoil(): void;
  public abstract setVRMode(inVR: boolean): void;
}
