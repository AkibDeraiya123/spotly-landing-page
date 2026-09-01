export function Eyebrow({ children, tone = 'primary', className = '' }) {
  /* Text tones are chosen to clear WCAG AA on white and on both warm tints. */
  const tones = {
    primary: { text: 'text-primary-700', rule: 'bg-primary-500' },
    accent: { text: 'text-accent-700', rule: 'bg-accent-500' },
    muted: { text: 'text-ink-600', rule: 'bg-ink-300' },
    inverse: { text: 'text-white/75', rule: 'bg-white/60' },
  };
  const { text, rule } = tones[tone] || tones.primary;

  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] ${text} ${className}`}
    >
      <span aria-hidden="true" className={`inline-block h-0.5 w-6 shrink-0 rounded-full ${rule}`} />
      {children}
    </p>
  );
}

/**
 * Standard section header: optional eyebrow, a heading of the correct level,
 * and optional supporting copy. Never renders more than one H1.
 */
export default function SectionHeading({
  eyebrow,
  eyebrowTone,
  title,
  description,
  align = 'left',
  level = 2,
  id,
  tone = 'default',
  className = '',
  size = 'md',
  children,
}) {
  const Tag = `h${level}`;

  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  const sizes = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl lg:text-5xl',
    lg: 'text-4xl sm:text-5xl lg:text-6xl',
  };

  const titleTone = tone === 'inverse' ? 'text-white' : 'text-ink-900';
  const descTone = tone === 'inverse' ? 'text-white/75' : 'text-muted';

  return (
    <div className={`flex flex-col ${alignment} ${align === 'center' ? 'max-w-3xl' : ''} ${className}`}>
      {eyebrow ? (
        <Eyebrow tone={eyebrowTone || (tone === 'inverse' ? 'inverse' : 'primary')} className="mb-5">
          {eyebrow}
        </Eyebrow>
      ) : null}

      <Tag id={id} className={`${sizes[size]} font-bold leading-[1.08] ${titleTone}`}>
        {title}
      </Tag>

      {description ? (
        <p className={`mt-5 max-w-prose text-lg leading-relaxed ${descTone}`}>{description}</p>
      ) : null}

      {children}
    </div>
  );
}
