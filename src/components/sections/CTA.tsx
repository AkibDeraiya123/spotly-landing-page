"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn } from "../FadeIn";

export function CTA({ dict }: { dict: Dictionary }) {
  return (
    <section id="cta" className="section-pad bg-white">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="overflow-hidden rounded-[36px] border border-gray-100 bg-gradient-to-br from-gray-50 via-white to-emerald-soft/40 p-8 text-center shadow-[0_30px_80px_rgba(10,22,40,0.08)] md:p-16">
          <p className="eyebrow">{dict.cta.eyebrow}</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-navy">
            {dict.cta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">{dict.cta.subhead}</p>

          <a
            href={`mailto:${dict.cta.email}?subject=Spotly%20Live%20Demo`}
            className="mt-10 inline-flex rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(10,22,40,0.2)] transition hover:-translate-y-0.5 hover:bg-navy-soft"
          >
            {dict.cta.primaryCta}
          </a>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 text-start sm:grid-cols-3">
            <div>
              <p className="text-xs tracking-[0.16em] text-gray-400 uppercase">{dict.cta.labels.email}</p>
              <a href={`mailto:${dict.cta.email}`} className="mt-2 block font-medium text-navy hover:text-emerald">
                {dict.cta.email}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.16em] text-gray-400 uppercase">{dict.cta.labels.phone}</p>
              <a href={`tel:${dict.cta.phone.replace(/\s/g, "")}`} className="mt-2 block font-medium text-navy hover:text-emerald">
                {dict.cta.phone}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.16em] text-gray-400 uppercase">{dict.cta.labels.location}</p>
              <p className="mt-2 font-medium text-navy">{dict.cta.location}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
