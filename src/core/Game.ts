import * as THREE from 'three';
import { GameState, GameStateEnum } from './GameState';
import { InputManager } from '../input/InputManager';
import { DesktopInput } from '../input/DesktopInput';
import { Arena } from '../world/Arena';
import { Player } from '../entities/Player';
import { WeaponManager } from '../weapons/WeaponManager';
import { EnemyManager } from '../enemies/EnemyManager';
import { DamageSystem } from '../systems/DamageSystem';
import { ParticleSystem } from '../systems/ParticleSystem';
import { ScoreManager } from '../systems/ScoreManager';
import { AudioManager } from '../audio/AudioManager';
import { UIManager } from '../ui/UIManager';

export class Game {
  public renderer: THREE.WebGLRenderer;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  private clock: THREE.Clock;

  // Sistemas principales
  public gameState: GameState;
  public inputManager: InputManager;
  public desktopInput: DesktopInput;
  public arena: Arena;
  public particleSystem: ParticleSystem;
  public audioManager: AudioManager;
  public scoreManager: ScoreManager;
  public weaponManager: WeaponManager;
  public enemyManager: EnemyManager;
  public damageSystem: DamageSystem;
  public player: Player;
  public uiManager: UIManager;

  private enemySpawnTimer: number = 0;

  constructor() {
    this.clock = new THREE.Clock();

    // 1. Three.js Renderer con Tone Mapping de alta gama
    const container = document.getElementById('game-container')!;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;
    this.renderer.xr.enabled = true;
    container.appendChild(this.renderer.domElement);

    // 2. Escena y fondo atmosférico sci-fi
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a1120);
    this.scene.fog = new THREE.FogExp2(0x0a1120, 0.012);

    // 3. Cámara principal
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 150);
    // ¡CRÍTICO: Agregar la cámara a la escena para que los objetos hijos (el arma) se rendericen!
    this.scene.add(this.camera);

    // 4. Instanciar subsistemas independientes
    this.gameState = new GameState();
    this.audioManager = new AudioManager();
    this.scoreManager = new ScoreManager();
    this.uiManager = new UIManager();
    this.particleSystem = new ParticleSystem();
    this.scene.add(this.particleSystem.group);

    this.arena = new Arena();
    this.scene.add(this.arena.group);

    // 5. Sistema de entrada desacoplado
    this.desktopInput = new DesktopInput(this.renderer.domElement);
    this.inputManager = new InputManager(this.desktopInput);

    // 6. Armas y Jugador
    this.weaponManager = new WeaponManager();
    this.player = new Player(this.camera, this.inputManager, this.arena, this.weaponManager);

    // 7. Sistema de Enemigos
    this.enemyManager = new EnemyManager(this.scene, this.particleSystem, this.audioManager);

    // 8. Sistema de Daño
    this.damageSystem = new DamageSystem(
      this.enemyManager,
      this.particleSystem,
      this.audioManager,
      this.scoreManager,
      this.arena
    );

    // 9. Enlazar eventos y callbacks
    this.setupEventBindings();

    // 10. Actualizar valores iniciales del HUD
    const weapon = this.weaponManager.getActiveWeapon();
    this.uiManager.updateHealth(this.player.health, this.player.maxHealth);
    this.uiManager.updateAmmo(weapon.currentAmmo, weapon.config.magSize);
    this.uiManager.updateScore(0);
    this.uiManager.updateCombo(1.0);

    // 11. Spawn inicial visible frente al jugador
    this.spawnInitialTargets();

    // 12. Redimensionamiento de ventana
    window.addEventListener('resize', this.onWindowResize.bind(this));

    // 13. Iniciar bucle de render (compatible con WebXR)
    this.renderer.setAnimationLoop(this.animate.bind(this));
  }

  private setupEventBindings(): void {
    // Click en botón de inicio o reintento
    this.uiManager.onStartClicked = () => {
      this.audioManager.init();

      if (this.gameState.getState() === GameStateEnum.GAME_OVER) {
        // Reiniciar partida
        this.restartGame();
      } else {
        this.desktopInput.requestLock();
        this.gameState.setState(GameStateEnum.PLAYING);
        this.uiManager.showOverlay(false);
      }
    };

    this.desktopInput.onLockChange = (locked) => {
      if (!locked && this.gameState.getState() === GameStateEnum.PLAYING) {
        this.gameState.setState(GameStateEnum.PAUSED);
        this.uiManager.showOverlay(true, 'PAUSA', 'CONTINUAR');
      } else if (locked && this.gameState.getState() === GameStateEnum.PAUSED) {
        this.gameState.setState(GameStateEnum.PLAYING);
        this.uiManager.showOverlay(false);
      }
    };

    // Eventos del arma
    const weapon = this.weaponManager.getActiveWeapon();
    weapon.onAmmoChange = (curr, max) => {
      this.uiManager.updateAmmo(curr, max);
    };
    weapon.onReloadStart = () => {
      this.audioManager.playReload();
      this.uiManager.showReloadIndicator(true);
    };
    weapon.onReloadEnd = () => {
      this.uiManager.showReloadIndicator(false);
    };

    // Eventos de daño e impacto
    this.damageSystem.onHitRegistered = (isHeadshot) => {
      this.uiManager.triggerHitmarker(isHeadshot);
    };

    // Eventos de puntuación
    this.scoreManager.onScoreUpdate = (score) => {
      this.uiManager.updateScore(score);
    };
    this.scoreManager.onComboUpdate = (combo) => {
      this.uiManager.updateCombo(combo);
    };
    this.scoreManager.onCombatAlert = (text, type) => {
      this.uiManager.showCombatAlert(text, type);
    };

    // Eventos de eliminación de enemigos
    this.enemyManager.onEnemyKilled = (_enemy, isHeadshot) => {
      this.scoreManager.registerKill(isHeadshot);
    };

    // Daño hacia el jugador
    this.enemyManager.onPlayerDamaged = (amount) => {
      this.player.takeDamage(amount);
      this.audioManager.playPlayerHurt();
      this.uiManager.triggerDamageFlash();
    };

    this.player.onHealthChange = (curr, max) => {
      this.uiManager.updateHealth(curr, max);
    };

    this.player.onDeath = () => {
      this.gameState.setState(GameStateEnum.GAME_OVER);
      const stats = this.scoreManager.getStats();
      this.uiManager.showOverlay(
        true,
        'SIMULACIÓN TERMINADA',
        `REINTENTAR // SCORE: ${stats.score} (ACC: ${stats.accuracy}%)`
      );
      if (document.pointerLockElement) {
        document.exitPointerLock();
      }
    };
  }

  private restartGame(): void {
    this.enemyManager.clearAll();
    this.player.respawn();
    this.scoreManager.reset();

    const weapon = this.weaponManager.getActiveWeapon();
    weapon.currentAmmo = weapon.config.magSize;
    weapon.isReloading = false;
    this.uiManager.updateAmmo(weapon.currentAmmo, weapon.config.magSize);
    this.uiManager.updateHealth(this.player.health, this.player.maxHealth);
    this.uiManager.resetVignette();

    this.spawnInitialTargets();
    this.desktopInput.requestLock();
    this.gameState.setState(GameStateEnum.PLAYING);
    this.uiManager.showOverlay(false);
  }

  private spawnInitialTargets(): void {
    // 3 Drones colocados claramente frente al jugador en z = 0 y z = -3
    this.enemyManager.spawnDrone(new THREE.Vector3(-4, 1.5, 0));
    this.enemyManager.spawnDrone(new THREE.Vector3(0, 1.5, -3));
    this.enemyManager.spawnDrone(new THREE.Vector3(4, 1.5, 0));
  }

  private handlePlayerInput(): void {
    const weapon = this.weaponManager.getActiveWeapon();

    // Disparo
    if (this.inputManager.consumeShootTriggered()) {
      if (weapon.canFire()) {
        weapon.fire();
        this.audioManager.playShot();

        const shootRay = this.player.getShootRay();
        this.damageSystem.processShot(shootRay.origin, shootRay.direction, weapon);
      } else if (weapon.currentAmmo === 0 && !weapon.isReloading) {
        this.audioManager.playDryFire();
      }
    }

    // Recarga
    if (this.inputManager.consumeReloadTriggered()) {
      weapon.reload();
    }
  }

  private animate(): void {
    const delta = Math.min(this.clock.getDelta(), 0.1);

    if (this.gameState.getState() === GameStateEnum.PLAYING) {
      this.inputManager.update(delta);
      this.handlePlayerInput();
      this.player.update(delta);
      this.weaponManager.update(delta);
      this.enemyManager.update(delta, this.player.position);

      if (this.enemyManager.getActiveCount() === 0) {
        this.enemySpawnTimer += delta;
        if (this.enemySpawnTimer >= 1.5) {
          this.enemySpawnTimer = 0;
          this.spawnWave();
        }
      }

      this.particleSystem.update(delta);
      this.scoreManager.update(delta);
      this.gameState.update(delta);
    } else {
      this.particleSystem.update(delta);
    }

    this.renderer.render(this.scene, this.camera);
  }

  private spawnWave(): void {
    const points = this.arena.spawnPoints;
    const count = Math.min(4, points.length);
    for (let i = 0; i < count; i++) {
      const p = points[Math.floor(Math.random() * points.length)];
      this.enemyManager.spawnDrone(p.clone());
    }
    this.uiManager.showCombatAlert('NUEVO ENJAMBRE DETECTADO', 'combo');
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
