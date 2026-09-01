const tones = {
  white: 'border-border bg-white',
  muted: 'border-border bg-secondary-100',
  warm: 'border-secondary-300 bg-secondary-200',
  dark: 'border-white/10 bg-ink-800 text-white',
  outline: 'border-ink-300 bg-transparent',
};

export default function Card({
  as: Tag = 'div',
  tone = 'white',
  className = '',
  interactive = false,
  padded = true,
  children,
  ...rest
}) {
  return (
    <Tag
      className={[
        'rounded-xl border',
        tones[tone] || tones.white,
        padded ? 'p-6 sm:p-7' : '',
        interactive
          ? 'transition-[box-shadow,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-md'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const iconTones = {
  primary: 'bg-primary-50 text-primary-600 ring-primary-100',
  accent: 'bg-accent-50 text-accent-600 ring-accent-100',
  neutral: 'bg-secondary-100 text-ink-700 ring-secondary-300',
  dark: 'bg-ink-900 text-white ring-ink-700',
  inverse: 'bg-white/10 text-white ring-white/15',
};

export function IconTile({ icon: IconComponent, tone = 'primary', size = 'md', className = '' }) {
  const sizes = {
    sm: 'h-10 w-10 rounded-md',
    md: 'h-12 w-12 rounded-lg',
    lg: 'h-14 w-14 rounded-lg',
  };
  const iconSizes = { sm: 'h-5 w-5', md: 'h-6 w-6', lg: 'h-7 w-7' };

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ring-1 ${sizes[size]} ${iconTones[tone]} ${className}`}
    >
      <IconComponent className={iconSizes[size]} />
    </span>
  );
}

/**
 * Feature / benefit card. One component covers every "icon + title + copy"
 * pattern across the site so the UI stays consistent.
 */
export function FeatureCard({
  icon,
  title,
  description,
  tone = 'primary',
  cardTone = 'white',
  headingLevel = 3,
  className = '',
  footer,
}) {
  const Heading = `h${headingLevel}`;
  const isDark = cardTone === 'dark';

  return (
    <Card tone={cardTone} interactive className={`flex h-full flex-col ${className}`}>
      {icon ? <IconTile icon={icon} tone={isDark ? 'inverse' : tone} /> : null}
      <Heading
        className={`mt-5 text-lg font-bold leading-snug ${isDark ? 'text-white' : 'text-ink-900'}`}
      >
        {title}
      </Heading>
      <p className={`mt-2.5 text-[0.975rem] leading-relaxed ${isDark ? 'text-white/70' : 'text-muted'}`}>
        {description}
      </p>
      {footer ? <div className="mt-5 pt-1">{footer}</div> : null}
    </Card>
  );
}
