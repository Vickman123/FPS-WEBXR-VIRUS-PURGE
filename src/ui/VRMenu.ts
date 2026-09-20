import * as THREE from 'three';
import { AudioManager } from '../audio/AudioManager';

export interface VRMenuStats {
  score: number;
  accuracy: number;
  wave: number;
}

export interface VRMenuCallbacks {
  onRespawn: () => void;
  onResume: () => void;
  onTrainingRange: () => void;
  onStartSurvival: () => void;
  onRestartSector: () => void;
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
  private currentMode: 'GAME_OVER' | 'MAIN_MENU' | 'PAUSE' | 'WIKI' = 'GAME_OVER';
  private previousMode: 'MAIN_MENU' | 'PAUSE' = 'MAIN_MENU';
  private currentCamera: THREE.Camera | null = null;
  private wikiPage: number = 0;

  private headerMesh: THREE.Mesh;
  private headerCanvas: HTMLCanvasElement;
  private headerCtx: CanvasRenderingContext2D;
  private headerTexture: THREE.CanvasTexture;

  private bgMesh: THREE.Mesh;
  private border: THREE.LineSegments;

  private callbacks: VRMenuCallbacks;
  private audioManager?: AudioManager;

  constructor(callbacks: VRMenuCallbacks, audioManager?: AudioManager) {
    this.callbacks = callbacks;
    this.audioManager = audioManager;
    this.group = new THREE.Group();
    this.group.visible = false;


    // 1. Panel de fondo translúcido cyberpunk
    const bgGeo = new THREE.PlaneGeometry(2.4, 2.1);
    const bgMat = new THREE.MeshBasicMaterial({
      color: 0x030d1a,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide
    });
    this.bgMesh = new THREE.Mesh(bgGeo, bgMat);
    this.bgMesh.position.z = -0.02;
    this.group.add(this.bgMesh);

    // Borde de neón exterior
    const borderGeo = new THREE.EdgesGeometry(bgGeo);
    const borderMat = new THREE.LineBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.85
    });
    this.border = new THREE.LineSegments(borderGeo, borderMat);
    this.border.position.z = -0.01;
    this.group.add(this.border);

    // 2. Cabecera y estadísticas con Canvas dinámico
    this.headerCanvas = document.createElement('canvas');
    this.headerCanvas.width = 1024;
    this.headerCanvas.height = 360;
    this.headerCtx = this.headerCanvas.getContext('2d')!;
    this.headerTexture = new THREE.CanvasTexture(this.headerCanvas);

    const headerGeo = new THREE.PlaneGeometry(2.2, 0.77);
    const headerMat = new THREE.MeshBasicMaterial({
      map: this.headerTexture,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.headerMesh = new THREE.Mesh(headerGeo, headerMat);
    this.headerMesh.position.set(0, 0.58, 0.01);
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
    const width = 1.95;
    const height = 0.22;
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
      opacity: 0.85
    });
    const borderMesh = new THREE.LineSegments(borderEdges, borderMat);
    mesh.add(borderMesh);

    // Texto del botón en Canvas de alta resolución
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;

    // Fondo del texto ligeramente translúcido
    ctx.fillStyle = 'rgba(6, 20, 36, 0.85)';
    ctx.fillRect(0, 0, 1024, 128);

    // Borde interior
    ctx.strokeStyle = hoverColor === 0x00ffff ? '#00f3ff' : '#ffaa00';
    ctx.lineWidth = 4;
    ctx.strokeRect(6, 6, 1012, 116);

    // Texto
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 50px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 10;
    ctx.fillText(text, 512, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const labelGeo = new THREE.PlaneGeometry(width * 0.96, height * 0.88);
    const labelMat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.set(0, 0, depth / 2 + 0.012);
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
    grad.addColorStop(0, 'rgba(255, 0, 85, 0.35)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
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

    ctx.fillStyle = 'rgba(0, 243, 255, 0.85)';
    ctx.font = '22px "Courier New", monospace';
    ctx.fillText('APUNTA CON TU PISTOLA Y DISPARA AL BOTÓN', 512, 310);

    this.headerTexture.needsUpdate = true;

    this.createButton('🔄 REAPARECER PROTOCOLO', 0.05, 0x00f3ff, 0x00ffff, () => {
      this.hide();
      this.callbacks.onRespawn();
    });

    this.createButton('🎯 CAMPO DE TIRO (PRÁCTICA)', -0.25, 0xffaa00, 0xffcc00, () => {
      this.hide();
      this.callbacks.onTrainingRange();
    });

    this.createButton('🏠 MENÚ PRINCIPAL', -0.55, 0x64748b, 0x94a3b8, () => {
      this.hide();
      this.callbacks.onMainMenu();
    });

    this.positionInFrontOfCamera(camera);
    this.group.updateMatrixWorld(true);
    this.group.visible = true;
    this.isShowing = true;
  }

  public showPauseMenu(camera: THREE.Camera): void {
    this.currentMode = 'PAUSE';
    this.currentCamera = camera;
    this.clearButtons();

    const ctx = this.headerCtx;
    ctx.clearRect(0, 0, 1024, 360);

    const grad = ctx.createLinearGradient(0, 0, 0, 360);
    grad.addColorStop(0, 'rgba(0, 243, 255, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 360);

    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 54px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 20;
    ctx.fillText('⏸️ SISTEMA EN PAUSA', 512, 75);

    ctx.fillStyle = '#ffffff';
    ctx.font = '28px "Courier New", monospace';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 6;
    ctx.fillText('SUB-RUTINA DE SEGURIDAD DETENIDA', 512, 135);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '24px "Courier New", monospace';
    ctx.shadowBlur = 0;
    ctx.fillText('APUNTA Y DISPARA AL BOTÓN, O PULSA [X / Y] PARA REANUDAR', 512, 220);

    this.headerTexture.needsUpdate = true;

    this.createButton('▶️ REANUDAR PURGA', 0.18, 0x00f3ff, 0x00ffff, () => {
      this.hide();
      this.callbacks.onResume();
    });

    this.createButton('🎯 CAMPO DE TIRO (PRÁCTICA)', -0.08, 0xffaa00, 0xffcc00, () => {
      this.hide();
      this.callbacks.onTrainingRange();
    });

    this.createButton('📖 WIKI DE AMENAZAS & ARSENAL', -0.34, 0x38bdf8, 0x7dd3fc, () => {
      this.previousMode = 'PAUSE';
      this.showWiki(camera, 0);
    });

    this.createButton('🏠 MENÚ PRINCIPAL', -0.60, 0x64748b, 0x94a3b8, () => {
      this.hide();
      this.callbacks.onMainMenu();
    });

    this.positionInFrontOfCamera(camera);
    this.group.updateMatrixWorld(true);
    this.group.visible = true;
    this.isShowing = true;
  }

  public showMainMenu(camera: THREE.Camera): void {
    this.currentMode = 'MAIN_MENU';
    this.currentCamera = camera;
    this.clearButtons();

    const ctx = this.headerCtx;
    ctx.clearRect(0, 0, 1024, 360);

    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 52px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 20;
    ctx.fillText('VIRUS PURGE // VR DEFENSE', 512, 70);

    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 24px "Courier New", monospace';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 8;
    ctx.fillText('⚡ DESARROLLADO POR VÍCTOR CARREÑO ⚡', 512, 118);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '24px "Courier New", monospace';
    ctx.shadowBlur = 4;
    ctx.fillText('SUB-RUTINA DE SEGURIDAD DEL SISTEMA CENTRAL', 512, 165);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '22px "Courier New", monospace';
    ctx.shadowBlur = 0;
    ctx.fillText('SELECCIONA MODO DE COMBATE DISPARANDO AL OBJETIVO', 512, 230);

    this.headerTexture.needsUpdate = true;

    this.createButton('⚔️ INICIAR PURGA (OLEADAS)', 0.08, 0x00f3ff, 0x00ffff, () => {
      this.hide();
      this.callbacks.onStartSurvival();
    });

    this.createButton('🎯 CAMPO DE TIRO (DIANAS)', -0.20, 0xffaa00, 0xffcc00, () => {
      this.hide();
      this.callbacks.onTrainingRange();
    });

    this.createButton('📖 WIKI DE AMENAZAS & ARSENAL', -0.48, 0x38bdf8, 0x7dd3fc, () => {
      this.previousMode = 'MAIN_MENU';
      this.showWiki(camera, 0);
    });

    this.positionInFrontOfCamera(camera);
    this.group.updateMatrixWorld(true);
    this.group.visible = true;
    this.isShowing = true;
  }

  public showWiki(camera: THREE.Camera, page: number = 0): void {
    this.currentMode = 'WIKI';
    this.currentCamera = camera;
    this.wikiPage = Math.max(0, Math.min(2, page));
    this.clearButtons();

    const ctx = this.headerCtx;
    ctx.clearRect(0, 0, 1024, 360);

    const grad = ctx.createLinearGradient(0, 0, 0, 360);
    grad.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
    grad.addColorStop(1, 'rgba(3, 13, 26, 0.9)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 360);

    if (this.wikiPage === 0) {
      // PÁGINA 1: DRON & GUSANO
      ctx.fillStyle = '#00f3ff';
      ctx.font = 'bold 36px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.shadowColor = '#00f3ff';
      ctx.shadowBlur = 12;
      ctx.fillText('📖 WIKI [1/3]: DRON AÉREO Y GUSANO', 512, 45);

      ctx.shadowBlur = 0;
      ctx.font = 'bold 24px "Courier New", monospace';
      ctx.fillStyle = '#38bdf8';
      ctx.textAlign = 'left';
      ctx.fillText('🔹 VIRUS.RECON.DRONE (Nivel 1 // 80 HP // Vel: 2.4)', 60, 95);
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '20px "Courier New", monospace';
      ctx.fillText('• Vuelo senoidal oscilante. Busca agruparse en enjambre.', 80, 128);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('• 🎯 PUNTO DÉBIL: Ojo sensor frontal (Headshot x2.5).', 80, 158);

      ctx.fillStyle = '#e879f9';
      ctx.font = 'bold 24px "Courier New", monospace';
      ctx.fillText('🔹 WORM.WIN32.REPLICATOR (Nivel 2 // 50 HP // Vel: 3.8)', 60, 215);
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '20px "Courier New", monospace';
      ctx.fillText('• Rápido y rastrero en curva "S" para esquivar tiros rectos.', 80, 248);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('• 🎯 PUNTO DÉBIL: Nodo de cabeza frontal (Impacto letal).', 80, 278);
    } else if (this.wikiPage === 1) {
      // PÁGINA 2: TANQUE TROJAN & BOSS
      ctx.fillStyle = '#00f3ff';
      ctx.font = 'bold 36px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.shadowColor = '#00f3ff';
      ctx.shadowBlur = 12;
      ctx.fillText('📖 WIKI [2/3]: TANQUE TROJAN Y BOSS', 512, 45);

      ctx.shadowBlur = 0;
      ctx.font = 'bold 24px "Courier New", monospace';
      ctx.fillStyle = '#fb923c';
      ctx.textAlign = 'left';
      ctx.fillText('🔸 TROJAN.DROPPER.CARRIER (Nivel 3 // 180 HP // Vel: 1.6)', 60, 95);
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '20px "Courier New", monospace';
      ctx.fillText('• Escudo frontal firewall digital: ¡Absorbe el 80% de daño!', 80, 128);
      ctx.fillStyle = '#f97316';
      ctx.fillText('• ⚠️ VULNERABILIDAD: Núcleo trasero expuesto (Flanquear y disparar).', 80, 158);

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 24px "Courier New", monospace';
      ctx.fillText('☣️ RANSOMWARE.LOCKBIT.CORE (Nivel 5 Boss // 850 HP)', 60, 215);
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '20px "Courier New", monospace';
      ctx.fillText('• Barrera giratoria y esbirros. Fase furia desatada a <35% HP.', 80, 248);
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('• 🎯 Dispara entre los huecos del escudo giratorio.', 80, 278);
    } else {
      // PÁGINA 3: ARSENAL & TIENDA
      ctx.fillStyle = '#00f3ff';
      ctx.font = 'bold 36px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.shadowColor = '#00f3ff';
      ctx.shadowBlur = 12;
      ctx.fillText('📖 WIKI [3/3]: ARSENAL & SISTEMA', 512, 45);

      ctx.shadowBlur = 0;
      ctx.font = 'bold 22px "Courier New", monospace';
      ctx.fillStyle = '#00f3ff';
      ctx.textAlign = 'left';
      ctx.fillText('🔫 CANNON V1: Dmg 40 (Headshot 100) | 12 balas | Haz Cyan', 60, 95);

      ctx.fillStyle = '#fbbf24';
      ctx.fillText('💥 SCATTER SHOTGUN: Dmg 132 (22x6) | 8 balas | Haz Ámbar', 60, 140);

      ctx.fillStyle = '#ec4899';
      ctx.fillText('⚡ PLASMA SMG: Dmg 22 | 700 RPM continuo | 36 balas | Haz Magenta', 60, 185);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '20px "Courier New", monospace';
      ctx.fillText('💾 Data Bits: Gana moneda al encadenar bajas con multiplicador.', 60, 235);
      ctx.fillText('🛒 Cyber Store: Mejora daño, recarga y salud entre sectores.', 60, 270);
    }

    this.headerTexture.needsUpdate = true;

    // Botones de navegación en VR
    if (this.wikiPage > 0) {
      this.createButton('⬅️ PÁGINA ANTERIOR', -0.08, 0x38bdf8, 0x7dd3fc, () => {
        this.showWiki(camera, this.wikiPage - 1);
      });
    }

    if (this.wikiPage < 2) {
      const nextY = this.wikiPage > 0 ? -0.34 : -0.15;
      this.createButton('➡️ SIGUIENTE PÁGINA', nextY, 0x00f3ff, 0x00ffff, () => {
        this.showWiki(camera, this.wikiPage + 1);
      });
    }

    const backY = this.wikiPage === 1 ? -0.60 : -0.45;
    this.createButton('↩️ VOLVER AL MENÚ', backY, 0x64748b, 0x94a3b8, () => {
      if (this.previousMode === 'PAUSE') {
        this.showPauseMenu(camera);
      } else {
        this.showMainMenu(camera);
      }
    });

    this.positionInFrontOfCamera(camera);
    this.group.updateMatrixWorld(true);
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

  public getMode(): 'GAME_OVER' | 'MAIN_MENU' | 'PAUSE' | 'WIKI' {
    return this.currentMode;
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

    // Colocar el menú a 2.0 metros enfrente a nivel de los ojos
    this.group.position.copy(camPos).addScaledVector(forward, 2.0);
    this.group.position.y = Math.max(1.1, camPos.y - 0.05);

    // En Three.js, lookAt orienta el vector hacia la cámara. No rotar 180 grados adicionales
    this.group.lookAt(camPos.x, this.group.position.y, camPos.z);
  }

  public update(rayOrigin: THREE.Vector3, rayDirection: THREE.Vector3, isTriggerJustPressed: boolean): boolean {
    if (!this.isShowing) return false;

    this.raycaster.set(rayOrigin, rayDirection);
    this.raycaster.far = 12;

    const buttonMeshes = this.buttons.map((b) => b.mesh);
    // Usar recursive = true para intersectar el cubo o sus elementos hijos de etiqueta
    const intersections = this.raycaster.intersectObjects(buttonMeshes, true);

    let clicked = false;

    for (const btn of this.buttons) {
      btn.isHovered = false;
    }

    if (intersections.length > 0) {
      let hoveredBtn: VRButton | undefined;
      for (const hit of intersections) {
        hoveredBtn = this.buttons.find((b) => b.mesh === hit.object || hit.object.parent === b.mesh);
        if (hoveredBtn) break;
      }

      if (hoveredBtn) {
        hoveredBtn.isHovered = true;

        if (isTriggerJustPressed) {
          clicked = true;
          this.audioManager?.playUIClick();
          hoveredBtn.action();
        }
      }
    }

    for (const btn of this.buttons) {
      const mat = btn.mesh.material as THREE.MeshStandardMaterial;
      if (btn.isHovered) {
        mat.emissive.setHex(btn.hoverColor);
        mat.emissiveIntensity = 2.0;
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

