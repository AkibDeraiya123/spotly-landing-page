import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDirection, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { Navbar } from "@/components/Navbar";
import { ComingSoonHero } from "@/components/sections/ComingSoonHero";
import { PartnerCTA } from "@/components/sections/PartnerCTA";
import { Footer } from "@/components/sections/Footer";
import { SetDocumentLocale } from "@/components/SetDocumentLocale";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const dir = getDirection(locale);

  return (
    <div lang={locale} dir={dir} className="flex min-h-[100svh] flex-col">
      <SetDocumentLocale locale={locale} />
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1">
        <ComingSoonHero dict={dict} />
        <PartnerCTA dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
