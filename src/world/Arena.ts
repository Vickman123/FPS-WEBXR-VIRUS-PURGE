import * as THREE from 'three';

export class Arena {
  public group: THREE.Group;
  public spawnPoints: THREE.Vector3[] = [];
  public playerStart: THREE.Vector3 = new THREE.Vector3(0, 0, 8);
  public obstacles: THREE.Box3[] = [];

  private arenaSize: number = 36;
  private wallHeight: number = 5;

  constructor() {
    this.group = new THREE.Group();
    this.buildFloor();
    this.buildWalls();
    this.buildCovers();
    this.setupLighting();
    this.setupSpawnPoints();
  }

  private buildFloor(): void {
    // Generar textura de rejilla cyber proceduralmente de alto contraste
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Fondo gris oscuro cyber (claramente distinguible)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 512, 512);

    // Paneles hexagonales / cuadrados
    ctx.fillStyle = '#131d35';
    const tileSize = 64;
    for (let x = 0; x < 512; x += tileSize) {
      for (let y = 0; y < 512; y += tileSize) {
        if ((x / tileSize + y / tileSize) % 2 === 0) {
          ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
        }
      }
    }

    // Cuadrícula secundaria cyan
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.25)';
    ctx.lineWidth = 1.5;
    for (let x = 0; x <= 512; x += tileSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, x);
      ctx.lineTo(512, x);
      ctx.stroke();
    }

    // Líneas principales intensas
    ctx.strokeStyle = '#00f3ff';
    ctx.lineWidth = 3;
    for (let x = 0; x <= 512; x += 128) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, x);
      ctx.lineTo(512, x);
      ctx.stroke();
    }

    // Nodos de datos en intersecciones
    ctx.fillStyle = '#ffffff';
    for (let x = 0; x <= 512; x += 128) {
      for (let y = 0; y <= 512; y += 128) {
        ctx.fillRect(x - 4, y - 4, 8, 8);
      }
    }

    const floorTexture = new THREE.CanvasTexture(canvas);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(9, 9);

    const floorGeo = new THREE.PlaneGeometry(this.arenaSize, this.arenaSize);
    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTexture,
      roughness: 0.35,
      metalness: 0.5
    });

    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    this.group.add(floorMesh);

    // Glifo de aparición del jugador en el suelo
    const ringGeo = new THREE.RingGeometry(1.2, 1.45, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      side: THREE.DoubleSide
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.set(this.playerStart.x, 0.03, this.playerStart.z);
    this.group.add(ringMesh);
  }

  private buildWalls(): void {
    const half = this.arenaSize / 2;
    const wallThickness = 1.2;

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.5,
      metalness: 0.4
    });

    const neonCyan = new THREE.MeshBasicMaterial({
      color: 0x00f3ff
    });

    const neonCrimson = new THREE.MeshBasicMaterial({
      color: 0xff0055
    });

    // 4 paredes perimetrales
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

      // Franja de neón horizontal doble
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
      stripMesh2.position.set(cfg.pos[0], 4.2, cfg.pos[2]);
      this.group.add(stripMesh2);

      mesh.updateWorldMatrix(true, false);
      const box = new THREE.Box3().setFromObject(mesh);
      this.obstacles.push(box);
    });

    // 4 Columnas angulares en las esquinas con balizas de luz
    const corners = [
      [-half, -half],
      [half, -half],
      [-half, half],
      [half, half]
    ];
    corners.forEach(([cx, cz]) => {
      const colGeo = new THREE.BoxGeometry(2, this.wallHeight + 1, 2);
      const colMesh = new THREE.Mesh(colGeo, wallMat);
      colMesh.position.set(cx, (this.wallHeight + 1) / 2, cz);
      this.group.add(colMesh);

      // Baliza de neón superior
      const beaconGeo = new THREE.CylinderGeometry(0.3, 0.3, 1.2, 8);
      const beacon = new THREE.Mesh(beaconGeo, neonCyan);
      beacon.position.set(cx, this.wallHeight + 1, cz);
      this.group.add(beacon);
    });
  }

  private buildCovers(): void {
    const coverPositions = [
      { x: -6, z: 0, w: 2.2, h: 2.5, d: 2.2 },
      { x: 6, z: 0, w: 2.2, h: 2.5, d: 2.2 },
      { x: -7, z: -7, w: 2.5, h: 2.0, d: 2.5 },
      { x: 7, z: -7, w: 2.5, h: 2.0, d: 2.5 },
      { x: 0, z: -3, w: 4.0, h: 1.5, d: 1.6 }
    ];

    const coverMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.4,
      metalness: 0.6
    });

    const neonTrimMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff
    });

    coverPositions.forEach((cp) => {
      const geo = new THREE.BoxGeometry(cp.w, cp.h, cp.d);
      const mesh = new THREE.Mesh(geo, coverMat);
      mesh.position.set(cp.x, cp.h / 2, cp.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.group.add(mesh);

      // Ribete superior brillante
      const trimGeo = new THREE.BoxGeometry(cp.w * 0.95, 0.12, cp.d * 0.95);
      const trim = new THREE.Mesh(trimGeo, neonTrimMat);
      trim.position.set(cp.x, cp.h + 0.06, cp.z);
      this.group.add(trim);

      mesh.updateWorldMatrix(true, false);
      const box = new THREE.Box3().setFromObject(mesh);
      this.obstacles.push(box);
    });
  }

  private setupLighting(): void {
    // 1. Hemisphere Light para iluminar suelo y cielo con gradiente cibernético
    const hemiLight = new THREE.HemisphereLight(0x60a5fa, 0x1e293b, 1.8);
    this.group.add(hemiLight);

    // 2. Luz ambiental general
    const ambient = new THREE.AmbientLight(0x334155, 1.2);
    this.group.add(ambient);

    // 3. Luz direccional cenital con configuración precisa de sombras
    const dirLight = new THREE.DirectionalLight(0xe2e8f0, 2.8);
    dirLight.position.set(12, 24, 12);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 60;
    dirLight.shadow.camera.left = -22;
    dirLight.shadow.camera.right = 22;
    dirLight.shadow.camera.top = 22;
    dirLight.shadow.camera.bottom = -22;
    dirLight.shadow.bias = -0.0005;
    this.group.add(dirLight);

    // 4. Luces puntuales de alta potencia para dar reflejos vivos
    const p1 = new THREE.PointLight(0x00f3ff, 80, 25, 1.5);
    p1.position.set(-10, 4, -10);
    this.group.add(p1);

    const p2 = new THREE.PointLight(0x00f3ff, 80, 25, 1.5);
    p2.position.set(10, 4, -10);
    this.group.add(p2);

    const p3 = new THREE.PointLight(0xff0055, 100, 25, 1.5);
    p3.position.set(0, 4, -5);
    this.group.add(p3);

    const p4 = new THREE.PointLight(0x00f3ff, 60, 25, 1.5);
    p4.position.set(0, 4, 10);
    this.group.add(p4);
  }

  private setupSpawnPoints(): void {
    this.spawnPoints = [
      new THREE.Vector3(-10, 1.3, -10),
      new THREE.Vector3(0, 1.3, -11),
      new THREE.Vector3(10, 1.3, -10),
      new THREE.Vector3(-11, 1.3, -2),
      new THREE.Vector3(11, 1.3, -2),
      new THREE.Vector3(-7, 1.3, 5),
      new THREE.Vector3(7, 1.3, 5)
    ];
  }

  public resolveCollision(pos: THREE.Vector3, radius: number = 0.5): THREE.Vector3 {
    const half = this.arenaSize / 2 - 0.7;

    // Límites perimetrales de la arena
    pos.x = Math.max(-half, Math.min(half, pos.x));
    pos.z = Math.max(-half, Math.min(half, pos.z));

    // Obstáculos internos
    for (const box of this.obstacles) {
      const expandedBox = box.clone().expandByScalar(radius);
      // Solo colisionar si está en el rango vertical del obstáculo
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
