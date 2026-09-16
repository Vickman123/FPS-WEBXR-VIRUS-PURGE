import * as THREE from 'three';

export interface VRMenuStats {
  score: number;
  accuracy: number;
  wave: number;
}

export interface VRMenuCallbacks {
  onRespawn: () => void;
  onTrainingRange: () => void;
  onStartSurvival: () => void;
  onMainMenu: () => void;
}

interface VRButton {
  mesh: THREE.Mesh;
  labelMesh: THREE.Mesh;
  action: () => void;
  isHovered: boolean;
  baseColor: number;
  hoverColor: number;
  borderMesh: THREE.LineSegments;
}

export class VRMenu {
  public group: THREE.Group;
  private buttons: VRButton[] = [];
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private isShowing: boolean = false;
  private currentMode: 'GAME_OVER' | 'MAIN_MENU' = 'GAME_OVER';

  private headerMesh: THREE.Mesh;
  private headerCanvas: HTMLCanvasElement;
  private headerCtx: CanvasRenderingContext2D;
  private headerTexture: THREE.CanvasTexture;

  private callbacks: VRMenuCallbacks;

  constructor(callbacks: VRMenuCallbacks) {
    this.callbacks = callbacks;
    this.group = new THREE.Group();
    this.group.visible = false;

    // 1. Panel de fondo translúcido cyberpunk
    const bgGeo = new THREE.PlaneGeometry(2.4, 1.7);
    const bgMat = new THREE.MeshBasicMaterial({
      color: 0x030d1a,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide
    });
    const bgMesh = new THREE.Mesh(bgGeo, bgMat);
    bgMesh.position.z = -0.02;
    this.group.add(bgMesh);

    // Borde de neón exterior
    const borderGeo = new THREE.EdgesGeometry(bgGeo);
    const borderMat = new THREE.LineBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.8
    });
    const border = new THREE.LineSegments(borderGeo, borderMat);
    border.position.z = -0.01;
    this.group.add(border);

    // 2. Cabecera y estadísticas con Canvas dinámico
    this.headerCanvas = document.createElement('canvas');
    this.headerCanvas.width = 1024;
    this.headerCanvas.height = 360;
    this.headerCtx = this.headerCanvas.getContext('2d')!;
    this.headerTexture = new THREE.CanvasTexture(this.headerCanvas);

    const headerGeo = new THREE.PlaneGeometry(2.2, 0.77);
    const headerMat = new THREE.MeshBasicMaterial({
      map: this.headerTexture,
      transparent: true
    });
    this.headerMesh = new THREE.Mesh(headerGeo, headerMat);
    this.headerMesh.position.set(0, 0.42, 0.01);
    this.group.add(this.headerMesh);
  }

  private clearButtons(): void {
    for (const btn of this.buttons) {
      this.group.remove(btn.mesh);
      btn.mesh.geometry.dispose();
      (btn.mesh.material as THREE.Material).dispose();
      btn.labelMesh.geometry.dispose();
      (btn.labelMesh.material as THREE.Material).dispose();
      btn.borderMesh.geometry.dispose();
      (btn.borderMesh.material as THREE.Material).dispose();
    }
    this.buttons = [];
  }

  private createButton(
    text: string,
    yPos: number,
    baseColor: number,
    hoverColor: number,
    action: () => void
  ): void {
    const width = 1.9;
    const height = 0.24;
    const depth = 0.04;

    const geo = new THREE.BoxGeometry(width, height, depth);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x081b2e,
      emissive: baseColor,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.8
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(0, yPos, 0.02);
    mesh.userData = { isVRButton: true };

    // Borde brillante
    const borderEdges = new THREE.EdgesGeometry(geo);
    const borderMat = new THREE.LineBasicMaterial({
      color: hoverColor,
      transparent: true,
      opacity: 0.7
    });
    const borderMesh = new THREE.LineSegments(borderEdges, borderMat);
    mesh.add(borderMesh);

    // Texto del botón en Canvas
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 512, 64);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 8;
    ctx.fillText(text, 256, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const labelGeo = new THREE.PlaneGeometry(width * 0.95, height * 0.85);
    const labelMat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.set(0, 0, depth / 2 + 0.005);
    mesh.add(labelMesh);

    this.group.add(mesh);

    this.buttons.push({
      mesh,
      labelMesh,
      action,
      isHovered: false,
      baseColor,
      hoverColor,
      borderMesh
    });
  }

  public showGameOver(stats: VRMenuStats, camera: THREE.Camera): void {
    this.currentMode = 'GAME_OVER';
    this.clearButtons();

    const ctx = this.headerCtx;
    ctx.clearRect(0, 0, 1024, 360);

    const grad = ctx.createLinearGradient(0, 0, 0, 360);
    grad.addColorStop(0, 'rgba(255, 0, 85, 0.25)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 360);

    ctx.fillStyle = '#ff0055';
    ctx.font = 'bold 54px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#ff0055';
    ctx.shadowBlur = 18;
    ctx.fillText('⚠️ SISTEMA COMPROMETIDO ⚠️', 512, 70);

    ctx.fillStyle = '#ffffff';
    ctx.font = '28px "Courier New", monospace';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 6;
    ctx.fillText('EL NÚCLEO ANTIVIRUS HA SIDO DESTRUIDO', 512, 125);

    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 36px "Courier New", monospace';
    ctx.fillText(`PUNTUACIÓN FINAL: ${stats.score}`, 512, 190);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '26px "Courier New", monospace';
    ctx.shadowBlur = 0;
    ctx.fillText(`PRECISIÓN: ${stats.accuracy}%  |  SECTOR ALCANZADO: ${stats.wave}`, 512, 250);

    ctx.fillStyle = 'rgba(0, 243, 255, 0.7)';
    ctx.font = '22px "Courier New", monospace';
    ctx.fillText('APUNTA CON TU PISTOLA Y DISPARA AL BOTÓN PARA SELECCIONAR', 512, 310);

    this.headerTexture.needsUpdate = true;

    this.createButton('🔄 REAPARECER PROTOCOLO', -0.12, 0x00f3ff, 0x00ffff, () => {
      this.hide();
      this.callbacks.onRespawn();
    });

    this.createButton('🎯 CAMPO DE TIRO (PRÁCTICA)', -0.42, 0xffaa00, 0xffcc00, () => {
      this.hide();
      this.callbacks.onTrainingRange();
    });

    this.createButton('🏠 MENÚ PRINCIPAL', -0.72, 0x64748b, 0x94a3b8, () => {
      this.hide();
      this.callbacks.onMainMenu();
    });

    this.positionInFrontOfCamera(camera);
    this.group.visible = true;
    this.isShowing = true;
  }

  public showMainMenu(camera: THREE.Camera): void {
    this.currentMode = 'MAIN_MENU';
    this.clearButtons();

    const ctx = this.headerCtx;
    ctx.clearRect(0, 0, 1024, 360);

    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 56px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 20;
    ctx.fillText('VIRUS PURGE // VR DEFENSE', 512, 85);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '28px "Courier New", monospace';
    ctx.shadowBlur = 8;
    ctx.fillText('SUB-RUTINA DE SEGURIDAD DEL SISTEMA CENTRAL', 512, 145);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '24px "Courier New", monospace';
    ctx.shadowBlur = 0;
    ctx.fillText('SELECCIONA MODO DE COMBATE DISPARANDO AL OBJETIVO', 512, 220);

    this.headerTexture.needsUpdate = true;

    this.createButton('⚔️ INICIAR PURGA (OLEADAS)', -0.15, 0x00f3ff, 0x00ffff, () => {
      this.hide();
      this.callbacks.onStartSurvival();
    });

    this.createButton('🎯 CAMPO DE TIRO (DIANAS)', -0.48, 0xffaa00, 0xffcc00, () => {
      this.hide();
      this.callbacks.onTrainingRange();
    });

    this.positionInFrontOfCamera(camera);
    this.group.visible = true;
    this.isShowing = true;
  }

  public hide(): void {
    this.group.visible = false;
    this.isShowing = false;
  }

  public isVisible(): boolean {
    return this.isShowing;
  }

  private positionInFrontOfCamera(camera: THREE.Camera): void {
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    if (forward.lengthSq() < 0.001) {
      forward.set(0, 0, -1);
    } else {
      forward.normalize();
    }

    const camPos = new THREE.Vector3();
    camera.getWorldPosition(camPos);

    this.group.position.copy(camPos).addScaledVector(forward, 2.0);
    this.group.position.y = Math.max(1.2, camPos.y - 0.05);

    this.group.lookAt(camPos.x, this.group.position.y, camPos.z);
    this.group.rotateY(Math.PI);
  }

  public update(rayOrigin: THREE.Vector3, rayDirection: THREE.Vector3, isTriggerJustPressed: boolean): boolean {
    if (!this.isShowing) return false;

    this.raycaster.set(rayOrigin, rayDirection);
    this.raycaster.far = 10;

    const buttonMeshes = this.buttons.map((b) => b.mesh);
    const intersections = this.raycaster.intersectObjects(buttonMeshes, false);

    let clicked = false;

    for (const btn of this.buttons) {
      btn.isHovered = false;
    }

    if (intersections.length > 0) {
      const hitMesh = intersections[0].object as THREE.Mesh;
      const hoveredBtn = this.buttons.find((b) => b.mesh === hitMesh);

      if (hoveredBtn) {
        hoveredBtn.isHovered = true;

        if (isTriggerJustPressed) {
          clicked = true;
          hoveredBtn.action();
        }
      }
    }

    for (const btn of this.buttons) {
      const mat = btn.mesh.material as THREE.MeshStandardMaterial;
      if (btn.isHovered) {
        mat.emissive.setHex(btn.hoverColor);
        mat.emissiveIntensity = 1.6;
        btn.mesh.scale.set(1.04, 1.06, 1.2);
      } else {
        mat.emissive.setHex(btn.baseColor);
        mat.emissiveIntensity = 0.35;
        btn.mesh.scale.set(1.0, 1.0, 1.0);
      }
    }

    return clicked;
  }
}
