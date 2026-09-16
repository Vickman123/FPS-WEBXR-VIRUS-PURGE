import * as THREE from 'three';

export class Arena {
  public group: THREE.Group;
  public spawnPoints: THREE.Vector3[] = [];
  public playerStart: THREE.Vector3 = new THREE.Vector3(0, 0, 9);
  public obstacles: THREE.Box3[] = [];

  private arenaSize: number = 38;
  private wallHeight: number = 5.5;

  constructor() {
    this.group = new THREE.Group();
    this.buildMotherboardFloor();
    this.buildFirewallPerimeter();
    this.buildHardwareCovers();
    this.setupMotherboardLighting();
    this.setupSpawnPoints();
  }

  private buildMotherboardFloor(): void {
    // Generar textura de Placa Base (PCB) con buses de datos dorados y trazas de silicio
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // 1. Sustrato de silicio verde-azulado profundo (Dark PCB)
    ctx.fillStyle = '#061321';
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Microcuadrícula de pistas de circuito
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.12)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 1024; i += 32) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 1024);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(1024, i);
      ctx.stroke();
    }

    // 3. Pistas de datos principales doradas (Gold traces)
    ctx.strokeStyle = '#eab308'; // Dorado
    ctx.lineWidth = 4;
    const busPositions = [128, 256, 384, 512, 640, 768, 896];
    busPositions.forEach((pos) => {
      ctx.beginPath();
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, pos + 100);
      ctx.lineTo(pos + 100, pos + 200);
      ctx.lineTo(pos + 100, 1024);
      ctx.stroke();
    });

    // 4. Pistas de bus de datos cyan de alta velocidad
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 3;
    for (let x = 64; x < 1024; x += 192) {
      ctx.beginPath();
      ctx.moveTo(0, x);
      ctx.lineTo(x + 50, x);
      ctx.lineTo(x + 150, x + 100);
      ctx.lineTo(1024, x + 100);
      ctx.stroke();
    }

    // 5. Puntos de soldadura y Vías (Solder pads)
    ctx.fillStyle = '#fbbf24';
    for (let x = 64; x < 1024; x += 128) {
      for (let y = 64; y < 1024; y += 128) {
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fbbf24';
      }
    }

    const pcbTexture = new THREE.CanvasTexture(canvas);
    pcbTexture.wrapS = THREE.RepeatWrapping;
    pcbTexture.wrapT = THREE.RepeatWrapping;
    pcbTexture.repeat.set(6, 6);

    const floorGeo = new THREE.PlaneGeometry(this.arenaSize, this.arenaSize);
    const floorMat = new THREE.MeshStandardMaterial({
      map: pcbTexture,
      roughness: 0.35,
      metalness: 0.65
    });

    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    this.group.add(floorMesh);

    // Glifo central de Socket CPU en el suelo
    const cpuSocketGeo = new THREE.PlaneGeometry(7, 7);
    const cpuSocketMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.4,
      metalness: 0.8
    });
    const cpuSocket = new THREE.Mesh(cpuSocketGeo, cpuSocketMat);
    cpuSocket.rotation.x = -Math.PI / 2;
    cpuSocket.position.set(0, 0.02, -2);
    this.group.add(cpuSocket);

    // Anillo de oro del zócalo
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

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.4,
      metalness: 0.7
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
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      this.group.add(mesh);

      const isHorizontal = cfg.size[0] > cfg.size[2];
      const stripGeo = new THREE.BoxGeometry(
        isHorizontal ? cfg.size[0] : 0.25,
        0.2,
        isHorizontal ? 0.25 : cfg.size[2]
      );

      // Franja inferior y superior de cortafuegos (Firewall)
      const stripMesh1 = new THREE.Mesh(stripGeo, idx % 2 === 0 ? neonCyan : neonCrimson);
      stripMesh1.position.set(cfg.pos[0], 2.2, cfg.pos[2]);
      this.group.add(stripMesh1);

      const stripMesh2 = new THREE.Mesh(stripGeo, idx % 2 === 0 ? neonCyan : neonCrimson);
      stripMesh2.position.set(cfg.pos[0], 4.5, cfg.pos[2]);
      this.group.add(stripMesh2);

      mesh.updateWorldMatrix(true, false);
      const box = new THREE.Box3().setFromObject(mesh);
      this.obstacles.push(box);
    });

    // Balizas esquineras
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
    // 1. Módulos de memoria RAM verticales como coberturas tácticas (RAM Sticks)
    const ramPositions = [
      { x: -7, z: 2, rot: 0 },
      { x: -7, z: -2, rot: 0 },
      { x: 7, z: 2, rot: 0 },
      { x: 7, z: -2, rot: 0 }
    ];

    const ramHeatsinkMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.25,
      metalness: 0.9
    });

    const rgbBarMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });

    ramPositions.forEach((rp) => {
      const w = 0.5;
      const h = 2.6;
      const d = 3.6;

      const ramGeo = new THREE.BoxGeometry(w, h, d);
      const ramMesh = new THREE.Mesh(ramGeo, ramHeatsinkMat);
      ramMesh.position.set(rp.x, h / 2, rp.z);
      ramMesh.castShadow = true;
      ramMesh.receiveShadow = true;
      this.group.add(ramMesh);

      // Tira RGB superior
      const rgbGeo = new THREE.BoxGeometry(w * 0.9, 0.15, d * 0.98);
      const rgbMesh = new THREE.Mesh(rgbGeo, rgbBarMat);
      rgbMesh.position.set(rp.x, h + 0.08, rp.z);
      this.group.add(rgbMesh);

      ramMesh.updateWorldMatrix(true, false);
      this.obstacles.push(new THREE.Box3().setFromObject(ramMesh));
    });

    // 2. Condensadores electrolíticos cilíndricos (Capacitors)
    const capPositions = [
      { x: -4, z: -8, r: 0.8, h: 2.0 },
      { x: 4, z: -8, r: 0.8, h: 2.0 },
      { x: -10, z: -8, r: 0.9, h: 2.2 },
      { x: 10, z: -8, r: 0.9, h: 2.2 }
    ];

    const capCanMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Azul metálico
      roughness: 0.3,
      metalness: 0.8
    });

    const capTopMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Aluminio superior
      roughness: 0.2,
      metalness: 0.9
    });

    capPositions.forEach((cp) => {
      const canGeo = new THREE.CylinderGeometry(cp.r, cp.r, cp.h, 16);
      const canMesh = new THREE.Mesh(canGeo, capCanMat);
      canMesh.position.set(cp.x, cp.h / 2, cp.z);
      canMesh.castShadow = true;
      canMesh.receiveShadow = true;
      this.group.add(canMesh);

      const topGeo = new THREE.CylinderGeometry(cp.r * 0.95, cp.r * 0.95, 0.05, 16);
      const topMesh = new THREE.Mesh(topGeo, capTopMat);
      topMesh.position.set(cp.x, cp.h + 0.02, cp.z);
      this.group.add(topMesh);

      canMesh.updateWorldMatrix(true, false);
      this.obstacles.push(new THREE.Box3().setFromObject(canMesh));
    });

    // 3. Bloque disipador de Chipset / Procesador Central
    const cpuCoolerGeo = new THREE.BoxGeometry(4.2, 1.4, 4.2);
    const cpuCoolerMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.35,
      metalness: 0.75
    });
    const cpuCooler = new THREE.Mesh(cpuCoolerGeo, cpuCoolerMat);
    cpuCooler.position.set(0, 0.7, -2);
    cpuCooler.castShadow = true;
    cpuCooler.receiveShadow = true;
    this.group.add(cpuCooler);

    // Rejilla de ventilador de CPU iluminada
    const fanGrillGeo = new THREE.TorusGeometry(1.6, 0.08, 8, 24);
    const fanGrillMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    const fanGrill = new THREE.Mesh(fanGrillGeo, fanGrillMat);
    fanGrill.rotation.x = Math.PI / 2;
    fanGrill.position.set(0, 1.45, -2);
    this.group.add(fanGrill);

    cpuCooler.updateWorldMatrix(true, false);
    this.obstacles.push(new THREE.Box3().setFromObject(cpuCooler));
  }

  private setupMotherboardLighting(): void {
    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x061a14, 1.8);
    this.group.add(hemiLight);

    const ambient = new THREE.AmbientLight(0x1e293b, 1.2);
    this.group.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xf8fafc, 2.8);
    dirLight.position.set(12, 26, 12);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 70;
    dirLight.shadow.camera.left = -24;
    dirLight.shadow.camera.right = 24;
    dirLight.shadow.camera.top = 24;
    dirLight.shadow.camera.bottom = -24;
    dirLight.shadow.bias = -0.0005;
    this.group.add(dirLight);

    // Luces de acento de hardware
    const p1 = new THREE.PointLight(0x00f3ff, 90, 25, 1.5);
    p1.position.set(-8, 4, 0);
    this.group.add(p1);

    const p2 = new THREE.PointLight(0x00f3ff, 90, 25, 1.5);
    p2.position.set(8, 4, 0);
    this.group.add(p2);

    const p3 = new THREE.PointLight(0xff0055, 120, 25, 1.5);
    p3.position.set(0, 4, -8);
    this.group.add(p3);

    const p4 = new THREE.PointLight(0xeab308, 80, 25, 1.5); // Reflejo dorado de buses
    p4.position.set(0, 3, 4);
    this.group.add(p4);
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
