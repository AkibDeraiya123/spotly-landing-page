/**
 * Light sections step through the warm range — canvas, tint, beige — so white
 * cards and product mockups always lift off the background they sit on.
 */
const tones = {
  page: 'bg-background',
  surface: 'bg-white',
  muted: 'bg-secondary-100',
  warm: 'bg-secondary-200',
  dark: 'bg-ink-900 text-white',
  accent: 'bg-accent-800 text-white',
};

/**
 * A full-width page section with consistent vertical rhythm and an inner
 * container. Tones map to the brand palette instead of ad-hoc colour classes.
 */
export default function Section({
  id,
  tone = 'page',
  className = '',
  containerClassName = '',
  as: Tag = 'section',
  ariaLabelledBy,
  children,
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`section-y ${tones[tone] || tones.page} ${className}`}
    >
      <div className={`container-page ${containerClassName}`}>{children}</div>
    </Tag>
  );
}
