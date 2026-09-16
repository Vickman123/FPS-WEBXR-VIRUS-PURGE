import * as THREE from 'three';
import { Weapon } from './Weapon';
import { Pistol } from './Pistol';

export class WeaponManager {
  private activeWeapon: Weapon;
  private weapons: Weapon[] = [];
  public weaponParent: THREE.Object3D | null = null;

  constructor() {
    const pistol = new Pistol();
    this.weapons.push(pistol);
    this.activeWeapon = pistol;
  }

  public attachTo(parent: THREE.Object3D): void {
    this.weaponParent = parent;
    parent.add(this.activeWeapon.model);
  }

  public getActiveWeapon(): Weapon {
    return this.activeWeapon;
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
