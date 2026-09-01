import { DEFAULT_LOCALE } from './site';

const base = `/${DEFAULT_LOCALE}`;

export const routes = {
  home: base,
  parkingOwners: `${base}/for-parking-owners`,
  smartCities: `${base}/for-smart-cities`,
  contact: `${base}/contact`,
};

export const mainNavigation = [
  { label: 'Home', href: routes.home },
  { label: 'For Parking Owners', href: routes.parkingOwners },
  { label: 'For Smart Cities & Government', href: routes.smartCities, shortLabel: 'Smart Cities' },
  { label: 'Contact Us', href: routes.contact },
];

export const primaryCta = {
  label: 'Get Started',
  href: routes.contact,
};

export const footerNavigation = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: routes.home },
      { label: 'For Parking Owners', href: routes.parkingOwners },
      { label: 'For Smart Cities & Government', href: routes.smartCities },
      { label: 'Contact Us', href: routes.contact },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Parking reservation for drivers', href: `${routes.home}#how-it-works` },
      { label: 'Parking management for owners', href: `${routes.parkingOwners}#features` },
      { label: 'City-wide parking visibility', href: `${routes.smartCities}#capabilities` },
      { label: 'Enterprise integration', href: `${routes.smartCities}#integration` },
    ],
  },
];

export default mainNavigation;
