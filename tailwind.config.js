/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  corePlugins: {
    // Desactivar preflight para evitar conflictos con Leaflet
    preflight: false,
  },
  theme: {
    extend: {
      zIndex: {
        'map': '1',
        'leaflet': '1000',
      }
    }
  }
}
