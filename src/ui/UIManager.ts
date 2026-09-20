import { UpgradeManager } from '../systems/UpgradeManager';
import { CurrencyManager } from '../systems/CurrencyManager';

export class UIManager {
  private scoreEl: HTMLElement | null;
  private comboEl: HTMLElement | null;
  private waveEl: HTMLElement | null;
  private healthBarEl: HTMLElement | null;
  private healthTextEl: HTMLElement | null;
  private ammoCurrentEl: HTMLElement | null;
  private ammoMaxEl: HTMLElement | null;
  private reloadIndicatorEl: HTMLElement | null;
  private hitmarkerEl: HTMLElement | null;
  private alertsEl: HTMLElement | null;
  private damageVignetteEl: HTMLElement | null;
  private overlayEl: HTMLElement | null;
  private startBtnEl: HTMLElement | null;
  private rangeBtnEl: HTMLElement | null;

  // Bits y Cyber Store
  private bitsEl: HTMLElement | null;
  private storeOverlayEl: HTMLElement | null;
  private storeBitsEl: HTMLElement | null;
  private storeItemsEl: HTMLElement | null;
  private storeContinueBtnEl: HTMLElement | null;

  // Cyber Wiki
  private wikiBtnEl: HTMLElement | null;
  private wikiOverlayEl: HTMLElement | null;
  private wikiCloseBtnEl: HTMLElement | null;
  private wikiTabBtns: NodeListOf<HTMLButtonElement>;
  private wikiTabContents: NodeListOf<HTMLElement>;

  // Boss HUD
  private bossHudEl: HTMLElement | null;
  private bossNameEl: HTMLElement | null;
  private bossPercentEl: HTMLElement | null;
  private bossBarFillEl: HTMLElement | null;

  private hitmarkerTimeout: number | null = null;
  private damageVignetteTimeout: number | null = null;

  public onStartClicked?: () => void;
  public onRangeClicked?: () => void;
  public onStoreContinue?: () => void;

  constructor() {
    this.scoreEl = document.getElementById('score-display');
    this.comboEl = document.getElementById('combo-display');
    this.waveEl = document.getElementById('wave-display');
    this.bitsEl = document.getElementById('bits-display');
    this.healthBarEl = document.getElementById('health-bar');
    this.healthTextEl = document.getElementById('health-text');
    this.ammoCurrentEl = document.getElementById('ammo-current');
    this.ammoMaxEl = document.getElementById('ammo-max');
    this.reloadIndicatorEl = document.getElementById('reload-indicator');
    this.hitmarkerEl = document.getElementById('hitmarker');
    this.alertsEl = document.getElementById('combat-alerts');
    this.damageVignetteEl = document.getElementById('damage-vignette');
    this.overlayEl = document.getElementById('overlay');
    this.startBtnEl = document.getElementById('start-btn');
    this.rangeBtnEl = document.getElementById('range-btn');

    this.storeOverlayEl = document.getElementById('store-overlay');
    this.storeBitsEl = document.getElementById('store-bits-display');
    this.storeItemsEl = document.getElementById('store-items-container');
    this.storeContinueBtnEl = document.getElementById('store-continue-btn');

    this.wikiBtnEl = document.getElementById('wiki-btn');
    this.wikiOverlayEl = document.getElementById('wiki-overlay');
    this.wikiCloseBtnEl = document.getElementById('wiki-close-btn');
    this.wikiTabBtns = document.querySelectorAll('.wiki-tab-btn');
    this.wikiTabContents = document.querySelectorAll('.wiki-tab-content');

    this.bossHudEl = document.getElementById('boss-hud');
    this.bossNameEl = document.getElementById('boss-name');
    this.bossPercentEl = document.getElementById('boss-percent');
    this.bossBarFillEl = document.getElementById('boss-bar-fill');

    if (this.startBtnEl) {
      this.startBtnEl.addEventListener('click', () => {
        this.showWikiOverlay(false);
        if (this.onStartClicked) {
          this.onStartClicked();
        }
      });
    }

    if (this.rangeBtnEl) {
      this.rangeBtnEl.addEventListener('click', () => {
        this.showWikiOverlay(false);
        if (this.onRangeClicked) {
          this.onRangeClicked();
        }
      });
    }

    if (this.storeContinueBtnEl) {
      this.storeContinueBtnEl.addEventListener('click', () => {
        if (this.onStoreContinue) {
          this.onStoreContinue();
        }
      });
    }

    if (this.wikiBtnEl) {
      this.wikiBtnEl.addEventListener('click', () => {
        this.showWikiOverlay(true);
      });
    }

    if (this.wikiCloseBtnEl) {
      this.wikiCloseBtnEl.addEventListener('click', () => {
        this.showWikiOverlay(false);
      });
    }

    this.wikiTabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        this.switchWikiTab(targetTab);
      });
    });
  }

  public updateScore(score: number): void {
    if (this.scoreEl) {
      this.scoreEl.textContent = score.toString().padStart(5, '0');
    }
  }

  public updateCombo(combo: number): void {
    if (this.comboEl) {
      this.comboEl.textContent = `x${combo.toFixed(1)}`;
      if (combo > 1.0) {
        this.comboEl.style.color = '#00f3ff';
      } else {
        this.comboEl.style.color = '#ffffff';
      }
    }
  }

  public updateStatus(text: string): void {
    if (this.waveEl) {
      this.waveEl.textContent = text;
    }
  }

  public updateHealth(current: number, max: number): void {
    const pct = Math.max(0, Math.min(100, (current / max) * 100));
    if (this.healthBarEl) {
      this.healthBarEl.style.width = `${pct}%`;
      if (pct <= 30) {
        this.healthBarEl.classList.add('danger');
      } else {
        this.healthBarEl.classList.remove('danger');
      }
    }
    if (this.healthTextEl) {
      this.healthTextEl.textContent = `${Math.round(pct)}%`;
    }
  }

  public updateAmmo(current: number, max: number): void {
    if (this.ammoCurrentEl) {
      this.ammoCurrentEl.textContent = current.toString();
      if (current <= 3) {
        this.ammoCurrentEl.classList.add('low');
      } else {
        this.ammoCurrentEl.classList.remove('low');
      }
    }
    if (this.ammoMaxEl) {
      this.ammoMaxEl.textContent = max.toString();
    }
  }

  public showReloadIndicator(show: boolean): void {
    if (this.reloadIndicatorEl) {
      this.reloadIndicatorEl.style.display = show ? 'block' : 'none';
    }
  }

  public triggerHitmarker(isHeadshot: boolean): void {
    if (!this.hitmarkerEl) return;

    if (this.hitmarkerTimeout) {
      window.clearTimeout(this.hitmarkerTimeout);
    }

    if (isHeadshot) {
      this.hitmarkerEl.classList.add('headshot');
    } else {
      this.hitmarkerEl.classList.remove('headshot');
    }

    this.hitmarkerEl.classList.add('active');

    this.hitmarkerTimeout = window.setTimeout(() => {
      if (this.hitmarkerEl) {
        this.hitmarkerEl.classList.remove('active');
        this.hitmarkerEl.classList.remove('headshot');
      }
    }, 120);
  }

  public triggerDamageFlash(): void {
    if (!this.damageVignetteEl) return;

    if (this.damageVignetteTimeout) {
      window.clearTimeout(this.damageVignetteTimeout);
    }

    this.damageVignetteEl.style.opacity = '1';

    this.damageVignetteTimeout = window.setTimeout(() => {
      if (this.damageVignetteEl) {
        this.damageVignetteEl.style.opacity = '0';
      }
    }, 220);
  }

  public resetVignette(): void {
    if (this.damageVignetteEl) {
      this.damageVignetteEl.style.opacity = '0';
    }
  }

  public showBossBar(show: boolean, name?: string): void {
    if (!this.bossHudEl) return;
    if (show) {
      this.bossHudEl.classList.remove('hidden');
      if (name && this.bossNameEl) {
        this.bossNameEl.textContent = name;
      }
    } else {
      this.bossHudEl.classList.add('hidden');
    }
  }

  public updateBossHealth(current: number, max: number): void {
    const pct = Math.max(0, Math.min(100, (current / max) * 100));
    if (this.bossBarFillEl) {
      this.bossBarFillEl.style.width = `${pct}%`;
    }
    if (this.bossPercentEl) {
      this.bossPercentEl.textContent = `${Math.round(pct)}%`;
    }
  }

  public showCombatAlert(text: string, type: 'kill' | 'headshot' | 'combo'): void {
    if (!this.alertsEl) return;

    const alert = document.createElement('div');
    alert.className = `combat-tag ${type}`;
    alert.textContent = text;
    this.alertsEl.appendChild(alert);

    setTimeout(() => {
      if (alert.parentNode) {
        alert.parentNode.removeChild(alert);
      }
    }, 900);
  }

  public showOverlay(show: boolean, title?: string, btnText?: string): void {
    if (!this.overlayEl) return;
    if (show) {
      this.overlayEl.classList.remove('hidden');
      const titleEl = this.overlayEl.querySelector('.game-title');
      if (titleEl) {
        if (title) {
          titleEl.innerHTML = `<span class="title-virus">${title}</span>`;
        } else {
          titleEl.innerHTML = `<span class="title-virus">VIRUS</span><span class="title-purge">PURGE</span>`;
        }
      }
      if (this.startBtnEl) {
        const btnSpan = this.startBtnEl.querySelector('.btn-text');
        if (btnSpan) {
          btnSpan.textContent = btnText || 'START PURGE';
        }
      }
    } else {
      this.overlayEl.classList.add('hidden');
      this.showWikiOverlay(false);
    }
  }

  public showWikiOverlay(show: boolean): void {
    if (!this.wikiOverlayEl) return;
    if (show) {
      this.wikiOverlayEl.classList.remove('hidden');
    } else {
      this.wikiOverlayEl.classList.add('hidden');
    }
  }

  public switchWikiTab(tabName: string | null): void {
    if (!tabName) return;

    this.wikiTabBtns.forEach((b) => {
      if (b.getAttribute('data-tab') === tabName) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    this.wikiTabContents.forEach((c) => {
      if (c.id === `wiki-tab-${tabName}`) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });
  }

  public updateBits(bits: number): void {
    if (this.bitsEl) {
      this.bitsEl.textContent = `${bits.toString().padStart(4, '0')} 💾`;
    }
  }

  public showStoreOverlay(
    show: boolean,
    upgradeManager?: UpgradeManager,
    currencyManager?: CurrencyManager
  ): void {
    if (!this.storeOverlayEl) return;

    if (show && upgradeManager && currencyManager) {
      this.storeOverlayEl.classList.remove('hidden');
      if (this.storeBitsEl) {
        this.storeBitsEl.textContent = `${currencyManager.getBits()} 💾 BITS`;
      }
      this.renderStoreItems(upgradeManager, currencyManager);
    } else {
      this.storeOverlayEl.classList.add('hidden');
    }
  }

  public renderStoreItems(upgradeManager: UpgradeManager, currencyManager: CurrencyManager): void {
    if (!this.storeItemsEl) return;
    this.storeItemsEl.innerHTML = '';

    if (this.storeBitsEl) {
      this.storeBitsEl.textContent = `${currencyManager.getBits()} 💾 BITS`;
    }

    // 1. Mejoras de arma
    const upgrades = upgradeManager.getAllUpgradesInfo();
    upgrades.forEach((u) => {
      const card = document.createElement('div');
      card.className = 'store-item';

      const canAfford = currencyManager.canAfford(u.cost);
      let btnLabel = u.isMax ? 'NIVEL MÁXIMO' : `MEJORAR // ${u.cost} BITS`;

      card.innerHTML = `
        <div>
          <div class="store-item-title">${u.name} (Nv. ${u.currentLevel}/${u.maxLevel})</div>
          <div class="store-item-desc">${u.description}</div>
        </div>
        <button class="store-buy-btn" ${u.isMax || !canAfford ? 'disabled' : ''}>
          ${btnLabel}
        </button>
      `;

      const btn = card.querySelector('button');
      if (btn && !u.isMax && canAfford) {
        btn.addEventListener('click', () => {
          if (upgradeManager.buyUpgrade(u.type)) {
            this.renderStoreItems(upgradeManager, currencyManager);
          }
        });
      }

      this.storeItemsEl!.appendChild(card);
    });

    // 2. Armas desbloqueables
    const weapons = upgradeManager.getWeaponsShopInfo().filter((w) => w.type !== 'pistol');
    weapons.forEach((w) => {
      const card = document.createElement('div');
      card.className = 'store-item';

      const canAfford = currencyManager.canAfford(w.cost);
      let btnClass = 'store-buy-btn';
      let btnLabel = `${w.cost} BITS // ADQUIRIR`;
      let disabled = false;

      if (w.isEquipped) {
        btnLabel = 'EQUIPADA';
        btnClass += ' equipped';
        disabled = true;
      } else if (w.isUnlocked) {
        btnLabel = 'EQUIPAR';
      } else if (!canAfford) {
        disabled = true;
      }

      card.innerHTML = `
        <div>
          <div class="store-item-title">${w.name}</div>
          <div class="store-item-desc">${w.description}</div>
        </div>
        <button class="${btnClass}" ${disabled ? 'disabled' : ''}>
          ${btnLabel}
        </button>
      `;

      const btn = card.querySelector('button');
      if (btn && !disabled) {
        btn.addEventListener('click', () => {
          if (upgradeManager.buyOrEquipWeapon(w.type)) {
            this.renderStoreItems(upgradeManager, currencyManager);
          }
        });
      }

      this.storeItemsEl!.appendChild(card);
    });
  }
}
