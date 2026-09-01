import { AppWindow } from './PhoneFrame';
import ParkingMap from './ParkingMap';
import { BarrierIcon, ChartIcon, GaugeIcon, GridIcon, MapPinIcon, SlidersIcon } from '@/components/icons';

/* --------------------------------------------------------------------- */
/* Primitives                                                             */
/* --------------------------------------------------------------------- */

function Stat({ label, value, tone = 'neutral', hint }) {
  const tones = {
    neutral: 'text-ink-900',
    available: 'text-accent-600',
    reserved: 'text-primary-600',
    occupied: 'text-ink-700',
  };

  return (
    <div className="rounded-lg border border-border bg-white px-4 py-3.5">
      <p className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-muted">{label}</p>
      <p className={`mt-1.5 font-display text-2xl font-extrabold leading-none ${tones[tone]}`}>
        {value}
      </p>
      {hint ? <p className="mt-1.5 text-[0.6875rem] text-muted">{hint}</p> : null}
    </div>
  );
}

function Meter({ label, value, percent, tone = 'primary' }) {
  const bar = tone === 'accent' ? 'bg-accent-500' : 'bg-primary-500';

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-muted">{label}</p>
        <p className="font-display text-lg font-extrabold text-ink-900">{value}</p>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary-200">
        <div className={`h-full rounded-full ${bar}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function BarChart({ data, tone = 'primary' }) {
  const bar = tone === 'accent' ? 'bg-accent-500' : 'bg-primary-500';

  return (
    <div className="flex h-24 items-end gap-1.5">
      {data.map((item) => (
        <div key={item.label} className="flex flex-1 flex-col items-center gap-1.5">
          <div className="flex h-full w-full items-end rounded-sm bg-secondary-100">
            <div className={`w-full rounded-sm ${bar}`} style={{ height: `${item.value}%` }} />
          </div>
          <span className="text-[0.5625rem] font-semibold text-muted">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function SideNav({ items }) {
  return (
    <nav className="hidden w-44 shrink-0 flex-col gap-1 border-r border-border bg-secondary-100 p-3 lg:flex">
      {items.map((item, index) => (
        <span
          key={item.label}
          className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-[0.75rem] font-semibold ${
            index === 0 ? 'bg-ink-900 text-white' : 'text-ink-600'
          }`}
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </span>
      ))}
    </nav>
  );
}

/* --------------------------------------------------------------------- */
/* Parking owner dashboard                                                */
/* --------------------------------------------------------------------- */

export function OwnerDashboardMockup({ className = '' }) {
  return (
    <AppWindow
      className={className}
      title="app.spotly — Parking overview"
      label="Example Spotly operator dashboard showing a parking overview with total, available, reserved and occupied bays, occupancy, revenue for the day, barrier device status and a parking location map. The figures shown are a design demonstration."
    >
      <div className="flex bg-secondary-100">
        <SideNav
          items={[
            { label: 'Overview', icon: GridIcon },
            { label: 'Locations', icon: MapPinIcon },
            { label: 'Reservations', icon: BarrierIcon },
            { label: 'Pricing', icon: SlidersIcon },
            { label: 'Analytics', icon: ChartIcon },
          ]}
        />

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-ink-900">
                Parking overview
              </p>
              <p className="mt-1 text-[0.6875rem] text-muted">Downtown Dubai Parking · Today</p>
            </div>
            <span className="rounded-full bg-accent-50 px-2.5 py-1 text-[0.625rem] font-bold text-accent-700 ring-1 ring-accent-200">
              Live
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 2xl:grid-cols-4">
            <Stat label="Total bays" value="250" />
            <Stat label="Available" value="84" tone="available" />
            <Stat label="Reserved" value="32" tone="reserved" />
            <Stat label="Occupied" value="134" tone="occupied" />
          </div>

          <div className="mt-2.5 grid gap-2.5 lg:grid-cols-[1.15fr_1fr]">
            <div className="flex flex-col gap-4 rounded-lg border border-border bg-white p-4">
              <Meter label="Occupancy" value="67%" percent={67} />
              <div className="flex items-baseline justify-between border-t border-border pt-3">
                <p className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-muted">
                  Today&rsquo;s revenue
                </p>
                <p className="font-display text-lg font-extrabold text-ink-900">AED 8,450</p>
              </div>
              <div className="flex items-center justify-between rounded-md bg-secondary-200 px-3 py-2">
                <span className="flex items-center gap-2 text-[0.6875rem] font-semibold text-ink-700">
                  <BarrierIcon className="h-4 w-4 text-accent-600" />
                  Barriers online
                </span>
                <span className="text-[0.75rem] font-bold text-accent-600">248 / 250</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-border bg-white">
              <ParkingMap
                className="h-[11.5rem] w-full"
                rounded="rounded-none"
                markers={[
                  { x: 34, y: 58, label: 'Downtown Dubai', detail: '84 free', selected: true },
                  { x: 70, y: 42, label: 'Boulevard Plaza', detail: '31 free' },
                  { x: 80, y: 80, label: 'City Walk', detail: '112 free' },
                ]}
              />
            </div>
          </div>

          <div className="mt-2.5 rounded-lg border border-border bg-white p-4">
            <p className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-muted">
              Reservations by hour
            </p>
            <div className="mt-3">
              <BarChart
                data={[
                  { label: '08', value: 28 },
                  { label: '10', value: 46 },
                  { label: '12', value: 68 },
                  { label: '14', value: 54 },
                  { label: '16', value: 82 },
                  { label: '18', value: 96 },
                  { label: '20', value: 61 },
                  { label: '22', value: 34 },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/* --------------------------------------------------------------------- */
/* Multi-location view                                                    */
/* --------------------------------------------------------------------- */

export function LocationsDashboardMockup({ className = '' }) {
  const locations = [
    { name: 'Downtown Dubai Parking', bays: 250, free: 84, occupancy: 67, status: 'Online' },
    { name: 'Boulevard Plaza Parking', bays: 120, free: 31, occupancy: 74, status: 'Online' },
    { name: 'City Walk North Parking', bays: 310, free: 112, occupancy: 64, status: 'Online' },
    { name: 'Marina Retail Parking', bays: 180, free: 12, occupancy: 93, status: 'Online' },
  ];

  return (
    <AppWindow
      className={className}
      title="app.spotly — Locations"
      label="Example Spotly operator dashboard listing four parking locations with their total bays, available bays, occupancy and device status, next to a map of the locations. The figures shown are a design demonstration."
    >
      <div className="bg-secondary-100 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-ink-900">
              Your parking locations
            </p>
            <p className="mt-1 text-[0.6875rem] text-muted">4 locations · 860 bays connected</p>
          </div>
          <span className="rounded-full bg-accent-50 px-2.5 py-1 text-[0.625rem] font-bold text-accent-700 ring-1 ring-accent-200">
            All online
          </span>
        </div>

        <div className="mt-4 grid gap-2.5 lg:grid-cols-[1.35fr_1fr]">
          <div className="overflow-hidden rounded-lg border border-border bg-white">
            <div className="grid grid-cols-[1.6fr_repeat(3,minmax(0,1fr))] gap-2 border-b border-border px-3.5 py-2.5 text-[0.5625rem] font-bold uppercase tracking-[0.1em] text-muted">
              <span>Location</span>
              <span className="text-right">Bays</span>
              <span className="text-right">Free</span>
              <span className="text-right">Occupancy</span>
            </div>
            {locations.map((location) => (
              <div
                key={location.name}
                className="grid grid-cols-[1.6fr_repeat(3,minmax(0,1fr))] items-center gap-2 border-b border-border px-3.5 py-2.5 last:border-b-0"
              >
                <span className="min-w-0">
                  <span className="block truncate text-[0.75rem] font-bold text-ink-900">
                    {location.name}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 text-[0.625rem] font-semibold text-accent-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {location.status}
                  </span>
                </span>
                <span className="text-right text-[0.75rem] font-semibold tabular-nums text-ink-700">
                  {location.bays}
                </span>
                <span className="text-right text-[0.75rem] font-semibold tabular-nums text-accent-600">
                  {location.free}
                </span>
                <span className="text-right">
                  <span className="block text-[0.75rem] font-bold tabular-nums text-ink-900">
                    {location.occupancy}%
                  </span>
                  <span className="mt-1 block h-1 w-full overflow-hidden rounded-full bg-secondary-200">
                    <span
                      className="block h-full rounded-full bg-primary-500"
                      style={{ width: `${location.occupancy}%` }}
                    />
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-white">
            <ParkingMap
              className="h-full min-h-[12rem] w-full"
              rounded="rounded-none"
              markers={[
                { x: 30, y: 52, label: 'Downtown Dubai', detail: '84 free', selected: true },
                { x: 66, y: 34, label: 'Boulevard Plaza', detail: '31 free' },
                { x: 78, y: 74, label: 'City Walk', detail: '112 free' },
                { x: 40, y: 84, label: 'Marina Retail', detail: '12 free' },
              ]}
            />
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/* --------------------------------------------------------------------- */
/* City / network dashboard                                               */
/* --------------------------------------------------------------------- */

export function CityDashboardMockup({ className = '' }) {
  return (
    <AppWindow
      className={className}
      tone="dark"
      title="app.spotly — City parking network"
      label="Example Spotly city parking network dashboard showing total, available, occupied and reserved bays across connected parking locations, network occupancy, a city map with parking zones and demand analytics. The figures shown are a design demonstration."
    >
      <div className="bg-ink-800 p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-white">
              City parking network
            </p>
            <p className="mt-1 text-[0.6875rem] text-white/50">
              Connected parking locations · Live view
            </p>
          </div>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[0.625rem] font-bold text-white/70 ring-1 ring-white/15">
            All zones
          </span>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {[
            { label: 'Total bays', value: '24,850', tone: 'text-white' },
            { label: 'Available', value: '7,240', tone: 'text-accent-400' },
            { label: 'Occupied', value: '14,890', tone: 'text-white' },
            { label: 'Reserved', value: '2,720', tone: 'text-primary-400' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3.5">
              <dt className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white/50">
                {item.label}
              </dt>
              <dd className={`mt-1.5 font-display text-2xl font-extrabold leading-none ${item.tone}`}>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-2.5 grid gap-2.5 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-4">
            <div>
              <div className="flex items-baseline justify-between">
                <p className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white/50">
                  Network occupancy
                </p>
                <p className="font-display text-xl font-extrabold text-white">70%</p>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[70%] rounded-full bg-primary-500" />
              </div>
            </div>

            <div className="border-t border-white/10 pt-3">
              <p className="text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white/50">
                Demand by district
              </p>
              <div className="mt-3 flex h-20 items-end gap-1.5">
                {[
                  { label: 'DT', value: 92 },
                  { label: 'MR', value: 68 },
                  { label: 'JZ', value: 44 },
                  { label: 'BB', value: 76 },
                  { label: 'AL', value: 58 },
                  { label: 'DZ', value: 35 },
                ].map((item) => (
                  <div key={item.label} className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="flex h-full w-full items-end rounded-sm bg-white/10">
                      <div
                        className="w-full rounded-sm bg-accent-500"
                        style={{ height: `${item.value}%` }}
                      />
                    </div>
                    <span className="text-[0.5625rem] font-semibold text-white/50">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between rounded-md bg-white/[0.06] px-3 py-2">
              <span className="flex items-center gap-2 text-[0.6875rem] font-semibold text-white/70">
                <GaugeIcon className="h-4 w-4 text-accent-400" />
                Connected locations
              </span>
              <span className="text-[0.75rem] font-bold text-white">142</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10">
            <ParkingMap
              className="h-full min-h-[15rem] w-full"
              rounded="rounded-none"
              markers={[
                { x: 26, y: 42, label: 'Downtown zone', detail: '1,240 free', selected: true },
                { x: 62, y: 30, label: 'Marina', detail: '860 free' },
                { x: 78, y: 66, label: 'Business Bay', detail: '415 free' },
                { x: 40, y: 82, label: 'Al Quoz', detail: '2,100 free' },
              ]}
            />
          </div>
        </div>
      </div>
    </AppWindow>
  );
}
