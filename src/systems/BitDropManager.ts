import * as THREE from 'three';
import { BitDrop } from '../entities/BitDrop';
import { CurrencyManager } from './CurrencyManager';
import { AudioManager } from '../audio/AudioManager';
import { ParticleSystem } from './ParticleSystem';
import { EnemyType } from '../enemies/EnemyManager';

export class BitDropManager {
  private scene: THREE.Scene;
  private currencyManager: CurrencyManager;
  private audioManager: AudioManager;
  private particleSystem: ParticleSystem;

  private drops: BitDrop[] = [];

  constructor(
    scene: THREE.Scene,
    currencyManager: CurrencyManager,
    audioManager: AudioManager,
    particleSystem: ParticleSystem
  ) {
    this.scene = scene;
    this.currencyManager = currencyManager;
    this.audioManager = audioManager;
    this.particleSystem = particleSystem;
  }

  public spawnDrops(position: THREE.Vector3, enemyType: EnemyType): void {
    let dropCount = 1;
    let baseValue = 8;

    switch (enemyType) {
      case 'virus':
        dropCount = 1;
        baseValue = Math.floor(6 + Math.random() * 5); // 6 - 10
        break;
      case 'worm':
        dropCount = 2;
        baseValue = Math.floor(8 + Math.random() * 3); // ~16-20 en total
        break;
      case 'trojan':
        dropCount = 3;
        baseValue = Math.floor(14 + Math.random() * 5); // ~42-55 en total
        break;
      case 'ransomware':
        dropCount = 6;
        baseValue = Math.floor(30 + Math.random() * 12); // ~180-250 en total
        break;
    }

    for (let i = 0; i < dropCount; i++) {
      const dropPos = position.clone();
      dropPos.x += (Math.random() - 0.5) * 0.4;
      dropPos.z += (Math.random() - 0.5) * 0.4;
      dropPos.y = Math.max(0.4, dropPos.y);

      const drop = new BitDrop(dropPos, baseValue);
      this.drops.push(drop);
      this.scene.add(drop.model);
    }
  }

  public update(delta: number, playerPos: THREE.Vector3): void {
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const drop = this.drops[i];
      const collected = drop.update(delta, playerPos);

      if (collected) {
        // Recolectar
        this.currencyManager.addBits(drop.value);
        this.audioManager.playCoinPickup();
        this.particleSystem.emitImpactSparks(drop.model.position, new THREE.Vector3(0, 1, 0), false, true);

        this.scene.remove(drop.model);
        drop.dispose();
        this.drops.splice(i, 1);
      }
    }
  }

  public clearAll(): void {
    for (const drop of this.drops) {
      this.scene.remove(drop.model);
      drop.dispose();
    }
    this.drops = [];
  }
}
