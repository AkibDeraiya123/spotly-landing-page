import type { Dictionary } from "@/i18n/dictionaries/en";
import { SpotlyLogo } from "@/components/SpotlyLogo";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="section-pad mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <SpotlyLogo className="text-xl text-snow" />
          <p className="mt-2 text-sm text-mist">{dict.footer.tagline}</p>
        </div>
        <p className="text-xs text-mist/70">{dict.footer.rights}</p>
      </div>
    </footer>
  );
}
