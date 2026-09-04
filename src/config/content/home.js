import {
  ApiIcon,
  BarrierIcon,
  BuildingIcon,
  CarIcon,
  CheckCircleIcon,
  ClockIcon,
  CloudIcon,
  FuelIcon,
  GlobeIcon,
  LayersIcon,
  LockIcon,
  MapPinIcon,
  PhoneIcon,
  RefreshIcon,
  RouteIcon,
  SearchIcon,
  ShieldCheckIcon,
  SlidersIcon,
  UnlockIcon,
  UsersIcon,
} from '@/components/icons';
import { routes } from '@/config/navigation';

export const home = {
  hero: {
    eyebrow: 'Smart parking platform',
    headline: 'Reserve. Drive. Park.',
    supportingHeadline: "Know where you'll park before you arrive.",
    copy: 'Reserve your parking before you leave, get your automatically assigned parking bay, and drive straight to your space.',
    primaryCta: { label: 'Get Started', href: routes.contact },
    secondaryCta: { label: 'How It Works', href: '#how-it-works' },
    highlights: [
      'Reserve before you leave',
      'Your bay is assigned automatically',
      'Unlock the barrier from the app',
    ],
  },

  problem: {
    eyebrow: 'The parking problem',
    title: "Parking shouldn't be a search.",
    description:
      'The traditional parking experience is a loop: you drive, you search, the parking is full, and you start again. It costs time, fuel and patience — every single day.',
    loop: [
      { title: 'Drive', caption: 'You set off without knowing where you will park.', icon: CarIcon },
      { title: 'Search', caption: 'You circle the area looking for a free space.', icon: SearchIcon },
      { title: 'Parking full', caption: 'The nearest facility has nothing available.', icon: BarrierIcon },
      { title: 'Search again', caption: 'You move on and repeat the whole loop.', icon: RefreshIcon },
    ],
    costs: [
      { title: 'Wasted time', description: 'Minutes lost circling on every trip add up to hours each month.' },
      { title: 'Wasted fuel', description: 'Unnecessary driving burns fuel and adds avoidable emissions.' },
      { title: 'Wasted patience', description: 'Arriving late because of parking is a daily frustration.' },
    ],
    transition: 'What if your parking was waiting for you?',
  },

  intro: {
    eyebrow: 'Introducing Spotly',
    title: 'Meet Spotly.',
    description: 'A smarter way to reserve parking before you arrive.',
    body: [
      'Spotly connects drivers with available parking locations and automatically assigns an available parking bay.',
      'You choose the parking location. Spotly does the rest — our platform checks live availability and allocates a free bay to your reservation, so you always know exactly where you are going.',
    ],
    flow: [
      { title: 'Choose a parking location', icon: MapPinIcon },
      { title: 'Reserve', icon: CheckCircleIcon },
      { title: 'Get your bay', icon: LayersIcon },
      { title: 'Drive', icon: RouteIcon },
      { title: 'Park', icon: CarIcon },
    ],
    ruleTitle: 'You pick the location. Spotly picks the bay.',
    ruleBody:
      'You never have to hunt through a floor plan choosing a space. Select “Downtown Dubai Parking” and Spotly assigns an available bay — for example Floor 2, Bay 15 — automatically.',
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'From your destination to your parking bay in three steps.',
    description:
      'No circling, no guessing, no queueing at a ticket machine. Spotly turns parking into something you decide before you leave.',
    steps: [
      {
        number: '01',
        label: 'Choose',
        title: "Choose where you're going.",
        description:
          'Search for your destination and select the parking location closest to it. Spotly shows the connected parking locations nearby and how many bays are currently available.',
        points: ['Search by destination', 'See connected parking locations', 'Compare live availability'],
        screen: 'search',
      },
      {
        number: '02',
        label: 'Reserve',
        title: 'Reserve before you leave.',
        description:
          'Spotly checks availability and automatically assigns an available parking bay to your reservation. You receive the exact floor and bay number — you never have to choose a bay yourself.',
        points: [
          'Availability checked in real time',
          'An available bay is assigned automatically',
          'You get the exact floor and bay number',
        ],
        screen: 'assigned',
      },
      {
        number: '03',
        label: 'Park',
        title: 'Drive straight to your space.',
        description:
          'Drive to the parking location, unlock the barrier from the Spotly app, and park in your assigned bay. No searching, no uncertainty.',
        points: ['Drive directly to the location', 'Unlock the barrier in the app', 'Park in your assigned bay'],
        screen: 'reservation',
      },
    ],
    parkFlow: [
      { title: 'Parking location', caption: 'You arrive at the facility you reserved.', icon: BuildingIcon },
      { title: 'Smart barrier', caption: 'Unlock it from the Spotly app.', icon: BarrierIcon },
      { title: 'Assigned bay', caption: 'Park in the bay reserved for you.', icon: CarIcon },
    ],
  },

  benefits: {
    eyebrow: 'Why drivers use Spotly',
    title: 'Parking that is decided before you set off.',
    cards: [
      {
        icon: ClockIcon,
        title: 'Save Time',
        description: 'Stop wasting time driving around searching for parking.',
      },
      {
        icon: FuelIcon,
        title: 'Save Fuel',
        description: 'Less searching means less unnecessary driving and fuel consumption.',
      },
      {
        icon: ShieldCheckIcon,
        title: 'Park With Confidence',
        description: 'Know your parking location and assigned bay before you arrive.',
      },
    ],
  },

  exactBay: {
    eyebrow: 'Your assigned bay',
    title: "Know exactly where you'll park.",
    description: 'Your parking bay is assigned before you arrive.',
    points: [
      {
        title: 'Assigned automatically',
        description:
          'Spotly allocates an available bay from the location you reserved — no floor plans to study.',
      },
      {
        title: 'Floor and bay, upfront',
        description: 'The exact floor and bay number appear in the app the moment you reserve.',
      },
      {
        title: 'Held for your reservation',
        description: 'The bay and its barrier are held for you from the moment the reservation starts.',
      },
    ],
  },

  barrier: {
    eyebrow: 'Smart parking infrastructure',
    title: 'Your reservation connects directly to the parking bay.',
    description:
      'Every Spotly parking bay is paired with a smart barrier. When you reserve, that barrier is reserved with it.',
    chain: [
      { title: 'Mobile app', caption: 'You reserve and unlock from your phone.', icon: PhoneIcon },
      { title: 'Spotly Cloud', caption: 'The platform manages the reservation.', icon: CloudIcon },
      { title: 'Smart barrier', caption: 'The barrier for your bay responds.', icon: BarrierIcon },
      { title: 'Parking bay', caption: 'Your space, ready when you arrive.', icon: CarIcon },
    ],
    explainers: [
      {
        icon: UnlockIcon,
        title: 'Unlock from the app',
        description:
          'The barrier for your assigned bay talks to the Spotly cloud platform. When you arrive, you open it from the Spotly app.',
      },
      {
        icon: CarIcon,
        title: 'The barrier knows when you have parked',
        description:
          'A magnetic sensor built into the barrier detects whether a vehicle is present in the bay — there is no separate sensor to install in the space.',
      },
      {
        icon: CloudIcon,
        title: 'Status stays up to date',
        description:
          'The barrier reports the parking status back to Spotly, so the bay is marked occupied while you are there and available again once you leave.',
      },
    ],
  },

  lifecycle: {
    eyebrow: 'Reservation lifecycle',
    title: 'One reservation, from booking to exit.',
    description:
      'Every Spotly reservation follows the same simple, predictable path — and you can see exactly where you are in it from the app.',
    stages: [
      { title: 'Reserve', caption: 'You reserve a parking location.', icon: CheckCircleIcon, tone: 'primary' },
      { title: 'Barrier reserved', caption: 'Your bay and its barrier are held.', icon: LockIcon },
      { title: 'Arrive', caption: 'You drive to the location.', icon: RouteIcon },
      { title: 'Unlock', caption: 'You unlock from the app.', icon: UnlockIcon },
      { title: 'Barrier opens', caption: 'Access to your bay is granted.', icon: BarrierIcon },
      { title: 'Park', caption: 'You park in your assigned bay.', icon: CarIcon },
      { title: 'Vehicle detected', caption: 'The magnetic sensor confirms the vehicle.', icon: SlidersIcon },
      { title: 'Parking active', caption: 'The bay is shown as occupied.', icon: ClockIcon, tone: 'accent' },
      { title: 'Exit', caption: 'You drive out of the bay.', icon: RouteIcon },
      { title: 'Parking completed', caption: 'The bay becomes available again.', icon: CheckCircleIcon, tone: 'accent' },
    ],
  },

  wallet: {
    eyebrow: 'Wallet',
    title: 'Simple, transparent parking.',
    description:
      'Spotly uses a wallet so parking is settled without fumbling for a ticket machine on the way out.',
    points: [
      {
        title: 'Keep a Spotly wallet balance',
        description: 'Your wallet funds your parking reservations.',
      },
      {
        title: 'Charging starts at reservation',
        description:
          'Parking charges begin from the moment the reservation is created and continue until your vehicle leaves the parking bay.',
      },
      {
        title: 'Settled automatically on exit',
        description:
          'When your vehicle exits, the final parking amount is calculated and deducted from your wallet.',
      },
    ],
  },

  driverBenefits: {
    eyebrow: 'The Spotly difference',
    title: 'Reserve. Drive. Park.',
    description: 'Four things change the moment parking is decided in advance.',
    items: [
      { icon: SearchIcon, title: 'No Searching', description: 'Reserve before you leave.' },
      { icon: MapPinIcon, title: 'No Uncertainty', description: "Know where you'll park." },
      { icon: RouteIcon, title: 'No Unnecessary Driving', description: 'Go directly to your assigned parking location.' },
      { icon: CheckCircleIcon, title: 'Simple Experience', description: 'Reserve. Drive. Park.' },
    ],
  },

  ecosystem: {
    eyebrow: 'Beyond the driver',
    title: 'Parking is more than a driver problem.',
    description: 'Better parking can help create better cities.',
    body: 'Every unnecessary lap around a block is traffic a city does not need. When parking is reserved in advance and infrastructure is connected, drivers, operators and cities all work from the same real-time picture.',
    nodes: [
      { title: 'Drivers', caption: 'Reserve before arriving', icon: UsersIcon },
      { title: 'Parking operators', caption: 'Manage bays and demand', icon: SlidersIcon },
      { title: 'Property owners', caption: 'Monetise parking assets', icon: BuildingIcon },
      { title: 'Cities', caption: 'Understand parking demand', icon: GlobeIcon },
      { title: 'Smart infrastructure', caption: 'Connected barriers and data', icon: ApiIcon },
    ],
    cta: { label: 'Explore Spotly for Smart Cities', href: routes.smartCities },
  },

  ownerCta: {
    eyebrow: 'For parking owners',
    title: 'Have parking spaces?',
    description:
      'Turn your parking infrastructure into a smarter, more connected parking business.',
    points: [
      'See the real-time status of every bay',
      'Accept reservations while Spotly handles bay allocation',
      'Understand occupancy, demand and revenue',
    ],
    cta: { label: 'For Parking Owners', href: routes.parkingOwners },
  },

  finalCta: {
    title: 'Reserve. Drive. Park.',
    description: 'A smarter way to park is coming.',
    primary: { label: 'Join the Spotly Journey', href: routes.contact },
    secondary: { label: 'Partner With Spotly', href: routes.contact },
  },
};

export default home;
