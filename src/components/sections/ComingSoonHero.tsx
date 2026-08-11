"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { SpotlyMark } from "@/components/SpotlyLogo";

export function ComingSoonHero({ dict }: { dict: Dictionary }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(26,209,165,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(26,209,165,0.06),transparent_50%)]" />

      <div className="section-pad relative z-10 mx-auto w-full max-w-3xl py-28 text-center md:py-32">
        <div className="animate-rise mb-8 flex justify-center text-teal">
          <SpotlyMark className="animate-pin h-12 w-12 md:h-14 md:w-14" />
        </div>

        <p className="animate-rise-delay-1 text-xs font-semibold tracking-[0.22em] text-teal uppercase">
          {dict.hero.status}
        </p>

        <h1 className="animate-rise-delay-2 font-display mt-5 text-[clamp(2.2rem,7vw,4.25rem)] leading-[1.08] font-semibold tracking-tight text-snow">
          {dict.hero.headline}
        </h1>

        <p className="animate-rise-delay-3 mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg">
          {dict.hero.body}
        </p>

        <p className="animate-rise-delay-3 mt-5 font-display text-sm font-semibold tracking-[0.12em] text-teal uppercase md:text-base">
          {dict.hero.promise}
        </p>

        <div className="animate-rise-delay-4 mx-auto mt-12 max-w-md">
          <p className="mb-4 text-sm text-mist">{dict.waitlist.label}</p>

          {done ? (
            <p className="rounded-2xl border border-teal/30 bg-teal/10 px-5 py-4 text-sm font-medium text-teal">
              {dict.waitlist.success}
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
            >
              <label className="sr-only" htmlFor="waitlist-email">
                {dict.waitlist.placeholder}
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={dict.waitlist.placeholder}
                className="min-h-12 flex-1 rounded-full border border-white/12 bg-white/5 px-5 text-sm text-snow outline-none transition placeholder:text-mist/60 focus:border-teal/50 focus:ring-2 focus:ring-teal/20"
              />
              <button
                type="submit"
                className="min-h-12 rounded-full bg-teal px-7 text-sm font-semibold text-ink transition hover:bg-teal-deep hover:text-snow"
              >
                {dict.waitlist.button}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
