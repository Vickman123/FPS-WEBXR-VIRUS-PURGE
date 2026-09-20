import * as THREE from 'three';
import { CurrencyManager } from '../systems/CurrencyManager';
import { UpgradeManager, UpgradeType } from '../systems/UpgradeManager';
import { WeaponType } from '../weapons/WeaponManager';
import { AudioManager } from '../audio/AudioManager';

interface StoreButton {
  mesh: THREE.Mesh;
  borderMesh: THREE.LineSegments;
  labelMesh: THREE.Mesh;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  texture: THREE.CanvasTexture;
  action: () => void;
  baseColor: number;
  hoverColor: number;
  isHovered: boolean;
  width: number;
  height: number;
}

export class VRStore {
  public group: THREE.Group;
  private backgroundMesh: THREE.Mesh;
  private headerMesh: THREE.Mesh;
  private headerCanvas: HTMLCanvasElement;
  private headerCtx: CanvasRenderingContext2D;
  private headerTexture: THREE.CanvasTexture;

  private currencyManager: CurrencyManager;
  private upgradeManager: UpgradeManager;
  private audioManager?: AudioManager;
  private onContinueCallback: () => void;

  private buttons: StoreButton[] = [];
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private isShowing: boolean = false;

  constructor(
    currencyManager: CurrencyManager,
    upgradeManager: UpgradeManager,
    onContinue: () => void,
    audioManager?: AudioManager
  ) {
    this.currencyManager = currencyManager;
    this.upgradeManager = upgradeManager;
    this.onContinueCallback = onContinue;
    this.audioManager = audioManager;


    this.group = new THREE.Group();
    this.group.visible = false;

    // 1. Fondo de quiosco holográfico
    const bgGeo = new THREE.PlaneGeometry(2.5, 1.8);
    const bgMat = new THREE.MeshBasicMaterial({
      color: 0x050d1a,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide
    });
    this.backgroundMesh = new THREE.Mesh(bgGeo, bgMat);
    this.group.add(this.backgroundMesh);

    const borderGeo = new THREE.EdgesGeometry(bgGeo);
    const borderMat = new THREE.LineBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.8
    });
    const borderLine = new THREE.LineSegments(borderGeo, borderMat);
    this.backgroundMesh.add(borderLine);

    // 2. Cabecera Holográfica
    this.headerCanvas = document.createElement('canvas');
    this.headerCanvas.width = 1024;
    this.headerCanvas.height = 256;
    this.headerCtx = this.headerCanvas.getContext('2d')!;

    this.headerTexture = new THREE.CanvasTexture(this.headerCanvas);
    this.headerTexture.minFilter = THREE.LinearFilter;
    this.headerTexture.magFilter = THREE.LinearFilter;

    const headerGeo = new THREE.PlaneGeometry(2.4, 0.6);
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

  public show(camera: THREE.Camera): void {
    this.positionInFrontOfCamera(camera);
    this.rebuildButtons();
    this.renderHeader();
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

    this.group.position.copy(camPos).addScaledVector(forward, 2.1);
    this.group.position.y = Math.max(1.15, camPos.y - 0.05);

    // Orientar hacia el jugador sin volteo inverso
    this.group.lookAt(camPos.x, this.group.position.y, camPos.z);
  }

  private renderHeader(): void {
    const ctx = this.headerCtx;
    ctx.clearRect(0, 0, 1024, 256);

    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, 'rgba(0, 243, 255, 0.35)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.1)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 256);

    ctx.fillStyle = '#00f3ff';
    ctx.font = 'bold 50px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.shadowColor = '#00f3ff';
    ctx.shadowBlur = 18;
    ctx.fillText('🛒 CYBER STORE // MERCADO NEGRO', 512, 70);

    const bits = this.currencyManager.getBits();
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 36px "Courier New", monospace';
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 12;
    ctx.fillText(`💾 BITS DISPONIBLES: ${bits}`, 512, 140);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '22px "Courier New", monospace';
    ctx.shadowBlur = 0;
    ctx.fillText('APUNTA CON TU LÁSER Y DISPARA PARA MEJORAR TU ARMA', 512, 210);

    this.headerTexture.needsUpdate = true;
  }

  private clearButtons(): void {
    for (const btn of this.buttons) {
      this.group.remove(btn.mesh);
      btn.mesh.geometry.dispose();
      (btn.mesh.material as THREE.Material).dispose();
      btn.labelMesh.geometry.dispose();
      (btn.labelMesh.material as THREE.Material).dispose();
      btn.texture.dispose();
    }
    this.buttons = [];
  }

  private rebuildButtons(): void {
    this.clearButtons();

    // 4 Mejoras de Arma (Fila superior e intermedia izquierda/derecha)
    const upgrades: UpgradeType[] = ['fireRate', 'damage', 'magSize', 'reloadSpeed'];
    const positions = [
      { x: -0.58, y: 0.14 },
      { x: 0.58, y: 0.14 },
      { x: -0.58, y: -0.16 },
      { x: 0.58, y: -0.16 }
    ];

    upgrades.forEach((type, idx) => {
      const info = this.upgradeManager.getUpgradeInfo(type);
      const pos = positions[idx];

      let btnText = '';
      if (info.isMax) {
        btnText = `${info.name}\nNIVEL MÁXIMO // INSTALADO`;
      } else {
        btnText = `${info.name} (Nv. ${info.currentLevel}/3)\n${info.description} // ${info.cost} BITS`;
      }

      this.createStoreButton(
        btnText,
        pos.x,
        pos.y,
        1.1,
        0.24,
        info.isMax ? 0x334155 : 0x00f3ff,
        info.isMax ? 0x64748b : 0x38bdf8,
        () => {
          if (this.upgradeManager.buyUpgrade(type)) {
            this.renderHeader();
            this.rebuildButtons();
          }
        }
      );
    });

    // 2 Botones de Armas Desbloqueables (Fila inferior)
    const weapons = this.upgradeManager.getWeaponsShopInfo().filter((w) => w.type !== 'pistol');
    const weaponPositions = [
      { x: -0.58, y: -0.46 },
      { x: 0.58, y: -0.46 }
    ];

    weapons.forEach((w, idx) => {
      const pos = weaponPositions[idx];
      let text = '';
      let color = 0xf59e0b;

      if (w.isEquipped) {
        text = `${w.name} [EQUIPADA]\n${w.description}`;
        color = 0x10b981;
      } else if (w.isUnlocked) {
        text = `${w.name} [DESBLOQUEADA]\nDISPARA PARA EQUIPAR`;
        color = 0x38bdf8;
      } else {
        text = `${w.name} // ${w.cost} BITS\n${w.description}`;
      }

      this.createStoreButton(
        text,
        pos.x,
        pos.y,
        1.1,
        0.24,
        color,
        color,
        () => {
          if (this.upgradeManager.buyOrEquipWeapon(w.type)) {
            this.renderHeader();
            this.rebuildButtons();
          }
        }
      );
    });

    // Botón Continuar / Salir de la Tienda (Abajo al centro)
    this.createStoreButton(
      '🚀 CONTINUAR PURGA // SIGUIENTE FASE',
      0,
      -0.72,
      2.26,
      0.18,
      0x10b981,
      0x34d399,
      () => {
        this.hide();
        this.onContinueCallback();
      }
    );

    this.group.updateMatrixWorld(true);
  }

  private createStoreButton(
    text: string,
    x: number,
    y: number,
    width: number,
    height: number,
    baseColor: number,
    hoverColor: number,
    action: () => void
  ): void {
    const geo = new THREE.BoxGeometry(width, height, 0.04);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x0a192f,
      emissive: baseColor,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.7
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, 0.03);

    const borderEdges = new THREE.EdgesGeometry(geo);
    const borderMat = new THREE.LineBasicMaterial({
      color: hoverColor,
      transparent: true,
      opacity: 0.85
    });
    const borderMesh = new THREE.LineSegments(borderEdges, borderMat);
    mesh.add(borderMesh);

    // Canvas de texto nítido
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = 'rgba(6, 20, 36, 0.9)';
    ctx.fillRect(0, 0, 1024, 256);

    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 4;
    ctx.strokeRect(6, 6, 1012, 244);

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const lines = text.split('\n');
    if (lines.length === 1) {
      ctx.font = 'bold 44px "Courier New", monospace';
      ctx.fillText(lines[0], 512, 128);
    } else {
      ctx.font = 'bold 38px "Courier New", monospace';
      ctx.fillText(lines[0], 512, 90);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '28px "Courier New", monospace';
      ctx.fillText(lines[1], 512, 165);
    }

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
    labelMesh.position.set(0, 0, 0.025);
    mesh.add(labelMesh);

    this.group.add(mesh);

    this.buttons.push({
      mesh,
      borderMesh,
      labelMesh,
      canvas,
      ctx,
      texture,
      action,
      baseColor,
      hoverColor,
      isHovered: false,
      width,
      height
    });
  }

  public update(rayOrigin: THREE.Vector3, rayDirection: THREE.Vector3, isTriggerJustPressed: boolean): boolean {
    if (!this.isShowing) return false;

    this.raycaster.set(rayOrigin, rayDirection);
    this.raycaster.far = 12;

    const interactiveMeshes = this.buttons.map((b) => b.mesh);
    // Usar recursive = true para detectar impactos tanto en el marco del botón como en su etiqueta o texto
    const hits = this.raycaster.intersectObjects(interactiveMeshes, true);

    let hoveredIndex = -1;
    if (hits.length > 0) {
      for (const hit of hits) {
        const found = this.buttons.findIndex((b) => b.mesh === hit.object || hit.object.parent === b.mesh);
        if (found !== -1) {
          hoveredIndex = found;
          break;
        }
      }
    }

    for (let i = 0; i < this.buttons.length; i++) {
      const btn = this.buttons[i];
      const shouldHover = i === hoveredIndex;

      if (shouldHover !== btn.isHovered) {
        btn.isHovered = shouldHover;
        const mat = btn.mesh.material as THREE.MeshStandardMaterial;
        if (btn.isHovered) {
          mat.emissive.setHex(btn.hoverColor);
          mat.emissiveIntensity = 2.0;
          btn.mesh.scale.set(1.04, 1.06, 1.2);
        } else {
          mat.emissive.setHex(btn.baseColor);
          mat.emissiveIntensity = 0.6;
          btn.mesh.scale.set(1, 1, 1);
        }
      }
    }

    if (isTriggerJustPressed && hoveredIndex !== -1) {
      this.audioManager?.playUIClick();
      this.buttons[hoveredIndex].action();
      return true;
    }

    return hoveredIndex !== -1;
  }
}

