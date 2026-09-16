import * as THREE from 'three';
import { Weapon } from './Weapon';
import { Pistol } from './Pistol';

export class WeaponManager {
  private activeWeapon: Pistol;
  private weapons: Weapon[] = [];
  public weaponParent: THREE.Object3D | null = null;

  constructor() {
    const pistol = new Pistol();
    this.weapons.push(pistol);
    this.activeWeapon = pistol;
  }

  public attachTo(parent: THREE.Object3D): void {
    if (this.weaponParent && this.activeWeapon.model.parent === this.weaponParent) {
      this.weaponParent.remove(this.activeWeapon.model);
    }
    this.weaponParent = parent;
    parent.add(this.activeWeapon.model);
  }

  public setVRMode(inVR: boolean): void {
    this.activeWeapon.setVRMode(inVR);
  }

  public getActiveWeapon(): Pistol {
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
