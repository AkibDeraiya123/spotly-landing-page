import { site } from '@/config/site';
import { routes } from '@/config/navigation';
import { theme } from '@/config/theme';

export default function manifest() {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: routes.home,
    scope: '/',
    display: 'standalone',
    background_color: theme.colors.background,
    theme_color: theme.colors.primary.DEFAULT,
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      /* Padded so Android can crop to any shape without clipping the mark. */
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
