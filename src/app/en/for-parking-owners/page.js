import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import SectionHeading, { Eyebrow } from '@/components/ui/SectionHeading';
import Card, { FeatureCard, IconTile } from '@/components/ui/Card';
import FlowDiagram from '@/components/ui/FlowDiagram';
import PageHero from '@/components/sections/PageHero';
import CTASection from '@/components/sections/CTASection';
import {
  LocationsDashboardMockup,
  OwnerDashboardMockup,
} from '@/components/visuals/DashboardMockup';
import JsonLd from '@/components/seo/JsonLd';
import { AlertIcon, CheckIcon } from '@/components/icons';
import { owners } from '@/config/content/owners';
import { routes } from '@/config/navigation';
import { buildMetadata } from '@/lib/metadata';
import { BREADCRUMB_ID, breadcrumbSchema, webPageSchema } from '@/lib/structured-data';

export const metadata = buildMetadata('parkingOwners');

const breadcrumb = breadcrumbSchema(
  [
    { name: 'Home', path: routes.home },
    { name: 'For Parking Owners', path: routes.parkingOwners },
  ],
  'parkingOwners',
);

export default function ParkingOwnersPage() {
  return (
    <>
      <JsonLd
        schemas={[
          webPageSchema('parkingOwners', { breadcrumbId: BREADCRUMB_ID('parkingOwners') }),
          breadcrumb,
        ]}
      />

      <PageHero
        eyebrow={owners.hero.eyebrow}
        title={owners.hero.headline}
        description={owners.hero.copy}
        primaryCta={owners.hero.primaryCta}
        secondaryCta={owners.hero.secondaryCta}
        bullets={owners.hero.bullets}
        visual={
          <LocationsDashboardMockup />
        }
      />

      {/* ---------------------------------------------------------------- */}
      {/* Owner problem                                                    */}
      {/* ---------------------------------------------------------------- */}
      <Section ariaLabelledBy="owner-problem-heading">
        <SectionHeading
          id="owner-problem-heading"
          eyebrow={owners.problem.eyebrow}
          title={owners.problem.title}
          description={owners.problem.description}
          align="center"
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {owners.problem.challenges.map((challenge) => (
            <li key={challenge.title}>
              <Card tone="muted" className="h-full">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-primary-600 ring-1 ring-border">
                  <AlertIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink-900">{challenge.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  {challenge.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl bg-ink-900 px-6 py-12 text-center sm:px-12 lg:py-16">
          <h3 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {owners.problem.transition}
          </h3>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/65">
            One platform for bays, reservations, barriers, pricing and analytics — across every
            location you operate.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Dashboard                                                        */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="muted" id="dashboard" ariaLabelledBy="owner-dashboard-heading">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-center xl:gap-14">
          <div>
            <SectionHeading
              id="owner-dashboard-heading"
              eyebrow={owners.dashboard.eyebrow}
              title={owners.dashboard.title}
              description={owners.dashboard.description}
            />

            <ul className="mt-9 flex flex-col gap-4">
              {owners.dashboard.highlights.map((highlight) => (
                <li key={highlight.label} className="flex gap-4 rounded-lg border border-border bg-white p-4">
                  <IconTile icon={highlight.icon} size="sm" tone="neutral" />
                  <div>
                    <p className="text-[0.9375rem] font-bold text-ink-900">{highlight.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{highlight.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <OwnerDashboardMockup />
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Features                                                         */}
      {/* ---------------------------------------------------------------- */}
      <Section id="features" ariaLabelledBy="owner-features-heading">
        <SectionHeading
          id="owner-features-heading"
          eyebrow={owners.features.eyebrow}
          title={owners.features.title}
          description={owners.features.description}
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {owners.features.items.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Business value                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="warm" ariaLabelledBy="owner-value-heading">
        <SectionHeading
          id="owner-value-heading"
          eyebrow={owners.businessValue.eyebrow}
          title={owners.businessValue.title}
          description={owners.businessValue.description}
          align="center"
        />

        <FlowDiagram
          className="mt-14"
          label="How parking visibility leads to better utilisation, a better driver experience, more reservations and revenue opportunity."
          steps={owners.businessValue.chain}
          columns={5}
        />
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Use cases                                                        */}
      {/* ---------------------------------------------------------------- */}
      <Section ariaLabelledBy="owner-usecases-heading">
        <SectionHeading
          id="owner-usecases-heading"
          eyebrow={owners.useCases.eyebrow}
          title={owners.useCases.title}
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {owners.useCases.items.map((useCase) => (
            <FeatureCard
              key={useCase.title}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              tone="accent"
            />
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Getting started                                                  */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="muted" ariaLabelledBy="owner-start-heading">
        <SectionHeading
          id="owner-start-heading"
          eyebrow={owners.integration.eyebrow}
          title={owners.integration.title}
          align="center"
        />

        <FlowDiagram
          className="mt-14"
          label="Getting started with Spotly: map your locations, connect the barriers, configure pricing and go live to drivers."
          steps={owners.integration.steps}
          columns={4}
        />

        <div className="mx-auto mt-12 flex max-w-3xl gap-4 rounded-xl border border-border bg-white p-6">
          <IconTile icon={owners.integration.note.icon} size="sm" tone="primary" />
          <div>
            <h3 className="text-base font-bold text-ink-900">{owners.integration.note.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
              {owners.integration.note.description}
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Cross-link                                                       */}
      {/* ---------------------------------------------------------------- */}
      <Section ariaLabelledBy="owner-crosslink-heading">
        <div className="grid items-center gap-8 rounded-2xl border border-border bg-white p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <Eyebrow className="mb-5">Public sector & networks</Eyebrow>
            <h2 id="owner-crosslink-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
              Operating parking at city scale?
            </h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              If you manage parking across a district, a network of facilities or on behalf of a
              public authority, the Spotly platform is designed to work at that scale too.
            </p>
            <ul className="mt-7 flex flex-col gap-2.5">
              {['City-wide parking visibility', 'Analytics across connected locations', 'APIs and integrations'].map(
                (point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-700">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent-600" strokeWidth={2.5} />
                    {point}
                  </li>
                ),
              )}
            </ul>
          </div>

          <Button href={routes.smartCities} size="lg" variant="dark" withArrow className="self-start lg:shrink-0">
            Explore Spotly for Smart Cities
          </Button>
        </div>
      </Section>

      <CTASection
        headingId="owners-final-cta"
        title={owners.cta.title}
        description={owners.cta.description}
        primary={owners.cta.primary}
        secondary={owners.cta.secondary}
      />
    </>
  );
}
