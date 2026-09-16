import * as THREE from 'three';

export class VRWristHUD {
  public mesh: THREE.Mesh;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private texture: THREE.CanvasTexture;

  private healthPct: number = 100;
  private currentAmmo: number = 12;
  private maxAmmo: number = 12;
  private statusText: string = 'FASE 1 // CACHÉ';
  private score: number = 0;
  private combo: number = 1.0;
  private bits: number = 0;

  private isDirty: boolean = true;

  constructor() {
    this.canvas = document.createElement('canvas');
    // 256x128 es ultraliviano para el chip móvil de Meta Quest y se ve nítido en la muñeca
    this.canvas.width = 256;
    this.canvas.height = 128;
    this.ctx = this.canvas.getContext('2d')!;

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;

    const geo = new THREE.PlaneGeometry(0.20, 0.10);
    const mat = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set(0, 0.07, 0.04);
    this.mesh.rotation.x = -Math.PI / 3.2;

    this.renderCanvas();
  }

  public attachTo(parent: THREE.Object3D): void {
    parent.add(this.mesh);
  }

  public updateHealth(current: number, max: number): void {
    const newPct = Math.max(0, Math.min(100, Math.round((current / max) * 100)));
    if (newPct !== this.healthPct) {
      this.healthPct = newPct;
      this.isDirty = true;
      this.renderCanvas();
    }
  }

  public updateAmmo(current: number, max: number): void {
    if (current !== this.currentAmmo || max !== this.maxAmmo) {
      this.currentAmmo = current;
      this.maxAmmo = max;
      this.isDirty = true;
      this.renderCanvas();
    }
  }

  public updateStatus(status: string): void {
    if (status !== this.statusText) {
      this.statusText = status;
      this.isDirty = true;
      this.renderCanvas();
    }
  }

  public updateScore(score: number, combo: number): void {
    if (score !== this.score || combo !== this.combo) {
      this.score = score;
      this.combo = combo;
      this.isDirty = true;
      this.renderCanvas();
    }
  }

  public updateBits(bits: number): void {
    if (bits !== this.bits) {
      this.bits = bits;
      this.isDirty = true;
      this.renderCanvas();
    }
  }

  private renderCanvas(): void {
    if (!this.isDirty) return;
    this.isDirty = false;

    const ctx = this.ctx;
    const w = 256;
    const h = 128;

    ctx.clearRect(0, 0, w, h);

    // Fondo cristalino
    ctx.fillStyle = 'rgba(10, 18, 32, 0.92)';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 2;
    ctx.strokeRect(2, 2, w - 4, h - 4);

    // 1. Título
    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('VIRUS PURGE // AGENTE', 10, 20);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '9px monospace';
    ctx.fillText(this.statusText.slice(0, 28), 10, 36);

    // 2. Barra de Integridad
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 10px monospace';
    ctx.fillText(`INTEGRIDAD: ${this.healthPct}%`, 10, 56);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fillRect(10, 62, 236, 8);

    ctx.fillStyle = this.healthPct > 30 ? '#00f3ff' : '#ff0055';
    ctx.fillRect(10, 62, (236 * this.healthPct) / 100, 8);

    // 3. Munición y Bits
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11px monospace';
    ctx.fillText(`BÚFER: ${this.currentAmmo} / ${this.maxAmmo}`, 10, 92);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 11px monospace';
    ctx.fillText(`💾 ${this.bits} BITS`, 150, 92);

    // 4. Score y Combo
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(`SCORE: ${this.score}`, 10, 116);

    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(`x${this.combo.toFixed(1)}`, 190, 116);

    this.texture.needsUpdate = true;
  }
}
