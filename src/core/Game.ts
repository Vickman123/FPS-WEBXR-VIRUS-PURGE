import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { GameState, GameStateEnum, GameMode } from './GameState';
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
import { VRMenu } from '../ui/VRMenu';
import { VRStore } from '../ui/VRStore';
import { TargetRange } from '../world/TargetRange';
import { CurrencyManager } from '../systems/CurrencyManager';
import { UpgradeManager } from '../systems/UpgradeManager';
import { BitDropManager } from '../systems/BitDropManager';
import { ModelLoader } from '../utils/ModelLoader';

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
  public currencyManager: CurrencyManager;
  public weaponManager: WeaponManager;
  public upgradeManager: UpgradeManager;
  public bitDropManager: BitDropManager;
  public enemyManager: EnemyManager;
  public damageSystem: DamageSystem;
  public waveManager: WaveManager;
  public player: Player;
  public uiManager: UIManager;
  public vrWristHUD: VRWristHUD;
  public vrMenu: VRMenu;
  public vrStore: VRStore;
  public targetRange: TargetRange;

  public isVRActive: boolean = false;
  public isStoreOpen: boolean = false;

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

    // Precarga asíncrona de modelos 3D optimizados
    ModelLoader.init();

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

    // 8. Campo de Tiro (TargetRange) con Dianas Reactivas
    this.targetRange = new TargetRange({
      onReturnToSurvival: () => this.startSurvivalMode()
    });
    this.scene.add(this.targetRange.group);

    // 9. Menú Holográfico 3D para VR (Game Over, Pausa, Reaparecer y Selección)
    this.vrMenu = new VRMenu({
      onRespawn: () => this.restartGame(),
      onResume: () => this.resumeGame(),
      onTrainingRange: () => this.startTrainingRange(),
      onStartSurvival: () => this.startSurvivalMode(),
      onRestartSector: () => this.restartSector(),
      onMainMenu: () => this.returnToMainMenu()
    }, this.audioManager);
    this.scene.add(this.vrMenu.group);

    // 10. Sistema de Enemigos
    this.enemyManager = new EnemyManager(this.scene, this.particleSystem, this.audioManager);

    // 11. Economía y Mejoras (Cyber Store & Data Bits)
    this.currencyManager = new CurrencyManager();
    this.upgradeManager = new UpgradeManager(
      this.currencyManager,
      this.weaponManager,
      this.audioManager
    );
    this.bitDropManager = new BitDropManager(
      this.scene,
      this.currencyManager,
      this.audioManager,
      this.particleSystem
    );
    this.vrStore = new VRStore(
      this.currencyManager,
      this.upgradeManager,
      () => this.continueAfterStore(),
      this.audioManager
    );
    this.scene.add(this.vrStore.group);

    // 12. Sistema de Daño
    this.damageSystem = new DamageSystem(
      this.enemyManager,
      this.particleSystem,
      this.audioManager,
      this.scoreManager,
      this.arena
    );
    this.damageSystem.targetRange = this.targetRange;

    // 13. Sistema de Oleadas Arcade
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

      this.startSurvivalMode();
    });

    this.renderer.xr.addEventListener('sessionend', () => {
      console.log('[VIRUS PURGE] WebXR session ended');
      this.isVRActive = false;

      this.inputManager.setSource(this.desktopInput);
      this.player.setVRMode(false);
      this.vrMenu.hide();

      this.gameState.setState(GameStateEnum.MAIN_MENU);
      this.uiManager.showOverlay(true);
      this.audioManager.stopCombatMusic(600);
    });
  }

  private setupEventBindings(): void {
    this.uiManager.onStartClicked = () => {
      this.audioManager.init();

      if (this.gameState.getState() === GameStateEnum.GAME_OVER) {
        this.restartGame();
      } else if (this.gameState.getState() === GameStateEnum.PAUSED) {
        this.resumeGame();
      } else {
        this.startSurvivalMode();
      }
    };

    this.uiManager.onRangeClicked = () => {
      this.audioManager.init();
      this.startTrainingRange();
    };

    this.desktopInput.onLockChange = (locked) => {
      if (this.isVRActive) return;
      if (this.isStoreOpen) return; // Cursor libre legítimo para interactuar con la Cyber Store

      if (!locked && this.gameState.getState() === GameStateEnum.PLAYING) {
        this.pauseGame();
      } else if (locked && this.gameState.getState() === GameStateEnum.PAUSED) {
        this.resumeGame();
      }
    };

    this.currencyManager.onBitsChange = (bits) => {
      this.uiManager.updateBits(bits);
      this.vrWristHUD.updateBits(bits);
    };

    this.weaponManager.onAmmoChange = (curr, max) => {
      this.uiManager.updateAmmo(curr, max);
      this.vrWristHUD.updateAmmo(curr, max);
    };
    this.weaponManager.onReloadStart = () => {
      this.audioManager.playReload();
      this.uiManager.showReloadIndicator(true);
    };
    this.weaponManager.onReloadEnd = () => {
      this.uiManager.showReloadIndicator(false);
    };
    this.weaponManager.onWeaponChanged = (w) => {
      const weaponNameEl = document.querySelector('.weapon-name');
      if (weaponNameEl) weaponNameEl.textContent = w.config.name;
      this.uiManager.updateAmmo(w.currentAmmo, w.config.magSize);
      this.vrWristHUD.updateAmmo(w.currentAmmo, w.config.magSize);
    };

    this.waveManager.onEnemyKilledCallback = (enemy) => {
      this.bitDropManager.spawnDrops(enemy.getPosition(), enemy.enemyType);
    };

    this.waveManager.onOpenStore = () => {
      this.openStore();
    };

    this.uiManager.onStoreContinue = () => {
      this.continueAfterStore();
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
      this.uiManager.showBossBar(false);
      this.audioManager.stopCombatMusic(1500);
      const stats = this.scoreManager.getStats();

      if (this.isVRActive) {
        // En VR: Mostrar el menú 3D flotante interactivo (evita que el juego quede congelado)
        this.vrMenu.showGameOver(
          {
            score: stats.score,
            accuracy: stats.accuracy,
            wave: this.waveManager.getCurrentPhaseConfig().phaseNumber
          },
          this.camera
        );
      } else {
        this.uiManager.showOverlay(
          true,
          'SISTEMA COMPROMETIDO',
          `REAPARECER // SCORE: ${stats.score} (ACC: ${stats.accuracy}%)`
        );
      }

      if (document.pointerLockElement) {
        document.exitPointerLock();
      }
    };
  }

  public startSurvivalMode(): void {
    this.targetRange.disable();
    this.vrMenu.hide();
    this.vrStore.hide();
    this.isStoreOpen = false;
    this.uiManager.showStoreOverlay(false);
    this.gameState.setMode(GameMode.SURVIVAL);

    this.audioManager.playAlarm();
    if (!this.isVRActive) {
      this.desktopInput.requestLock();
    }
    this.restartGame();
  }

  public startTrainingRange(): void {
    this.enemyManager.clearAll();
    this.bitDropManager.clearAll();
    this.waveManager.stop();
    this.vrMenu.hide();
    this.vrStore.hide();
    this.isStoreOpen = false;
    this.uiManager.showStoreOverlay(false);
    this.targetRange.enable();
    this.player.respawn();
    this.scoreManager.reset();

    const weapon = this.weaponManager.getActiveWeapon();
    weapon.currentAmmo = weapon.config.magSize;
    weapon.isReloading = false;
    this.uiManager.updateAmmo(weapon.currentAmmo, weapon.config.magSize);
    this.uiManager.updateHealth(this.player.health, this.player.maxHealth);
    this.uiManager.resetVignette();
    this.uiManager.showBossBar(false);
    this.uiManager.showOverlay(false);
    this.uiManager.updateStatus('🎯 CAMPO DE TIRO // CALIBRACIÓN');

    if (!this.isVRActive) {
      this.desktopInput.requestLock();
    }
    this.gameState.setMode(GameMode.TRAINING);
    this.gameState.setState(GameStateEnum.PLAYING);
    this.audioManager.startCombatMusic(0.12, 1800);
  }

  public returnToMainMenu(): void {
    this.enemyManager.clearAll();
    this.bitDropManager.clearAll();
    this.waveManager.stop();
    this.targetRange.disable();
    this.vrStore.hide();
    this.isStoreOpen = false;
    this.uiManager.showStoreOverlay(false);
    this.gameState.setState(GameStateEnum.MAIN_MENU);
    this.audioManager.stopCombatMusic(1000);

    if (this.isVRActive) {
      this.vrMenu.showMainMenu(this.camera);
    } else {
      this.uiManager.showOverlay(true);
    }
  }

  public openStore(): void {
    this.isStoreOpen = true;
    this.audioManager.duckMusic(0.04, 600);
    if (this.isVRActive) {
      this.vrMenu.hide();
      this.vrStore.show(this.camera);
      this.audioManager.playStoreOpen();
    } else {
      this.uiManager.showOverlay(false);
      this.uiManager.showStoreOverlay(true, this.upgradeManager, this.currencyManager);
      this.audioManager.playStoreOpen();
      if (document.pointerLockElement) {
        document.exitPointerLock();
      }
    }
  }

  public continueAfterStore(): void {
    this.isStoreOpen = false;
    this.vrStore.hide();
    this.uiManager.showStoreOverlay(false);
    this.uiManager.showOverlay(false);
    this.audioManager.unduckMusic(1000);
    this.gameState.setState(GameStateEnum.PLAYING);
    if (!this.isVRActive) {
      this.desktopInput.requestLock();
    }
    this.waveManager.continueAfterStore();
  }

  public togglePause(): void {
    if (this.isStoreOpen) return;
    const currentState = this.gameState.getState();
    if (currentState === GameStateEnum.PLAYING) {
      this.pauseGame();
    } else if (currentState === GameStateEnum.PAUSED) {
      this.resumeGame();
    }
  }

  public pauseGame(): void {
    if (this.isStoreOpen) return;
    this.gameState.setState(GameStateEnum.PAUSED);
    this.audioManager.duckMusic(0.04, 600);
    if (this.isVRActive) {
      this.vrStore.hide();
      this.vrMenu.showPauseMenu(this.camera);
    } else {
      this.uiManager.showOverlay(true, 'DEPURACIÓN EN PAUSA', 'CONTINUAR');
      if (document.pointerLockElement) {
        document.exitPointerLock();
      }
    }
  }

  public resumeGame(): void {
    this.vrMenu.hide();
    this.vrStore.hide();
    this.isStoreOpen = false;
    this.gameState.setState(GameStateEnum.PLAYING);
    this.uiManager.showOverlay(false);
    this.uiManager.showStoreOverlay(false);
    this.audioManager.unduckMusic(800);
    if (!this.isVRActive) {
      this.desktopInput.requestLock();
    }
  }

  public restartSector(): void {
    this.enemyManager.clearAll();
    this.bitDropManager.clearAll();
    this.vrMenu.hide();
    this.vrStore.hide();
    this.isStoreOpen = false;
    this.uiManager.showStoreOverlay(false);
    this.player.respawn();


    const weapon = this.weaponManager.getActiveWeapon();
    weapon.currentAmmo = weapon.config.magSize;
    weapon.isReloading = false;
    this.uiManager.updateAmmo(weapon.currentAmmo, weapon.config.magSize);
    this.uiManager.updateHealth(this.player.health, this.player.maxHealth);
    this.uiManager.resetVignette();
    this.uiManager.showBossBar(false);
    this.uiManager.showOverlay(false);

    if (!this.isVRActive) {
      this.desktopInput.requestLock();
    }
    this.gameState.setState(GameStateEnum.PLAYING);
    this.waveManager.restartCurrentPhase();
    this.audioManager.startCombatMusic(0.16, 1500);
  }

  private restartGame(): void {
    this.enemyManager.clearAll();
    this.bitDropManager.clearAll();
    this.player.respawn();
    this.scoreManager.reset();
    this.upgradeManager.reset();
    this.currencyManager.reset();
    this.vrMenu.hide();
    this.vrStore.hide();
    this.uiManager.showStoreOverlay(false);

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
    this.waveManager.start();
    this.audioManager.startCombatMusic(0.16, 1800);
  }

  private handlePlayerInput(): void {
    if (this.inputManager.consumePauseTriggered()) {
      this.togglePause();
      return;
    }

    const weapon = this.weaponManager.getActiveWeapon();
    const shootTriggered = weapon.isAutomatic
      ? this.inputManager.isShootHeld()
      : this.inputManager.consumeShootTriggered();

    if (shootTriggered) {
      if (weapon.canFire()) {
        weapon.fire();
        if (weapon.config.name.includes('SHOTGUN')) {
          this.audioManager.playShotgunShot();
        } else if (weapon.config.name.includes('SMG')) {
          this.audioManager.playSMGShot();
        } else {
          this.audioManager.playShot();
        }

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
    const state = this.gameState.getState();

    // Actualizar SIEMPRE el subsistema de entrada en cada ciclo para capturar hardware Gamepad en VR
    this.inputManager.update(delta);

    // 1. Estado PLAYING (Combate u Entrenamiento)
    if (state === GameStateEnum.PLAYING && !this.isStoreOpen) {
      this.handlePlayerInput();
      this.player.update(delta);
      this.weaponManager.update(delta);
      this.bitDropManager.update(delta, this.player.position);

      if (this.gameState.getMode() === GameMode.SURVIVAL) {
        this.enemyManager.update(delta, this.player.position);
        this.waveManager.update(delta);
      } else if (this.gameState.getMode() === GameMode.TRAINING) {
        const shootRay = this.player.getShootRay();
        this.targetRange.update(delta, shootRay.origin, shootRay.direction);
      }

      if (this.isVRActive) {
        const weapon = this.weaponManager.getActiveWeapon();
        const targets = [
          ...this.enemyManager.getAllHitboxes(),
          ...this.targetRange.getAllHitboxes(),
          ...this.arena.targetMeshes
        ];
        weapon.updateLaserAim?.(targets);
      }

      this.particleSystem.update(delta);
      this.scoreManager.update(delta);
      this.gameState.update(delta);
    } else {
      // 2. Estado GAME_OVER, MAIN_MENU, PAUSED o STORE
      this.particleSystem.update(delta);

      if (this.isVRActive) {
        // Mantener viva la pose del arma y los cálculos de retroceso/láser en VR
        this.weaponManager.update(delta);
        const weapon = this.weaponManager.getActiveWeapon();
        const shootRay = this.player.getShootRay();

        // Si la Cyber Store 3D está visible
        if (this.vrStore.isVisible() || this.isStoreOpen) {
          const shootTriggered = this.inputManager.consumeShootTriggered();
          this.vrStore.update(shootRay.origin, shootRay.direction, shootTriggered);
          weapon.updateLaserAim?.(this.vrStore.group.children);
        }
        // Si el menú 3D está visible
        else if (this.vrMenu.isVisible()) {
          // Si se presiona el botón de pausa en el mando izquierdo mientras estamos en pausa, reanudar
          if (this.inputManager.consumePauseTriggered() && this.gameState.getState() === GameStateEnum.PAUSED) {
            this.resumeGame();
            return;
          }

          const shootTriggered = this.inputManager.consumeShootTriggered();
          this.vrMenu.update(shootRay.origin, shootRay.direction, shootTriggered);
          weapon.updateLaserAim?.(this.vrMenu.group.children);
        }
      }
    }


    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
