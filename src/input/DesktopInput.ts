import { IInputSource, LookDelta, Vector2D } from './IInputSource';

export class DesktopInput implements IInputSource {
  private domElement: HTMLElement;
  private isLocked: boolean = false;

  private keys: Record<string, boolean> = {};
  private lookDelta: LookDelta = { x: 0, y: 0 };

  private isShooting: boolean = false;
  private shootTriggered: boolean = false;
  private reloadTriggered: boolean = false;
  private pauseTriggered: boolean = false;

  public sensitivity: number = 0.0022;

  public onLockChange?: (locked: boolean) => void;

  constructor(domElement: HTMLElement) {
    this.domElement = domElement;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onPointerLockChange = this.onPointerLockChange.bind(this);
  }

  public init(): void {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mouseup', this.onMouseUp);
    document.addEventListener('pointerlockchange', this.onPointerLockChange);
  }

  public dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('pointerlockchange', this.onPointerLockChange);
  }

  public requestLock(): void {
    try {
      const p = this.domElement.requestPointerLock() as unknown as Promise<void> | undefined;
      if (p && typeof p.catch === 'function') {
        p.catch((_err) => {
          // Captura controlada del bloqueo en navegadores
        });
      }
    } catch (_e) {
      // Ignorar rechazo de política del navegador
    }
  }

  public isPointerLocked(): boolean {
    return this.isLocked;
  }

  private onPointerLockChange(): void {
    this.isLocked = document.pointerLockElement === this.domElement;
    if (this.onLockChange) {
      this.onLockChange(this.isLocked);
    }
  }

  private onKeyDown(e: KeyboardEvent): void {
    this.keys[e.code] = true;

    if (e.code === 'KeyR' && !e.repeat) {
      this.reloadTriggered = true;
    }

    if (e.code === 'Escape') {
      this.pauseTriggered = true;
    }
  }

  private onKeyUp(e: KeyboardEvent): void {
    this.keys[e.code] = false;
  }

  private onMouseMove(e: MouseEvent): void {
    if (!this.isLocked) return;
    const mx = e.movementX ?? 0;
    const my = e.movementY ?? 0;
    this.lookDelta.x += mx * this.sensitivity;
    this.lookDelta.y += my * this.sensitivity;
  }

  private onMouseDown(e: MouseEvent): void {
    if (!this.isLocked) {
      this.requestLock();
      return;
    }
    if (e.button === 0) {
      this.isShooting = true;
      this.shootTriggered = true;
    }
  }

  private onMouseUp(e: MouseEvent): void {
    if (e.button === 0) {
      this.isShooting = false;
    }
  }

  public update(_delta: number): void {
  }

  public getMovement(): Vector2D {
    if (!this.isLocked) return { x: 0, z: 0 };

    let forward = 0;
    let strafe = 0;

    if (this.keys['KeyW'] || this.keys['ArrowUp']) forward += 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) forward -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) strafe += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) strafe -= 1;

    const length = Math.hypot(strafe, forward);
    if (length > 0) {
      return {
        x: strafe / length,
        z: forward / length
      };
    }
    return { x: 0, z: 0 };
  }

  public getLookDelta(): LookDelta {
    return this.lookDelta;
  }

  public resetLookDelta(): void {
    this.lookDelta.x = 0;
    this.lookDelta.y = 0;
  }

  public isShootHeld(): boolean {
    return this.isLocked && this.isShooting;
  }

  public consumeShootTriggered(): boolean {
    if (!this.isLocked) return false;
    const triggered = this.shootTriggered;
    this.shootTriggered = false;
    return triggered;
  }

  public consumeReloadTriggered(): boolean {
    const triggered = this.reloadTriggered;
    this.reloadTriggered = false;
    return triggered;
  }

  public consumePauseTriggered(): boolean {
    const triggered = this.pauseTriggered;
    this.pauseTriggered = false;
    return triggered;
  }
}
