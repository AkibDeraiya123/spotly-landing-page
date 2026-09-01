import Link from 'next/link';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import SectionHeading, { Eyebrow } from '@/components/ui/SectionHeading';
import Card, { FeatureCard, IconTile } from '@/components/ui/Card';
import Badge, { DemoBadge } from '@/components/ui/Badge';
import FlowDiagram, { VerticalFlow } from '@/components/ui/FlowDiagram';
import CTASection from '@/components/sections/CTASection';
import HeroVisual from '@/components/visuals/HeroVisual';
import MobileAppMockup from '@/components/visuals/MobileAppMockup';
import ParkingFloorPlan from '@/components/visuals/ParkingFloorPlan';
import BarrierIllustration from '@/components/visuals/BarrierIllustration';
import { EcosystemDiagram } from '@/components/visuals/Diagrams';
import JsonLd from '@/components/seo/JsonLd';
import { ArrowRightIcon, CheckIcon } from '@/components/icons';
import { home } from '@/config/content/home';
import { routes } from '@/config/navigation';
import { buildMetadata } from '@/lib/metadata';
import {
  BREADCRUMB_ID,
  breadcrumbSchema,
  softwareApplicationSchema,
  webPageSchema,
} from '@/lib/structured-data';

export const metadata = buildMetadata('home');

const breadcrumb = breadcrumbSchema([{ name: 'Home', path: routes.home }], 'home');

export default function HomePage() {
  return (
    <>
      <JsonLd
        schemas={[
          webPageSchema('home', { breadcrumbId: BREADCRUMB_ID('home') }),
          breadcrumb,
          softwareApplicationSchema(),
        ]}
      />

      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-border bg-background" aria-labelledby="hero-heading">
        <div className="container-page py-14 lg:py-20">
          <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] xl:gap-16">
            <div>
              <Eyebrow className="mb-6">{home.hero.eyebrow}</Eyebrow>

              <h1
                id="hero-heading"
                className="text-5xl font-extrabold leading-[0.98] tracking-tight text-ink-900 sm:text-6xl xl:text-7xl"
              >
                Reserve. <span className="text-primary-500">Drive.</span> Park.
              </h1>

              <p className="mt-6 font-display text-xl font-bold leading-snug text-ink-800 sm:text-2xl">
                {home.hero.supportingHeadline}
              </p>

              <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
                {home.hero.copy}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={home.hero.primaryCta.href} size="lg" className="w-full sm:w-auto">
                  {home.hero.primaryCta.label}
                </Button>
                <Button
                  href={home.hero.secondaryCta.href}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  {home.hero.secondaryCta.label}
                </Button>
              </div>

              <ul className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:flex-wrap sm:gap-x-7">
                {home.hero.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                    <CheckIcon className="h-4 w-4 shrink-0 text-accent-600" strokeWidth={2.5} />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* The parking problem                                              */}
      {/* ---------------------------------------------------------------- */}
      <Section id="the-problem" ariaLabelledBy="problem-heading">
        <SectionHeading
          id="problem-heading"
          eyebrow={home.problem.eyebrow}
          title={home.problem.title}
          description={home.problem.description}
          align="center"
        />

        <div className="mt-14">
          <FlowDiagram
            label="The traditional parking experience: drive, search, find the parking full, and search again."
            steps={home.problem.loop}
            columns={4}
          />

          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-muted">
            <span aria-hidden="true" className="text-primary-500">
              ↻
            </span>
            The loop repeats — costing time, fuel and patience.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {home.problem.costs.map((cost) => (
            <Card key={cost.title} tone="muted">
              <h3 className="text-base font-bold text-ink-900">{cost.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{cost.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-ink-900 px-6 py-12 text-center sm:px-12 lg:py-16">
          <h3 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {home.problem.transition}
          </h3>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Introducing Spotly                                               */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="warm" id="meet-spotly" ariaLabelledBy="meet-heading">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <SectionHeading
              id="meet-heading"
              eyebrow={home.intro.eyebrow}
              title={home.intro.title}
              description={home.intro.description}
            />

            <div className="mt-7 flex flex-col gap-4">
              {home.intro.body.map((paragraph) => (
                <p key={paragraph} className="max-w-prose leading-relaxed text-ink-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-primary-200 bg-white p-6">
              <Badge tone="primary">Important</Badge>
              <h3 className="mt-4 text-xl font-bold text-ink-900">{home.intro.ruleTitle}</h3>
              <p className="mt-2.5 max-w-prose leading-relaxed text-muted">{home.intro.ruleBody}</p>
            </div>
          </div>

          <div className="flex justify-center">
            <MobileAppMockup screen="assigned" className="w-[16.5rem] sm:w-[18rem]" />
          </div>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {home.intro.flow.map((step, index) => (
            <li key={step.title} className="h-full">
              <div className="flex h-full items-center gap-3 rounded-lg border border-secondary-300 bg-white px-4 py-4">
                <IconTile icon={step.icon} size="sm" tone={index === 4 ? 'accent' : 'primary'} />
                <span className="text-[0.9375rem] font-bold leading-snug text-ink-900">
                  {step.title}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* How it works                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section id="how-it-works" ariaLabelledBy="how-heading">
        <SectionHeading
          id="how-heading"
          eyebrow={home.howItWorks.eyebrow}
          title={home.howItWorks.title}
          description={home.howItWorks.description}
          align="center"
        />

        <div className="mt-16 flex flex-col gap-6 lg:gap-8">
          {home.howItWorks.steps.map((step, index) => (
            <article
              key={step.number}
              className="grid items-center gap-8 overflow-hidden rounded-2xl border border-border bg-white p-6 sm:p-10 lg:grid-cols-2 lg:gap-14"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-extrabold leading-none text-primary-500">
                    {step.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {step.label}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-prose leading-relaxed text-muted">{step.description}</p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-700">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent-600" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>

                {index === 2 ? (
                  <div className="mt-8">
                    <VerticalFlow
                      label="At the parking location: the smart barrier opens and you park in your assigned bay."
                      steps={home.howItWorks.parkFlow}
                    />
                  </div>
                ) : null}
              </div>

              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <MobileAppMockup screen={step.screen} className="w-[15.5rem] sm:w-[17rem]" shadow="lg" />
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Core benefits                                                    */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="muted" ariaLabelledBy="benefits-heading">
        <SectionHeading
          id="benefits-heading"
          eyebrow={home.benefits.eyebrow}
          title={home.benefits.title}
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {home.benefits.cards.map((card) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Exact parking bay                                                */}
      {/* ---------------------------------------------------------------- */}
      <Section id="your-bay" ariaLabelledBy="bay-heading">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              id="bay-heading"
              eyebrow={home.exactBay.eyebrow}
              title={home.exactBay.title}
              description={home.exactBay.description}
            />

            <dl className="mt-9 flex flex-col gap-6">
              {home.exactBay.points.map((point) => (
                <div key={point.title} className="border-l-2 border-primary-500 pl-5">
                  <dt className="text-base font-bold text-ink-900">{point.title}</dt>
                  <dd className="mt-1.5 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
                    {point.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ParkingFloorPlan />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Smart barrier                                                    */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="dark" id="smart-barrier" ariaLabelledBy="barrier-heading">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              id="barrier-heading"
              eyebrow={home.barrier.eyebrow}
              title={home.barrier.title}
              description={home.barrier.description}
              tone="inverse"
            />

            <div className="mt-10">
              <VerticalFlow
                label="How a reservation reaches the parking bay: mobile app, Spotly Cloud, smart barrier, parking bay."
                steps={home.barrier.chain}
                tone="inverse"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <BarrierIllustration className="h-auto w-full" />
            </div>

            {home.barrier.explainers.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <IconTile icon={item.icon} tone="inverse" size="sm" />
                <div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Reservation lifecycle                                            */}
      {/* ---------------------------------------------------------------- */}
      <Section id="lifecycle" ariaLabelledBy="lifecycle-heading">
        <SectionHeading
          id="lifecycle-heading"
          eyebrow={home.lifecycle.eyebrow}
          title={home.lifecycle.title}
          description={home.lifecycle.description}
          align="center"
        />

        <ol
          aria-label="The stages of a Spotly parking reservation, from reserving to parking completed."
          className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5"
        >
          {home.lifecycle.stages.map((stage, index) => (
            <li key={stage.title} className="h-full">
              <div className="flex h-full flex-col rounded-lg border border-border bg-white p-5">
                <div className="flex items-center justify-between">
                  <IconTile icon={stage.icon} size="sm" tone={stage.tone || 'neutral'} />
                  <span className="text-[0.6875rem] font-bold tabular-nums text-ink-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 text-[0.9375rem] font-bold leading-snug text-ink-900">
                  {stage.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{stage.caption}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Wallet                                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="warm" id="wallet" ariaLabelledBy="wallet-heading">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              id="wallet-heading"
              eyebrow={home.wallet.eyebrow}
              title={home.wallet.title}
              description={home.wallet.description}
            />

            <ol className="mt-9 flex flex-col gap-4">
              {home.wallet.points.map((point, index) => (
                <li key={point.title} className="flex gap-4 rounded-lg border border-secondary-300 bg-white p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-900 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink-900">{point.title}</h3>
                    <p className="mt-1.5 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col items-center gap-4">
            <MobileAppMockup screen="wallet" className="w-[16.5rem] sm:w-[18rem]" />
            <DemoBadge />
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Driver benefits                                                  */}
      {/* ---------------------------------------------------------------- */}
      <Section ariaLabelledBy="driver-benefits-heading">
        <SectionHeading
          id="driver-benefits-heading"
          eyebrow={home.driverBenefits.eyebrow}
          title={home.driverBenefits.title}
          description={home.driverBenefits.description}
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.driverBenefits.items.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              tone="accent"
            />
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Smart cities introduction                                        */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="muted" id="ecosystem" ariaLabelledBy="ecosystem-heading">
        <SectionHeading
          id="ecosystem-heading"
          eyebrow={home.ecosystem.eyebrow}
          title={home.ecosystem.title}
          description={home.ecosystem.description}
          align="center"
        />

        <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-muted">
          {home.ecosystem.body}
        </p>

        <EcosystemDiagram
          className="mt-14"
          nodes={home.ecosystem.nodes}
          label="The Spotly ecosystem connects drivers, parking operators, property owners, cities and smart infrastructure."
        />

        <div className="mt-12 flex justify-center">
          <Button href={home.ecosystem.cta.href} size="lg" variant="dark" withArrow>
            {home.ecosystem.cta.label}
          </Button>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Parking owner CTA                                                */}
      {/* ---------------------------------------------------------------- */}
      <Section ariaLabelledBy="owner-cta-heading">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-white p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div>
            <Eyebrow className="mb-5">{home.ownerCta.eyebrow}</Eyebrow>
            <h2 id="owner-cta-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
              {home.ownerCta.title}
            </h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              {home.ownerCta.description}
            </p>
            <ul className="mt-7 flex flex-col gap-2.5">
              {home.ownerCta.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-700">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent-600" strokeWidth={2.5} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:shrink-0">
            <Button href={home.ownerCta.cta.href} size="lg" variant="dark" withArrow>
              {home.ownerCta.cta.label}
            </Button>
            <p className="mt-4 max-w-xs text-sm text-muted">
              See how the Spotly operator platform manages bays, reservations and barriers.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Final CTA                                                        */}
      {/* ---------------------------------------------------------------- */}
      <CTASection
        headingId="home-final-cta"
        title={home.finalCta.title}
        description={home.finalCta.description}
        primary={home.finalCta.primary}
        secondary={home.finalCta.secondary}
      />

      <section className="border-t border-border bg-background py-10" aria-label="More from Spotly">
        <div className="container-page flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-center sm:gap-8">
          <Link
            href={routes.parkingOwners}
            className="inline-flex items-center gap-1.5 font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            Smart parking management for parking owners
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href={routes.smartCities}
            className="inline-flex items-center gap-1.5 font-semibold text-ink-900 underline-offset-4 hover:underline"
          >
            Spotly for smart cities and government
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
