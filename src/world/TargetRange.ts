import * as THREE from 'three';
import { TargetDiana, DianaHitResult } from './TargetDiana';

export interface TargetRangeCallbacks {
  onReturnToSurvival: () => void;
}

export class TargetRange {
  public group: THREE.Group;
  public dianas: TargetDiana[] = [];
  public isEnabled: boolean = false;

  // Estadísticas del campo de tiro
  private totalShots: number = 0;
  private totalHits: number = 0;
  private totalBullseyes: number = 0;
  private totalScore: number = 0;

  // Cartel digital flotante con estadísticas
  private boardMesh!: THREE.Mesh;
  private boardCanvas!: HTMLCanvasElement;
  private boardCtx!: CanvasRenderingContext2D;
  private boardTexture!: THREE.CanvasTexture;

  // Botón 3D para volver al modo oleadas
  private returnBtnMesh!: THREE.Mesh;
  private isReturnBtnHovered: boolean = false;

  private callbacks: TargetRangeCallbacks;

  constructor(callbacks: TargetRangeCallbacks) {
    this.callbacks = callbacks;
    this.group = new THREE.Group();
    this.group.visible = false;

    this.setupDianas();
    this.setupScoreboard();
    this.setupReturnButton();
  }

  private setupDianas(): void {
    // 1. Diana Cercana Izquierda (distancia ~7m)
    const d1 = new TargetDiana(new THREE.Vector3(-3.8, 0, 1.5), false);
    this.dianas.push(d1);
    this.group.add(d1.group);

    // 2. Diana Media Derecha (distancia ~12m)
    const d2 = new TargetDiana(new THREE.Vector3(3.8, 0, -3.5), false);
    this.dianas.push(d2);
    this.group.add(d2.group);

    // 3. Diana Móvil en Carril (distancia ~14m, oscilación lateral)
    const d3 = new TargetDiana(new THREE.Vector3(0, 0, -6.5), true);
    this.dianas.push(d3);
    this.group.add(d3.group);

    // 4. Diana Lejana Fondo (distancia ~20m)
    const d4 = new TargetDiana(new THREE.Vector3(0, 0, -13.5), false);
    this.dianas.push(d4);
    this.group.add(d4.group);
  }

  private setupScoreboard(): void {
    this.boardCanvas = document.createElement('canvas');
    this.boardCanvas.width = 1024;
    this.boardCanvas.height = 512;
    this.boardCtx = this.boardCanvas.getContext('2d')!;
    this.boardTexture = new THREE.CanvasTexture(this.boardCanvas);

    const boardGeo = new THREE.PlaneGeometry(3.6, 1.8);
    const boardMat = new THREE.MeshBasicMaterial({
      map: this.boardTexture,
      transparent: true
    });
    this.boardMesh = new THREE.Mesh(boardGeo, boardMat);
    this.boardMesh.position.set(0, 4.0, -14.2);
    this.group.add(this.boardMesh);

    // Marco del cartel
    const frameGeo = new THREE.EdgesGeometry(boardGeo);
    const frameMat = new THREE.LineBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.8
    });
    const frameMesh = new THREE.LineSegments(frameGeo, frameMat);
    this.boardMesh.add(frameMesh);

    this.renderScoreboard();
  }

  private setupReturnButton(): void {
    const geo = new THREE.BoxGeometry(2.4, 0.45, 0.08);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x081b2e,
      emissive: 0x00f3ff,
      emissiveIntensity: 0.45,
      roughness: 0.2,
      metalness: 0.8
    });
    this.returnBtnMesh = new THREE.Mesh(geo, mat);
    // Colocado cómodamente a la derecha de la posición de disparo del jugador
    this.returnBtnMesh.position.set(3.2, 1.5, 6.0);
    this.returnBtnMesh.rotation.y = -Math.PI / 4;
    this.returnBtnMesh.userData = { isReturnToSurvivalButton: true, isHitbox: true };

    // Texto en el botón
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 36px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 10;
    ctx.fillText('⚔️ INICIAR OLEADAS', 256, 64);

    const texture = new THREE.CanvasTexture(canvas);
    const labelGeo = new THREE.PlaneGeometry(2.3, 0.4);
    const labelMat = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.set(0, 0, 0.045);
    this.returnBtnMesh.add(labelMesh);

    this.group.add(this.returnBtnMesh);
  }

  public renderScoreboard(): void {
    const ctx = this.boardCtx;
    ctx.clearRect(0, 0, 1024, 512);

    // Fondo oscuro con degradado
    ctx.fillStyle = 'rgba(6, 19, 33, 0.92)';
    ctx.fillRect(0, 0, 1024, 512);

    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 44px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 16;
    ctx.fillText('🎯 CAMPO DE TIRO // VIRUS PURGE', 512, 65);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '24px "Courier New", monospace';
    ctx.shadowBlur = 0;
    ctx.fillText('MODO DE ENTRENAMIENTO Y CALIBRACIÓN BALÍSTICA', 512, 115);

    // Línea divisoria
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, 140);
    ctx.lineTo(944, 140);
    ctx.stroke();

    const acc = this.totalShots > 0 ? Math.round((this.totalHits / this.totalShots) * 100) : 100;

    // Métricas en 4 columnas
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px "Courier New", monospace';
    ctx.fillText('PUNTUACIÓN TOTAL:', 120, 210);
    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 36px "Courier New", monospace';
    ctx.fillText(`${this.totalScore} PTS`, 520, 210);

    ctx.fillStyle = '#ffffff';
    ctx.font = '28px "Courier New", monospace';
    ctx.fillText('DIANAS PERFECTAS (CENTRO):', 120, 275);
    ctx.fillStyle = '#ff0055';
    ctx.font = 'bold 36px "Courier New", monospace';
    ctx.fillText(`${this.totalBullseyes}`, 620, 275);

    ctx.fillStyle = '#ffffff';
    ctx.font = '28px "Courier New", monospace';
    ctx.fillText('IMPACTOS / DISPAROS:', 120, 340);
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 36px "Courier New", monospace';
    ctx.fillText(`${this.totalHits} / ${this.totalShots}`, 520, 340);

    ctx.fillStyle = '#ffffff';
    ctx.font = '28px "Courier New", monospace';
    ctx.fillText('PRECISIÓN DEL TIRADOR:', 120, 405);
    ctx.fillStyle = '#22c55e';
    ctx.font = 'bold 36px "Courier New", monospace';
    ctx.fillText(`${acc}%`, 520, 405);

    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(0, 243, 255, 0.7)';
    ctx.font = '20px "Courier New", monospace';
    ctx.fillText('DISPARA AL BOTÓN "INICIAR OLEADAS" PARA ENTRAR A COMBATE', 512, 470);

    this.boardTexture.needsUpdate = true;
  }

  public registerShot(): void {
    if (!this.isEnabled) return;
    this.totalShots++;
    this.renderScoreboard();
  }

  public registerDianaHit(result: DianaHitResult): void {
    if (!this.isEnabled) return;
    this.totalHits++;
    this.totalScore += result.points;
    if (result.zone === 'BULLSEYE') {
      this.totalBullseyes++;
    }
    this.renderScoreboard();
  }

  public enable(): void {
    this.isEnabled = true;
    this.group.visible = true;
    this.totalShots = 0;
    this.totalHits = 0;
    this.totalBullseyes = 0;
    this.totalScore = 0;
    this.renderScoreboard();
  }

  public disable(): void {
    this.isEnabled = false;
    this.group.visible = false;
  }

  public getAllHitboxes(): THREE.Object3D[] {
    if (!this.isEnabled) return [];
    const boxes: THREE.Object3D[] = [];
    for (const d of this.dianas) {
      boxes.push(...d.hitboxes);
    }
    boxes.push(this.returnBtnMesh);
    return boxes;
  }

  public checkReturnButtonClick(hitMesh: THREE.Object3D): boolean {
    if (hitMesh === this.returnBtnMesh || hitMesh.parent === this.returnBtnMesh) {
      this.callbacks.onReturnToSurvival();
      return true;
    }
    return false;
  }

  public update(delta: number, rayOrigin?: THREE.Vector3, rayDirection?: THREE.Vector3): void {
    if (!this.isEnabled) return;

    for (const d of this.dianas) {
      d.update(delta);
    }

    // Hover sobre el botón de regreso
    if (rayOrigin && rayDirection) {
      const ray = new THREE.Raycaster(rayOrigin, rayDirection, 0, 15);
      const hits = ray.intersectObject(this.returnBtnMesh, true);
      const mat = this.returnBtnMesh.material as THREE.MeshStandardMaterial;
      if (hits.length > 0) {
        mat.emissiveIntensity = 1.8;
        mat.emissive.setHex(0x00ffff);
      } else {
        mat.emissiveIntensity = 0.45;
        mat.emissive.setHex(0x00f3ff);
      }
    }
  }
}
