import { IconTile } from '@/components/ui/Card';

/* --------------------------------------------------------------------- */
/* Connectors                                                             */
/* --------------------------------------------------------------------- */

function TrunkLine({ tone }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-7 w-px ${tone === 'inverse' ? 'bg-white/25' : 'bg-ink-200'}`}
    />
  );
}

function BranchBar({ tone, columns = 3 }) {
  const line = tone === 'inverse' ? 'bg-white/25' : 'bg-ink-200';
  const inset = columns === 3 ? 'left-[16.667%] right-[16.667%]' : 'left-[12.5%] right-[12.5%]';

  return (
    <div aria-hidden="true" className="relative hidden h-7 w-full md:block">
      <span className={`absolute left-1/2 top-0 h-3.5 w-px -translate-x-1/2 ${line}`} />
      <span className={`absolute top-3.5 h-px ${inset} ${line}`} />
      {Array.from({ length: columns }).map((_, index) => (
        <span
          key={index}
          className={`absolute top-3.5 h-3.5 w-px ${line}`}
          style={{ left: `${(100 / columns) * (index + 0.5)}%` }}
        />
      ))}
    </div>
  );
}

function Node({ title, caption, icon, tone, emphasis = false }) {
  const isInverse = tone === 'inverse';

  return (
    <div
      className={`flex h-full flex-col items-center rounded-lg border px-4 py-4 text-center ${
        emphasis
          ? isInverse
            ? 'border-white/25 bg-white/10'
            : 'border-ink-900 bg-ink-900 text-white'
          : isInverse
            ? 'border-white/12 bg-white/[0.06]'
            : 'border-border bg-white'
      }`}
    >
      {icon ? (
        <IconTile
          icon={icon}
          size="sm"
          tone={emphasis || isInverse ? 'inverse' : 'neutral'}
        />
      ) : null}
      <p
        className={`mt-3 text-sm font-bold leading-snug ${
          emphasis && !isInverse ? 'text-white' : isInverse ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </p>
      {caption ? (
        <p
          className={`mt-1 text-xs leading-relaxed ${
            emphasis && !isInverse ? 'text-white/65' : isInverse ? 'text-white/60' : 'text-muted'
          }`}
        >
          {caption}
        </p>
      ) : null}
    </div>
  );
}

/* --------------------------------------------------------------------- */
/* Enterprise architecture                                                */
/* --------------------------------------------------------------------- */

/**
 * Spotly → partner types → Spotly Cloud → infrastructure, APIs and data.
 * Rendered as a description list so the relationships stay readable without
 * the visual connectors.
 */
export default function ArchitectureDiagram({ layers, tone = 'neutral', className = '', label }) {
  const [audiences, capabilities] = layers;

  return (
    <div
      className={`flex flex-col items-center ${className}`}
      role="group"
      aria-label={label || 'Spotly platform architecture'}
    >
      <div className="w-full max-w-[15rem]">
        <Node title="Spotly" caption="Smart parking platform" tone={tone} emphasis />
      </div>

      <TrunkLine tone={tone} />
      <BranchBar tone={tone} columns={3} />

      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
        {audiences.map((item) => (
          <Node key={item.title} {...item} tone={tone} />
        ))}
      </div>

      <TrunkLine tone={tone} />

      <div className="w-full max-w-[17rem]">
        <Node title="Spotly Cloud" caption="Centralised parking platform" tone={tone} emphasis />
      </div>

      <TrunkLine tone={tone} />
      <BranchBar tone={tone} columns={3} />

      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
        {capabilities.map((item) => (
          <Node key={item.title} {...item} tone={tone} />
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------- */
/* Ecosystem hub                                                          */
/* --------------------------------------------------------------------- */

export function EcosystemDiagram({ nodes, className = '', tone = 'neutral', label }) {
  return (
    <div className={`flex flex-col items-center ${className}`} role="group" aria-label={label}>
      <div className="w-full max-w-[18rem]">
        <Node
          title="Spotly"
          caption="One connected parking platform"
          tone={tone}
          emphasis
        />
      </div>

      <TrunkLine tone={tone} />
      <div aria-hidden="true" className="relative hidden h-7 w-full md:block">
        <span className="absolute left-[10%] right-[10%] top-0 h-px bg-ink-200" />
        {nodes.map((node, index) => (
          <span
            key={node.title}
            className="absolute top-0 h-7 w-px bg-ink-200"
            style={{ left: `${(100 / nodes.length) * (index + 0.5)}%` }}
          />
        ))}
      </div>

      <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {nodes.map((node) => (
          <li key={node.title} className="h-full">
            <Node {...node} tone={tone} />
          </li>
        ))}
      </ul>
    </div>
  );
}
