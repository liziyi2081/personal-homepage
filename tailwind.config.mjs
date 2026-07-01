/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'midnight': '#0d1117',
        'void': '#131627',
        'plasma': '#ffffff',
        'frost': '#94a3b8',
        'neon-cyan': '#00e5ff',
        'neon-purple': '#a855f7',
        'neon-blue': '#3b82f6',
        'glass-border': 'rgba(255,255,255,0.08)',
        'glass-highlight': 'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Crimson Pro"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderWidth: {
        hairline: '1px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
