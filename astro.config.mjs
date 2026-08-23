import { defineConfig } from 'astro/config';

// TODO: replace with the real GitHub Pages URL once the repo is created, e.g.
//   site: 'https://<github-user>.github.io',
//   base: '/nido-france-site',
// If a custom domain is used instead (via public/CNAME), set `site` to that
// domain and drop `base` entirely.
export default defineConfig({
  site: 'https://example.github.io',
  base: '/nido-france-site',
  output: 'static',
  trailingSlash: 'never',
});
