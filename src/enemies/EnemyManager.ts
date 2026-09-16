import * as THREE from 'three';
import { Enemy } from './Enemy';
import { VirusDrone } from './VirusDrone';
import { WormSpreader } from './WormSpreader';
import { TrojanCarrier } from './TrojanCarrier';
import { RansomwareBoss } from './RansomwareBoss';
import { ParticleSystem } from '../systems/ParticleSystem';
import { AudioManager } from '../audio/AudioManager';

export type EnemyType = 'virus' | 'worm' | 'trojan' | 'ransomware';

export class EnemyManager {
  private scene: THREE.Scene;
  private particleSystem: ParticleSystem;
  private audioManager: AudioManager;
  public enemies: Enemy[] = [];
  public activeBoss: RansomwareBoss | null = null;

  // Callbacks
  public onEnemyKilled?: (enemy: Enemy, isHeadshot: boolean) => void;
  public onPlayerDamaged?: (amount: number) => void;
  public onBossHealthUpdate?: (current: number, max: number) => void;
  public onBossKilled?: () => void;

  constructor(scene: THREE.Scene, particleSystem: ParticleSystem, audioManager: AudioManager) {
    this.scene = scene;
    this.particleSystem = particleSystem;
    this.audioManager = audioManager;
  }

  public spawnEnemy(type: EnemyType, position: THREE.Vector3): Enemy {
    let enemy: Enemy;

    switch (type) {
      case 'worm':
        enemy = new WormSpreader(position);
        break;
      case 'trojan':
        enemy = new TrojanCarrier(position);
        break;
      case 'ransomware':
        const boss = new RansomwareBoss(position);
        this.activeBoss = boss;
        this.audioManager.playBossSpawn();
        enemy = boss;
        break;
      case 'virus':
      default:
        enemy = new VirusDrone(position);
        break;
    }

    enemy.onTakeDamage = (_dmg, _headshot) => {
      if (enemy === this.activeBoss && this.onBossHealthUpdate) {
        this.onBossHealthUpdate(enemy.health, enemy.config.maxHealth);
      }
    };

    enemy.onDie = (deadEnemy, isHeadshot) => {
      this.handleEnemyDeath(deadEnemy, isHeadshot);
    };

    enemy.onAttackPlayer = (damage) => {
      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(damage);
      }
    };

    this.enemies.push(enemy);
    this.scene.add(enemy.model);
    return enemy;
  }

  public spawnDrone(position: THREE.Vector3): Enemy {
    return this.spawnEnemy('virus', position);
  }

  private handleEnemyDeath(enemy: Enemy, isHeadshot: boolean): void {
    const isBoss = enemy instanceof RansomwareBoss;
    this.particleSystem.emitEnemyDisintegration(enemy.getPosition(), isBoss);
    this.audioManager.playEnemyDeath();

    this.scene.remove(enemy.model);

    if (isBoss) {
      this.activeBoss = null;
      if (this.onBossKilled) {
        this.onBossKilled();
      }
    }

    if (this.onEnemyKilled) {
      this.onEnemyKilled(enemy, isHeadshot);
    }

    const index = this.enemies.indexOf(enemy);
    if (index !== -1) {
      this.enemies.splice(index, 1);
    }
  }

  public update(delta: number, playerPosition: THREE.Vector3): void {
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      if (!enemy.isDead) {
        enemy.update(delta, playerPosition);
      }
    }
  }

  public getAllHitboxes(): THREE.Mesh[] {
    const hitboxes: THREE.Mesh[] = [];
    for (const enemy of this.enemies) {
      if (!enemy.isDead) {
        hitboxes.push(...enemy.hitboxes);
      }
    }
    return hitboxes;
  }

  public getActiveCount(): number {
    return this.enemies.filter(e => !e.isDead).length;
  }

  public clearAll(): void {
    for (const enemy of this.enemies) {
      this.scene.remove(enemy.model);
    }
    this.enemies = [];
    this.activeBoss = null;
  }
}
