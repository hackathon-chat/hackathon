import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hackathon.chat', // Your custom domain
  base: '/', // Use root path for custom domain
  output: 'static', // Ensure static output
  build: {
    assets: 'assets'
  }
});
