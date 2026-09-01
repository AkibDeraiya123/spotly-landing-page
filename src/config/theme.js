/**
 * Spotly design tokens — the single source of truth for the whole website.
 *
 * Everything visual (colours, type scale, radii, shadows, spacing, breakpoints)
 * is declared here once and consumed by:
 *   - tailwind.config.js  → generates the utility classes
 *   - src/app/globals.css → exposes the same values as CSS custom properties
 *
 * Changing a value here updates the entire site.
 */

/**
 * Brand palette
 *   Primary orange        #EF5239
 *   Primary orange dark   #CB3721
 *   Green accent          #259681
 *   Dark                  #1B1411
 *   Brown                 #5A4D46
 *   Beige                 #EAE1DB
 *   White                 #FAF4EF
 *
 * The brand values are the 500 (or 900) step of each scale; the surrounding
 * steps are tints and shades of them.
 */
const colors = {
  /* Brand ------------------------------------------------------------- */
  primary: {
    50: '#FDF1EE',
    100: '#FBDFD9',
    200: '#F7C0B5',
    300: '#F49B8A',
    400: '#F17662',
    500: '#EF5239', // brand primary orange
    600: '#CB3721', // brand primary orange, dark shade
    700: '#A62B19', // for small text on beige, where 600 falls short of AA
    800: '#7E2113',
    900: '#5B180E',
    DEFAULT: '#EF5239',
  },
  secondary: {
    50: '#FBF8F5',
    100: '#F3EBE4',
    200: '#EAE1DB', // brand beige
    300: '#DBCEC5',
    400: '#C7B7AB',
    500: '#AE9B8D',
    600: '#8E7B6D',
    700: '#6E5E53',
    DEFAULT: '#EAE1DB',
  },
  accent: {
    50: '#EEF8F5',
    100: '#D5EFE7',
    200: '#ABE0D1',
    300: '#7BCBB7',
    400: '#4AB49B',
    500: '#259681', // brand green accent
    600: '#1D7768', // for white text and small text, where 500 falls short of AA
    700: '#175E52',
    800: '#124A41',
    900: '#0E3A33',
    DEFAULT: '#259681',
  },

  /**
   * Warm neutral scale running from the beige tints down to the brand dark.
   * The brand brown sits naturally at 500 and the brand dark at 900.
   */
  ink: {
    50: '#F6F1ED',
    100: '#E9E1DA',
    200: '#D3C8BF',
    300: '#B0A298',
    400: '#8A7C73',
    500: '#5A4D46', // brand brown
    600: '#463C36',
    700: '#332C27',
    800: '#26201C',
    900: '#1B1411', // brand dark
    DEFAULT: '#1B1411',
  },

  /* Semantic ---------------------------------------------------------- */
  background: '#FAF4EF', // brand white — the page canvas
  surface: '#FFFFFF', // cards and product surfaces that lift off the canvas
  surfaceMuted: '#F3EBE4',
  text: '#332C27',
  muted: '#5A4D46', // brand brown
  border: '#E4DAD2',
  focus: '#EF5239',
};

const typography = {
  fontFamily: {
    sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    display: ['var(--font-display)', 'var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
  },
  /* [size, { lineHeight, letterSpacing, fontWeight }] */
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '0.02em' }],
    sm: ['0.875rem', { lineHeight: '1.375rem' }],
    base: ['1rem', { lineHeight: '1.65rem' }],
    lg: ['1.125rem', { lineHeight: '1.8rem' }],
    xl: ['1.25rem', { lineHeight: '1.9rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
    '3xl': ['1.875rem', { lineHeight: '2.3rem', letterSpacing: '-0.018em' }],
    '4xl': ['2.25rem', { lineHeight: '2.6rem', letterSpacing: '-0.022em' }],
    '5xl': ['2.875rem', { lineHeight: '3.1rem', letterSpacing: '-0.026em' }],
    '6xl': ['3.5rem', { lineHeight: '3.75rem', letterSpacing: '-0.03em' }],
    '7xl': ['4.25rem', { lineHeight: '4.4rem', letterSpacing: '-0.034em' }],
    '8xl': ['5.25rem', { lineHeight: '5.25rem', letterSpacing: '-0.036em' }],
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
};

const radius = {
  none: '0px',
  sm: '0.375rem',
  DEFAULT: '0.625rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.25rem',
  '2xl': '1.75rem',
  '3xl': '2.25rem',
  full: '9999px',
};

/* Shadows are tinted with the brand dark (#1B1411) so they stay warm. */
const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgb(27 20 17 / 0.05)',
  sm: '0 2px 6px -1px rgb(27 20 17 / 0.07), 0 1px 2px -1px rgb(27 20 17 / 0.05)',
  DEFAULT: '0 6px 18px -6px rgb(27 20 17 / 0.11), 0 2px 6px -2px rgb(27 20 17 / 0.06)',
  md: '0 10px 28px -10px rgb(27 20 17 / 0.15), 0 3px 8px -3px rgb(27 20 17 / 0.07)',
  lg: '0 22px 48px -18px rgb(27 20 17 / 0.21), 0 6px 14px -6px rgb(27 20 17 / 0.09)',
  xl: '0 36px 80px -28px rgb(27 20 17 / 0.29), 0 10px 22px -10px rgb(27 20 17 / 0.11)',
  ring: '0 0 0 1px rgb(27 20 17 / 0.07)',
};

const spacing = {
  section: '5.5rem', // vertical rhythm between page sections (mobile)
  sectionLg: '8rem', // vertical rhythm between page sections (desktop)
  gutter: '1.25rem',
};

const breakpoints = {
  xs: '400px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px', // large desktop / 4K comfort width
};

const container = {
  center: true,
  padding: {
    DEFAULT: '1.25rem',
    sm: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1320px',
  },
};

export const theme = {
  colors,
  typography,
  radius,
  shadows,
  spacing,
  breakpoints,
  container,
};

/**
 * Flat map of the tokens that also need to exist as CSS custom properties
 * (used for focus rings, scrollbar colours, form controls, etc.).
 */
export const cssVariables = {
  '--color-primary': colors.primary.DEFAULT,
  '--color-primary-dark': colors.primary[600],
  '--color-brown': colors.ink[500],
  '--color-secondary': colors.secondary.DEFAULT,
  '--color-accent': colors.accent.DEFAULT,
  '--color-accent-dark': colors.accent[600],
  '--color-ink': colors.ink.DEFAULT,
  '--color-text': colors.text,
  '--color-muted': colors.muted,
  '--color-border': colors.border,
  '--color-background': colors.background,
  '--color-surface-muted': colors.surfaceMuted,
  '--radius-card': radius.xl,
  '--radius-pill': radius.full,
};

export default theme;
