"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn, Stagger, StaggerItem } from "../FadeIn";

export function Technology({ dict }: { dict: Dictionary }) {
  return (
    <section id="technology" className="section-pad bg-gray-50">
      <div className="mx-auto max-w-5xl text-center">
        <FadeIn>
          <p className="eyebrow">{dict.technology.eyebrow}</p>
          <h2 className="font-display mt-4 text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] font-semibold tracking-tight text-navy">
            {dict.technology.headline}
          </h2>
        </FadeIn>

        <Stagger className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {dict.technology.flow.map((item, index) => (
            <StaggerItem key={item} className="flex items-center gap-3 md:gap-4">
              <div className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-navy shadow-[0_8px_30px_rgba(10,22,40,0.05)]">
                {item}
              </div>
              {index < dict.technology.flow.length - 1 ? (
                <span
                  className="flow-arrow hidden text-emerald md:inline"
                  aria-hidden
                >
                  →
                </span>
              ) : null}
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.15}>
          <p className="mt-10 text-sm text-gray-600">{dict.technology.note}</p>
        </FadeIn>
      </div>
    </section>
  );
}
