import MobileAppMockup from './MobileAppMockup';
import { BarrierIcon, CheckIcon, MapPinIcon } from '@/components/icons';

function MiniBay({ number, state }) {
  const isYours = state === 'yours';

  return (
    <span
      className={`flex h-14 w-full flex-col items-center justify-center rounded-md border-2 ${
        isYours
          ? 'border-primary-600 bg-primary-600 text-white'
          : state === 'occupied'
            ? 'border-ink-200 bg-secondary-200 text-ink-500'
            : 'border-dashed border-ink-300 bg-white text-ink-500'
      }`}
    >
      <span className="font-display text-base font-extrabold leading-none">{number}</span>
      <span className="mt-1 text-[0.5625rem] font-bold uppercase tracking-[0.1em]">
        {isYours ? 'Yours' : state === 'occupied' ? 'Taken' : 'Free'}
      </span>
    </span>
  );
}

/**
 * Hero composition: the Spotly app with a confirmed reservation, alongside the
 * selected parking location and the assigned bay on the parking floor.
 */
export default function HeroVisual({ className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-2xl rounded-2xl border border-secondary-300 bg-secondary-200 bg-blueprint p-5 sm:p-7 xl:max-w-none ${className}`}
    >
      <div className="grid items-center gap-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-7">
        <MobileAppMockup
          screen="reservation"
          className="mx-auto w-[15rem] sm:mx-0 sm:w-[15.5rem] xl:w-[14.5rem] 2xl:w-[16rem]"
        />

        <div className="flex flex-col gap-4">
          {/* Selected parking location */}
          <div className="rounded-lg border border-border bg-white p-4 shadow-md">
            <p className="flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted">
              <MapPinIcon className="h-3.5 w-3.5 text-primary-500" />
              Selected location
            </p>
            <p className="mt-2 font-display text-[0.95rem] font-extrabold leading-snug text-ink-900">
              Downtown Dubai Parking
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-accent-600">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              84 bays available
            </p>
          </div>

          {/* Assigned bay on the parking floor */}
          <div className="rounded-lg border border-border bg-white p-4 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted">
                Floor 2 · Assigned bay
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2 py-0.5 text-[0.625rem] font-bold text-accent-700">
                <CheckIcon className="h-2.5 w-2.5" strokeWidth={3} />
                Reserved
              </span>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-1.5">
              <MiniBay number={12} state="occupied" />
              <MiniBay number={13} state="available" />
              <MiniBay number={14} state="occupied" />
              <MiniBay number={15} state="yours" />
            </div>

            <p className="mt-3 flex items-center gap-1.5 border-t border-border pt-3 text-[0.6875rem] font-semibold text-ink-700">
              <BarrierIcon className="h-3.5 w-3.5 text-accent-600" />
              Smart barrier connected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
