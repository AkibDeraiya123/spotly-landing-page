"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn, Stagger, StaggerItem } from "../FadeIn";

export function Owners({ dict }: { dict: Dictionary }) {
  return (
    <section id="owners" className="section-pad bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="eyebrow">{dict.owners.eyebrow}</p>
          <h2 className="font-display mt-4 max-w-4xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-navy">
            {dict.owners.headline}
          </h2>
        </FadeIn>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.owners.cards.map((card, i) => (
            <StaggerItem key={card.title}>
              <article className="h-full rounded-[24px] border border-transparent bg-white p-6 shadow-[0_10px_40px_rgba(10,22,40,0.04)] transition hover:-translate-y-1 hover:border-orange/20 hover:shadow-[0_20px_50px_rgba(224,122,61,0.1)]">
                <div
                  className="mb-6 h-1.5 w-10 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "var(--emerald)" : "var(--orange)",
                  }}
                />
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
