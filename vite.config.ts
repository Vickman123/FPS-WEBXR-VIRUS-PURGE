import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Asegura rutas relativas para GitHub Pages y cualquier subdirectorio
  server: {
    host: true,
    port: 5173,
    open: false
  },
  build: {
    target: 'esnext',
    outDir: 'dist'
  }
});
