import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card, { FeatureCard, IconTile } from '@/components/ui/Card';
import Badge, { DemoBadge } from '@/components/ui/Badge';
import PageHero from '@/components/sections/PageHero';
import CTASection from '@/components/sections/CTASection';
import { CityDashboardMockup } from '@/components/visuals/DashboardMockup';
import ArchitectureDiagram from '@/components/visuals/Diagrams';
import JsonLd from '@/components/seo/JsonLd';
import { AlertIcon } from '@/components/icons';
import { cities } from '@/config/content/cities';
import { routes } from '@/config/navigation';
import { buildMetadata } from '@/lib/metadata';
import { BREADCRUMB_ID, breadcrumbSchema, webPageSchema } from '@/lib/structured-data';

export const metadata = buildMetadata('smartCities');

const breadcrumb = breadcrumbSchema(
  [
    { name: 'Home', path: routes.home },
    { name: 'For Smart Cities & Government', path: routes.smartCities },
  ],
  'smartCities',
);

export default function SmartCitiesPage() {
  return (
    <>
      <JsonLd
        schemas={[
          webPageSchema('smartCities', { breadcrumbId: BREADCRUMB_ID('smartCities') }),
          breadcrumb,
        ]}
      />

      <PageHero
        tone="dark"
        eyebrow={cities.hero.eyebrow}
        title={cities.hero.headline}
        description={cities.hero.copy}
        primaryCta={cities.hero.primaryCta}
        secondaryCta={cities.hero.secondaryCta}
      />

      {/* Who this is for -------------------------------------------------- */}
      <section className="border-b border-border bg-ink-800 py-7" aria-label="Who Spotly works with">
        <div className="container-page">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {cities.hero.audiences.map((audience) => (
              <li
                key={audience}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55"
              >
                {audience}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* City parking challenge                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section ariaLabelledBy="city-challenge-heading">
        <SectionHeading
          id="city-challenge-heading"
          eyebrow={cities.challenge.eyebrow}
          title={cities.challenge.title}
          description={cities.challenge.description}
          align="center"
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.challenge.pressures.map((pressure) => (
            <li key={pressure.title}>
              <Card tone="muted" className="h-full">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white text-primary-600 ring-1 ring-border">
                  <AlertIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink-900">{pressure.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  {pressure.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl bg-accent-800 px-6 py-12 text-center sm:px-12 lg:py-16">
          <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {cities.challenge.transition}
          </h3>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/70">
            Connected parking generates a live picture of how urban capacity is actually being used
            — bay by bay, location by location.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* City dashboard                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="muted" id="network" ariaLabelledBy="city-dashboard-heading">
        <SectionHeading
          id="city-dashboard-heading"
          eyebrow={cities.dashboard.eyebrow}
          title={cities.dashboard.title}
          description={cities.dashboard.description}
          align="center"
        />

        <div className="mt-14">
          <CityDashboardMockup />
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted">
            <DemoBadge />
            All figures shown are an illustrative design demonstration and do not represent live or
            deployed Spotly data.
          </p>
        </div>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cities.dashboard.metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-border bg-white p-5">
              <dt className="text-base font-bold text-ink-900">{metric.label}</dt>
              <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{metric.detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Capabilities                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section id="capabilities" ariaLabelledBy="city-capabilities-heading">
        <SectionHeading
          id="city-capabilities-heading"
          eyebrow={cities.capabilities.eyebrow}
          title={cities.capabilities.title}
          description={cities.capabilities.description}
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.capabilities.items.map((capability) => (
            <FeatureCard
              key={capability.title}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              tone={capability.futureCapability ? 'neutral' : 'primary'}
              footer={
                capability.futureCapability ? (
                  <Badge tone="warning">Planned long-term capability</Badge>
                ) : null
              }
            />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-white px-5 py-4 text-center text-sm leading-relaxed text-muted">
          {cities.capabilities.futureNote}
        </p>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Enterprise integration                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="dark" id="integration" ariaLabelledBy="city-integration-heading">
        <SectionHeading
          id="city-integration-heading"
          eyebrow={cities.integration.eyebrow}
          title={cities.integration.title}
          description={cities.integration.description}
          align="center"
          tone="inverse"
        />

        <ArchitectureDiagram
          className="mt-16"
          tone="inverse"
          layers={cities.integration.layers}
          label="Spotly platform architecture: parking operators, cities and government, and mobility platforms connect through Spotly Cloud to barriers and devices, APIs and integrations, and data and analytics."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {cities.integration.notes.map((note) => (
            <div key={note.title} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.05] p-5">
              <IconTile icon={note.icon} size="sm" tone="inverse" />
              <div>
                <h3 className="text-base font-bold text-white">{note.title}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-white/65">
                  {note.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Enterprise positioning                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section tone="warm" ariaLabelledBy="city-enterprise-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="city-enterprise-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
            {cities.ecosystemNote.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">
            {cities.ecosystemNote.description}
          </p>
          <p className="mx-auto mt-8 max-w-2xl rounded-lg border border-secondary-300 bg-white px-5 py-4 text-sm leading-relaxed text-muted">
            {cities.ecosystemNote.disclaimer}
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Vision                                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section ariaLabelledBy="city-vision-heading">
        <SectionHeading
          id="city-vision-heading"
          eyebrow={cities.vision.eyebrow}
          title={cities.vision.title}
          description={cities.vision.description}
          align="center"
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cities.vision.areas.map((area) => {
            const isCore = area.status === 'Core product';

            return (
              <li key={area.title}>
                <div
                  className={`flex h-full flex-col rounded-lg border p-5 ${
                    isCore ? 'border-accent-200 bg-accent-50' : 'border-border bg-white'
                  }`}
                >
                  <IconTile icon={area.icon} size="sm" tone={isCore ? 'accent' : 'neutral'} />
                  <h3 className="mt-4 text-base font-bold text-ink-900">{area.title}</h3>
                  <p
                    className={`mt-2 text-xs font-semibold uppercase tracking-[0.1em] ${
                      isCore ? 'text-accent-700' : 'text-muted'
                    }`}
                  >
                    {area.status}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-white px-5 py-4 text-center text-sm leading-relaxed text-muted">
          {cities.vision.note}
        </p>

        <div className="mt-12 flex justify-center">
          <Button href={routes.parkingOwners} size="lg" variant="outline" withArrow>
            See Spotly for parking owners and operators
          </Button>
        </div>
      </Section>

      <CTASection
        headingId="cities-final-cta"
        title={cities.cta.title}
        description={cities.cta.description}
        primary={cities.cta.primary}
        secondary={cities.cta.secondary}
      />
    </>
  );
}
