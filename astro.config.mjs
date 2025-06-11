import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import image from '@astrojs/image';
import critical from 'astro-critical-css';
// import unpic from '@unpic/astro';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [
    image({
      service: 'vercel-image-optimization'
    }),
    critical(),
    // unpic({
    //   placeholder: 'dominantColor',
    //   layout: 'constrained'
    // }),
    tailwind()
  ],
});
