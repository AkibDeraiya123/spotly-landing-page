import type { Dictionary } from "@/i18n/dictionaries/en";

export function PartnerCTA({ dict }: { dict: Dictionary }) {
  return (
    <section id="partner" className="border-t border-white/8 py-16 md:py-20">
      <div className="section-pad mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-snow md:text-3xl">
          {dict.partner.headline}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-mist md:text-base">
          {dict.partner.body}
        </p>
        <a
          href="mailto:akibderaiya123@gmail.com?subject=Partner%20with%20Spotly"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-snow transition hover:border-teal hover:text-teal"
        >
          {dict.partner.cta}
        </a>
      </div>
    </section>
  );
}
