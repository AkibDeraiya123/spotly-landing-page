export function SpotlyLogo({
  className = "",
  markClassName = "text-teal",
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      Spot<span className={markClassName}>ly</span>
    </span>
  );
}

export function SpotlyMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <path
        d="M32 12c-8.5 0-15.5 6.4-15.5 15.2 0 10.6 15.5 24.8 15.5 24.8S47.5 37.8 47.5 27.2C47.5 18.4 40.5 12 32 12Z"
        fill="currentColor"
        opacity="0.95"
      />
      <circle cx="32" cy="26.5" r="5.5" fill="#070B12" />
    </svg>
  );
}
