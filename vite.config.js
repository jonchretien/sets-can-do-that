import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sets-can-do-that/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./js/test/setup.js'],
  },
});
