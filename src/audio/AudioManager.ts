/**
 * AudioManager - Generador procedimental de audio Web Audio API
 * Cero dependencias externas de MP3/WAV, latencia cero y compatible con WebXR y Quest.
 */
export class AudioManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = false;

  // Banda Sonora de Combate (BGM)
  private bgmAudio: HTMLAudioElement | null = null;
  private bgmTargetVolume: number = 0.16; // Nivel calibrado: nítido y con ritmo, pero no tapa los SFX ni cansa el oído
  private fadeInterval: number | null = null;
  private isBgmPlaying: boolean = false;

  constructor() {
  }

  public init(): void {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.initBGM();
  }

  /**
   * Sonido de disparo de pistola de plasma / cyber blaster
   */
  public playShot(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(540, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.16);

    oscGain.gain.setValueAtTime(0.8, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    const noiseBuffer = this.createNoiseBuffer(0.08);
    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1200, now);
    noiseFilter.Q.setValueAtTime(3, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.6, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    osc.start(now);
    noise.start(now);
    osc.stop(now + 0.18);
    noise.stop(now + 0.09);
  }

  public playDryFire(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  public playReload(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    this.playClick(now, 400, 0.06, 0.4);
    this.playClick(now + 0.45, 750, 0.08, 0.5);
    this.playClick(now + 1.05, 1100, 0.09, 0.6);
  }

  public playUIClick(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    this.playClick(now, 1150, 0.045, 0.45);
  }


  private playClick(time: number, freq: number, duration: number, vol: number): void {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, time);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.4, time + duration);

    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration + 0.01);
  }

  public playHit(isHeadshot: boolean = false): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    if (isHeadshot) {
      const freqs = [1760, 2640];
      freqs.forEach((freq) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 0.23);
      });
    } else {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(250, now + 0.05);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.06);
    }
  }

  /**
   * Rebote de proyectil en escudo blindado del Troyano
   */
  public playShieldDeflect(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  public playEnemyDeath(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.35);

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.36);
  }

  public playPlayerHurt(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.25);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.26);
  }

  /**
   * Alarma cibernética de brecha en el sistema (Klaxon)
   */
  public playAlarm(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    for (let i = 0; i < 2; i++) {
      const startTime = now + i * 0.45;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(480, startTime);
      osc.frequency.linearRampToValueAtTime(780, startTime + 0.25);
      osc.frequency.linearRampToValueAtTime(480, startTime + 0.4);

      gain.gain.setValueAtTime(0.5, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.42);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(startTime);
      osc.stop(startTime + 0.43);
    }
  }

  /**
   * Fanfarria cibernética al purgar un sector con éxito
   */
  public playSectorCleared(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Acorde mayor)

    notes.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const t = now + idx * 0.08;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.4, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.36);
    });
  }

  /**
   * Sub-grave ominoso para la aparición del jefe Ransomware
   */
  public playBossSpawn(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 1.2);

    gain.gain.setValueAtTime(0.9, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.25);
  }

  /**
   * Recolección de Bit/Data Core: arpegio digital cristalino
   */
  public playCoinPickup(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const pitches = [1320, 1760]; // E6 -> A6
    pitches.forEach((freq, idx) => {
      const t = now + idx * 0.045;
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.2, t + 0.1);

      gain.gain.setValueAtTime(0.22, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(t);
      osc.stop(t + 0.11);
    });
  }

  /**
   * Apertura de terminal holográfica de la Cyber Store
   */
  public playStoreOpen(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const notes = [440, 660, 880, 1320];
    notes.forEach((freq, idx) => {
      const t = now + idx * 0.06;
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.28, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(t);
      osc.stop(t + 0.26);
    });
  }

  /**
   * Compra exitosa / Overclock aplicado
   */
  public playPurchaseSuccess(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const notes = [587.33, 880, 1174.66]; // D5, A5, D6
    notes.forEach((freq, idx) => {
      const t = now + idx * 0.07;
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(t);
      osc.stop(t + 0.24);
    });
  }

  /**
   * Compra fallida / Fondos insuficientes
   */
  public playPurchaseFailed(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.setValueAtTime(120, now + 0.08);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.23);
  }

  /**
   * Disparo pesado de Escopeta Scatter
   */
  public playShotgunShot(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.28);

    oscGain.gain.setValueAtTime(0.95, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    const noiseBuffer = this.createNoiseBuffer(0.18);
    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(800, now);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.9, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    osc.start(now);
    noise.start(now);
    osc.stop(now + 0.3);
    noise.stop(now + 0.2);
  }

  /**
   * Disparo ultrarrápido de Subfusil Plasma SMG
   */
  public playSMGShot(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(720, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.07);

    oscGain.gain.setValueAtTime(0.5, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(oscGain);
    oscGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  private createNoiseBuffer(duration: number): AudioBuffer {
    if (!this.ctx) throw new Error('AudioContext no inicializado');
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  // ==========================================
  // GESTIÓN DE MÚSICA DE FONDO (COMBAT BGM)
  // ==========================================

  private initBGM(): void {
    if (this.bgmAudio) return;
    try {
      const meta = import.meta as unknown as { env?: { BASE_URL?: string } };
      const baseUrl = meta.env?.BASE_URL || './';
      const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
      const audioUrl = `${cleanBase}audio/combat_theme.mp3`;

      this.bgmAudio = new Audio(audioUrl);
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = 0;
      this.bgmAudio.preload = 'auto';
    } catch (e) {
      console.warn('[AudioManager] No se pudo instanciar elemento de audio BGM:', e);
    }
  }

  /**
   * Inicia o continúa la música de combate con fade-in suave al entrar a partida
   * @param targetVolume Volumen objetivo equilibrado (0.16 = ideal para escuchar disparos sin fatiga)
   * @param fadeDurationMs Tiempo de entrada gradual en ms
   */
  public startCombatMusic(targetVolume: number = 0.16, fadeDurationMs: number = 1800): void {
    this.init();
    this.initBGM();
    if (!this.bgmAudio || this.isMuted) return;

    this.bgmTargetVolume = targetVolume;
    this.isBgmPlaying = true;

    if (this.bgmAudio.paused) {
      this.bgmAudio.volume = 0;
      const playPromise = this.bgmAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('[AudioManager] Esperando clic del usuario para reproducir BGM:', err);
        });
      }
    }

    this.fadeBgmTo(this.bgmTargetVolume, fadeDurationMs);
  }

  /**
   * Reduce el volumen de la música (Audio Ducking) al pausar o al entrar al quiosco de mejoras
   */
  public duckMusic(duckVolume: number = 0.04, fadeDurationMs: number = 600): void {
    if (!this.bgmAudio || this.bgmAudio.paused || !this.isBgmPlaying) return;
    this.fadeBgmTo(duckVolume, fadeDurationMs);
  }

  /**
   * Restaura el volumen de combate normal al reanudar la partida o cerrar la tienda
   */
  public unduckMusic(fadeDurationMs: number = 800): void {
    if (!this.bgmAudio || this.bgmAudio.paused || !this.isBgmPlaying) return;
    this.fadeBgmTo(this.bgmTargetVolume, fadeDurationMs);
  }

  /**
   * Detiene la música suavemente con fade-out al morir (Game Over) o al regresar al menú principal
   */
  public stopCombatMusic(fadeDurationMs: number = 1200): void {
    if (!this.bgmAudio || this.bgmAudio.paused) return;
    this.isBgmPlaying = false;
    this.fadeBgmTo(0, fadeDurationMs, () => {
      if (this.bgmAudio && !this.isBgmPlaying) {
        this.bgmAudio.pause();
        this.bgmAudio.currentTime = 0;
      }
    });
  }

  /**
   * Pausa la música sin reiniciar el tiempo
   */
  public pauseCombatMusic(fadeDurationMs: number = 600): void {
    if (!this.bgmAudio || this.bgmAudio.paused) return;
    this.fadeBgmTo(0, fadeDurationMs, () => {
      if (this.bgmAudio) {
        this.bgmAudio.pause();
      }
    });
  }

  public setCombatMusicVolume(vol: number): void {
    this.bgmTargetVolume = Math.max(0, Math.min(1, vol));
    if (this.bgmAudio && this.isBgmPlaying) {
      this.bgmAudio.volume = this.bgmTargetVolume;
    }
  }

  public getCombatMusicVolume(): number {
    return this.bgmTargetVolume;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.35, this.ctx.currentTime);
    }
    if (this.bgmAudio) {
      this.bgmAudio.muted = this.isMuted;
    }
    return this.isMuted;
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.35, this.ctx.currentTime);
    }
    if (this.bgmAudio) {
      this.bgmAudio.muted = this.isMuted;
    }
  }

  public isSoundMuted(): boolean {
    return this.isMuted;
  }

  private fadeBgmTo(targetVol: number, durationMs: number, onComplete?: () => void): void {
    if (!this.bgmAudio) return;

    if (this.fadeInterval !== null) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }

    const clampedTarget = Math.max(0, Math.min(1, targetVol));
    const startVol = this.bgmAudio.volume;
    const diff = clampedTarget - startVol;

    if (Math.abs(diff) < 0.005 || durationMs <= 0) {
      this.bgmAudio.volume = clampedTarget;
      if (onComplete) onComplete();
      return;
    }

    const steps = 20;
    const stepTime = Math.max(16, durationMs / steps);
    let step = 0;

    this.fadeInterval = window.setInterval(() => {
      step++;
      const progress = step / steps;
      if (this.bgmAudio) {
        this.bgmAudio.volume = Math.max(0, Math.min(1, startVol + diff * progress));
      }
      if (step >= steps) {
        if (this.fadeInterval !== null) {
          clearInterval(this.fadeInterval);
          this.fadeInterval = null;
        }
        if (this.bgmAudio) {
          this.bgmAudio.volume = clampedTarget;
        }
        if (onComplete) onComplete();
      }
    }, stepTime);
  }
}
