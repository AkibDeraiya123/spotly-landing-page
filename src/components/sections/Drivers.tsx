"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn, Stagger, StaggerItem } from "../FadeIn";

export function Drivers({ dict }: { dict: Dictionary }) {
  return (
    <section id="drivers" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="eyebrow">{dict.drivers.eyebrow}</p>
          <h2 className="font-display mt-4 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-navy">
            {dict.drivers.headline}
          </h2>
        </FadeIn>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.drivers.cards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="group h-full rounded-[24px] border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-emerald/25 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,118,110,0.08)]">
                <div className="mb-8 h-1.5 w-10 rounded-full bg-emerald transition group-hover:w-14" />
                <h3 className="text-lg font-semibold text-navy">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{card.detail}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
