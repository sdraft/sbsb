import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sbsb/',
  plugins: [
    react(),
    replace({
      'import.meta.env.VITE_DEV_API_URL': JSON.stringify(import.meta.env.VITE_DEV_API_URL),
      'import.meta.env.VITE_PROD_API_URL': JSON.stringify(import.meta.env.VITE_PROD_API_URL),
      preventAssignment: true
    })
  ],
  server: {
    watch: {
      usePolling: true
    }
  }
});