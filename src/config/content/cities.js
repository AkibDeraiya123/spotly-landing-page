import {
  ApiIcon,
  BarrierIcon,
  BoltIcon,
  CarIcon,
  ChartIcon,
  CloudIcon,
  EyeIcon,
  GlobeIcon,
  GridIcon,
  LayersIcon,
  RouteIcon,
  SlidersIcon,
  SparklesIcon,
  UsersIcon,
} from '@/components/icons';
import { routes } from '@/config/navigation';

export const cities = {
  hero: {
    eyebrow: 'For smart cities & government',
    headline: 'Powering Smarter Parking for Smarter Cities.',
    copy: 'Spotly connects drivers, parking operators and parking infrastructure through an intelligent parking platform designed for the cities of tomorrow.',
    primaryCta: { label: 'Talk to Spotly', href: routes.contact },
    secondaryCta: { label: 'Explore the Platform', href: '#capabilities' },
    audiences: [
      'Government authorities',
      'Municipalities',
      'Transport authorities',
      'Public parking operators',
      'Enterprise mobility companies',
    ],
  },

  challenge: {
    eyebrow: 'The urban parking challenge',
    title: 'Cities are under growing parking pressure.',
    description:
      'Parking demand is rising faster than parking supply, and most of the infrastructure that could answer it is not connected to anything.',
    pressures: [
      { title: 'Growing vehicle ownership', description: 'More vehicles competing for the same kerb and bay capacity.' },
      { title: 'Urban density', description: 'Land for new parking is limited in exactly the places demand is highest.' },
      { title: 'Parking demand peaks', description: 'Demand concentrates around events, districts and times of day.' },
      { title: 'Traffic congestion', description: 'Vehicles circling for parking add avoidable traffic to city streets.' },
      { title: 'Inefficient utilisation', description: 'Available bays go unused while nearby facilities overflow.' },
      { title: 'Fragmented infrastructure', description: 'Operators, facilities and systems rarely share a common view.' },
      { title: 'Limited real-time visibility', description: 'Decisions are made on surveys and estimates, not live data.' },
    ],
    transition: 'Parking data can become mobility intelligence.',
  },

  dashboard: {
    eyebrow: 'Network view',
    title: 'A live picture of parking across connected locations.',
    description:
      'Spotly aggregates bay-level status from connected parking locations into a single network view — availability, occupancy, reservations and demand patterns in one place.',
    metrics: [
      { label: 'Availability', detail: 'Free bays across connected locations' },
      { label: 'Occupancy', detail: 'How intensively capacity is being used' },
      { label: 'Reservations', detail: 'Parking committed ahead of arrival' },
      { label: 'Demand patterns', detail: 'When and where pressure builds' },
    ],
  },

  capabilities: {
    eyebrow: 'Platform capabilities',
    title: 'An infrastructure layer for city-wide parking.',
    description:
      'Spotly is built as a centralised platform that connects parking locations, devices and the people who manage them.',
    items: [
      {
        icon: EyeIcon,
        title: 'City-Wide Parking Visibility',
        description: 'Real-time availability across connected parking locations.',
      },
      {
        icon: GridIcon,
        title: 'Intelligent Parking Management',
        description: 'Manage parking infrastructure through a centralised platform.',
      },
      {
        icon: ChartIcon,
        title: 'Data & Analytics',
        description: 'Understand parking demand and utilisation.',
      },
      {
        icon: SlidersIcon,
        title: 'Configurable Pricing',
        description: 'Support configurable parking pricing strategies.',
      },
      {
        icon: BarrierIcon,
        title: 'Smart Infrastructure',
        description: 'Connect barriers and parking infrastructure to the cloud.',
      },
      {
        icon: ApiIcon,
        title: 'APIs & Integrations',
        description: 'Enable integration with existing mobility and city platforms.',
      },
      {
        icon: SparklesIcon,
        title: 'AI & Predictive Intelligence',
        description: 'Predict parking demand and improve parking utilisation.',
        futureCapability: true,
      },
    ],
    futureNote:
      'Capabilities marked as planned describe Spotly’s intended long-term roadmap rather than functionality available today.',
  },

  integration: {
    eyebrow: 'Enterprise integration',
    title: 'Designed to complement existing parking infrastructure.',
    description:
      'Spotly is built to sit alongside the parking systems a city or operator already runs, and to be integrated into larger parking and mobility ecosystems.',
    layers: [
      [
        { title: 'Parking operators', caption: 'Facility and bay management', icon: SlidersIcon },
        { title: 'Cities & government', caption: 'Policy, planning and oversight', icon: GlobeIcon },
        { title: 'Mobility platforms', caption: 'Navigation and mobility services', icon: RouteIcon },
      ],
      [
        { title: 'Barriers & devices', caption: 'Connected parking hardware', icon: BarrierIcon },
        { title: 'APIs & integrations', caption: 'Programmatic access to the platform', icon: ApiIcon },
        { title: 'Data & analytics', caption: 'Utilisation and demand insight', icon: ChartIcon },
      ],
    ],
    notes: [
      {
        icon: LayersIcon,
        title: 'Complementary, not disruptive',
        description:
          'Spotly is designed to add a connected reservation and visibility layer to parking infrastructure that already exists.',
      },
      {
        icon: CloudIcon,
        title: 'Centralised platform',
        description:
          'Parking locations, devices and reservations are managed through one cloud platform rather than isolated systems.',
      },
      {
        icon: ApiIcon,
        title: 'Integration is scoped per programme',
        description:
          'Not every integration listed is available today. The specific interfaces, data flows and timelines are agreed with each city, operator or technology partner.',
      },
    ],
  },

  ecosystemNote: {
    title: 'Built for large parking and mobility organisations.',
    description:
      'Spotly is designed so that public authorities, large parking operators, enterprise parking companies and mobility platforms can all work from the same connected parking layer.',
    disclaimer:
      'Spotly does not claim any existing partnership, integration or commercial relationship with any organisation referenced by visitors to this site. Any collaboration would be established directly with our team.',
  },

  vision: {
    eyebrow: 'Long-term vision',
    title: 'From parking management to urban mobility intelligence.',
    description:
      "Spotly's long-term vision is to become a connected parking infrastructure layer that can support broader mobility ecosystems.",
    areas: [
      { icon: CarIcon, title: 'Parking', status: 'Core product' },
      { icon: BoltIcon, title: 'EV charging', status: 'Future opportunity' },
      { icon: RouteIcon, title: 'Mobility', status: 'Future opportunity' },
      { icon: UsersIcon, title: 'Fleet management', status: 'Future opportunity' },
      { icon: GlobeIcon, title: 'Navigation', status: 'Future opportunity' },
      { icon: ChartIcon, title: 'Urban analytics', status: 'Future opportunity' },
      { icon: SparklesIcon, title: 'AI demand prediction', status: 'Future opportunity' },
    ],
    note: 'Areas labelled as future opportunities are directional and are not part of the current Spotly product.',
  },

  cta: {
    title: "Let's build smarter cities together.",
    description:
      "Whether you're a city authority, parking operator, technology provider or mobility company, let's explore how Spotly can fit into your ecosystem.",
    primary: { label: 'Talk to Spotly', href: routes.contact },
    secondary: { label: 'For Parking Owners', href: routes.parkingOwners },
  },
};

export default cities;
