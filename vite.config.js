import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    rollupOptions: {
      input: { vi: 'index.html', en: 'en/index.html' },
    },
  },
});
