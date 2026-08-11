"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { FadeIn } from "../FadeIn";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="top"
      className="gradient-hero noise relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="section-pad relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 pt-28 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-24">
        <div>
          <FadeIn>
            <p className="font-display mb-6 text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl">
              {dict.hero.brand.slice(0, 4)}
              <span className="text-emerald">{dict.hero.brand.slice(4)}</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="font-display max-w-2xl text-[clamp(2.4rem,6vw,4.75rem)] leading-[1.05] font-semibold tracking-tight text-navy">
              {dict.hero.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {dict.hero.subhead}
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <p className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-base font-medium text-navy md:text-lg">
              {dict.hero.steps.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </p>
          </FadeIn>

          <FadeIn delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,22,40,0.22)] transition hover:-translate-y-0.5 hover:bg-navy-soft"
              >
                {dict.hero.primaryCta}
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-gray-200 bg-white/70 px-7 py-3.5 text-sm font-semibold text-navy backdrop-blur transition hover:border-emerald/40 hover:text-emerald"
              >
                {dict.hero.secondaryCta}
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <HeroVisual dict={dict} />
        </FadeIn>
      </div>
    </section>
  );
}

function HeroVisual({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative mx-auto aspect-square max-w-[460px]">
      <div className="absolute inset-[8%] rounded-full bg-emerald/10 blur-3xl" />
      <div className="absolute top-[12%] start-[4%] glass float-y rounded-[24px] px-4 py-3 text-xs font-medium text-navy">
        <span className="me-2 inline-block h-2 w-2 rounded-full bg-emerald" />
        {dict.hero.visual.reserved}
      </div>
      <div
        className="absolute bottom-[18%] end-[2%] glass float-y rounded-[24px] px-4 py-3 text-xs font-medium text-navy"
        style={{ animationDelay: "1.2s" }}
      >
        {dict.hero.visual.unlocked}
      </div>

      <div className="absolute inset-x-[18%] top-[8%] float-y">
        <div className="phone-frame mx-auto w-[62%]">
          <div className="phone-screen p-4 text-white">
            <div className="mt-6 text-[10px] tracking-[0.2em] text-white/60 uppercase">
              {dict.hero.brand}
            </div>
            <div className="mt-3 text-lg font-semibold leading-tight">
              {dict.hero.visual.waiting}
            </div>
            <div className="mt-6 rounded-2xl bg-white/10 p-3 backdrop-blur">
              <div className="text-[10px] text-white/60">{dict.hero.visual.destination}</div>
              <div className="mt-1 text-sm font-medium">Marina Mall · B-12</div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
                <motion.div
                  className="h-full rounded-full bg-orange"
                  initial={{ width: "20%" }}
                  animate={{ width: ["20%", "86%", "86%"] }}
                  transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.4 }}
                />
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-white/70">
                <span>{dict.hero.visual.navigating}</span>
                <span>4 min</span>
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-5 rounded-2xl bg-white px-3 py-2.5 text-center text-xs font-semibold text-navy">
              {dict.hero.visual.unlockCta}
            </div>
          </div>
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <circle cx="200" cy="200" r="150" stroke="#dde3ea" strokeDasharray="4 8" />
        <motion.circle
          cx="200"
          cy="50"
          r="6"
          fill="#0f766e"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }}
        />
      </svg>
    </div>
  );
}
