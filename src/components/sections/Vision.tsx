"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn, Stagger, StaggerItem } from "../FadeIn";

export function Vision({ dict }: { dict: Dictionary }) {
  return (
    <section id="vision" className="section-pad gradient-navy noise text-white">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <p className="eyebrow text-emerald-bright">{dict.vision.eyebrow}</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] font-semibold tracking-tight">
            {dict.vision.headline}
          </h2>
        </FadeIn>

        <Stagger className="mt-12 space-y-5">
          {dict.vision.lines.map((line) => (
            <StaggerItem key={line}>
              <p className="text-xl leading-relaxed text-white/75 md:text-2xl">{line}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
