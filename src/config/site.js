/**
 * Global site configuration.
 *
 * Only add real, verified company information here — the footer and the
 * structured data read directly from this file.
 */

export const DEFAULT_LOCALE = 'en';

export const site = {
  name: 'Spotly',
  legalName: 'Spotly',
  tagline: 'Reserve. Drive. Park.',
  supportingTagline: "Know where you'll park before you arrive.",
  positioning: 'The Smarter Way to Park.',
  corporatePositioning: 'Powering Smarter Parking for Smarter Cities.',
  description:
    'Spotly is a smart parking platform that lets drivers reserve parking before they arrive, automatically assigns an available parking bay, and connects parking infrastructure to a centralised cloud platform.',
  /* Update this to the production domain before launch. */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://spotly.app',
  locale: DEFAULT_LOCALE,
  localeTag: 'en_US',
  themeColor: '#EF5239',

  /**
   * Empty fields are never rendered — only add verified details.
   */
  contact: {
    email: 'akib@spotly.ae',
    phone: '+971 54 3325 119',
    address: '',
    region: 'United Arab Emirates',
  },

  /* Social profiles: add real URLs only. Empty entries are never rendered. */
  social: [],

  /* Pages that genuinely exist. Nothing else should be linked anywhere. */
  status: {
    appAvailability: 'coming-soon',
  },
};

export default site;
