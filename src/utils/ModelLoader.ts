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
        this.setupCleanMaterials(group);
      }).catch((err) => console.warn('[ModelLoader] Falló carga de Drone.glb:', err)),

      this.loadModel(wormPath).then((group) => {
        this.wormTemplate = group;
        this.setupCleanMaterials(group);
      }).catch((err) => console.warn('[ModelLoader] Falló carga de Worm.glb:', err)),

      this.loadModel(tankPath).then((group) => {
        this.tankTemplate = group;
        this.setupCleanMaterials(group);
      }).catch((err) => console.warn('[ModelLoader] Falló carga de Tank.glb:', err))
    ]).then(() => {
      this.isLoaded = true;
      console.log('[ModelLoader] ¡Modelos 3D de malware cargados con texturas originales y fidelidad total!');
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
   * Mantiene las texturas y colores originales del modelo 3D intactos,
   * sin tintes ni veladuras que cubran sus detalles reales.
   */
  private static setupCleanMaterials(root: THREE.Object3D): void {
    root.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          mats.forEach((m) => {
            if (m instanceof THREE.MeshStandardMaterial) {
              m.roughness = 0.5;
              m.metalness = 0.2;
              m.emissive = new THREE.Color(0x000000);
              m.emissiveIntensity = 0;
              if (m.map) {
                m.map.colorSpace = THREE.SRGBColorSpace;
                m.map.needsUpdate = true;
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
