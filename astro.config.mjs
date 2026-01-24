import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nicorame.github.io',
  base: '/f1-calendar', // Nombre de tu repositorio
  build: {
    assets: '_astro'
  }
});