export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    howItWorks: string;
    forDrivers: string;
    forOwners: string;
    vision: string;
    cta: string;
  };
  hero: {
    brand: string;
    headline: string;
    subhead: string;
    steps: string[];
    primaryCta: string;
    secondaryCta: string;
    visual: {
      reserved: string;
      unlocked: string;
      destination: string;
      navigating: string;
      unlockCta: string;
      waiting: string;
    };
  };
  problem: {
    eyebrow: string;
    headline: string;
    journey: { label: string; detail: string }[];
    stats: { value: string; unit: string; label: string }[];
  };
  future: {
    eyebrow: string;
    headline: string;
    journey: { label: string; detail: string }[];
    closer: string;
  };
  platform: {
    eyebrow: string;
    headline: string;
    subhead: string;
    nodes: { title: string; detail: string }[];
  };
  howItWorks: {
    eyebrow: string;
    headline: string;
    steps: { title: string; detail: string }[];
  };
  drivers: {
    eyebrow: string;
    headline: string;
    cards: { title: string; detail: string }[];
  };
  owners: {
    eyebrow: string;
    headline: string;
    cards: { title: string; detail: string }[];
  };
  dashboard: {
    eyebrow: string;
    headline: string;
    metrics: { label: string; value: string; change: string }[];
    chartLabel: string;
    placeholder: string;
    livePreview: string;
    ownerLabel: string;
  };
  technology: {
    eyebrow: string;
    headline: string;
    flow: string[];
    note: string;
  };
  why: {
    eyebrow: string;
    headline: string;
    traditional: { title: string; items: string[] };
    ours: { title: string; items: string[] };
  };
  vision: {
    eyebrow: string;
    headline: string;
    lines: string[];
  };
  cta: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: string;
    email: string;
    phone: string;
    location: string;
    labels: {
      email: string;
      phone: string;
      location: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

const en: Dictionary = {
  meta: {
    title: "Spotly — Parking with Confidence",
    description:
      "Know where you'll park before you leave. Guaranteed parking for drivers. More revenue for parking owners.",
  },
  nav: {
    howItWorks: "How It Works",
    forDrivers: "For Drivers",
    forOwners: "For Owners",
    vision: "Vision",
    cta: "Book a Live Demo",
  },
  hero: {
    brand: "Spotly",
    headline: "Arrive Knowing Your Parking Is Waiting.",
    subhead:
      "Imagine leaving home already knowing exactly where you'll park. No driving around. No uncertainty. No frustration.",
    steps: ["Just arrive.", "Unlock.", "Park."],
    primaryCta: "Book a Live Demo",
    secondaryCta: "See How It Works",
    visual: {
      reserved: "Space B-12 reserved",
      unlocked: "Barrier unlocked",
      destination: "Destination",
      navigating: "Navigating",
      unlockCta: "Unlock Barrier",
      waiting: "Your space is waiting",
    },
  },
  problem: {
    eyebrow: "The Everyday Problem",
    headline: "Every Parking Journey Begins With Uncertainty.",
    journey: [
      { label: "Leave Home", detail: "Hope there's a space" },
      { label: "Drive", detail: "Already running late" },
      { label: "Parking Full", detail: "The familiar disappointment" },
      { label: "Drive Around", detail: "Minutes turn into stress" },
      { label: "Frustrated", detail: "Appointment slipping away" },
      { label: "Missed", detail: "Time you can't get back" },
    ],
    stats: [
      { value: "20+", unit: "min", label: "Time Lost" },
      { value: "Fuel", unit: "", label: "Wasted Circling" },
      { value: "Stress", unit: "", label: "Increased" },
      { value: "Revenue", unit: "", label: "Lost for Owners" },
    ],
  },
  future: {
    eyebrow: "A Better Future",
    headline: "What If You Already Knew Where You Were Going To Park?",
    journey: [
      { label: "Open App", detail: "See what's available" },
      { label: "Reserve", detail: "Your space is yours" },
      { label: "Navigate", detail: "Drive with certainty" },
      { label: "Arrive", detail: "Right on time" },
      { label: "Unlock", detail: "Seamless entry" },
      { label: "Park", detail: "Done. Peace of mind." },
    ],
    closer: "Parking should never be a guessing game.",
  },
  platform: {
    eyebrow: "Introducing",
    headline: "One Platform. Complete Confidence.",
    subhead:
      "An experience powered by technology you never have to think about.",
    nodes: [
      { title: "Mobile App", detail: "Reserve and arrive with ease" },
      { title: "Cloud Platform", detail: "Real-time availability everywhere" },
      { title: "Owner Dashboard", detail: "Clarity for every space you own" },
      { title: "Smart Barrier", detail: "Unlocks only for your reservation" },
      { title: "Live Sync", detail: "Everything connected, instantly" },
    ],
  },
  howItWorks: {
    eyebrow: "How It Works",
    headline: "From Search to Park — In Six Quiet Steps.",
    steps: [
      { title: "Find Parking", detail: "Nearby spaces, live availability" },
      { title: "Reserve", detail: "Lock your spot before you leave" },
      { title: "Navigate", detail: "Guided straight to your space" },
      { title: "Unlock Barrier", detail: "Access when you arrive" },
      { title: "Park", detail: "Your space was waiting" },
      { title: "Leave", detail: "Cashless. Effortless. Done." },
    ],
  },
  drivers: {
    eyebrow: "For Drivers",
    headline: "We Give You Time Back.",
    cards: [
      { title: "Guaranteed Parking", detail: "Your space is reserved." },
      { title: "Save Time", detail: "No more circling blocks." },
      { title: "Save Fuel", detail: "Drive once. Park once." },
      { title: "Less Stress", detail: "Arrive calm and on time." },
      { title: "Real-time Availability", detail: "Know before you go." },
      { title: "Cashless Experience", detail: "Pay once. Forget the rest." },
      { title: "Parking History", detail: "Your places, remembered." },
      { title: "Trusted Ratings", detail: "Park where others trust." },
    ],
  },
  owners: {
    eyebrow: "For Parking Owners",
    headline: "Turn Every Empty Space Into Opportunity.",
    cards: [
      { title: "Higher Occupancy", detail: "Fill spaces that sit empty." },
      { title: "More Reservations", detail: "Demand that finds you." },
      { title: "More Revenue", detail: "Every space works harder." },
      { title: "Happier Customers", detail: "An experience they return for." },
      { title: "Clear Analytics", detail: "See what your lot earns." },
      { title: "Dynamic Pricing", detail: "Price for demand, not guesswork." },
      { title: "Digital Operations", detail: "Less manual. More control." },
      { title: "Business Dashboard", detail: "Your parking, at a glance." },
    ],
  },
  dashboard: {
    eyebrow: "The Dashboard",
    headline: "Clarity for Every Space You Own.",
    metrics: [
      { label: "Today's Revenue", value: "$4,280", change: "+18%" },
      { label: "Occupancy", value: "87%", change: "+12%" },
      { label: "Reservations", value: "146", change: "+24%" },
      { label: "Peak Hours", value: "9–11 AM", change: "Live" },
      { label: "Returning Customers", value: "62%", change: "+9%" },
      { label: "Reservation Success", value: "98.4%", change: "Stable" },
    ],
    chartLabel: "Weekly occupancy",
    placeholder: "Premium dashboard preview — screenshots coming soon",
    livePreview: "Live preview",
    ownerLabel: "Spotly Owner",
  },
  technology: {
    eyebrow: "The Technology",
    headline: "Invisible When It Works. Unforgettable When You Need It.",
    flow: ["Mobile", "Cloud", "Dashboard", "Barrier", "Your Space"],
    note: "Technology that supports the story — never dominates it.",
  },
  why: {
    eyebrow: "Why Spotly",
    headline: "Two Ways to Park. Only One Feels Right.",
    traditional: {
      title: "Traditional Parking",
      items: ["Searching", "Guessing", "Driving Around", "Uncertainty"],
    },
    ours: {
      title: "Spotly",
      items: ["Reserve", "Navigate", "Guaranteed Parking", "Confidence"],
    },
  },
  vision: {
    eyebrow: "Our Vision",
    headline: "Building The Future Of Parking.",
    lines: [
      "We're not building another parking app.",
      "We're helping people reclaim their time.",
      "Helping businesses generate more revenue.",
      "Helping cities become smarter.",
      "Helping parking become effortless.",
    ],
  },
  cta: {
    eyebrow: "Let's Begin",
    headline: "Let's Build The Future Of Parking Together.",
    subhead: "Book a live demo. See confidence become product.",
    primaryCta: "Book a Live Demo",
    email: "hello@spotly.com",
    phone: "+971 4 555 0190",
    location: "Dubai, United Arab Emirates",
    labels: {
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
  },
  footer: {
    tagline: "Parking with Confidence.",
    rights: "© 2026 Spotly. All rights reserved.",
  },
};

export default en;
