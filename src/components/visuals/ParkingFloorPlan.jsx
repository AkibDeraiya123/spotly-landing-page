import { CarIcon, CheckIcon } from '@/components/icons';
import { DemoBadge } from '@/components/ui/Badge';

const BAYS = [
  { number: 12, status: 'occupied' },
  { number: 13, status: 'available' },
  { number: 14, status: 'occupied' },
  { number: 15, status: 'yours' },
  { number: 16, status: 'available' },
  { number: 17, status: 'occupied' },
];

const STATUS = {
  available: {
    label: 'Available',
    box: 'border-dashed border-ink-300 bg-secondary-100',
    number: 'text-ink-500',
    text: 'text-muted',
  },
  occupied: {
    label: 'Occupied',
    box: 'border-ink-200 bg-secondary-200',
    number: 'text-ink-500',
    text: 'text-ink-500',
  },
  yours: {
    label: 'Your bay',
    box: 'border-primary-600 bg-primary-600 shadow-md',
    number: 'text-white',
    text: 'text-white',
  },
};

/**
 * Static parking floor illustration. Bay 15 is the driver's automatically
 * assigned bay; status is communicated with an icon and a text label as well as
 * colour, so it never depends on colour alone.
 */
export default function ParkingFloorPlan({ className = '' }) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-border bg-white shadow-md ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-secondary-100 px-5 py-4 sm:px-7">
        <div>
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-ink-900">
            Downtown Dubai Parking
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Floor 2
          </p>
        </div>
        <DemoBadge />
      </div>

      <div className="bg-blueprint px-5 py-7 sm:px-7 sm:py-9">
        <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 2xl:grid-cols-6">
          {BAYS.map((bay) => {
            const status = STATUS[bay.status];
            const isYours = bay.status === 'yours';

            return (
              <li key={bay.number} className="flex flex-col items-center">
                <div
                  className={`flex w-full flex-col items-center justify-center rounded-lg border-2 px-2 py-5 ${status.box} ${
                    isYours ? 'ring-4 ring-primary-100' : ''
                  }`}
                >
                  <span
                    className={`text-[0.625rem] font-bold uppercase tracking-[0.14em] ${
                      isYours ? 'text-white/70' : 'text-muted'
                    }`}
                  >
                    Bay
                  </span>
                  <span className={`font-display text-3xl font-extrabold leading-none ${status.number}`}>
                    {bay.number}
                  </span>
                  <span className={`mt-2 flex items-center gap-1 text-[0.6875rem] font-semibold ${status.text}`}>
                    {bay.status === 'occupied' ? <CarIcon className="h-3.5 w-3.5" /> : null}
                    {isYours ? <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} /> : null}
                    {status.label}
                  </span>
                </div>

                {isYours ? (
                  <span className="mt-2.5 rounded-full bg-ink-900 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-white">
                    Your parking bay
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-5 sm:px-7">
        <p className="font-display text-xl font-extrabold text-ink-900">
          Floor 2 <span className="text-primary-500">•</span> Bay 15
        </p>
        <p className="text-sm font-medium text-muted">Simply drive there and park.</p>
      </figcaption>
    </figure>
  );
}
