import Button from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/SectionHeading';

/**
 * Reusable closing call-to-action band used at the end of every page.
 */
export default function CTASection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  tone = 'dark',
  id,
  headingId = 'cta-heading',
}) {
  const isDark = tone === 'dark';

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`section-y ${isDark ? 'bg-ink-900' : 'bg-secondary-200'}`}
    >
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {eyebrow ? (
            <Eyebrow tone={isDark ? 'inverse' : 'primary'} className="mb-5">
              {eyebrow}
            </Eyebrow>
          ) : null}

          <h2
            id={headingId}
            className={`text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl ${
              isDark ? 'text-white' : 'text-ink-900'
            }`}
          >
            {title}
          </h2>

          {description ? (
            <p
              className={`mt-6 max-w-xl text-lg leading-relaxed ${
                isDark ? 'text-white/70' : 'text-ink-700'
              }`}
            >
              {description}
            </p>
          ) : null}

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            {primary ? (
              <Button
                href={primary.href}
                size="lg"
                variant={isDark ? 'primary' : 'dark'}
                withArrow
                className="w-full sm:w-auto"
              >
                {primary.label}
              </Button>
            ) : null}

            {secondary ? (
              <Button
                href={secondary.href}
                size="lg"
                variant={isDark ? 'outline-inverse' : 'outline'}
                className="w-full sm:w-auto"
              >
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
