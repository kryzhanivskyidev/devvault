import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://devvault.io',
  markdown: {
    rehypePlugins: [
      ['rehype-external-links', { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  },
});
