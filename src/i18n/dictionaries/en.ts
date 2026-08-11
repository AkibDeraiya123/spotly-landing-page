export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    partner: string;
  };
  hero: {
    status: string;
    brand: string;
    headline: string;
    body: string;
    promise: string;
  };
  waitlist: {
    label: string;
    placeholder: string;
    button: string;
    success: string;
  };
  partner: {
    headline: string;
    body: string;
    cta: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

const en: Dictionary = {
  meta: {
    title: "Spotly — Coming Soon",
    description:
      "Know where you'll park before you arrive. Spotly is building a smarter way to park.",
  },
  nav: {
    partner: "Partner with us",
  },
  hero: {
    status: "Coming soon",
    brand: "Spotly",
    headline: "Know where you'll park before you arrive.",
    body: "Spotly is building a smarter way to park — reserve before you leave, get an assigned bay, and skip the search.",
    promise: "Save Time. Save Fuel. Skip the Parking Stress.",
  },
  waitlist: {
    label: "Be the first to know when Spotly launches.",
    placeholder: "Enter your email",
    button: "Notify Me",
    success: "You're on the list. We'll be in touch.",
  },
  partner: {
    headline: "Building smarter parking for cities.",
    body: "Parking owners, operators, and smart-city partners — let's talk.",
    cta: "Partner With Spotly",
  },
  footer: {
    tagline: "Know where you'll park before you arrive.",
    rights: "© 2026 Spotly. All rights reserved.",
  },
};

export default en;
