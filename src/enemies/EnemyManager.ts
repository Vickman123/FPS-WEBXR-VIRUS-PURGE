import * as THREE from 'three';
import { Enemy } from './Enemy';
import { VirusDrone } from './VirusDrone';
import { ParticleSystem } from '../systems/ParticleSystem';
import { AudioManager } from '../audio/AudioManager';

export class EnemyManager {
  private scene: THREE.Scene;
  private particleSystem: ParticleSystem;
  private audioManager: AudioManager;
  public enemies: Enemy[] = [];

  // Callbacks
  public onEnemyKilled?: (enemy: Enemy, isHeadshot: boolean) => void;
  public onPlayerDamaged?: (amount: number) => void;

  constructor(scene: THREE.Scene, particleSystem: ParticleSystem, audioManager: AudioManager) {
    this.scene = scene;
    this.particleSystem = particleSystem;
    this.audioManager = audioManager;
  }

  public spawnDrone(position: THREE.Vector3): Enemy {
    const drone = new VirusDrone(position);

    drone.onDie = (enemy, isHeadshot) => {
      this.handleEnemyDeath(enemy, isHeadshot);
    };

    drone.onAttackPlayer = (damage) => {
      if (this.onPlayerDamaged) {
        this.onPlayerDamaged(damage);
      }
    };

    this.enemies.push(drone);
    this.scene.add(drone.model);
    return drone;
  }

  private handleEnemyDeath(enemy: Enemy, isHeadshot: boolean): void {
    // Generar partículas de desintegración
    this.particleSystem.emitEnemyDisintegration(enemy.getPosition());
    // Sonido de muerte
    this.audioManager.playEnemyDeath();

    // Eliminar de Three.js escena
    this.scene.remove(enemy.model);

    // Notificar al ScoreManager / WaveManager
    if (this.onEnemyKilled) {
      this.onEnemyKilled(enemy, isHeadshot);
    }

    // Remover del arreglo
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
  }
}
