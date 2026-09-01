import { routes } from './navigation';

/**
 * Per-page SEO copy. Keep every title and description unique.
 */
export const seo = {
  defaults: {
    titleTemplate: '%s | Spotly',
    siteName: 'Spotly',
    twitterCard: 'summary_large_image',
    /* Social card artwork lives in each route's opengraph-image.js file. */
  },

  pages: {
    home: {
      path: routes.home,
      title: 'Spotly — Reserve. Drive. Park. | Smart Parking Reservation App',
      description:
        "Spotly is a smart parking platform that lets you reserve parking before you arrive. Choose a parking location, get an automatically assigned parking bay, and drive straight to your space.",
      keywords: [
        'smart parking',
        'parking reservation',
        'parking app',
        'reserve parking',
        'reserve parking before you arrive',
        'real-time parking availability',
        'connected parking',
        'Dubai smart parking',
        'smart parking UAE',
      ],
    },
    parkingOwners: {
      path: routes.parkingOwners,
      title: 'Smart Parking Management Software for Parking Owners',
      description:
        'Spotly helps parking owners and operators manage, monetise and optimise parking infrastructure with real-time bay visibility, automated reservations, smart barrier integration and analytics.',
      keywords: [
        'parking management system',
        'parking management software',
        'parking operator software',
        'digital parking management',
        'parking reservation system',
        'smart parking platform',
        'parking infrastructure',
        'GCC smart parking',
      ],
    },
    smartCities: {
      path: routes.smartCities,
      title: 'Smart City Parking Platform for Governments & Operators',
      description:
        'Spotly connects drivers, parking operators and parking infrastructure through an intelligent smart city parking platform with city-wide visibility, analytics, APIs and connected barriers.',
      keywords: [
        'smart city parking',
        'smart parking platform',
        'parking technology',
        'urban mobility intelligence',
        'parking infrastructure',
        'smart parking Saudi Arabia',
        'GCC smart parking',
        'parking data analytics',
      ],
    },
    contact: {
      path: routes.contact,
      title: 'Contact Spotly — Partnerships, Smart Cities & Parking Owners',
      description:
        "Talk to the Spotly team about parking partnerships, smart city and government programmes, parking ownership, technology partnerships and enterprise integration.",
      keywords: [
        'contact Spotly',
        'smart parking partnership',
        'parking technology partner',
        'smart city parking contact',
      ],
    },
  },
};

export default seo;
