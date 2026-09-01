/**
 * Static illustration of a single parking bay with its associated smart
 * barrier. The barrier is raised and the built-in magnetic sensor is called
 * out — there is no separate sensor in the bay itself.
 */
export default function BarrierIllustration({ className = '', state = 'open' }) {
  const isOpen = state === 'open';

  return (
    <svg
      viewBox="0 0 320 230"
      className={className}
      role="img"
      aria-label="Illustration of a parking bay with its smart barrier raised. The barrier post contains a built-in magnetic sensor that detects whether a vehicle is present in the bay."
    >
      <rect width="320" height="230" rx="14" fill="#FAF4EF" />

      {/* Floor grid */}
      <g stroke="#EAE1DB" strokeWidth="1">
        <path d="M0 60h320M0 100h320M0 140h320M0 180h320" />
        <path d="M60 0v230M120 0v230M200 0v230M260 0v230" />
      </g>

      {/* Parking bay */}
      <rect
        x="96"
        y="58"
        width="150"
        height="132"
        rx="8"
        fill="#FFFFFF"
        stroke="#EF5239"
        strokeWidth="2.5"
        strokeDasharray="9 7"
      />
      <text
        x="171"
        y="108"
        textAnchor="middle"
        fill="#EF5239"
        fontSize="34"
        fontWeight="800"
        fontFamily="var(--font-display), sans-serif"
      >
        15
      </text>
      <text
        x="171"
        y="132"
        textAnchor="middle"
        fill="#5A4D46"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1.6"
        fontFamily="var(--font-sans), sans-serif"
      >
        FLOOR 2
      </text>

      {/* Barrier base + post */}
      <rect x="52" y="176" width="42" height="12" rx="4" fill="#1B1411" />
      <rect x="66" y="112" width="14" height="68" rx="5" fill="#26201C" />

      {/* Barrier arm */}
      {isOpen ? (
        <g>
          <rect
            x="70"
            y="34"
            width="10"
            height="84"
            rx="5"
            fill="#EF5239"
            transform="rotate(-14 75 118)"
          />
          <rect x="70" y="52" width="10" height="14" rx="2" fill="#FFFFFF" opacity="0.85" transform="rotate(-14 75 118)" />
          <rect x="70" y="82" width="10" height="14" rx="2" fill="#FFFFFF" opacity="0.85" transform="rotate(-14 75 118)" />
        </g>
      ) : (
        <g>
          <rect x="73" y="112" width="84" height="10" rx="5" fill="#EF5239" />
          <rect x="95" y="112" width="14" height="10" rx="2" fill="#FFFFFF" opacity="0.85" />
          <rect x="125" y="112" width="14" height="10" rx="2" fill="#FFFFFF" opacity="0.85" />
        </g>
      )}

      {/* Connectivity indicator on the post */}
      <circle cx="73" cy="126" r="4" fill="#259681" />
      <circle cx="73" cy="126" r="8.5" fill="none" stroke="#259681" strokeWidth="1.5" opacity="0.45" />

      {/* Magnetic sensor callout */}
      <g>
        <path d="M84 150h44" stroke="#259681" strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="126" y="140" width="128" height="26" rx="13" fill="#1D7768" />
        <text
          x="190"
          y="157"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="9"
          fontWeight="700"
          letterSpacing="0.4"
          fontFamily="var(--font-sans), sans-serif"
        >
          Built-in magnetic sensor
        </text>
      </g>

      {/* Cloud link */}
      <g>
        <path d="M73 112V44" stroke="#259681" strokeWidth="1.5" strokeDasharray="4 5" />
        <rect x="26" y="16" width="96" height="26" rx="13" fill="#1B1411" />
        <text
          x="74"
          y="33"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.4"
          fontFamily="var(--font-sans), sans-serif"
        >
          Spotly Cloud
        </text>
      </g>
    </svg>
  );
}
