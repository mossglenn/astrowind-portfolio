import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}',
    './src/styles/globals.css',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--aw-color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--aw-color-secondary) / <alpha-value>)',
        accent: 'hsl(var(--aw-color-accent) / <alpha-value>)',
        base: 'hsl(var(--aw-color-text-base) / <alpha-value>)',
        muted: 'hsl(var(--aw-color-text-muted) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)'],
        serif: ['var(--aw-font-serif, ui-serif)'],
        heading: ['var(--aw-font-heading, ui-sans-serif)'],
      },
      animation: {
        fade: 'fadeInUp 1s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
