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

  // Boss HUD
  private bossHudEl: HTMLElement | null;
  private bossNameEl: HTMLElement | null;
  private bossPercentEl: HTMLElement | null;
  private bossBarFillEl: HTMLElement | null;

  private hitmarkerTimeout: number | null = null;
  private damageVignetteTimeout: number | null = null;

  public onStartClicked?: () => void;

  constructor() {
    this.scoreEl = document.getElementById('score-display');
    this.comboEl = document.getElementById('combo-display');
    this.waveEl = document.getElementById('wave-display');
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

    this.bossHudEl = document.getElementById('boss-hud');
    this.bossNameEl = document.getElementById('boss-name');
    this.bossPercentEl = document.getElementById('boss-percent');
    this.bossBarFillEl = document.getElementById('boss-bar-fill');

    if (this.startBtnEl) {
      this.startBtnEl.addEventListener('click', () => {
        if (this.onStartClicked) {
          this.onStartClicked();
        }
      });
    }
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
      if (title) {
        const titleEl = this.overlayEl.querySelector('.game-title');
        if (titleEl) titleEl.textContent = title;
      }
      if (btnText && this.startBtnEl) {
        const btnSpan = this.startBtnEl.querySelector('.btn-text');
        if (btnSpan) btnSpan.textContent = btnText;
      }
    } else {
      this.overlayEl.classList.add('hidden');
    }
  }
}
