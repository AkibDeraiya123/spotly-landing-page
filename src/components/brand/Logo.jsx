import Image from 'next/image';
import AppLink from '@/components/ui/AppLink';
import { routes } from '@/config/navigation';
import { site } from '@/config/site';

/**
 * Spotly mark. The square is a parking bay with a located pin — the visual
 * shorthand for "your bay is already assigned".
 */
export function LogoMark({ className = 'h-9 w-9', tone = 'brand' }) {
  const bay = tone === 'inverse' ? '#FFFFFF' : 'var(--color-ink)';
  const pin = tone === 'inverse' ? 'var(--color-primary)' : 'var(--color-primary)';

  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill={pin} />
      <path
        d="M14.4 29.2V11.6h7.3c3.9 0 6.4 2.3 6.4 5.9 0 3.6-2.5 5.9-6.4 5.9h-3.4v5.8h-3.9Zm3.9-8.9h3c1.8 0 2.8-.9 2.8-2.7 0-1.8-1-2.7-2.8-2.7h-3v5.4Z"
        fill={tone === 'inverse' ? bay : '#FFFFFF'}
      />
    </svg>
  );
}

export default function Logo({ tone = 'brand', className = '', showTagline = false }) {
  return (
    <AppLink
      href={routes.home}
      className={`group inline-flex items-center gap-2.5 rounded-md ${className}`}
      aria-label={`${site.name} — home. ${site.tagline}`}
    >
      <span className="flex flex-col leading-none">
        <Image
          src="/brand/spotly-wordmark.png"
          alt=""
          width={730}
          height={268}
          className="h-8 w-auto transition-transform duration-200 group-hover:-translate-y-px lg:h-9"
          priority
        />
        {showTagline ? (
          <span className={`mt-1 text-xs font-medium ${tone === 'inverse' ? 'text-white/70' : 'text-muted'}`}>
            {site.tagline}
          </span>
        ) : null}
      </span>
    </AppLink>
  );
}
