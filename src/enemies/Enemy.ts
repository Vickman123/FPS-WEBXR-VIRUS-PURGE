import * as THREE from 'three';

export enum EnemyState {
  IDLE = 'IDLE',
  CHASE = 'CHASE',
  ATTACK = 'ATTACK',
  HURT = 'HURT',
  DEAD = 'DEAD'
}

export interface EnemyConfig {
  name: string;
  maxHealth: number;
  speed: number;
  damage: number;
  attackRange: number;
  attackCooldown: number;
}

export abstract class Enemy {
  public config: EnemyConfig;
  public health: number;
  public state: EnemyState = EnemyState.CHASE;
  public isDead: boolean = false;

  public model: THREE.Group;
  public hitboxes: THREE.Mesh[] = [];

  protected attackTimer: number = 0;
  protected hurtTimer: number = 0;
  protected targetPosition: THREE.Vector3 = new THREE.Vector3();

  // Callbacks
  public onTakeDamage?: (damage: number, isHeadshot: boolean) => void;
  public onDie?: (enemy: Enemy, isHeadshot: boolean) => void;
  public onAttackPlayer?: (damage: number) => void;

  constructor(config: EnemyConfig) {
    this.config = config;
    this.health = config.maxHealth;
    this.model = new THREE.Group();
  }

  public getPosition(): THREE.Vector3 {
    return this.model.position;
  }

  public takeDamage(amount: number, isHeadshot: boolean): void {
    if (this.isDead) return;

    this.health -= amount;
    this.hurtTimer = 0.1;
    this.state = EnemyState.HURT;

    if (this.onTakeDamage) {
      this.onTakeDamage(amount, isHeadshot);
    }

    if (this.health <= 0) {
      this.health = 0;
      this.die(isHeadshot);
    }
  }

  protected die(isHeadshot: boolean): void {
    if (this.isDead) return;
    this.isDead = true;
    this.state = EnemyState.DEAD;

    if (this.onDie) {
      this.onDie(this, isHeadshot);
    }
  }

  public abstract update(delta: number, playerPosition: THREE.Vector3): void;
}
