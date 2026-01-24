import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tu-dominio.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});