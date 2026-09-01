import AppLink from '@/components/ui/AppLink';
import { ArrowRightIcon } from '@/components/icons';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold ' +
  'transition-[background-color,color,box-shadow,border-color,transform] duration-200 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 ' +
  'disabled:cursor-not-allowed disabled:opacity-55 active:translate-y-px';

/**
 * Filled variants use the 600 step rather than the brand 500: white text on
 * #EF5239 is 3.5:1, while #CB3721 clears AA at 5.1:1.
 */
const variants = {
  primary:
    'bg-primary-600 text-white shadow-sm hover:bg-primary-700 focus-visible:outline-primary-700',
  accent:
    'bg-accent-600 text-white shadow-sm hover:bg-accent-700 focus-visible:outline-accent-700',
  dark: 'bg-ink-900 text-white shadow-sm hover:bg-ink-700 focus-visible:outline-ink-900',
  outline:
    'border border-ink-400 bg-white text-ink-900 hover:border-ink-900 hover:bg-secondary-100 focus-visible:outline-ink-900',
  'outline-inverse':
    'border border-white/35 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:outline-white',
  ghost: 'text-ink-900 hover:bg-secondary-100 focus-visible:outline-ink-900',
  'ghost-inverse': 'text-white hover:bg-white/10 focus-visible:outline-white',
  white: 'bg-white text-ink-900 shadow-sm hover:bg-secondary-100 focus-visible:outline-white',
};

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-[3.25rem] px-7 text-base',
};

/**
 * Renders a semantic <a> when `href` is provided and a real <button>
 * otherwise — never a div with a click handler. Hash URLs skip Next.js Link
 * so they scroll instead of re-navigating the current route.
 */
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  withArrow = false,
  type = 'button',
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRightIcon className="h-[1.05em] w-[1.05em] shrink-0" strokeWidth={2} />
      ) : null}
    </>
  );

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      return (
        <a href={href} className={classes} {...rest}>
          {content}
        </a>
      );
    }

    return (
      <AppLink href={href} className={classes} {...rest}>
        {content}
      </AppLink>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
