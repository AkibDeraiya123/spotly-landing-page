import { site } from '@/config/site';
import { seo } from '@/config/seo';
import { absoluteUrl } from './metadata';

const ORGANIZATION_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

export function organizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    slogan: site.tagline,
    description: site.description,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/brand/spotly-logo.svg'),
      width: 512,
      height: 512,
    },
  };

  if (site.social.length > 0) {
    schema.sameAs = site.social.map((profile) => profile.href);
  }

  const contactPoint = {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['English'],
    url: absoluteUrl(seo.pages.contact.path),
  };
  if (site.contact.email) contactPoint.email = site.contact.email;
  if (site.contact.phone) contactPoint.telephone = site.contact.phone;
  schema.contactPoint = [contactPoint];

  if (site.contact.address) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: site.contact.address,
      addressCountry: site.contact.region,
    };
  }

  return schema;
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: 'en',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function webPageSchema(pageKey, { type = 'WebPage', breadcrumbId } = {}) {
  const page = seo.pages[pageKey];
  const url = absoluteUrl(page.path);

  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: 'en',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
  };

  if (breadcrumbId) {
    schema.breadcrumb = { '@id': breadcrumbId };
  }

  return schema;
}

/**
 * @param {{name: string, path: string}[]} trail
 */
export function breadcrumbSchema(trail, pageKey) {
  const id = `${absoluteUrl(seo.pages[pageKey].path)}#breadcrumb`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Spotly',
    applicationCategory: 'TravelApplication',
    operatingSystem: 'iOS, Android',
    description:
      'Reserve parking before you arrive. Spotly automatically assigns an available parking bay so you can drive straight to your space.',
    url: site.url,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export const BREADCRUMB_ID = (pageKey) => `${absoluteUrl(seo.pages[pageKey].path)}#breadcrumb`;
