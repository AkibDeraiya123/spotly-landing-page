"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn, Stagger, StaggerItem } from "../FadeIn";

const bars = [42, 55, 48, 70, 64, 82, 78];

export function Dashboard({ dict }: { dict: Dictionary }) {
  return (
    <section id="dashboard" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="eyebrow">{dict.dashboard.eyebrow}</p>
          <h2 className="font-display mt-4 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-navy">
            {dict.dashboard.headline}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 overflow-hidden rounded-[32px] border border-gray-100 bg-navy p-4 shadow-[0_30px_80px_rgba(10,22,40,0.18)] md:p-6">
          <div className="rounded-[24px] bg-gradient-to-br from-[#132338] to-[#0a1628] p-5 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs tracking-[0.18em] text-white/40 uppercase">{dict.dashboard.ownerLabel}</p>
                <p className="mt-1 text-sm text-white/70">{dict.dashboard.placeholder}</p>
              </div>
              <div className="rounded-full bg-emerald/20 px-3 py-1 text-xs font-medium text-emerald-bright">
                {dict.dashboard.livePreview}
              </div>
            </div>

            <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {dict.dashboard.metrics.map((metric) => (
                <StaggerItem key={metric.label}>
                  <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <p className="text-xs text-white/45">{metric.label}</p>
                    <div className="mt-2 flex items-end justify-between gap-2">
                      <p className="font-display text-2xl font-semibold text-white">{metric.value}</p>
                      <span className="text-xs font-medium text-emerald-bright">{metric.change}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-5 rounded-2xl border border-white/8 bg-white/5 p-5">
              <p className="mb-4 text-xs text-white/45">{dict.dashboard.chartLabel}</p>
              <div className="flex h-36 items-end gap-2 md:gap-3">
                {bars.map((h, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-emerald to-emerald-bright"
                      style={{ height: `${h}%`, opacity: 0.55 + i * 0.05 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
