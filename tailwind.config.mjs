/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'iron-black': '#1a1a17',
        'anvil-grey': '#262623',
        'parchment': '#ece8e0',
        'stone': '#96928b',
        'forge-orange': '#e6813a',
        'patina': '#4a9e8f',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Crimson Pro"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        none: '0',
      },
      borderWidth: {
        hairline: '1px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
