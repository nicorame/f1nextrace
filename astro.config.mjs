import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://nicorame.github.io',
  base: '/f1nextrace',
  integrations: [react()],
  build: {
    format: 'file'
  }
});