"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn, Stagger, StaggerItem } from "../FadeIn";

export function Future({ dict }: { dict: Dictionary }) {
  return (
    <section id="future" className="section-pad bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="eyebrow">{dict.future.eyebrow}</p>
          <h2 className="font-display mt-4 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] font-semibold tracking-tight text-navy">
            {dict.future.headline}
          </h2>
        </FadeIn>

        <Stagger className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {dict.future.journey.map((step, index) => (
            <StaggerItem key={step.label}>
              <article className="h-full rounded-[22px] border border-emerald/15 bg-white p-5 shadow-[0_10px_40px_rgba(10,22,40,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,118,110,0.12)]">
                <div className="mb-8 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-soft text-xs font-bold text-emerald">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-navy">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.detail}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.15}>
          <p className="font-display mt-14 text-center text-2xl font-medium tracking-tight text-navy md:text-3xl">
            {dict.future.closer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
