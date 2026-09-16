import * as THREE from 'three';
import { EnemyManager, EnemyType } from '../enemies/EnemyManager';
import { Arena } from '../world/Arena';
import { AudioManager } from '../audio/AudioManager';
import { ScoreManager } from './ScoreManager';
import { Player } from '../entities/Player';
import { UIManager } from '../ui/UIManager';

export interface PhaseConfig {
  phaseNumber: number;
  sectorName: string;
  threatLevel: string;
  enemies: { type: EnemyType; count: number }[];
  clearBonusHealth: number;
  clearBonusScore: number;
}

export class WaveManager {
  private enemyManager: EnemyManager;
  private arena: Arena;
  private audioManager: AudioManager;
  private scoreManager: ScoreManager;
  private player: Player;
  private uiManager: UIManager;

  public currentPhaseIndex: number = 0;
  public isInStore: boolean = false;
  public onOpenStore?: () => void;
  public onEnemyKilledCallback?: (enemy: any, isHeadshot: boolean) => void;
  private isIntermission: boolean = true;
  private intermissionTimer: number = 3.0;
  private spawnQueue: EnemyType[] = [];
  private spawnTimer: number = 0;
  private spawnInterval: number = 0.55;

  private totalEnemiesInPhase: number = 0;
  private enemiesDefeatedInPhase: number = 0;

  // Lista estructurada de Fases Arcade Temáticas de Ciberseguridad
  private phases: PhaseConfig[] = [
    {
      phaseNumber: 1,
      sectorName: 'L1/L2 CACHE // DETECCIÓN INICIAL',
      threatLevel: 'NIVEL 1: BAJO',
      enemies: [{ type: 'virus', count: 4 }],
      clearBonusHealth: 30,
      clearBonusScore: 500
    },
    {
      phaseNumber: 2,
      sectorName: 'MEMORY BUS // BANCOS DE RAM',
      threatLevel: 'NIVEL 2: MODERADO',
      enemies: [
        { type: 'virus', count: 5 },
        { type: 'worm', count: 3 }
      ],
      clearBonusHealth: 30,
      clearBonusScore: 800
    },
    {
      phaseNumber: 3,
      sectorName: 'FILE SYSTEM CLUSTERS // ALMACENAMIENTO',
      threatLevel: 'NIVEL 3: ELEVADO',
      enemies: [
        { type: 'virus', count: 6 },
        { type: 'worm', count: 3 },
        { type: 'trojan', count: 2 }
      ],
      clearBonusHealth: 35,
      clearBonusScore: 1200
    },
    {
      phaseNumber: 4,
      sectorName: 'KERNEL OVERLOAD // NÚCLEO DEL SO',
      threatLevel: 'NIVEL 4: CRÍTICO',
      enemies: [
        { type: 'virus', count: 8 },
        { type: 'worm', count: 5 },
        { type: 'trojan', count: 2 }
      ],
      clearBonusHealth: 40,
      clearBonusScore: 1800
    },
    {
      phaseNumber: 5,
      sectorName: 'SYSTEM CORE // RANSOMWARE LOCKDOWN',
      threatLevel: 'NIVEL 5: ALERTA ROJA',
      enemies: [
        { type: 'ransomware', count: 1 },
        { type: 'virus', count: 4 },
        { type: 'worm', count: 2 }
      ],
      clearBonusHealth: 50,
      clearBonusScore: 3000
    }
  ];

  constructor(
    enemyManager: EnemyManager,
    arena: Arena,
    audioManager: AudioManager,
    scoreManager: ScoreManager,
    player: Player,
    uiManager: UIManager
  ) {
    this.enemyManager = enemyManager;
    this.arena = arena;
    this.audioManager = audioManager;
    this.scoreManager = scoreManager;
    this.player = player;
    this.uiManager = uiManager;

    this.enemyManager.onEnemyKilled = (enemy, isHeadshot) => {
      this.scoreManager.registerKill(isHeadshot);
      this.enemiesDefeatedInPhase++;
      this.updateHudStatus();
      this.onEnemyKilledCallback?.(enemy, isHeadshot);
    };
  }

  public start(): void {
    this.currentPhaseIndex = 0;
    this.isIntermission = true;
    this.intermissionTimer = 2.5;
    this.preparePhase(this.currentPhaseIndex);
  }

  public reset(): void {
    this.enemyManager.clearAll();
    this.spawnQueue = [];
    this.start();
  }

  public stop(): void {
    this.spawnQueue = [];
    this.enemyManager.clearAll();
  }

  public restartCurrentPhase(): void {
    this.enemyManager.clearAll();
    this.spawnQueue = [];
    this.isIntermission = true;
    this.intermissionTimer = 1.5;
    this.preparePhase(this.currentPhaseIndex);
  }

  private preparePhase(index: number): void {
    let config: PhaseConfig;

    if (index < this.phases.length) {
      config = this.phases[index];
    } else {
      // Escalado procedural infinito más allá de la fase 5
      const num = index + 1;
      config = {
        phaseNumber: num,
        sectorName: `SECTOR PROFUNDO // NIVEL DE INFECCIÓN ${num}`,
        threatLevel: 'NIVEL OMEGA: INVASIÓN MASIVA',
        enemies: [
          { type: 'virus', count: 6 + num },
          { type: 'worm', count: 4 + Math.floor(num / 2) },
          { type: 'trojan', count: 2 + Math.floor(num / 3) }
        ],
        clearBonusHealth: 35,
        clearBonusScore: 2000
      };
    }

    this.spawnQueue = [];
    this.totalEnemiesInPhase = 0;
    this.enemiesDefeatedInPhase = 0;

    config.enemies.forEach((entry) => {
      for (let i = 0; i < entry.count; i++) {
        this.spawnQueue.push(entry.type);
        this.totalEnemiesInPhase++;
      }
    });

    // Mezclar cola de spawn para variedad
    this.shuffleArray(this.spawnQueue);

    this.isIntermission = true;
    this.intermissionTimer = 3.5;

    this.uiManager.showCombatAlert(
      `FASE ${config.phaseNumber}: ${config.sectorName}`,
      'headshot'
    );
    this.updateHudStatus();
  }

  public update(delta: number): void {
    if (this.isInStore) {
      return; // Detenido mientras el jugador compra mejoras
    }

    if (this.isIntermission) {
      this.intermissionTimer -= delta;
      const countSeconds = Math.ceil(this.intermissionTimer);
      this.uiManager.updateStatus(
        `FASE ${this.currentPhaseIndex + 1} // INICIANDO EN ${Math.max(1, countSeconds)}s`
      );

      if (this.intermissionTimer <= 0) {
        this.isIntermission = false;
        this.spawnTimer = 0;
        this.uiManager.showCombatAlert('¡AMENAZAS DETECTADAS! ELIMINA EL MALWARE', 'kill');
        this.updateHudStatus();
      }
      return;
    }

    // Spawning progresivo y escalonado de enemigos
    if (this.spawnQueue.length > 0) {
      this.spawnTimer -= delta;
      if (this.spawnTimer <= 0) {
        this.spawnTimer = this.spawnInterval;
        const nextType = this.spawnQueue.shift()!;
        this.spawnEnemyAtRandomPoint(nextType);
        this.updateHudStatus();
      }
    }

    // Verificar si la fase actual se ha completado
    if (this.spawnQueue.length === 0 && this.enemyManager.getActiveCount() === 0) {
      this.completePhase();
    }
  }

  private completePhase(): void {
    const config = this.getCurrentPhaseConfig();

    // 1. Auto-reparación y bonificación de puntos
    const oldHealth = this.player.health;
    this.player.health = Math.min(this.player.maxHealth, this.player.health + config.clearBonusHealth);
    const restored = Math.round(this.player.health - oldHealth);
    this.player.onHealthChange?.(this.player.health, this.player.maxHealth);

    this.scoreManager.registerKill(false); // Incremento de racha
    this.audioManager.playSectorCleared();

    this.uiManager.showCombatAlert(
      `¡SECTOR PURGADO! +${restored}% REPARACIÓN // +${config.clearBonusScore} PTS`,
      'combo'
    );

    // 2. Comprobar si cada 3 fases se debe abrir la Cyber Store
    const completedPhaseNum = this.currentPhaseIndex + 1;
    if (completedPhaseNum % 3 === 0 && this.onOpenStore) {
      this.isInStore = true;
      this.onOpenStore();
      return;
    }

    // Avanzar a la siguiente fase
    this.currentPhaseIndex++;
    this.preparePhase(this.currentPhaseIndex);
  }

  public continueAfterStore(): void {
    this.isInStore = false;
    this.currentPhaseIndex++;
    this.preparePhase(this.currentPhaseIndex);
  }

  private spawnEnemyAtRandomPoint(type: EnemyType): void {
    const points = this.arena.spawnPoints;
    const p = points[Math.floor(Math.random() * points.length)].clone();

    // Pequeño desplazamiento aleatorio para evitar superposición
    p.x += (Math.random() - 0.5) * 1.5;
    p.z += (Math.random() - 0.5) * 1.5;

    const enemy = this.enemyManager.spawnEnemy(type, p);

    // Escalado de dificultad dinámico: Cada ciclo de 3 fases aumenta HP (+25%) y Velocidad (+10%)
    const difficultyCycle = Math.floor(this.currentPhaseIndex / 3);
    if (difficultyCycle > 0) {
      const hpMult = 1 + difficultyCycle * 0.25;
      const speedMult = 1 + difficultyCycle * 0.10;
      enemy.config.maxHealth = Math.round(enemy.config.maxHealth * hpMult);
      enemy.health = enemy.config.maxHealth;
      enemy.config.speed = Number((enemy.config.speed * speedMult).toFixed(2));
    }
  }

  public getCurrentPhaseConfig(): PhaseConfig {
    if (this.currentPhaseIndex < this.phases.length) {
      return this.phases[this.currentPhaseIndex];
    }
    return {
      phaseNumber: this.currentPhaseIndex + 1,
      sectorName: `SECTOR PROFUNDO // NÚCLEO KERNEL`,
      threatLevel: 'NIVEL CRÍTICO',
      enemies: [],
      clearBonusHealth: 35,
      clearBonusScore: 2000
    };
  }

  private updateHudStatus(): void {
    const config = this.getCurrentPhaseConfig();
    const remaining = this.spawnQueue.length + this.enemyManager.getActiveCount();
    this.uiManager.updateStatus(
      `FASE ${config.phaseNumber} // ${config.sectorName} (AMENAZAS: ${remaining})`
    );
  }

  private shuffleArray(array: EnemyType[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
