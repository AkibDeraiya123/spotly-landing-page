import { Fragment } from 'react';
import { ArrowDownIcon, ArrowRightIcon } from '@/components/icons';
import { IconTile } from './Card';

/**
 * A static, connected step diagram.
 *
 * Rendered as an ordered list so screen readers announce the sequence and its
 * position; the arrows are decorative only. Stacks vertically on small screens
 * and flows horizontally from the given breakpoint upwards.
 */
export default function FlowDiagram({
  steps,
  tone = 'neutral',
  columns = 4,
  className = '',
  label,
  compact = false,
}) {
  const isInverse = tone === 'inverse';

  const cardTone = isInverse
    ? 'border-white/12 bg-white/[0.06] text-white'
    : 'border-border bg-white';
  const titleTone = isInverse ? 'text-white' : 'text-ink-900';
  const captionTone = isInverse ? 'text-white/65' : 'text-muted';
  const arrowTone = isInverse ? 'text-white/40' : 'text-ink-300';

  const gridCols = {
    2: 'md:grid-cols-[1fr_auto_1fr]',
    3: 'md:grid-cols-[1fr_auto_1fr_auto_1fr]',
    4: 'lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]',
    5: 'xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]',
  }[columns];

  /**
   * ARIA list roles rather than <ol>/<li>: the decorative arrows have to be
   * siblings of the cards inside the same grid, which real list markup does
   * not allow.
   */
  return (
    <div
      role="list"
      aria-label={label}
      className={`grid grid-cols-1 items-stretch gap-3 ${gridCols} ${className}`}
    >
      {steps.map((step, index) => (
        <Fragment key={step.title}>
          <div
            role="listitem"
            className={`flex h-full flex-col rounded-lg border ${cardTone} ${
              compact ? 'p-4' : 'p-5'
            } ${step.highlight ? 'ring-2 ring-primary-500 ring-offset-2' : ''}`}
          >
            <div className="flex items-center gap-3">
              {step.icon ? (
                <IconTile
                  icon={step.icon}
                  size="sm"
                  tone={isInverse ? 'inverse' : step.tone || 'neutral'}
                />
              ) : null}
              <span
                className={`text-[0.6875rem] font-semibold uppercase tracking-[0.12em] ${captionTone}`}
              >
                Step {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <p className={`mt-3 text-[0.95rem] font-bold leading-snug ${titleTone}`}>{step.title}</p>
            {step.caption ? (
              <p className={`mt-1.5 text-sm leading-relaxed ${captionTone}`}>{step.caption}</p>
            ) : null}
          </div>

          {index < steps.length - 1 ? (
            <div aria-hidden="true" className={`flex items-center justify-center ${arrowTone}`}>
              <ArrowDownIcon
                className={`h-5 w-5 ${columns === 4 ? 'lg:hidden' : columns === 5 ? 'xl:hidden' : 'md:hidden'}`}
              />
              <ArrowRightIcon
                className={`hidden h-5 w-5 ${
                  columns === 4 ? 'lg:block' : columns === 5 ? 'xl:block' : 'md:block'
                }`}
              />
            </div>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}

/**
 * A tight vertical chain (Mobile App → Spotly Cloud → Smart Barrier → Bay).
 */
export function VerticalFlow({ steps, tone = 'neutral', className = '', label }) {
  const isInverse = tone === 'inverse';

  return (
    <ol aria-label={label} className={`flex flex-col ${className}`}>
      {steps.map((step, index) => (
        <li key={step.title}>
          <div
            className={`flex items-center gap-4 rounded-lg border px-4 py-3.5 ${
              isInverse ? 'border-white/12 bg-white/[0.06]' : 'border-border bg-white'
            } ${step.highlight ? 'border-primary-300 bg-primary-50' : ''}`}
          >
            {step.icon ? (
              <IconTile
                icon={step.icon}
                size="sm"
                tone={isInverse ? 'inverse' : step.tone || 'neutral'}
              />
            ) : null}
            <div className="min-w-0">
              <p
                className={`text-[0.95rem] font-bold leading-snug ${
                  isInverse ? 'text-white' : 'text-ink-900'
                }`}
              >
                {step.title}
              </p>
              {step.caption ? (
                <p className={`mt-0.5 text-sm ${isInverse ? 'text-white/65' : 'text-muted'}`}>
                  {step.caption}
                </p>
              ) : null}
            </div>
          </div>

          {index < steps.length - 1 ? (
            <div aria-hidden="true" className="flex justify-center py-1.5">
              <ArrowDownIcon
                className={`h-4 w-4 ${isInverse ? 'text-white/40' : 'text-ink-300'}`}
                strokeWidth={2}
              />
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
