"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn, Stagger, StaggerItem } from "../FadeIn";

export function Problem({ dict }: { dict: Dictionary }) {
  return (
    <section id="problem" className="section-pad bg-navy text-white">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="eyebrow text-emerald-bright">{dict.problem.eyebrow}</p>
          <h2 className="font-display mt-4 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] font-semibold tracking-tight">
            {dict.problem.headline}
          </h2>
        </FadeIn>

        <Stagger className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {dict.problem.journey.map((step, index) => (
            <StaggerItem key={step.label}>
              <article className="group relative h-full rounded-[22px] border border-white/10 bg-white/5 p-5 transition hover:border-orange/40 hover:bg-white/10">
                <div className="mb-8 flex h-8 w-8 items-center justify-center rounded-full bg-orange/20 text-xs font-bold text-orange">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.detail}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.problem.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
                <div className="font-display text-3xl font-semibold text-orange md:text-4xl">
                  {stat.value}
                  {stat.unit ? (
                    <span className="ms-1 text-lg text-white/50">{stat.unit}</span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
