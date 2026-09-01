import PhoneFrame, { StatusBar } from './PhoneFrame';
import ParkingMap from './ParkingMap';
import {
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  SearchIcon,
  UnlockIcon,
  WalletIcon,
} from '@/components/icons';

/* --------------------------------------------------------------------- */
/* Shared bits                                                            */
/* --------------------------------------------------------------------- */

function ReservedPill() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2.5 py-1 text-[0.6875rem] font-bold text-accent-700 ring-1 ring-accent-200">
      <CheckIcon className="h-3 w-3" strokeWidth={2.8} />
      Parking Reserved
    </span>
  );
}

function AssignedBay({ floor = '2', bay = '15' }) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <div className="rounded-md bg-secondary-100 px-3 py-2.5">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-ink-600">Floor</p>
        <p className="mt-0.5 font-display text-xl font-extrabold text-ink-900">{floor}</p>
      </div>
      <div className="rounded-md bg-primary-600 px-3 py-2.5">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-white">Bay</p>
        <p className="mt-0.5 font-display text-xl font-extrabold text-white">{bay}</p>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------- */
/* Screens                                                                */
/* --------------------------------------------------------------------- */

/**
 * The core "your parking is confirmed" screen used in the hero.
 */
export function ReservationScreen() {
  return (
    <div className="flex flex-col bg-white">
      <StatusBar />

      <ParkingMap
        className="h-36 w-full"
        rounded="rounded-none"
        markers={[{ x: 52, y: 62, label: 'Downtown Dubai', detail: 'Bay assigned', selected: true }]}
        showRoute
      />

      <div className="flex flex-col gap-3.5 px-4 pb-5 pt-4">
        <div>
          <p className="font-display text-[1.05rem] font-extrabold leading-tight text-ink-900">
            Downtown Dubai
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[0.6875rem] font-medium text-ink-600">
            <MapPinIcon className="h-3 w-3" />
            Boulevard Parking · Level P2
          </p>
        </div>

        <ReservedPill />

        <AssignedBay />

        <div className="flex items-center gap-2 rounded-md border border-border px-3 py-2.5">
          <ClockIcon className="h-4 w-4 text-ink-500" />
          <p className="text-[0.75rem] font-semibold text-ink-800">Arrive by 4:30 PM</p>
        </div>

        <div className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-ink-900 text-[0.75rem] font-bold text-white">
          <UnlockIcon className="h-3.5 w-3.5" strokeWidth={2} />
          Unlock barrier
        </div>
      </div>
    </div>
  );
}

/**
 * Step 01 — the driver picks a parking location (never an individual bay).
 */
export function LocationSearchScreen() {
  const locations = [
    {
      name: 'Downtown Dubai Parking',
      distance: '250 m from destination',
      bays: '84 bays available',
      selected: true,
    },
    { name: 'Boulevard Plaza Parking', distance: '480 m from destination', bays: '31 bays available' },
    { name: 'City Walk North Parking', distance: '900 m from destination', bays: '112 bays available' },
  ];

  return (
    <div className="flex flex-col bg-white">
      <StatusBar />

      <div className="px-4 pb-3 pt-2">
        <div className="flex items-center gap-2 rounded-full border border-border bg-secondary-100 px-3 py-2">
          <SearchIcon className="h-3.5 w-3.5 text-ink-600" />
          <span className="text-[0.75rem] font-medium text-ink-800">Downtown Dubai</span>
        </div>
      </div>

      <ParkingMap
        className="h-32 w-full"
        rounded="rounded-none"
        markers={[
          { x: 30, y: 55, label: 'Downtown Dubai', detail: '84 bays free', selected: true },
          { x: 68, y: 40, detail: '31 free', label: 'Boulevard Plaza' },
          { x: 82, y: 78, detail: '112 free', label: 'City Walk' },
        ]}
      />

      <ul className="flex flex-col gap-2 px-4 py-3.5">
        {locations.map((location) => (
          <li
            key={location.name}
            className={`rounded-md border px-3 py-2.5 ${
              location.selected ? 'border-primary-500 bg-primary-50' : 'border-border bg-white'
            }`}
          >
            <p className="text-[0.75rem] font-bold text-ink-900">{location.name}</p>
            <p className="mt-0.5 text-[0.6875rem] text-ink-600">{location.distance}</p>
            <p className="mt-1 text-[0.6875rem] font-semibold text-accent-700">{location.bays}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Step 02 — Spotly confirms the reservation and reveals the assigned bay.
 */
export function BayAssignedScreen() {
  return (
    <div className="flex flex-col bg-white">
      <StatusBar />

      <div className="flex flex-col gap-4 px-4 pb-6 pt-6">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-50 ring-1 ring-accent-200">
            <CheckIcon className="h-6 w-6 text-accent-600" strokeWidth={2.4} />
          </span>
          <p className="mt-3 font-display text-[1.05rem] font-extrabold leading-tight text-ink-900">
            Downtown Dubai Parking
          </p>
          <p className="mt-1 text-[0.6875rem] font-medium text-ink-600">
            Spotly assigned your bay automatically
          </p>
        </div>

        <AssignedBay />

        <dl className="flex flex-col gap-1.5 rounded-md border border-border px-3 py-2.5 text-[0.6875rem]">
          <div className="flex items-center justify-between">
            <dt className="text-ink-600">Reservation start</dt>
            <dd className="font-semibold text-ink-800">4:12 PM</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-ink-600">Status</dt>
            <dd className="font-semibold text-accent-700">Reserved</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

/**
 * The wallet screen — charges run from reservation until the vehicle leaves.
 */
export function WalletScreen() {
  const transactions = [
    { label: 'Downtown Dubai Parking', meta: '1h 24m · Completed', amount: '− AED 22.00' },
    { label: 'Wallet top-up', meta: 'Yesterday', amount: '+ AED 100.00', positive: true },
    { label: 'City Walk North Parking', meta: '45m · Completed', amount: '− AED 12.50' },
  ];

  return (
    <div className="flex flex-col bg-white">
      <StatusBar />

      <div className="px-4 pb-5 pt-3">
        <div className="rounded-lg bg-ink-900 px-4 py-4 text-white">
          <p className="flex items-center gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-white/70">
            <WalletIcon className="h-3.5 w-3.5" />
            Spotly Wallet
          </p>
          <p className="mt-2 font-display text-[1.75rem] font-extrabold leading-none">AED 125.50</p>
          <p className="mt-2 text-[0.6875rem] text-white/70">Available balance</p>
        </div>

        <div className="mt-3 rounded-md border border-primary-200 bg-primary-50 px-3 py-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[0.6875rem] font-semibold text-ink-900">Current reservation</p>
            <p className="font-display text-[0.9rem] font-extrabold text-primary-700">AED 18.50</p>
          </div>
          <p className="mt-1 text-[0.625rem] text-ink-600">Charging since 4:12 PM · Bay 15</p>
        </div>

        <p className="mt-4 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-ink-600">
          Transaction history
        </p>
        <ul className="mt-2 flex flex-col divide-y divide-border">
          {transactions.map((transaction) => (
            <li key={transaction.label} className="flex items-center justify-between gap-3 py-2.5">
              <span className="min-w-0">
                <span className="block truncate text-[0.75rem] font-semibold text-ink-900">
                  {transaction.label}
                </span>
                <span className="block text-[0.625rem] text-ink-600">{transaction.meta}</span>
              </span>
              <span
                className={`shrink-0 text-[0.75rem] font-bold ${
                  transaction.positive ? 'text-accent-700' : 'text-ink-800'
                }`}
              >
                {transaction.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------- */
/* Public wrapper                                                         */
/* --------------------------------------------------------------------- */

const screens = {
  reservation: {
    Component: ReservationScreen,
    label:
      'Spotly app screen showing a confirmed reservation at Downtown Dubai: parking reserved, Floor 2, Bay 15, arrive by 4:30 PM, with an unlock barrier button.',
  },
  search: {
    Component: LocationSearchScreen,
    label:
      'Spotly app screen showing a search for Downtown Dubai with three nearby parking locations and the number of bays available at each.',
  },
  assigned: {
    Component: BayAssignedScreen,
    label:
      'Spotly app screen confirming a reservation at Downtown Dubai Parking with the automatically assigned Floor 2, Bay 15.',
  },
  wallet: {
    Component: WalletScreen,
    label:
      'Spotly app wallet screen showing an available balance of AED 125.50, a current reservation charge of AED 18.50 and recent parking transactions.',
  },
};

export default function MobileAppMockup({ screen = 'reservation', className = '', shadow = 'xl' }) {
  const { Component, label } = screens[screen] || screens.reservation;

  return (
    <PhoneFrame label={label} className={className} shadow={shadow}>
      <Component />
    </PhoneFrame>
  );
}
