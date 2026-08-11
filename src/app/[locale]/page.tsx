import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDirection, isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Future } from "@/components/sections/Future";
import { Platform } from "@/components/sections/Platform";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Drivers } from "@/components/sections/Drivers";
import { Owners } from "@/components/sections/Owners";
import { Dashboard } from "@/components/sections/Dashboard";
import { Technology } from "@/components/sections/Technology";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Vision } from "@/components/sections/Vision";
import { CTA } from "@/components/sections/CTA";
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
    <div lang={locale} dir={dir}>
      <SetDocumentLocale locale={locale} />
      <Navbar dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} />
        <Problem dict={dict} />
        <Future dict={dict} />
        <Platform dict={dict} />
        <HowItWorks dict={dict} />
        <Drivers dict={dict} />
        <Owners dict={dict} />
        <Dashboard dict={dict} />
        <Technology dict={dict} />
        <WhyChoose dict={dict} />
        <Vision dict={dict} />
        <CTA dict={dict} />
      </main>
      <Footer dict={dict} />
    </div>
  );
}
