import * as THREE from 'three';

interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  scaleDown: boolean;
}

interface Tracer {
  line: THREE.Line;
  life: number;
  maxLife: number;
}

export class ParticleSystem {
  public group: THREE.Group;
  private particles: Particle[] = [];
  private tracers: Tracer[] = [];

  private sparkGeo: THREE.BoxGeometry;
  private sparkMatCyan: THREE.MeshBasicMaterial;
  private sparkMatCrimson: THREE.MeshBasicMaterial;
  private sparkMatOrange: THREE.MeshBasicMaterial;

  constructor() {
    this.group = new THREE.Group();

    this.sparkGeo = new THREE.BoxGeometry(0.06, 0.06, 0.06);
    this.sparkMatCyan = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    this.sparkMatCrimson = new THREE.MeshBasicMaterial({ color: 0xff0055 });
    this.sparkMatOrange = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
  }

  /**
   * Crea un trazador de disparo desde el arma hasta el punto de impacto
   */
  public createBulletTracer(from: THREE.Vector3, to: THREE.Vector3, isHeadshot: boolean = false): void {
    const points = [from.clone(), to.clone()];
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
      color: isHeadshot ? 0xff0055 : 0x00f3ff,
      linewidth: 2,
      transparent: true,
      opacity: 0.95
    });

    const line = new THREE.Line(geo, mat);
    this.group.add(line);
    this.tracers.push({
      line,
      life: 0.08,
      maxLife: 0.08
    });
  }

  /**
   * Genera chispas de impacto táctico en una superficie
   */
  public emitImpactSparks(position: THREE.Vector3, normal: THREE.Vector3, isEnemy: boolean = false, isHeadshot: boolean = false): void {
    const count = isHeadshot ? 16 : isEnemy ? 10 : 6;
    const mat = isHeadshot ? this.sparkMatCrimson : isEnemy ? this.sparkMatOrange : this.sparkMatCyan;

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.sparkGeo, mat);
      mesh.position.copy(position);

      // Velocidad aleatoria dispersada alrededor de la normal
      const vel = normal.clone().multiplyScalar(2 + Math.random() * 3);
      vel.x += (Math.random() - 0.5) * 4;
      vel.y += (Math.random() - 0.5) * 4;
      vel.z += (Math.random() - 0.5) * 4;

      this.group.add(mesh);
      this.particles.push({
        mesh,
        velocity: vel,
        life: 0.25 + Math.random() * 0.15,
        maxLife: 0.4,
        scaleDown: true
      });
    }
  }

  /**
   * Desintegración cibernética del enemigo al morir
   */
  public emitEnemyDisintegration(position: THREE.Vector3, isBoss: boolean = false): void {
    const count = isBoss ? 50 : 25;
    for (let i = 0; i < count; i++) {
      const isRed = Math.random() > 0.4;
      const mat = isRed ? this.sparkMatCrimson : this.sparkMatCyan;
      const size = 0.08 + Math.random() * 0.1;
      const geo = new THREE.BoxGeometry(size, size, size);
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        position.x + (Math.random() - 0.5) * 0.6,
        position.y + (Math.random() - 0.5) * 0.6,
        position.z + (Math.random() - 0.5) * 0.6
      );

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 7,
        Math.random() * 5 + 1.5,
        (Math.random() - 0.5) * 7
      );

      this.group.add(mesh);
      this.particles.push({
        mesh,
        velocity: vel,
        life: 0.5 + Math.random() * 0.4,
        maxLife: 0.9,
        scaleDown: true
      });
    }
  }

  public update(delta: number): void {
    // 1. Actualizar partículas
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= delta;

      if (p.life <= 0) {
        this.group.remove(p.mesh);
        p.mesh.geometry.dispose();
        this.particles.splice(i, 1);
        continue;
      }

      // Gravedad y movimiento
      p.velocity.y -= 9.8 * delta;
      p.mesh.position.addScaledVector(p.velocity, delta);

      // Encogerse gradualmente
      if (p.scaleDown) {
        const progress = p.life / p.maxLife;
        p.mesh.scale.setScalar(Math.max(0.01, progress));
      }
    }

    // 2. Actualizar trazadores de balas
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      t.life -= delta;

      if (t.life <= 0) {
        this.group.remove(t.line);
        t.line.geometry.dispose();
        (t.line.material as THREE.Material).dispose();
        this.tracers.splice(i, 1);
      } else {
        const mat = t.line.material as THREE.LineBasicMaterial;
        mat.opacity = t.life / t.maxLife;
      }
    }
  }
}
