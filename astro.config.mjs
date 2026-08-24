import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nidoefrance.org',
  base: '/',
  output: 'static',
  trailingSlash: 'never',
});
