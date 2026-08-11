import type { Dictionary } from "./dictionaries/en";
import type { Locale } from "./config";
import { defaultLocale, isLocale } from "./config";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  ar: () => import("./dictionaries/ar").then((m) => m.default),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const key = isLocale(locale) ? locale : defaultLocale;
  return dictionaries[key]();
}
