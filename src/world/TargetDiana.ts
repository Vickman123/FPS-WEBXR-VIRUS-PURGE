import * as THREE from 'three';

export type DianaZone = 'BULLSEYE' | 'MID' | 'OUTER';

export interface DianaHitResult {
  zone: DianaZone;
  points: number;
  isHeadshot: boolean;
  label: string;
}

export class TargetDiana {
  public group: THREE.Group;
  private pivotGroup: THREE.Group;
  public hitboxes: THREE.Object3D[] = [];

  // Físicas reactivas de retroceso
  private recoilAngle: number = 0;
  private recoilVelocity: number = 0;

  // Diana móvil
  private isOscillating: boolean = false;
  private oscSpeed: number = 1.8;
  private oscWidth: number = 4.0;
  private oscTimer: number = 0;
  private basePosition: THREE.Vector3;

  // Letrero flotante de puntuación
  private scoreBadge!: THREE.Mesh;
  private badgeCanvas!: HTMLCanvasElement;
  private badgeCtx!: CanvasRenderingContext2D;
  private badgeTexture!: THREE.CanvasTexture;
  private badgeTimer: number = 0;

  public onHitRegistered?: (result: DianaHitResult, position: THREE.Vector3) => void;

  constructor(position: THREE.Vector3, isOscillating: boolean = false) {
    this.group = new THREE.Group();
    this.group.position.copy(position);
    this.basePosition = position.clone();
    this.isOscillating = isOscillating;
    this.oscTimer = Math.random() * Math.PI * 2;

    this.pivotGroup = new THREE.Group();
    this.buildBaseAndPole();
    this.buildTargetDisc();
    this.buildScoreBadge();

    this.group.add(this.pivotGroup);
  }

  private buildBaseAndPole(): void {
    // 1. Base fija en el suelo
    const baseGeo = new THREE.CylinderGeometry(0.35, 0.45, 0.12, 16);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.4,
      metalness: 0.8
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = 0.06;
    this.group.add(baseMesh);

    // 2. Poste vertical
    const poleGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.4, 12);
    const poleMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.3,
      metalness: 0.9
    });
    const poleMesh = new THREE.Mesh(poleGeo, poleMat);
    poleMesh.position.y = 0.75;
    this.pivotGroup.add(poleMesh);

    // Punto de pivote a la altura media
    this.pivotGroup.position.set(0, 0, 0);
  }

  private buildTargetDisc(): void {
    const discY = 1.5;
    const targetGroup = new THREE.Group();
    targetGroup.position.set(0, discY, 0);

    // Malla trasera de soporte
    const backGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.03, 32);
    backGeo.rotateX(Math.PI / 2);
    const backMat = new THREE.MeshStandardMaterial({
      color: 0x0a192f,
      roughness: 0.5,
      metalness: 0.7
    });
    const backMesh = new THREE.Mesh(backGeo, backMat);
    targetGroup.add(backMesh);

    // Marco exterior con resplandor
    const rimGeo = new THREE.TorusGeometry(0.48, 0.02, 8, 32);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x00f3ff,
      emissive: 0x00f3ff,
      emissiveIntensity: 0.8
    });
    const rimMesh = new THREE.Mesh(rimGeo, rimMat);
    targetGroup.add(rimMesh);

    // 1. ZONA EXTERIOR (Outer Ring) - Radio 0.44 -> +25 pts
    const outerGeo = new THREE.RingGeometry(0.28, 0.46, 32);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      side: THREE.DoubleSide
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    outerMesh.position.z = 0.018;
    outerMesh.userData = {
      isHitbox: true,
      isDiana: true,
      diana: this,
      zone: 'OUTER'
    };
    targetGroup.add(outerMesh);
    this.hitboxes.push(outerMesh);

    // 2. ZONA MEDIA (Mid Ring) - Radio 0.14 a 0.28 -> +50 pts
    const midGeo = new THREE.RingGeometry(0.14, 0.28, 32);
    const midMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      side: THREE.DoubleSide
    });
    const midMesh = new THREE.Mesh(midGeo, midMat);
    midMesh.position.z = 0.02;
    midMesh.userData = {
      isHitbox: true,
      isDiana: true,
      diana: this,
      zone: 'MID'
    };
    targetGroup.add(midMesh);
    this.hitboxes.push(midMesh);

    // 3. CENTRO / DIANA (Bullseye Core) - Radio 0 a 0.14 -> +100 pts (Headshot crítico)
    const bullGeo = new THREE.CircleGeometry(0.14, 32);
    const bullMat = new THREE.MeshBasicMaterial({
      color: 0xff0055,
      side: THREE.DoubleSide
    });
    const bullMesh = new THREE.Mesh(bullGeo, bullMat);
    bullMesh.position.z = 0.022;
    bullMesh.userData = {
      isHitbox: true,
      isHeadshot: true,
      isDiana: true,
      diana: this,
      zone: 'BULLSEYE'
    };
    targetGroup.add(bullMesh);
    this.hitboxes.push(bullMesh);

    // Cruz de puntería táctica
    const crossGeoH = new THREE.PlaneGeometry(0.65, 0.015);
    const crossGeoV = new THREE.PlaneGeometry(0.015, 0.65);
    const crossMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    const crossH = new THREE.Mesh(crossGeoH, crossMat);
    crossH.position.z = 0.025;
    const crossV = new THREE.Mesh(crossGeoV, crossMat);
    crossV.position.z = 0.025;
    targetGroup.add(crossH);
    targetGroup.add(crossV);

    this.pivotGroup.add(targetGroup);
  }

  private buildScoreBadge(): void {
    this.badgeCanvas = document.createElement('canvas');
    this.badgeCanvas.width = 256;
    this.badgeCanvas.height = 128;
    this.badgeCtx = this.badgeCanvas.getContext('2d')!;
    this.badgeTexture = new THREE.CanvasTexture(this.badgeCanvas);

    const badgeGeo = new THREE.PlaneGeometry(0.6, 0.3);
    const badgeMat = new THREE.MeshBasicMaterial({
      map: this.badgeTexture,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide
    });
    this.scoreBadge = new THREE.Mesh(badgeGeo, badgeMat);
    this.scoreBadge.position.set(0, 2.1, 0);
    this.pivotGroup.add(this.scoreBadge);
  }

  public registerHit(zone: DianaZone, hitPoint: THREE.Vector3): DianaHitResult {
    // 1. Activar retroceso físico con muelle
    this.recoilVelocity = -9.0;

    let points = 25;
    let isHeadshot = false;
    let label = '+25';

    if (zone === 'BULLSEYE') {
      points = 100;
      isHeadshot = true;
      label = '🎯 DIANA +100';
    } else if (zone === 'MID') {
      points = 50;
      isHeadshot = false;
      label = '+50';
    } else {
      points = 25;
      isHeadshot = false;
      label = '+25';
    }

    // 2. Mostrar letrero emergente
    this.showBadge(label, zone);

    const result: DianaHitResult = {
      zone,
      points,
      isHeadshot,
      label
    };

    if (this.onHitRegistered) {
      this.onHitRegistered(result, hitPoint);
    }

    return result;
  }

  private showBadge(text: string, zone: DianaZone): void {
    const ctx = this.badgeCtx;
    ctx.clearRect(0, 0, 256, 128);

    ctx.font = 'bold 38px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (zone === 'BULLSEYE') {
      ctx.fillStyle = '#ff0055';
      ctx.shadowColor = '#ff0055';
      ctx.shadowBlur = 12;
    } else if (zone === 'MID') {
      ctx.fillStyle = '#f59e0b';
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = 8;
    } else {
      ctx.fillStyle = '#00f3ff';
      ctx.shadowColor = '#00f3ff';
      ctx.shadowBlur = 6;
    }

    ctx.fillText(text, 128, 64);
    this.badgeTexture.needsUpdate = true;

    this.badgeTimer = 0.85;
    (this.scoreBadge.material as THREE.MeshBasicMaterial).opacity = 1.0;
  }

  public update(delta: number): void {
    // 1. Físicas de oscilación de la diana (muelle amortiguado)
    const springK = 75;
    const damping = 8.5;
    this.recoilVelocity += (-this.recoilAngle * springK - this.recoilVelocity * damping) * delta;
    this.recoilAngle += this.recoilVelocity * delta;
    this.pivotGroup.rotation.x = this.recoilAngle;

    // 2. Movimiento oscilante lateral si está activado
    if (this.isOscillating) {
      this.oscTimer += delta * this.oscSpeed;
      this.group.position.x = this.basePosition.x + Math.sin(this.oscTimer) * this.oscWidth;
    }

    // 3. Letrero de puntuación flotante
    if (this.badgeTimer > 0) {
      this.badgeTimer -= delta;
      const progress = this.badgeTimer / 0.85;
      (this.scoreBadge.material as THREE.MeshBasicMaterial).opacity = Math.max(0, progress);
      this.scoreBadge.position.y = 2.1 + (1 - progress) * 0.35;
    }
  }

  public setVisible(visible: boolean): void {
    this.group.visible = visible;
  }
}
