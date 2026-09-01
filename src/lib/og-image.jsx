import { ImageResponse } from 'next/og';
import { theme } from '@/config/theme';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const { colors } = theme;

/**
 * Shared Open Graph / Twitter card renderer so every page gets its own image
 * from one layout definition.
 */
export function renderOgImage({ eyebrow, title, subtitle }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: colors.background,
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 22,
              backgroundColor: colors.primary.DEFAULT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: 46,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 38, fontWeight: 800, color: colors.ink.DEFAULT, letterSpacing: -1 }}>
              Spotly
            </span>
            <span style={{ fontSize: 20, fontWeight: 600, color: colors.muted, marginTop: 2 }}>
              Reserve. Drive. Park.
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {eyebrow ? (
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: colors.primary[600],
                marginBottom: 22,
              }}
            >
              {eyebrow}
            </span>
          ) : null}

          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2.5,
              color: colors.ink.DEFAULT,
              maxWidth: 940,
            }}
          >
            {title}
          </span>

          {subtitle ? (
            <span
              style={{
                fontSize: 30,
                fontWeight: 500,
                lineHeight: 1.4,
                color: colors.ink[600],
                marginTop: 26,
                maxWidth: 880,
              }}
            >
              {subtitle}
            </span>
          ) : null}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 130, height: 8, borderRadius: 4, backgroundColor: colors.primary.DEFAULT }} />
          <div style={{ width: 46, height: 8, borderRadius: 4, backgroundColor: colors.accent.DEFAULT }} />
          <span style={{ fontSize: 22, fontWeight: 600, color: colors.muted, marginLeft: 10 }}>
            Smart parking platform
          </span>
        </div>
      </div>
    ),
    size,
  );
}
