import { site } from '@/config/site';
import { routes } from '@/config/navigation';

const absolute = (path) => new URL(path, site.url).toString();

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: absolute(routes.home),
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: absolute(routes.parkingOwners),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: absolute(routes.smartCities),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: absolute(routes.contact),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
