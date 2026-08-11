"use client";

import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SpotlyLogo } from "@/components/SpotlyLogo";

export function Navbar({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-pad mx-auto flex max-w-6xl items-center justify-between gap-4 py-5">
        <a href="#top" aria-label="Spotly">
          <SpotlyLogo className="text-xl text-snow md:text-2xl" />
        </a>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link
            href="#partner"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-mist transition hover:border-teal/40 hover:text-snow sm:inline-flex"
          >
            {dict.nav.partner}
          </Link>
        </div>
      </div>
    </header>
  );
}
