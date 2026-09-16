export interface Vector2D {
  x: number;
  z: number;
}

export interface LookDelta {
  x: number;
  y: number;
}

export interface IInputSource {
  init(): void;
  update(delta: number): void;
  dispose(): void;

  getMovement(): Vector2D;
  getLookDelta(): LookDelta;
  resetLookDelta(): void;

  isShootHeld(): boolean;
  consumeShootTriggered(): boolean;
  consumeReloadTriggered(): boolean;
  consumePauseTriggered(): boolean;

  isPointerLocked?(): boolean;
  requestLock?(): void;
}
