import { ApiIcon, BuildingIcon, GlobeIcon } from '@/components/icons';

export const contact = {
  hero: {
    eyebrow: 'Contact Spotly',
    headline: "Let's build the future of parking together.",
    copy: "Whether you're a driver, parking owner, government organisation, technology partner or strategic partner, we'd love to hear from you.",
  },

  /** Options for the "I am interested in" field — also used to validate input. */
  interests: [
    'Parking Partnership',
    'Smart City / Government',
    'Parking Ownership',
    'Technology Partnership',
    'Enterprise Integration',
    'Investment / Strategic Partnership',
    'General Inquiry',
  ],

  sidebar: [
    {
      icon: BuildingIcon,
      title: 'Parking Owners',
      description: 'Want to make your parking smarter?',
      action: 'Partner With Spotly',
      interest: 'Parking Ownership',
    },
    {
      icon: GlobeIcon,
      title: 'Government & Cities',
      description: 'Interested in smart parking infrastructure?',
      action: 'Talk to Our Team',
      interest: 'Smart City / Government',
    },
    {
      icon: ApiIcon,
      title: 'Technology Partners',
      description: "Let's integrate and build together.",
      action: 'Start a Conversation',
      interest: 'Technology Partnership',
    },
  ],

  responseNote:
    'Tell us a little about your organisation and what you are trying to solve, and the right person on our team will pick it up.',
};

export default contact;
