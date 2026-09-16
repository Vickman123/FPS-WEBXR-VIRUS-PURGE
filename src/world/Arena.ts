import * as THREE from 'three';

export class Arena {
  public group: THREE.Group;
  public spawnPoints: THREE.Vector3[] = [];
  public playerStart: THREE.Vector3 = new THREE.Vector3(0, 0, 9);
  public obstacles: THREE.Box3[] = [];
  public targetMeshes: THREE.Object3D[] = []; // Cache para raycast ultrarrápido

  private arenaSize: number = 38;
  private wallHeight: number = 5.5;

  constructor() {
    this.group = new THREE.Group();
    this.buildMotherboardFloor();
    this.buildFirewallPerimeter();
    this.buildHardwareCovers();
    this.setupMotherboardLighting();
    this.setupSpawnPoints();
    this.cacheTargetMeshes();
  }

  private buildMotherboardFloor(): void {
    // Generar textura de Placa Base optimizada (512x512 suficiente y liviana para Quest)
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // 1. Sustrato de silicio verde-azulado
    ctx.fillStyle = '#061321';
    ctx.fillRect(0, 0, 512, 512);

    // 2. Microcuadrícula
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 512; i += 32) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 512);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(512, i);
      ctx.stroke();
    }

    // 3. Pistas doradas de bus de datos
    ctx.strokeStyle = '#eab308';
    ctx.lineWidth = 3;
    const busPositions = [64, 128, 192, 256, 320, 384, 448];
    busPositions.forEach((pos) => {
      ctx.beginPath();
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, pos + 50);
      ctx.lineTo(pos + 50, pos + 100);
      ctx.lineTo(pos + 50, 512);
      ctx.stroke();
    });

    // 4. Pistas de bus cyan
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 2;
    for (let x = 32; x < 512; x += 96) {
      ctx.beginPath();
      ctx.moveTo(0, x);
      ctx.lineTo(x + 25, x);
      ctx.lineTo(x + 75, x + 50);
      ctx.lineTo(512, x + 50);
      ctx.stroke();
    }

    // 5. Vías y puntos de soldadura
    ctx.fillStyle = '#fbbf24';
    for (let x = 32; x < 512; x += 64) {
      for (let y = 32; y < 512; y += 64) {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const pcbTexture = new THREE.CanvasTexture(canvas);
    pcbTexture.wrapS = THREE.RepeatWrapping;
    pcbTexture.wrapT = THREE.RepeatWrapping;
    pcbTexture.repeat.set(6, 6);

    // MeshLambertMaterial es 4x más rápido en Meta Quest que MeshStandardMaterial
    const floorGeo = new THREE.PlaneGeometry(this.arenaSize, this.arenaSize);
    const floorMat = new THREE.MeshLambertMaterial({
      map: pcbTexture
    });

    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    this.group.add(floorMesh);

    // Glifo central de Socket CPU
    const cpuSocketGeo = new THREE.PlaneGeometry(7, 7);
    const cpuSocketMat = new THREE.MeshLambertMaterial({
      color: 0x1e293b
    });
    const cpuSocket = new THREE.Mesh(cpuSocketGeo, cpuSocketMat);
    cpuSocket.rotation.x = -Math.PI / 2;
    cpuSocket.position.set(0, 0.02, -2);
    this.group.add(cpuSocket);

    const socketGoldBorder = new THREE.RingGeometry(3.6, 3.8, 4);
    const socketGoldMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide });
    const socketBorderMesh = new THREE.Mesh(socketGoldBorder, socketGoldMat);
    socketBorderMesh.rotation.x = -Math.PI / 2;
    socketBorderMesh.rotation.z = Math.PI / 4;
    socketBorderMesh.position.set(0, 0.03, -2);
    this.group.add(socketBorderMesh);
  }

  private buildFirewallPerimeter(): void {
    const half = this.arenaSize / 2;
    const wallThickness = 1.4;

    const wallMat = new THREE.MeshLambertMaterial({
      color: 0x0f172a
    });

    const neonCyan = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const neonCrimson = new THREE.MeshBasicMaterial({ color: 0xff0055 });

    const wallConfigs = [
      { pos: [0, this.wallHeight / 2, -half], size: [this.arenaSize, this.wallHeight, wallThickness] },
      { pos: [0, this.wallHeight / 2, half], size: [this.arenaSize, this.wallHeight, wallThickness] },
      { pos: [-half, this.wallHeight / 2, 0], size: [wallThickness, this.wallHeight, this.arenaSize] },
      { pos: [half, this.wallHeight / 2, 0], size: [wallThickness, this.wallHeight, this.arenaSize] }
    ];

    wallConfigs.forEach((cfg, idx) => {
      const geo = new THREE.BoxGeometry(cfg.size[0], cfg.size[1], cfg.size[2]);
      const mesh = new THREE.Mesh(geo, wallMat);
      mesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      this.group.add(mesh);

      const isHorizontal = cfg.size[0] > cfg.size[2];
      const stripGeo = new THREE.BoxGeometry(
        isHorizontal ? cfg.size[0] : 0.25,
        0.2,
        isHorizontal ? 0.25 : cfg.size[2]
      );

      const stripMesh1 = new THREE.Mesh(stripGeo, idx % 2 === 0 ? neonCyan : neonCrimson);
      stripMesh1.position.set(cfg.pos[0], 2.2, cfg.pos[2]);
      this.group.add(stripMesh1);

      const stripMesh2 = new THREE.Mesh(stripGeo, idx % 2 === 0 ? neonCyan : neonCrimson);
      stripMesh2.position.set(cfg.pos[0], 4.5, cfg.pos[2]);
      this.group.add(stripMesh2);

      mesh.updateWorldMatrix(true, false);
      this.obstacles.push(new THREE.Box3().setFromObject(mesh));
    });

    // Columnas esquineras
    const corners = [
      [-half, -half],
      [half, -half],
      [-half, half],
      [half, half]
    ];
    corners.forEach(([cx, cz]) => {
      const colGeo = new THREE.BoxGeometry(2.2, this.wallHeight + 1, 2.2);
      const colMesh = new THREE.Mesh(colGeo, wallMat);
      colMesh.position.set(cx, (this.wallHeight + 1) / 2, cz);
      this.group.add(colMesh);

      const beaconGeo = new THREE.CylinderGeometry(0.35, 0.35, 1.4, 8);
      const beacon = new THREE.Mesh(beaconGeo, neonCyan);
      beacon.position.set(cx, this.wallHeight + 1.2, cz);
      this.group.add(beacon);
    });
  }

  private buildHardwareCovers(): void {
    // 1. Módulos RAM
    const ramPositions = [
      { x: -7, z: 2 },
      { x: -7, z: -2 },
      { x: 7, z: 2 },
      { x: 7, z: -2 }
    ];

    const ramMat = new THREE.MeshLambertMaterial({
      color: 0x1e293b
    });

    const rgbBarMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });

    ramPositions.forEach((rp) => {
      const w = 0.5;
      const h = 2.6;
      const d = 3.6;

      const ramGeo = new THREE.BoxGeometry(w, h, d);
      const ramMesh = new THREE.Mesh(ramGeo, ramMat);
      ramMesh.position.set(rp.x, h / 2, rp.z);
      this.group.add(ramMesh);

      const rgbGeo = new THREE.BoxGeometry(w * 0.9, 0.15, d * 0.98);
      const rgbMesh = new THREE.Mesh(rgbGeo, rgbBarMat);
      rgbMesh.position.set(rp.x, h + 0.08, rp.z);
      this.group.add(rgbMesh);

      ramMesh.updateWorldMatrix(true, false);
      this.obstacles.push(new THREE.Box3().setFromObject(ramMesh));
    });

    // 2. Condensadores cilíndricos
    const capPositions = [
      { x: -4, z: -8, r: 0.8, h: 2.0 },
      { x: 4, z: -8, r: 0.8, h: 2.0 },
      { x: -10, z: -8, r: 0.9, h: 2.2 },
      { x: 10, z: -8, r: 0.9, h: 2.2 }
    ];

    const capCanMat = new THREE.MeshLambertMaterial({
      color: 0x0284c7
    });

    const capTopMat = new THREE.MeshLambertMaterial({
      color: 0x94a3b8
    });

    capPositions.forEach((cp) => {
      const canGeo = new THREE.CylinderGeometry(cp.r, cp.r, cp.h, 12);
      const canMesh = new THREE.Mesh(canGeo, capCanMat);
      canMesh.position.set(cp.x, cp.h / 2, cp.z);
      this.group.add(canMesh);

      const topGeo = new THREE.CylinderGeometry(cp.r * 0.95, cp.r * 0.95, 0.05, 12);
      const topMesh = new THREE.Mesh(topGeo, capTopMat);
      topMesh.position.set(cp.x, cp.h + 0.02, cp.z);
      this.group.add(topMesh);

      canMesh.updateWorldMatrix(true, false);
      this.obstacles.push(new THREE.Box3().setFromObject(canMesh));
    });

    // 3. Disipador CPU
    const cpuCoolerGeo = new THREE.BoxGeometry(4.2, 1.4, 4.2);
    const cpuCoolerMat = new THREE.MeshLambertMaterial({
      color: 0x334155
    });
    const cpuCooler = new THREE.Mesh(cpuCoolerGeo, cpuCoolerMat);
    cpuCooler.position.set(0, 0.7, -2);
    this.group.add(cpuCooler);

    const fanGrillGeo = new THREE.TorusGeometry(1.6, 0.08, 6, 20);
    const fanGrillMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const fanGrill = new THREE.Mesh(fanGrillGeo, fanGrillMat);
    fanGrill.rotation.x = Math.PI / 2;
    fanGrill.position.set(0, 1.45, -2);
    this.group.add(fanGrill);

    cpuCooler.updateWorldMatrix(true, false);
    this.obstacles.push(new THREE.Box3().setFromObject(cpuCooler));
  }

  private setupMotherboardLighting(): void {
    // 1. Hemisphere Light optimizada para dar luz base a toda la escena (coste GPU mínimo)
    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x061a14, 2.2);
    this.group.add(hemiLight);

    // 2. Luz direccional ligera (SIN mapa de sombras dinámico para mantener 90 FPS estables en Quest)
    const dirLight = new THREE.DirectionalLight(0xf8fafc, 1.6);
    dirLight.position.set(12, 26, 12);
    this.group.add(dirLight);

    // 3. Dos luces puntuales fijas para reflejos de color neón
    const p1 = new THREE.PointLight(0x00f3ff, 20, 24, 1.2);
    p1.position.set(-6, 3.5, 0);
    this.group.add(p1);

    const p2 = new THREE.PointLight(0xff0055, 25, 24, 1.2);
    p2.position.set(6, 3.5, -4);
    this.group.add(p2);
  }

  private setupSpawnPoints(): void {
    this.spawnPoints = [
      new THREE.Vector3(-12, 1.3, -12),
      new THREE.Vector3(0, 1.3, -13),
      new THREE.Vector3(12, 1.3, -12),
      new THREE.Vector3(-12, 1.3, -4),
      new THREE.Vector3(12, 1.3, -4),
      new THREE.Vector3(-9, 1.3, 5),
      new THREE.Vector3(9, 1.3, 5)
    ];
  }

  private cacheTargetMeshes(): void {
    this.targetMeshes = [];
    this.group.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        this.targetMeshes.push(child);
      }
    });
  }

  public resolveCollision(pos: THREE.Vector3, radius: number = 0.5): THREE.Vector3 {
    const half = this.arenaSize / 2 - 0.7;

    pos.x = Math.max(-half, Math.min(half, pos.x));
    pos.z = Math.max(-half, Math.min(half, pos.z));

    for (const box of this.obstacles) {
      const expandedBox = box.clone().expandByScalar(radius);
      if (pos.y >= expandedBox.min.y && pos.y <= expandedBox.max.y) {
        if (pos.x >= expandedBox.min.x && pos.x <= expandedBox.max.x &&
            pos.z >= expandedBox.min.z && pos.z <= expandedBox.max.z) {
          const dx1 = pos.x - expandedBox.min.x;
          const dx2 = expandedBox.max.x - pos.x;
          const dz1 = pos.z - expandedBox.min.z;
          const dz2 = expandedBox.max.z - pos.z;

          const minD = Math.min(dx1, dx2, dz1, dz2);
          if (minD === dx1) pos.x = expandedBox.min.x;
          else if (minD === dx2) pos.x = expandedBox.max.x;
          else if (minD === dz1) pos.z = expandedBox.min.z;
          else pos.z = expandedBox.max.z;
        }
      }
    }

    return pos;
  }
}
