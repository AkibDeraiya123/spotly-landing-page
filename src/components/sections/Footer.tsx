import type { Dictionary } from "@/i18n/dictionaries/en";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-gray-100 bg-navy px-5 py-16 text-center text-white md:px-8">
      <p className="font-display text-[clamp(2rem,6vw,4rem)] font-semibold tracking-tight">
        {dict.footer.tagline}
      </p>
      <p className="mt-8 text-sm text-white/45">{dict.footer.rights}</p>
    </footer>
  );
}
