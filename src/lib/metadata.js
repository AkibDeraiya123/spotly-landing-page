import { site } from '@/config/site';
import { seo } from '@/config/seo';

const absolute = (path = '/') => new URL(path, site.url).toString();

/**
 * Builds a complete, unique Metadata object for a page from src/config/seo.js.
 */
export function buildMetadata(pageKey) {
  const page = seo.pages[pageKey];

  if (!page) {
    throw new Error(`Unknown SEO page key: "${pageKey}"`);
  }

  const canonical = absolute(page.path);

  /**
   * Open Graph and Twitter images come from the per-route opengraph-image.js
   * files, so they are generated once at build time and stay in sync with the
   * page they belong to.
   */
  return {
    /* Page titles are already brand-complete, so bypass the root template. */
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        'x-default': canonical,
      },
    },
    openGraph: {
      type: 'website',
      siteName: seo.defaults.siteName,
      locale: site.localeTag,
      url: canonical,
      title: page.title,
      description: page.description,
    },
    twitter: {
      card: seo.defaults.twitterCard,
      title: page.title,
      description: page.description,
    },
  };
}

export { absolute as absoluteUrl };
