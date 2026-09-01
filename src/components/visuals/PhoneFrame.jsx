/**
 * Static device frame used for every Spotly app mockup.
 *
 * The frame is exposed to assistive technology as a single labelled image so
 * screen readers get a meaningful description instead of a stream of loose UI
 * fragments.
 */
export default function PhoneFrame({ label, children, className = '', shadow = 'xl' }) {
  const shadows = { xl: 'shadow-xl', lg: 'shadow-lg', md: 'shadow-md', none: '' };

  return (
    <div role="img" aria-label={label} className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className={`relative rounded-[2.4rem] border-[0.55rem] border-ink-900 bg-ink-900 ${shadows[shadow]}`}
      >
        <span className="absolute left-1/2 top-[0.35rem] z-20 h-[1.1rem] w-[5.5rem] -translate-x-1/2 rounded-full bg-ink-900" />
        <div className="relative overflow-hidden rounded-[1.95rem] bg-white">{children}</div>
      </div>
    </div>
  );
}

export function StatusBar({ tone = 'light', time = '4:12' }) {
  const color = tone === 'dark' ? 'text-white/85' : 'text-ink-800';

  return (
    <div className={`flex items-center justify-between px-5 pb-1 pt-3 text-[0.6875rem] font-semibold ${color}`}>
      <span>{time}</span>
      <span className="flex items-center gap-1">
        <svg viewBox="0 0 18 10" className="h-2.5 w-[1.15rem]" fill="currentColor">
          <rect x="0" y="6" width="2.6" height="4" rx="0.6" />
          <rect x="4" y="4" width="2.6" height="6" rx="0.6" />
          <rect x="8" y="2" width="2.6" height="8" rx="0.6" />
          <rect x="12" y="0" width="2.6" height="10" rx="0.6" opacity="0.35" />
        </svg>
        <svg viewBox="0 0 26 12" className="h-3 w-[1.6rem]" fill="none" stroke="currentColor">
          <rect x="0.75" y="0.75" width="20.5" height="10.5" rx="3" strokeWidth="1.2" />
          <rect x="2.5" y="2.5" width="14" height="7" rx="1.6" fill="currentColor" stroke="none" />
          <path d="M23 4.2v3.6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}

/**
 * Neutral browser/app chrome used to frame dashboard mockups.
 */
export function AppWindow({ label, title, children, className = '', tone = 'light' }) {
  const isDark = tone === 'dark';

  return (
    <div
      role="img"
      aria-label={label}
      className={`overflow-hidden rounded-xl border shadow-lg ${
        isDark ? 'border-white/10 bg-ink-800' : 'border-border bg-white'
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className={`flex items-center gap-3 border-b px-4 py-3 ${
          isDark ? 'border-white/10 bg-ink-900' : 'border-border bg-secondary-100'
        }`}
      >
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
        </span>
        <span
          className={`truncate rounded-full px-3 py-1 text-[0.6875rem] font-medium ${
            isDark ? 'bg-white/10 text-white/60' : 'bg-white text-muted ring-1 ring-border'
          }`}
        >
          {title}
        </span>
      </div>
      <div aria-hidden="true">{children}</div>
    </div>
  );
}
