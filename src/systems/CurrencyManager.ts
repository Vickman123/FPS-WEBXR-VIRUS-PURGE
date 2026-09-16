export class CurrencyManager {
  private bits: number = 0;
  public onBitsChange?: (bits: number) => void;

  constructor(initialBits: number = 0) {
    this.bits = initialBits;
  }

  public getBits(): number {
    return this.bits;
  }

  public addBits(amount: number): void {
    if (amount <= 0) return;
    this.bits += amount;
    this.onBitsChange?.(this.bits);
  }

  public spendBits(amount: number): boolean {
    if (amount <= 0) return true;
    if (this.bits >= amount) {
      this.bits -= amount;
      this.onBitsChange?.(this.bits);
      return true;
    }
    return false;
  }

  public canAfford(amount: number): boolean {
    return this.bits >= amount;
  }

  public reset(): void {
    this.bits = 0;
    this.onBitsChange?.(this.bits);
  }
}
