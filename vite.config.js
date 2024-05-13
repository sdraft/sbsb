import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sbsb/',
  plugins: [
    react(),
    replace({
      'process.env.LOCAL_URL': JSON.stringify(process.env.LOCAL_URL),
      'process.env.PROD_URL': JSON.stringify(process.env.PROD_URL),
      preventAssignment: true
    })
  ],
  server: {
    watch: {
      usePolling: true
    }
  }
});