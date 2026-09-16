import * as THREE from 'three';
import { Weapon } from './Weapon';
import { Pistol } from './Pistol';
import { ScatterShotgun } from './ScatterShotgun';
import { PlasmaSMG } from './PlasmaSMG';

export type WeaponType = 'pistol' | 'shotgun' | 'smg';

export class WeaponManager {
  private activeWeapon: Weapon;
  private weapons: Map<WeaponType, Weapon> = new Map();
  public weaponParent: THREE.Object3D | null = null;
  private isVR: boolean = false;

  public onAmmoChange?: (current: number, max: number) => void;
  public onReloadStart?: () => void;
  public onReloadEnd?: () => void;
  public onWeaponChanged?: (weapon: Weapon) => void;

  constructor() {
    const pistol = new Pistol();
    const shotgun = new ScatterShotgun();
    const smg = new PlasmaSMG();

    this.weapons.set('pistol', pistol);
    this.weapons.set('shotgun', shotgun);
    this.weapons.set('smg', smg);

    this.activeWeapon = pistol;
    this.bindWeaponCallbacks(this.activeWeapon);
  }

  private bindWeaponCallbacks(weapon: Weapon): void {
    weapon.onAmmoChange = (curr, max) => this.onAmmoChange?.(curr, max);
    weapon.onReloadStart = () => this.onReloadStart?.();
    weapon.onReloadEnd = () => this.onReloadEnd?.();
  }

  public attachTo(parent: THREE.Object3D): void {
    if (this.weaponParent && this.activeWeapon.model.parent === this.weaponParent) {
      this.weaponParent.remove(this.activeWeapon.model);
    }
    this.weaponParent = parent;
    parent.add(this.activeWeapon.model);
  }

  public setVRMode(inVR: boolean): void {
    this.isVR = inVR;
    this.weapons.forEach((w) => w.setVRMode(inVR));
  }

  public switchWeapon(type: WeaponType): void {
    const nextWeapon = this.weapons.get(type);
    if (!nextWeapon || nextWeapon === this.activeWeapon) return;

    if (this.weaponParent && this.activeWeapon.model.parent === this.weaponParent) {
      this.weaponParent.remove(this.activeWeapon.model);
    }

    this.activeWeapon = nextWeapon;
    this.activeWeapon.setVRMode(this.isVR);
    this.bindWeaponCallbacks(this.activeWeapon);

    if (this.weaponParent) {
      this.weaponParent.add(this.activeWeapon.model);
    }

    this.onAmmoChange?.(this.activeWeapon.currentAmmo, this.activeWeapon.config.magSize);
    this.onWeaponChanged?.(this.activeWeapon);
  }

  public applyUpgradesToAll(damageMult: number, fireRateMult: number, magBonus: number, reloadMult: number): void {
    this.weapons.forEach((w) => {
      w.applyUpgrades(damageMult, fireRateMult, magBonus, reloadMult);
    });
  }

  public getActiveWeapon(): Weapon {
    return this.activeWeapon;
  }

  public getWeapon(type: WeaponType): Weapon | undefined {
    return this.weapons.get(type);
  }

  public update(delta: number): void {
    this.activeWeapon.update(delta);
  }

  public tryFire(): boolean {
    return this.activeWeapon.fire();
  }

  public reload(): boolean {
    return this.activeWeapon.reload();
  }
}
