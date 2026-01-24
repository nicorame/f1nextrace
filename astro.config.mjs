import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nicorame.github.io',
  base: '/f1nextrace',
  build: {
    format: 'file'
  }
});