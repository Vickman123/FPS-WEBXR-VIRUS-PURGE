export enum GameMode {
  TRAINING = 'TRAINING',
  SURVIVAL = 'SURVIVAL',
  TIME_ATTACK = 'TIME_ATTACK'
}

export enum GameStateEnum {
  DETECTION_MODE = 'DETECTION_MODE',       // Pantalla antivirus previa (Virus Purge)
  CINEMATIC_INTRO = 'CINEMATIC_INTRO',     // Transición a la arena
  MAIN_MENU = 'MAIN_MENU',                 // Menú de selección
  PLAYING = 'PLAYING',                     // En combate
  PAUSED = 'PAUSED',                       // Pausa
  GAME_OVER = 'GAME_OVER'                  // Fin de partida
}

type StateChangeCallback = (newState: GameStateEnum, oldState: GameStateEnum) => void;

export class GameState {
  private currentState: GameStateEnum = GameStateEnum.MAIN_MENU;
  private currentMode: GameMode = GameMode.TRAINING;
  private stateListeners: StateChangeCallback[] = [];
  private stateTimer: number = 0;

  public getState(): GameStateEnum {
    return this.currentState;
  }

  public getMode(): GameMode {
    return this.currentMode;
  }

  public setMode(mode: GameMode): void {
    this.currentMode = mode;
  }

  public setState(newState: GameStateEnum): void {
    if (this.currentState === newState) return;
    const oldState = this.currentState;
    this.currentState = newState;
    this.stateTimer = 0;

    for (const listener of this.stateListeners) {
      listener(newState, oldState);
    }
  }

  public onStateChange(callback: StateChangeCallback): void {
    this.stateListeners.push(callback);
  }

  public update(delta: number): void {
    this.stateTimer += delta;
  }

  public getStateTimer(): number {
    return this.stateTimer;
  }
}
