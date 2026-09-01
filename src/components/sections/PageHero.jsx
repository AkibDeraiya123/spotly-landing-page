import Button from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { CheckIcon } from '@/components/icons';

/**
 * Shared hero for the inner pages. Always renders the single page H1.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  bullets = [],
  visual,
  tone = 'light',
  align = 'split',
}) {
  const isDark = tone === 'dark';
  const isSplit = align === 'split' && Boolean(visual);

  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? 'bg-ink-900' : 'bg-background'
      } border-b border-border`}
    >
      <div className="container-page py-16 lg:py-24">
        <div
          className={
            isSplit
              ? 'grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] xl:gap-16'
              : 'mx-auto max-w-3xl text-center'
          }
        >
          <div className={isSplit ? '' : 'flex flex-col items-center'}>
            {eyebrow ? (
              <Eyebrow tone={isDark ? 'inverse' : 'primary'} className="mb-6">
                {eyebrow}
              </Eyebrow>
            ) : null}

            <h1
              className={`text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl ${
                isDark ? 'text-white' : 'text-ink-900'
              }`}
            >
              {title}
            </h1>

            {description ? (
              <p
                className={`mt-6 max-w-prose text-lg leading-relaxed ${
                  isDark ? 'text-white/70' : 'text-ink-700'
                }`}
              >
                {description}
              </p>
            ) : null}

            {bullets.length > 0 ? (
              <ul
                className={`mt-8 flex flex-col gap-2.5 ${isSplit ? '' : 'items-start'} sm:flex-row sm:flex-wrap sm:gap-x-6`}
              >
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={`flex items-center gap-2 text-sm font-medium ${
                      isDark ? 'text-white/80' : 'text-ink-700'
                    }`}
                  >
                    <CheckIcon
                      className={`h-4 w-4 shrink-0 ${isDark ? 'text-accent-400' : 'text-accent-600'}`}
                      strokeWidth={2.5}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}

            {primaryCta || secondaryCta ? (
              <div
                className={`mt-9 flex flex-col gap-3 sm:flex-row sm:items-center ${
                  isSplit ? '' : 'sm:justify-center'
                }`}
              >
                {primaryCta ? (
                  <Button
                    href={primaryCta.href}
                    size="lg"
                    variant={isDark ? 'primary' : 'primary'}
                    withArrow
                    className="w-full sm:w-auto"
                  >
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    href={secondaryCta.href}
                    size="lg"
                    variant={isDark ? 'outline-inverse' : 'outline'}
                    className="w-full sm:w-auto"
                  >
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>

          {visual ? <div className={isSplit ? '' : 'mt-14'}>{visual}</div> : null}
        </div>
      </div>
    </section>
  );
}
