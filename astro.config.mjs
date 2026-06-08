import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mathildegodard.com',
  vite: {
    server: {
      watch: {
        ignored: ['**/public/**'],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    }
  }
});
