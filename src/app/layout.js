import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { site } from '@/config/site';
import { seo } from '@/config/seo';
import { theme } from '@/config/theme';
import JsonLd from '@/components/seo/JsonLd';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.pages.home.title,
    template: seo.defaults.titleTemplate,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    /* SVG first for browsers that support it, .ico as the universal fallback. */
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
    ],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
};

export const viewport = {
  themeColor: theme.colors.primary.DEFAULT,
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-background font-sans text-base text-text antialiased">
        <JsonLd schemas={[organizationSchema(), websiteSchema()]} />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
