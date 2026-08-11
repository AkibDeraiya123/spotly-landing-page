"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn } from "../FadeIn";

export function WhyChoose({ dict }: { dict: Dictionary }) {
  return (
    <section id="why" className="section-pad bg-white">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <p className="eyebrow">{dict.why.eyebrow}</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-navy">
            {dict.why.headline}
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <FadeIn>
            <article className="h-full rounded-[28px] border border-gray-200 bg-gray-50 p-8 md:p-10">
              <h3 className="text-xl font-semibold text-gray-600">{dict.why.traditional.title}</h3>
              <ul className="mt-8 space-y-4">
                {dict.why.traditional.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg text-gray-500">
                    <span className="h-2 w-2 rounded-full bg-gray-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>

          <FadeIn delay={0.1}>
            <article className="h-full rounded-[28px] border border-emerald/20 bg-navy p-8 text-white shadow-[0_30px_80px_rgba(10,22,40,0.18)] md:p-10">
              <h3 className="text-xl font-semibold text-emerald-bright">{dict.why.ours.title}</h3>
              <ul className="mt-8 space-y-4">
                {dict.why.ours.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <span className="h-2 w-2 rounded-full bg-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
