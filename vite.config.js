import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'public',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: glob.sync('./public/*.html'),
    },
  },
  plugins: [injectHTML(), FullReload(['./src/**/*'])],
  server: {
    open: true,
    host: true,
  },
});
