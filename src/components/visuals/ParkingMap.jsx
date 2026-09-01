/**
 * Static parking map illustration: a simplified street grid with parking
 * location markers. Pure SVG + CSS — no map tiles, no JavaScript, no network.
 */
export default function ParkingMap({
  className = '',
  markers = [],
  showRoute = false,
  rounded = 'rounded-lg',
}) {
  return (
    <div className={`relative overflow-hidden bg-secondary-100 ${rounded} ${className}`}>
      <svg
        viewBox="0 0 400 300"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="400" height="300" fill="#F3EBE4" />

        {/* City blocks */}
        <g fill="#EAE1DB">
          <rect x="14" y="14" width="132" height="92" rx="6" />
          <rect x="170" y="14" width="96" height="92" rx="6" />
          <rect x="290" y="14" width="96" height="60" rx="6" />
          <rect x="14" y="130" width="132" height="76" rx="6" />
          <rect x="170" y="130" width="96" height="76" rx="6" />
          <rect x="290" y="98" width="96" height="108" rx="6" />
          <rect x="14" y="230" width="132" height="58" rx="6" />
          <rect x="170" y="230" width="216" height="58" rx="6" />
        </g>

        {/* Park / open space */}
        <rect x="290" y="14" width="96" height="60" rx="6" fill="#D5EFE7" />

        {/* Streets */}
        <g stroke="#FFFFFF" strokeLinecap="round">
          <path d="M0 118h400" strokeWidth="14" />
          <path d="M0 218h400" strokeWidth="11" />
          <path d="M158 0v300" strokeWidth="14" />
          <path d="M278 0v300" strokeWidth="11" />
        </g>
        <g stroke="#EAE1DB" strokeWidth="1.2" strokeDasharray="7 8">
          <path d="M0 118h400" />
          <path d="M158 0v300" />
        </g>

        {/* Water */}
        <path d="M386 0h14v300h-14Z" fill="#D5EFE7" opacity="0.7" />

        {showRoute ? (
          <path
            d="M40 272 C 90 272, 120 250, 158 218 S 200 160, 214 120"
            fill="none"
            stroke="#EF5239"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="0.1 12"
            opacity="0.75"
          />
        ) : null}
      </svg>

      {/* Markers are absolutely positioned HTML so the labels stay crisp. */}
      <div aria-hidden="true" className="absolute inset-0">
        {markers.map((marker) => (
          <div
            key={marker.label}
            className="absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
          >
            {marker.selected ? (
              <span className="mb-1.5 flex flex-col items-center">
                <span className="whitespace-nowrap rounded-md bg-ink-900 px-2.5 py-1.5 text-[0.6875rem] font-semibold leading-tight text-white shadow-md">
                  {marker.label}
                  {marker.detail ? (
                    <span className="mt-0.5 block font-medium text-white/65">{marker.detail}</span>
                  ) : null}
                </span>
              </span>
            ) : null}

            <span
              className={`mx-auto flex items-center justify-center rounded-full font-bold shadow-md ring-2 ring-white ${
                marker.selected
                  ? 'h-9 w-9 bg-primary-600 text-[0.75rem] text-white'
                  : 'h-7 w-7 bg-white text-[0.6875rem] text-ink-700'
              }`}
            >
              P
            </span>

            {!marker.selected && marker.detail ? (
              <span className="mt-1 block whitespace-nowrap rounded bg-white/95 px-1.5 py-0.5 text-center text-[0.625rem] font-semibold text-accent-700 shadow-xs">
                {marker.detail}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
