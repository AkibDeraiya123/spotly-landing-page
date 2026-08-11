"use client";

import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn, Stagger, StaggerItem } from "../FadeIn";

export function Platform({ dict }: { dict: Dictionary }) {
  return (
    <section id="platform" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{dict.platform.eyebrow}</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-navy">
            {dict.platform.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-600">{dict.platform.subhead}</p>
        </FadeIn>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="pointer-events-none absolute inset-x-10 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald/30 to-transparent lg:block" />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {dict.platform.nodes.map((node, i) => (
              <StaggerItem key={node.title}>
                <article className="relative rounded-[24px] border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-5 text-center shadow-[0_10px_40px_rgba(10,22,40,0.04)]">
                  <div
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold text-white"
                    style={{
                      background:
                        i % 2 === 0
                          ? "linear-gradient(145deg,#0f766e,#14b8a6)"
                          : "linear-gradient(145deg,#0a1628,#1c334f)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-navy">{node.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{node.detail}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
