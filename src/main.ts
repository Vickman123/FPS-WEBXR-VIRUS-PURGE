import { Game } from './core/Game';

window.addEventListener('DOMContentLoaded', () => {
  // Inicializar juego
  const game = new Game();
  (window as unknown as { __PURGE_GAME__: Game }).__PURGE_GAME__ = game;
  console.log('[PURGE] Game engine initialized.');
});
