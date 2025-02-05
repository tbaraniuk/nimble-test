import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/': {
        target: 'https://live.devnimble.com',
        changeOrigin: true,
      },
    },
  },
});
