"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale, localeNames } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(en|ar)/, "") || "";

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 text-sm backdrop-blur"
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={`/${code}${rest}`}
            hrefLang={code}
            className={
              active
                ? "rounded-full bg-teal px-3 py-1.5 font-medium text-ink"
                : "rounded-full px-3 py-1.5 text-mist transition hover:text-snow"
            }
          >
            {localeNames[code]}
          </Link>
        );
      })}
    </div>
  );
}
