/**
 * Inline SVG icon set — no icon library dependency, no client JS.
 * Every icon inherits `currentColor` and is hidden from assistive tech by
 * default (icons here are decorative; meaning always lives in adjacent text).
 */

function Icon({ children, className = 'h-6 w-6', strokeWidth = 1.6, viewBox = '0 0 24 24', ...rest }) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const MapPinIcon = (props) => (
  <Icon {...props}>
    <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
);

export const SearchIcon = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.6-3.6" />
  </Icon>
);

export const ClockIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </Icon>
);

export const FuelIcon = (props) => (
  <Icon {...props}>
    <path d="M5 20V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
    <path d="M4 20h10" />
    <path d="M5 11h8" />
    <path d="M16 8.5 18.5 6v9.5a2 2 0 0 0 2 2 2 2 0 0 0 2-2V10l-2.2-2.6" />
  </Icon>
);

export const ShieldCheckIcon = (props) => (
  <Icon {...props}>
    <path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

export const CarIcon = (props) => (
  <Icon {...props}>
    <path d="M4.5 15.5h15" />
    <path d="M6 15.5v2.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2.5" />
    <path d="M21 15.5V18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2.5" />
    <path d="M3 15.5v-3.2a2 2 0 0 1 .35-1.13L6 7.2A2 2 0 0 1 7.66 6.3h8.68A2 2 0 0 1 18 7.2l2.65 3.97A2 2 0 0 1 21 12.3v3.2" />
    <path d="M3.6 11.5h16.8" />
    <path d="M7 13.5h.01M17 13.5h.01" />
  </Icon>
);

export const BarrierIcon = (props) => (
  <Icon {...props}>
    <path d="M5 21V6" />
    <circle cx="5" cy="4.5" r="1.5" />
    <path d="M7.5 8.5h12.2a1 1 0 0 1 .95 1.31l-.9 2.7a1 1 0 0 1-.95.69H7.5Z" />
    <path d="M11 8.6 10 13.2M15 8.6l-1 4.6" />
    <path d="M3 21h6" />
  </Icon>
);

export const CloudIcon = (props) => (
  <Icon {...props}>
    <path d="M7 18.5A4 4 0 0 1 6.6 10.6a5.4 5.4 0 0 1 10.3-1.3A3.9 3.9 0 0 1 17.5 18.5Z" />
  </Icon>
);

export const PhoneIcon = (props) => (
  <Icon {...props}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
    <path d="M10.5 5.5h3" />
    <path d="M11 18.5h2" />
  </Icon>
);

export const WalletIcon = (props) => (
  <Icon {...props}>
    <path d="M3.5 7.5A2 2 0 0 1 5.5 5.5H17a2 2 0 0 1 2 2v1" />
    <rect x="3.5" y="7.5" width="17" height="11.5" rx="2.5" />
    <path d="M20.5 12h-3.2a2 2 0 0 0 0 4h3.2" />
  </Icon>
);

export const ChartIcon = (props) => (
  <Icon {...props}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <path d="M8 20v-5.5M12.5 20V9M17 20v-8" />
  </Icon>
);

export const LayersIcon = (props) => (
  <Icon {...props}>
    <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
    <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
    <path d="m3.5 16.8 8.5 4.5 8.5-4.5" />
  </Icon>
);

export const ApiIcon = (props) => (
  <Icon {...props}>
    <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" />
    <path d="M10.5 8.5V5M13.5 8.5V5M10.5 19v-3.5M13.5 19v-3.5M8.5 10.5H5M8.5 13.5H5M19 10.5h-3.5M19 13.5h-3.5" />
  </Icon>
);

export const SparklesIcon = (props) => (
  <Icon {...props}>
    <path d="m12 3 1.7 4.6L18.5 9.3 13.7 11 12 15.6 10.3 11 5.5 9.3 10.3 7.6 12 3Z" />
    <path d="M18 16.5 18.7 18.4 20.6 19.1 18.7 19.8 18 21.7 17.3 19.8 15.4 19.1 17.3 18.4 18 16.5Z" />
  </Icon>
);

export const BuildingIcon = (props) => (
  <Icon {...props}>
    <path d="M4 21V6.5a1 1 0 0 1 .6-.92l6-2.5a1 1 0 0 1 1.4.92V21" />
    <path d="M12 10h6.5a1 1 0 0 1 1 1v10" />
    <path d="M3 21h18" />
    <path d="M7 9h1.5M7 12.5h1.5M7 16h1.5M15 13.5h1.5M15 17h1.5" />
  </Icon>
);

export const ShoppingBagIcon = (props) => (
  <Icon {...props}>
    <path d="M5.5 8h13l1 12.5h-15L5.5 8Z" />
    <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
  </Icon>
);

export const HotelIcon = (props) => (
  <Icon {...props}>
    <path d="M3 20V7.5l9-4.5 9 4.5V20" />
    <path d="M2 20h20" />
    <path d="M9.5 20v-4.5h5V20" />
    <path d="M8.5 10.5h2M13.5 10.5h2" />
  </Icon>
);

export const HospitalIcon = (props) => (
  <Icon {...props}>
    <rect x="4" y="4" width="16" height="17" rx="2" />
    <path d="M12 8.5v6M9 11.5h6" />
    <path d="M3 21h18" />
  </Icon>
);

export const HomeIcon = (props) => (
  <Icon {...props}>
    <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5Z" />
    <path d="M10 21v-5.5h4V21" />
  </Icon>
);

export const TicketIcon = (props) => (
  <Icon {...props}>
    <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v1.8a2 2 0 0 0 0 3.4v1.8A1.5 1.5 0 0 1 18.5 17h-13A1.5 1.5 0 0 1 4 15.5v-1.8a2 2 0 0 0 0-3.4V8.5Z" />
    <path d="M13.5 7v10" strokeDasharray="2 2.5" />
  </Icon>
);

export const CheckIcon = (props) => (
  <Icon {...props}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Icon>
);

export const CheckCircleIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
  </Icon>
);

export const ArrowRightIcon = (props) => (
  <Icon {...props}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </Icon>
);

export const ArrowDownIcon = (props) => (
  <Icon {...props}>
    <path d="M12 4.5v15" />
    <path d="m6 13.5 6 6 6-6" />
  </Icon>
);

export const MenuIcon = (props) => (
  <Icon {...props} strokeWidth={1.8}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const CloseIcon = (props) => (
  <Icon {...props} strokeWidth={1.8}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Icon>
);

export const AlertIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 8v4.5" />
    <path d="M12 16h.01" />
  </Icon>
);

export const RefreshIcon = (props) => (
  <Icon {...props}>
    <path d="M20 12a8 8 0 1 1-2.5-5.8" />
    <path d="M20 4v4.5h-4.5" />
  </Icon>
);

export const LockIcon = (props) => (
  <Icon {...props}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
    <path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7" />
  </Icon>
);

export const UnlockIcon = (props) => (
  <Icon {...props}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
    <path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 6.8-1.2" />
  </Icon>
);

export const GlobeIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.6 9.5h16.8M3.6 14.5h16.8" />
    <path d="M12 3.5c-2.2 2.4-3.3 5.3-3.3 8.5s1.1 6.1 3.3 8.5c2.2-2.4 3.3-5.3 3.3-8.5S14.2 5.9 12 3.5Z" />
  </Icon>
);

export const UsersIcon = (props) => (
  <Icon {...props}>
    <circle cx="9.5" cy="8.5" r="3" />
    <path d="M3.5 19.5a6 6 0 0 1 12 0" />
    <path d="M16 6.2a3 3 0 0 1 0 5.6" />
    <path d="M17.5 14.4a5.5 5.5 0 0 1 3 5.1" />
  </Icon>
);

export const CoinsIcon = (props) => (
  <Icon {...props}>
    <ellipse cx="9" cy="7" rx="5.5" ry="2.5" />
    <path d="M3.5 7v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V7" />
    <path d="M9 17.5c-3 0-5.5-1.1-5.5-2.5" />
    <ellipse cx="15" cy="15" rx="5.5" ry="2.5" />
    <path d="M9.5 15v2c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-2" />
  </Icon>
);

export const GaugeIcon = (props) => (
  <Icon {...props}>
    <path d="M4 17a8 8 0 1 1 16 0" />
    <path d="m12 17 4-5" />
    <circle cx="12" cy="17" r="1.2" />
  </Icon>
);

export const GridIcon = (props) => (
  <Icon {...props}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </Icon>
);

export const RouteIcon = (props) => (
  <Icon {...props}>
    <circle cx="6" cy="18.5" r="2.5" />
    <circle cx="18" cy="5.5" r="2.5" />
    <path d="M15.5 5.5H10a3.5 3.5 0 0 0 0 7h4a3.5 3.5 0 0 1 0 7H8.5" />
  </Icon>
);

export const BoltIcon = (props) => (
  <Icon {...props}>
    <path d="M13 3 5.5 13.5H11L10.5 21 18.5 10.5H13L13 3Z" />
  </Icon>
);

export const SlidersIcon = (props) => (
  <Icon {...props}>
    <path d="M5 20v-6M5 10V4M12 20v-9M12 7V4M19 20v-4M19 12V4" />
    <path d="M3 14h4M10 7h4M17 16h4" />
  </Icon>
);

export const EyeIcon = (props) => (
  <Icon {...props}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

export const MailIcon = (props) => (
  <Icon {...props}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="m3.8 7.5 7.1 5a2 2 0 0 0 2.2 0l7.1-5" />
  </Icon>
);

export default Icon;
