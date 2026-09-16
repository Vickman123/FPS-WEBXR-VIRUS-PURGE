export interface ScoreStats {
  score: number;
  kills: number;
  headshots: number;
  combo: number;
  maxCombo: number;
  shotsFired: number;
  shotsHit: number;
  accuracy: number;
}

export class ScoreManager {
  private score: number = 0;
  private kills: number = 0;
  private headshots: number = 0;
  private combo: number = 1.0;
  private maxCombo: number = 1.0;
  private comboTimer: number = 0;
  private comboDuration: number = 3.5; // Segundos para mantener el combo

  private shotsFired: number = 0;
  private shotsHit: number = 0;

  // Callbacks para eventos visuales del HUD
  public onScoreUpdate?: (score: number) => void;
  public onComboUpdate?: (combo: number) => void;
  public onCombatAlert?: (text: string, type: 'kill' | 'headshot' | 'combo') => void;

  public registerShot(): void {
    this.shotsFired++;
  }

  public registerHit(): void {
    this.shotsHit++;
  }

  public registerKill(isHeadshot: boolean): void {
    this.kills++;
    this.comboTimer = this.comboDuration;

    // Aumentar multiplicador de combo
    this.combo = Math.min(4.0, Number((this.combo + 0.2).toFixed(1)));
    if (this.combo > this.maxCombo) {
      this.maxCombo = this.combo;
    }

    // Calcular puntos base
    const basePoints = isHeadshot ? 250 : 100;
    const finalPoints = Math.round(basePoints * this.combo);
    this.score += finalPoints;

    if (isHeadshot) {
      this.headshots++;
    }

    // Notificar UI
    if (this.onScoreUpdate) {
      this.onScoreUpdate(this.score);
    }
    if (this.onComboUpdate) {
      this.onComboUpdate(this.combo);
    }
    if (this.onCombatAlert) {
      if (isHeadshot) {
        this.onCombatAlert(`HEADSHOT CRÍTICO +${finalPoints}`, 'headshot');
      } else {
        this.onCombatAlert(`AMENAZA PURGADA +${finalPoints}`, 'kill');
      }
    }
  }

  public update(delta: number): void {
    if (this.combo > 1.0) {
      this.comboTimer -= delta;
      if (this.comboTimer <= 0) {
        this.combo = 1.0;
        if (this.onComboUpdate) {
          this.onComboUpdate(this.combo);
        }
      }
    }
  }

  public getStats(): ScoreStats {
    const accuracy = this.shotsFired > 0 ? Math.round((this.shotsHit / this.shotsFired) * 100) : 0;
    return {
      score: this.score,
      kills: this.kills,
      headshots: this.headshots,
      combo: this.combo,
      maxCombo: this.maxCombo,
      shotsFired: this.shotsFired,
      shotsHit: this.shotsHit,
      accuracy
    };
  }

  public reset(): void {
    this.score = 0;
    this.kills = 0;
    this.headshots = 0;
    this.combo = 1.0;
    this.maxCombo = 1.0;
    this.comboTimer = 0;
    this.shotsFired = 0;
    this.shotsHit = 0;

    if (this.onScoreUpdate) this.onScoreUpdate(0);
    if (this.onComboUpdate) this.onComboUpdate(1.0);
  }
}
