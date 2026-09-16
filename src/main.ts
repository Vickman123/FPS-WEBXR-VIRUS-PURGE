import { Game } from './core/Game';

window.addEventListener('DOMContentLoaded', () => {
  // Inicializar juego
  const game = new Game();
  (window as unknown as { __PURGE_GAME__: Game }).__PURGE_GAME__ = game;
  console.log('[PURGE] Game engine initialized.');

  // Registrar Service Worker para PWA con auto-recuperación de caché
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      reg.update().catch(() => {});
    }).catch((err) => {
      console.log('[PWA] ServiceWorker info:', err);
    });

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  }
});
