import { CurrencyManager } from './CurrencyManager';
import { WeaponManager, WeaponType } from '../weapons/WeaponManager';
import { AudioManager } from '../audio/AudioManager';

export type UpgradeType = 'fireRate' | 'damage' | 'magSize' | 'reloadSpeed';

export interface UpgradeInfo {
  type: UpgradeType;
  name: string;
  description: string;
  currentLevel: number;
  maxLevel: number;
  cost: number;
  isMax: boolean;
}

export interface WeaponShopInfo {
  type: WeaponType;
  name: string;
  description: string;
  cost: number;
  isUnlocked: boolean;
  isEquipped: boolean;
}

export class UpgradeManager {
  private currencyManager: CurrencyManager;
  private weaponManager: WeaponManager;
  private audioManager: AudioManager;

  public levels: Record<UpgradeType, number> = {
    fireRate: 0,
    damage: 0,
    magSize: 0,
    reloadSpeed: 0
  };

  public unlockedWeapons: Set<WeaponType> = new Set(['pistol']);
  public activeWeaponType: WeaponType = 'pistol';

  // Costes por nivel (3 niveles máximos cada uno)
  private costs: Record<UpgradeType, number[]> = {
    fireRate: [80, 160, 300],
    damage: [100, 200, 400],
    magSize: [75, 150, 250],
    reloadSpeed: [60, 120, 200]
  };

  private weaponCosts: Record<'shotgun' | 'smg', number> = {
    shotgun: 250,
    smg: 350
  };

  public onUpgradesChanged?: () => void;

  constructor(currencyManager: CurrencyManager, weaponManager: WeaponManager, audioManager: AudioManager) {
    this.currencyManager = currencyManager;
    this.weaponManager = weaponManager;
    this.audioManager = audioManager;
  }

  public getUpgradeInfo(type: UpgradeType): UpgradeInfo {
    const current = this.levels[type];
    const maxLevel = 3;
    const isMax = current >= maxLevel;
    const cost = isMax ? 0 : this.costs[type][current];

    let name = '';
    let description = '';

    switch (type) {
      case 'fireRate':
        name = '⚡ OVERCLOCK CADENCIA';
        description = '+20% VELOCIDAD DISPARO';
        break;
      case 'damage':
        name = '💥 AMPLIFICADOR PLASMA';
        description = '+25% DAÑO PROYECTIL';
        break;
      case 'magSize':
        name = '📦 BÚFER EXTENDIDO';
        description = '+4 BALAS AL CARGADOR';
        break;
      case 'reloadSpeed':
        name = '⏱️ RECARGA RÁPIDA';
        description = '-25% TIEMPO RECARGA';
        break;
    }

    return {
      type,
      name,
      description,
      currentLevel: current,
      maxLevel,
      cost,
      isMax
    };
  }

  public getAllUpgradesInfo(): UpgradeInfo[] {
    return [
      this.getUpgradeInfo('fireRate'),
      this.getUpgradeInfo('damage'),
      this.getUpgradeInfo('magSize'),
      this.getUpgradeInfo('reloadSpeed')
    ];
  }

  public getWeaponsShopInfo(): WeaponShopInfo[] {
    return [
      {
        type: 'pistol',
        name: '🔫 ANTIVIRUS CANNON',
        description: 'PISTOLA BALÍSTICA ESTÁNDAR',
        cost: 0,
        isUnlocked: true,
        isEquipped: this.activeWeaponType === 'pistol'
      },
      {
        type: 'shotgun',
        name: '💥 ESCOPETA SCATTER',
        description: '6 PROYECTILES EN CONO CERCANO',
        cost: this.weaponCosts.shotgun,
        isUnlocked: this.unlockedWeapons.has('shotgun'),
        isEquipped: this.activeWeaponType === 'shotgun'
      },
      {
        type: 'smg',
        name: '⚡ SUBFUSIL PLASMA',
        description: 'RÁFAGA AUTOMÁTICA CONTINUA',
        cost: this.weaponCosts.smg,
        isUnlocked: this.unlockedWeapons.has('smg'),
        isEquipped: this.activeWeaponType === 'smg'
      }
    ];
  }

  public buyUpgrade(type: UpgradeType): boolean {
    const info = this.getUpgradeInfo(type);
    if (info.isMax) return false;

    if (this.currencyManager.spendBits(info.cost)) {
      this.levels[type]++;
      this.applyAllUpgrades();
      this.audioManager.playPurchaseSuccess();
      this.onUpgradesChanged?.();
      return true;
    }

    this.audioManager.playPurchaseFailed();
    return false;
  }

  public buyOrEquipWeapon(type: WeaponType): boolean {
    if (this.unlockedWeapons.has(type)) {
      // Ya está desbloqueada, solo equipar
      this.equipWeapon(type);
      this.audioManager.playPurchaseSuccess();
      return true;
    }

    if (type === 'shotgun' || type === 'smg') {
      const cost = this.weaponCosts[type];
      if (this.currencyManager.spendBits(cost)) {
        this.unlockedWeapons.add(type);
        this.equipWeapon(type);
        this.audioManager.playPurchaseSuccess();
        this.onUpgradesChanged?.();
        return true;
      }
    }

    this.audioManager.playPurchaseFailed();
    return false;
  }

  public equipWeapon(type: WeaponType): void {
    if (!this.unlockedWeapons.has(type)) return;
    this.activeWeaponType = type;
    this.weaponManager.switchWeapon(type);
    this.applyAllUpgrades();
    this.onUpgradesChanged?.();
  }

  public applyAllUpgrades(): void {
    const fireRateMult = Math.max(0.4, 1 - this.levels.fireRate * 0.20);
    const damageMult = 1 + this.levels.damage * 0.25;
    const magBonus = this.levels.magSize * 4;
    const reloadMult = Math.max(0.3, 1 - this.levels.reloadSpeed * 0.25);

    this.weaponManager.applyUpgradesToAll(damageMult, fireRateMult, magBonus, reloadMult);
  }

  public reset(): void {
    this.levels = {
      fireRate: 0,
      damage: 0,
      magSize: 0,
      reloadSpeed: 0
    };
    this.unlockedWeapons = new Set(['pistol']);
    this.activeWeaponType = 'pistol';
    this.weaponManager.switchWeapon('pistol');
    this.applyAllUpgrades();
    this.onUpgradesChanged?.();
  }
}
