import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class ModelLoader {
  private static loader: GLTFLoader = new GLTFLoader();
  private static droneTemplate: THREE.Group | null = null;
  private static wormTemplate: THREE.Group | null = null;
  private static tankTemplate: THREE.Group | null = null;

  public static isLoaded: boolean = false;
  private static loadPromise: Promise<void> | null = null;

  public static init(): Promise<void> {
    if (this.loadPromise) return this.loadPromise;

    const meta = import.meta as unknown as { env?: { BASE_URL?: string } };
    const baseUrl = meta.env?.BASE_URL || './';
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

    const dronePath = `${cleanBase}models/drone.glb`;
    const wormPath = `${cleanBase}models/worm.glb`;
    const tankPath = `${cleanBase}models/tank.glb`;

    this.loadPromise = Promise.all([
      this.loadModel(dronePath).then((group) => {
        this.droneTemplate = group;
        this.enhanceCyberMaterials(group, 0x00f3ff, 0.4);
      }).catch((err) => console.warn('[ModelLoader] Falló carga de Drone.glb:', err)),

      this.loadModel(wormPath).then((group) => {
        this.wormTemplate = group;
        this.enhanceCyberMaterials(group, 0xd946ef, 0.4);
      }).catch((err) => console.warn('[ModelLoader] Falló carga de Worm.glb:', err)),

      this.loadModel(tankPath).then((group) => {
        this.tankTemplate = group;
        this.enhanceCyberMaterials(group, 0x10b981, 0.35);
      }).catch((err) => console.warn('[ModelLoader] Falló carga de Tank.glb:', err))
    ]).then(() => {
      this.isLoaded = true;
      console.log('[ModelLoader] ¡Modelos 3D de malware cargados y optimizados con éxito!');
    });

    return this.loadPromise;
  }

  private static loadModel(url: string): Promise<THREE.Group> {
    return new Promise((resolve, reject) => {
      this.loader.load(
        url,
        (gltf) => resolve(gltf.scene),
        undefined,
        (error) => reject(error)
      );
    });
  }

  /**
   * Mejora estética cyberpunk: sombras, metalicidad y sutil brillo de neón
   */
  private static enhanceCyberMaterials(root: THREE.Object3D, accentColorHex: number, emissiveBoost: number = 0.3): void {
    root.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          mats.forEach((m) => {
            if (m instanceof THREE.MeshStandardMaterial) {
              m.roughness = Math.min(m.roughness, 0.45);
              m.metalness = Math.max(m.metalness, 0.55);
              // Tinte cibernético sutil en emissive para resaltar en la arena oscura
              if (!m.emissive || m.emissive.getHex() === 0x000000) {
                m.emissive = new THREE.Color(accentColorHex);
                m.emissiveIntensity = emissiveBoost;
              }
            }
          });
        }
      }
    });
  }

  public static getDroneModel(): THREE.Group | null {
    return this.droneTemplate ? this.droneTemplate.clone(true) : null;
  }

  public static getWormModel(): THREE.Group | null {
    return this.wormTemplate ? this.wormTemplate.clone(true) : null;
  }

  public static getTankModel(): THREE.Group | null {
    return this.tankTemplate ? this.tankTemplate.clone(true) : null;
  }
}
