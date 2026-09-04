import {
  ApiIcon,
  BarrierIcon,
  BuildingIcon,
  ChartIcon,
  CheckCircleIcon,
  CoinsIcon,
  EyeIcon,
  GaugeIcon,
  HomeIcon,
  HospitalIcon,
  HotelIcon,
  LayersIcon,
  RouteIcon,
  ShoppingBagIcon,
  SlidersIcon,
  TicketIcon,
  UsersIcon,
} from '@/components/icons';
import { routes } from '@/config/navigation';

export const owners = {
  hero: {
    eyebrow: 'For parking owners & operators',
    headline: 'Turn parking spaces into a smarter business.',
    copy: 'Spotly helps parking owners manage, monetise and optimise their parking infrastructure while giving drivers a seamless reservation experience.',
    primaryCta: { label: 'Partner With Spotly', href: routes.contact },
    secondaryCta: { label: 'Talk to Our Team', href: routes.contact },
    bullets: [
      'Real-time status for every bay',
      'Reservations allocated automatically',
      'Every location in one platform',
    ],
  },

  problem: {
    eyebrow: 'The operator challenge',
    title: 'Most parking is managed without a live picture of what is happening.',
    description:
      'Parking assets are often run on manual processes and after-the-fact reporting, which makes it hard to see demand, respond to it or give drivers a predictable experience.',
    challenges: [
      { title: 'Unpredictable occupancy', description: 'Demand swings are only visible once the facility is already full or empty.' },
      { title: 'Underutilised parking', description: 'Available bays go unused because drivers cannot see or reserve them.' },
      { title: 'Manual management', description: 'Attendants, paper records and disconnected systems absorb time and cost.' },
      { title: 'Poor visibility', description: 'There is no single view of bay-level status across a facility.' },
      { title: 'Difficult customer experience', description: 'Drivers queue, circle and guess — and blame the facility for it.' },
      { title: 'Limited revenue optimisation', description: 'Pricing cannot respond to demand that is not being measured.' },
      { title: 'No real-time parking data', description: 'Decisions rely on monthly summaries rather than live information.' },
    ],
    transition: 'Spotly connects it all.',
  },

  dashboard: {
    eyebrow: 'Operator platform',
    title: 'One dashboard for every bay, reservation and barrier.',
    description:
      'The Spotly operator dashboard brings bay-level status, reservations, device health and revenue together in a single view, across one location or many.',
    highlights: [
      { icon: EyeIcon, label: 'Bay-level status', detail: 'Available, reserved and occupied at a glance' },
      { icon: TicketIcon, label: 'Live reservations', detail: 'See what is booked and what is arriving' },
      { icon: BarrierIcon, label: 'Device status', detail: 'Monitor connected barriers across the facility' },
      { icon: CoinsIcon, label: 'Revenue view', detail: 'Track parking revenue by location and period' },
    ],
  },

  features: {
    eyebrow: 'Platform capabilities',
    title: 'Everything you need to run connected parking.',
    description:
      'Spotly is built to sit on top of your existing parking operation — not to replace how your business works.',
    items: [
      {
        icon: EyeIcon,
        title: 'Real-Time Parking Visibility',
        description: 'Know the status of every parking bay across your facility as it changes.',
      },
      {
        icon: TicketIcon,
        title: 'Automated Reservations',
        description: 'Allow drivers to reserve parking while Spotly manages bay allocation for you.',
      },
      {
        icon: BarrierIcon,
        title: 'Smart Barrier Integration',
        description: 'Connect parking infrastructure with the Spotly platform.',
      },
      {
        icon: SlidersIcon,
        title: 'Revenue Management',
        description: 'Configure parking pricing and manage rates for your locations.',
      },
      {
        icon: ChartIcon,
        title: 'Analytics',
        description: 'Understand occupancy, demand and revenue across time periods.',
      },
      {
        icon: UsersIcon,
        title: 'Customer Experience',
        description: 'Give drivers a predictable parking experience from reservation to exit.',
      },
      {
        icon: LayersIcon,
        title: 'Multi-Location Management',
        description: 'Manage multiple parking locations through one platform.',
      },
    ],
  },

  businessValue: {
    eyebrow: 'Business value',
    title: 'Visibility is where better parking economics start.',
    description:
      'When you can see how your parking is actually used, everything downstream — utilisation, experience and pricing — becomes something you can work on.',
    chain: [
      { title: 'Better visibility', caption: 'Live, bay-level parking data.', icon: EyeIcon },
      { title: 'Better utilisation', caption: 'Available bays become discoverable.', icon: GaugeIcon },
      { title: 'Better experience', caption: 'Drivers arrive knowing where to park.', icon: RouteIcon },
      { title: 'More reservations', caption: 'Parking can be booked in advance.', icon: TicketIcon },
      { title: 'Revenue opportunity', caption: 'Informed pricing and planning decisions.', icon: CoinsIcon },
    ],
  },

  useCases: {
    eyebrow: 'Where Spotly fits',
    title: 'Built for the places people already need to park.',
    items: [
      { icon: ShoppingBagIcon, title: 'Shopping Malls', description: 'Help visitors reserve parking before arriving.' },
      { icon: HotelIcon, title: 'Hotels', description: 'Offer guests a more predictable parking experience.' },
      { icon: BuildingIcon, title: 'Commercial Buildings', description: 'Improve employee and visitor parking management.' },
      { icon: HomeIcon, title: 'Residential Communities', description: 'Manage resident and visitor parking.' },
      { icon: HospitalIcon, title: 'Hospitals', description: 'Help visitors navigate parking more efficiently.' },
      { icon: TicketIcon, title: 'Event Venues', description: 'Manage high-demand parking periods.' },
    ],
  },

  integration: {
    eyebrow: 'Getting started',
    title: 'Designed to work with the parking you already operate.',
    steps: [
      { title: 'Map your locations', caption: 'Define facilities, floors and bays in the platform.', icon: LayersIcon },
      { title: 'Connect the barriers', caption: 'Pair each bay with its smart barrier.', icon: BarrierIcon },
      { title: 'Configure pricing', caption: 'Set the rates and rules for each location.', icon: SlidersIcon },
      { title: 'Go live to drivers', caption: 'Your location becomes reservable in Spotly.', icon: CheckCircleIcon },
    ],
    note: {
      icon: ApiIcon,
      title: 'We deploy with your team',
      description:
        'Our team maps your facilities, connects barriers and configures the platform so your locations go live on Spotly.',
    },
  },

  cta: {
    title: 'Ready to make your parking smarter?',
    description: "Let's explore how Spotly can help your parking business.",
    primary: { label: 'Become a Spotly Partner', href: routes.contact },
    secondary: { label: 'Contact Us', href: routes.contact },
  },
};

export default owners;
