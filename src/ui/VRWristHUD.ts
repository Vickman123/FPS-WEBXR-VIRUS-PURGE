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

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 512;
    this.canvas.height = 256;
    this.ctx = this.canvas.getContext('2d')!;

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;

    // Panel curvado o plano holográfico
    const geo = new THREE.PlaneGeometry(0.22, 0.11);
    const mat = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(geo, mat);
    // Posicionar encima del antebrazo izquierdo
    this.mesh.position.set(0, 0.08, 0.05);
    this.mesh.rotation.x = -Math.PI / 3.2; // Inclinado hacia la vista del jugador

    this.renderCanvas();
  }

  public attachTo(parent: THREE.Object3D): void {
    parent.add(this.mesh);
  }

  public updateHealth(current: number, max: number): void {
    this.healthPct = Math.max(0, Math.min(100, Math.round((current / max) * 100)));
    this.renderCanvas();
  }

  public updateAmmo(current: number, max: number): void {
    this.currentAmmo = current;
    this.maxAmmo = max;
    this.renderCanvas();
  }

  public updateStatus(status: string): void {
    this.statusText = status;
    this.renderCanvas();
  }

  public updateScore(score: number, combo: number): void {
    this.score = score;
    this.combo = combo;
    this.renderCanvas();
  }

  private renderCanvas(): void {
    const ctx = this.ctx;
    const w = 512;
    const h = 256;

    ctx.clearRect(0, 0, w, h);

    // Fondo holográfico de cristal oscuro
    ctx.fillStyle = 'rgba(10, 18, 32, 0.92)';
    ctx.fillRect(0, 0, w, h);

    // Borde de neón cyan
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, w - 8, h - 8);

    // 1. Título / Header
    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 22px monospace';
    ctx.fillText('VIRUS PURGE // GUANTELETE VR', 20, 36);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px monospace';
    ctx.fillText(this.statusText, 20, 68);

    // 2. Barra de Integridad / Salud
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px monospace';
    ctx.fillText(`INTEGRIDAD: ${this.healthPct}%`, 20, 105);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.fillRect(20, 115, 472, 18);

    ctx.fillStyle = this.healthPct > 30 ? '#00f3ff' : '#ff0055';
    ctx.fillRect(20, 115, (472 * this.healthPct) / 100, 18);

    // 3. Munición del Búfer
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px monospace';
    ctx.fillText(`BÚFER DE ARMA: ${this.currentAmmo} / ${this.maxAmmo}`, 20, 175);

    // 4. Puntuación y Combo
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 22px monospace';
    ctx.fillText(`SCORE: ${this.score.toString().padStart(5, '0')}`, 20, 225);

    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 22px monospace';
    ctx.fillText(`COMBO: x${this.combo.toFixed(1)}`, 320, 225);

    this.texture.needsUpdate = true;
  }
}
