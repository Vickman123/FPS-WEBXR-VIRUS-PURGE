import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { GameState, GameStateEnum } from './GameState';
import { InputManager } from '../input/InputManager';
import { DesktopInput } from '../input/DesktopInput';
import { VRInput } from '../input/VRInput';
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
import { VRWristHUD } from '../ui/VRWristHUD';

export class Game {
  public renderer: THREE.WebGLRenderer;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  private clock: THREE.Clock;

  // Sistemas principales
  public gameState: GameState;
  public inputManager: InputManager;
  public desktopInput: DesktopInput;
  public vrInput: VRInput;
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
  public vrWristHUD: VRWristHUD;

  public isVRActive: boolean = false;

  constructor() {
    this.clock = new THREE.Clock();

    // 1. WebGLRenderer optimizado para 72/90 FPS en Meta Quest (sin sombras pesadas ni sobrecoste)
    const container = document.getElementById('game-container')!;
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'mediump' // Precisión optimizada para GPUs móviles Adreno (Quest)
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    // Desactivar mapas de sombras en tiempo real para evitar renderizar 2 veces por ojo a 2048px
    this.renderer.shadowMap.enabled = false;
    // LinearToneMapping es mucho más rápido que ACESFilmic en visores autónomos
    this.renderer.toneMapping = THREE.LinearToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.renderer.xr.enabled = true;
    container.appendChild(this.renderer.domElement);

    // 2. Escena
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060f1c);
    this.scene.fog = new THREE.FogExp2(0x060f1c, 0.012);

    // 3. Cámara
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 120);

    // 4. Instanciar subsistemas
    this.gameState = new GameState();
    this.audioManager = new AudioManager();
    this.scoreManager = new ScoreManager();
    this.uiManager = new UIManager();
    this.particleSystem = new ParticleSystem();
    this.scene.add(this.particleSystem.group);

    this.arena = new Arena();
    this.scene.add(this.arena.group);

    // 5. Sistema de entrada
    this.desktopInput = new DesktopInput(this.renderer.domElement);
    this.inputManager = new InputManager(this.desktopInput);

    // 6. Armas y Jugador con Rig de VR (playerGroup)
    this.weaponManager = new WeaponManager();
    this.player = new Player(this.camera, this.inputManager, this.arena, this.weaponManager);
    this.scene.add(this.player.playerGroup);

    // 7. Input y HUD de WebXR
    this.vrInput = new VRInput(this.renderer, this.player.playerGroup, this.camera);
    this.vrWristHUD = new VRWristHUD();

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

    // 10. Sistema de Oleadas Arcade
    this.waveManager = new WaveManager(
      this.enemyManager,
      this.arena,
      this.audioManager,
      this.scoreManager,
      this.player,
      this.uiManager
    );

    // 11. Botón WebXR
    this.setupWebXRButton();

    // 12. Enlazar eventos
    this.setupEventBindings();

    // 13. Valores iniciales
    const weapon = this.weaponManager.getActiveWeapon();
    this.uiManager.updateHealth(this.player.health, this.player.maxHealth);
    this.uiManager.updateAmmo(weapon.currentAmmo, weapon.config.magSize);
    this.uiManager.updateScore(0);
    this.uiManager.updateCombo(1.0);

    window.addEventListener('resize', this.onWindowResize.bind(this));

    this.renderer.setAnimationLoop(this.animate.bind(this));
  }

  private setupWebXRButton(): void {
    const vrBtn = VRButton.createButton(this.renderer);
    vrBtn.id = 'vr-button-meta';
    document.body.appendChild(vrBtn);

    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
        const vrStatus = document.getElementById('vr-status');
        if (vrStatus) {
          if (supported) {
            vrStatus.innerHTML = '🟢 <strong>DISPOSITIVO VR META QUEST DETECTADO</strong> // Presiona "ENTER VR" abajo para entrar';
            vrStatus.style.color = '#00f3ff';
          } else {
            vrStatus.innerHTML = 'WebXR listo para cascos VR (Meta Quest Browser / PCVR)';
          }
        }
      }).catch(() => {});
    }

    this.renderer.xr.addEventListener('sessionstart', () => {
      console.log('[VIRUS PURGE] WebXR immersive-vr session started!');
      this.isVRActive = true;
      this.audioManager.init();
      this.audioManager.playAlarm();

      const session = this.renderer.xr.getSession();
      if (session) {
        // Solicitar tasa de refresco óptima a 72Hz o 90Hz para Meta Quest
        const supportedRates = (session as unknown as { supportedFrameRates?: Float32Array }).supportedFrameRates;
        const updateRate = (session as unknown as { updateTargetFrameRate?: (r: number) => Promise<void> }).updateTargetFrameRate;
        if (supportedRates && updateRate) {
          const rates = Array.from(supportedRates);
          if (rates.includes(72)) {
            updateRate.call(session, 72).catch(() => {});
          } else if (rates.includes(90)) {
            updateRate.call(session, 90).catch(() => {});
          }
        }
      }

      this.inputManager.setSource(this.vrInput);
      this.player.setVRMode(true, this.vrInput);
      if (this.vrInput.leftGrip) {
        this.vrWristHUD.attachTo(this.vrInput.leftGrip);
      }
      this.vrInput.onLeftControllerReady = (_controller, grip) => {
        this.vrWristHUD.attachTo(grip);
      };

      this.gameState.setState(GameStateEnum.PLAYING);
      this.uiManager.showOverlay(false);

      this.waveManager.start();
    });

    this.renderer.xr.addEventListener('sessionend', () => {
      console.log('[VIRUS PURGE] WebXR session ended');
      this.isVRActive = false;

      this.inputManager.setSource(this.desktopInput);
      this.player.setVRMode(false);

      this.gameState.setState(GameStateEnum.MAIN_MENU);
      this.uiManager.showOverlay(true);
    });
  }

  private setupEventBindings(): void {
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
      if (this.isVRActive) return;

      if (!locked && this.gameState.getState() === GameStateEnum.PLAYING) {
        this.gameState.setState(GameStateEnum.PAUSED);
        this.uiManager.showOverlay(true, 'DEPURACIÓN EN PAUSA', 'CONTINUAR');
      } else if (locked && this.gameState.getState() === GameStateEnum.PAUSED) {
        this.gameState.setState(GameStateEnum.PLAYING);
        this.uiManager.showOverlay(false);
      }
    };

    const weapon = this.weaponManager.getActiveWeapon();
    weapon.onAmmoChange = (curr, max) => {
      this.uiManager.updateAmmo(curr, max);
      this.vrWristHUD.updateAmmo(curr, max);
    };
    weapon.onReloadStart = () => {
      this.audioManager.playReload();
      this.uiManager.showReloadIndicator(true);
    };
    weapon.onReloadEnd = () => {
      this.uiManager.showReloadIndicator(false);
    };

    this.damageSystem.onHitRegistered = (isHeadshot) => {
      this.uiManager.triggerHitmarker(isHeadshot);
    };

    this.scoreManager.onScoreUpdate = (score) => {
      this.uiManager.updateScore(score);
      this.vrWristHUD.updateScore(score, this.scoreManager.getStats().combo);
    };
    this.scoreManager.onComboUpdate = (combo) => {
      this.uiManager.updateCombo(combo);
      this.vrWristHUD.updateScore(this.scoreManager.getStats().score, combo);
    };
    this.scoreManager.onCombatAlert = (text, type) => {
      this.uiManager.showCombatAlert(text, type);
    };

    this.enemyManager.onPlayerDamaged = (amount) => {
      this.player.takeDamage(amount);
      this.audioManager.playPlayerHurt();
      this.uiManager.triggerDamageFlash();
    };

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
      this.vrWristHUD.updateHealth(curr, max);
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

    if (!this.isVRActive) {
      this.desktopInput.requestLock();
    }
    this.gameState.setState(GameStateEnum.PLAYING);
    this.uiManager.showOverlay(false);
    this.waveManager.reset();
  }

  private handlePlayerInput(): void {
    const weapon = this.weaponManager.getActiveWeapon();

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

    if (this.inputManager.consumeReloadTriggered()) {
      weapon.reload();
    }
  }

  private animate(): void {
    // Limitar delta a 0.05s para evitar picos de simulación física en VR
    const delta = Math.min(this.clock.getDelta(), 0.05);

    if (this.gameState.getState() === GameStateEnum.PLAYING) {
      this.inputManager.update(delta);
      this.handlePlayerInput();
      this.player.update(delta);
      this.weaponManager.update(delta);
      this.enemyManager.update(delta, this.player.position);
      this.waveManager.update(delta);

      if (this.isVRActive) {
        const weapon = this.weaponManager.getActiveWeapon();
        const targets = [...this.enemyManager.getAllHitboxes(), ...this.arena.targetMeshes];
        weapon.updateLaserAim(targets);
      }

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
