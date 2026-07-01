import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://liziyi2081.github.io',
  base: '/personal-homepage',
  integrations: [tailwind()],
});
