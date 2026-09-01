const tones = {
  primary: 'bg-primary-50 text-primary-700 ring-primary-200',
  accent: 'bg-accent-50 text-accent-700 ring-accent-200',
  neutral: 'bg-secondary-100 text-ink-700 ring-secondary-300',
  dark: 'bg-ink-900 text-white ring-ink-700',
  inverse: 'bg-white/10 text-white ring-white/20',
  warning: 'bg-[#FAF0DE] text-[#7A5410] ring-[#EBD9B4]',
};

export default function Badge({ children, tone = 'neutral', icon: IconComponent, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${tones[tone]} ${className}`}
    >
      {IconComponent ? <IconComponent className="h-3.5 w-3.5" strokeWidth={2} /> : null}
      {children}
    </span>
  );
}

/**
 * Marks a mockup as a design demonstration. Used everywhere a dashboard or app
 * screen shows sample numbers so nothing reads as a real customer statistic.
 */
export function DemoBadge({ className = '', tone = 'neutral', children = 'Illustrative UI example' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.09em] ring-1 ${tones[tone]} ${className}`}
    >
      <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
}

export function StatusDot({ tone = 'accent', label }) {
  const dot = {
    accent: 'bg-accent-500',
    primary: 'bg-primary-500',
    neutral: 'bg-ink-300',
    warning: 'bg-[#E0A32E]',
  };

  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-700">
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${dot[tone]}`} />
      {label}
    </span>
  );
}
