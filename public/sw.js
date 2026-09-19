const CACHE_NAME = 'virus-purge-v7';

// Lista de activos estáticos
const ASSETS_TO_CACHE = [
  './',
  './manifest.webmanifest',
  './favicon.png',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  // Forzar activación inmediata del nuevo Service Worker sin esperar cierre de pestañas
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
});

self.addEventListener('activate', (event) => {
  // Purgar y eliminar CUALQUIER caché antiguo (v1, v2, v3, etc.)
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia NETWORK-FIRST para evitar que el index.html quede desfasado con archivos JS/CSS viejos
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Solo si no hay conexión a internet (offline), usar caché
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html') || caches.match('./');
          }
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        });
      })
  );
});
