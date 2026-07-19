import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dongtien17.github.io',
  base: '/Travel_Blog',
  integrations: [mdx(), sitemap()],
});
