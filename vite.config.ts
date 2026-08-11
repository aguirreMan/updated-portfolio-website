import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@mdx-js/rollup';
import path from 'path';



export default defineConfig({
  plugins: [
    { ...mdx({ providerImportSource: '@mdx-js/react' }), enforce: 'pre' },
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
});
