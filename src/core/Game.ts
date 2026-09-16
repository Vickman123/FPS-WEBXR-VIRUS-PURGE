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
import { WaveManager } from '../systems/WaveManager';
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
  public waveManager: WaveManager;
  public player: Player;
  public uiManager: UIManager;

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

    // 2. Escena y fondo atmosférico de placa base (PCB)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060f1c);
    this.scene.fog = new THREE.FogExp2(0x060f1c, 0.012);

    // 3. Cámara principal
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 150);
    this.scene.add(this.camera);

    // 4. Instanciar subsistemas independientes
    this.gameState = new GameState();
    this.audioManager = new AudioManager();
    this.scoreManager = new ScoreManager();
    this.uiManager = new UIManager();
    this.particleSystem = new ParticleSystem();
    this.scene.add(this.particleSystem.group);

    // 5. Escenario Motherboard
    this.arena = new Arena();
    this.scene.add(this.arena.group);

    // 6. Sistema de entrada desacoplado
    this.desktopInput = new DesktopInput(this.renderer.domElement);
    this.inputManager = new InputManager(this.desktopInput);

    // 7. Armas y Jugador
    this.weaponManager = new WeaponManager();
    this.player = new Player(this.camera, this.inputManager, this.arena, this.weaponManager);

    // 8. Sistema de Enemigos
    this.enemyManager = new EnemyManager(this.scene, this.particleSystem, this.audioManager);

    // 9. Sistema de Daño
    this.damageSystem = new DamageSystem(
      this.enemyManager,
      this.particleSystem,
      this.audioManager,
      this.scoreManager,
      this.arena
    );

    // 10. Sistema de Oleadas / Fases Arcade (VIRUS PURGE)
    this.waveManager = new WaveManager(
      this.enemyManager,
      this.arena,
      this.audioManager,
      this.scoreManager,
      this.player,
      this.uiManager
    );

    // 11. Enlazar eventos y callbacks
    this.setupEventBindings();

    // 12. Actualizar valores iniciales del HUD
    const weapon = this.weaponManager.getActiveWeapon();
    this.uiManager.updateHealth(this.player.health, this.player.maxHealth);
    this.uiManager.updateAmmo(weapon.currentAmmo, weapon.config.magSize);
    this.uiManager.updateScore(0);
    this.uiManager.updateCombo(1.0);

    // 13. Redimensionamiento de ventana
    window.addEventListener('resize', this.onWindowResize.bind(this));

    // 14. Iniciar bucle de render
    this.renderer.setAnimationLoop(this.animate.bind(this));
  }

  private setupEventBindings(): void {
    // Click en botón de inicio o reintento
    this.uiManager.onStartClicked = () => {
      this.audioManager.init();

      if (this.gameState.getState() === GameStateEnum.GAME_OVER) {
        this.restartGame();
      } else {
        this.audioManager.playAlarm();
        this.desktopInput.requestLock();
        this.gameState.setState(GameStateEnum.PLAYING);
        this.uiManager.showOverlay(false);
        this.waveManager.start();
      }
    };

    this.desktopInput.onLockChange = (locked) => {
      if (!locked && this.gameState.getState() === GameStateEnum.PLAYING) {
        this.gameState.setState(GameStateEnum.PAUSED);
        this.uiManager.showOverlay(true, 'DEPURACIÓN EN PAUSA', 'CONTINUAR');
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

    // Daño hacia el jugador
    this.enemyManager.onPlayerDamaged = (amount) => {
      this.player.takeDamage(amount);
      this.audioManager.playPlayerHurt();
      this.uiManager.triggerDamageFlash();
    };

    // Eventos de Boss
    this.enemyManager.onBossHealthUpdate = (current, max) => {
      this.uiManager.showBossBar(true, 'RANSOMWARE.LOCKBIT.CORE // AMENAZA NIVEL 5');
      this.uiManager.updateBossHealth(current, max);
    };

    this.enemyManager.onBossKilled = () => {
      this.uiManager.showBossBar(false);
      this.uiManager.showCombatAlert('¡NÚCLEO RANSOMWARE PURGADO!', 'headshot');
    };

    this.player.onHealthChange = (curr, max) => {
      this.uiManager.updateHealth(curr, max);
    };

    this.player.onDeath = () => {
      this.gameState.setState(GameStateEnum.GAME_OVER);
      const stats = this.scoreManager.getStats();
      this.uiManager.showBossBar(false);
      this.uiManager.showOverlay(
        true,
        'SISTEMA COMPROMETIDO',
        `REINICIAR PROTOCOLO // SCORE: ${stats.score} (ACC: ${stats.accuracy}%)`
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
    this.uiManager.showBossBar(false);

    this.desktopInput.requestLock();
    this.gameState.setState(GameStateEnum.PLAYING);
    this.uiManager.showOverlay(false);
    this.waveManager.reset();
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
      this.waveManager.update(delta);

      this.particleSystem.update(delta);
      this.scoreManager.update(delta);
      this.gameState.update(delta);
    } else {
      this.particleSystem.update(delta);
    }

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
