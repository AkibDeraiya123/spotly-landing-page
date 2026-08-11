"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";
import { getDirection } from "@/i18n/config";

export function SetDocumentLocale({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getDirection(locale);
  }, [locale]);

  return null;
}
