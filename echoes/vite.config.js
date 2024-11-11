import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      GComponents: '/src/components',
      GUtils: '/src/utils',
      GComp: '/src/compositions',
      GAssets: '/src/assets',
      GPages: '/src/pages',
      GLayouts: '/src/layouts',
    },
  },
});
