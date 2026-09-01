import theme from './src/config/theme.js';

/**
 * Tailwind consumes the Spotly design tokens directly from src/config/theme.js
 * so there is exactly one place to change a brand value.
 */

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  theme: {
    container: theme.container,
    screens: theme.breakpoints,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeight,
    borderRadius: theme.radius,
    boxShadow: theme.shadows,
    extend: {
      colors: theme.colors,
      spacing: theme.spacing,
      /* Full 1% opacity scale so every `/NN` colour modifier resolves. */
      opacity: Object.fromEntries(
        Array.from({ length: 101 }, (_, value) => [value, String(value / 100)]),
      ),
      outlineOffset: { 3: '3px' },
      maxWidth: {
        prose: '68ch',
        measure: '46ch',
      },
      transitionDuration: {
        DEFAULT: '180ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgb(27 20 17 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(27 20 17 / 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
      keyframes: {
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 180ms cubic-bezier(0.22, 0.61, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
