import { IInputSource, LookDelta, Vector2D } from './IInputSource';

export class InputManager {
  private activeSource: IInputSource;

  constructor(initialSource: IInputSource) {
    this.activeSource = initialSource;
    this.activeSource.init();
  }

  public setSource(newSource: IInputSource): void {
    this.activeSource.dispose();
    this.activeSource = newSource;
    this.activeSource.init();
  }

  public getSource(): IInputSource {
    return this.activeSource;
  }

  public update(delta: number): void {
    this.activeSource.update(delta);
  }

  public getMovement(): Vector2D {
    return this.activeSource.getMovement();
  }

  public getLookDelta(): LookDelta {
    return this.activeSource.getLookDelta();
  }

  public resetLookDelta(): void {
    this.activeSource.resetLookDelta();
  }

  public isShootHeld(): boolean {
    return this.activeSource.isShootHeld();
  }

  public consumeShootTriggered(): boolean {
    return this.activeSource.consumeShootTriggered();
  }

  public consumeReloadTriggered(): boolean {
    return this.activeSource.consumeReloadTriggered();
  }

  public consumePauseTriggered(): boolean {
    return this.activeSource.consumePauseTriggered();
  }

  public dispose(): void {
    this.activeSource.dispose();
  }
}
