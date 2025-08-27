// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/Auxilio-Acidente/', // nome EXATO do repo
    build: { outDir: 'docs' },  // Pages vai publicar a partir de /docs
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: { '@': path.resolve(__dirname, '.') },
    },
  };
});
