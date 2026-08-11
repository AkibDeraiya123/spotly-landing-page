"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn, Stagger, StaggerItem } from "../FadeIn";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section id="how-it-works" className="section-pad gradient-navy noise text-white">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="eyebrow text-emerald-bright">{dict.howItWorks.eyebrow}</p>
          <h2 className="font-display mt-4 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-tight">
            {dict.howItWorks.headline}
          </h2>
        </FadeIn>

        <div className="mt-14 overflow-x-auto pb-4">
          <Stagger className="flex min-w-max gap-4 lg:min-w-0 lg:grid lg:grid-cols-6">
            {dict.howItWorks.steps.map((step, index) => (
              <StaggerItem key={step.title} className="w-[220px] lg:w-auto">
                <article className="relative h-full rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-emerald-bright/40 hover:bg-white/10">
                  <div className="mb-10 text-5xl font-light text-white/15">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{step.detail}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
