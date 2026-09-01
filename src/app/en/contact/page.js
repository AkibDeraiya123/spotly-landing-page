import Section from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { IconTile } from '@/components/ui/Card';
import ContactForm from '@/components/forms/ContactForm';
import JsonLd from '@/components/seo/JsonLd';
import { ArrowRightIcon, CheckIcon, MailIcon, PhoneIcon } from '@/components/icons';
import { contact } from '@/config/content/contact';
import { site } from '@/config/site';
import { routes } from '@/config/navigation';
import { buildMetadata } from '@/lib/metadata';
import { BREADCRUMB_ID, breadcrumbSchema, webPageSchema } from '@/lib/structured-data';

export const metadata = buildMetadata('contact');

const breadcrumb = breadcrumbSchema(
  [
    { name: 'Home', path: routes.home },
    { name: 'Contact Us', path: routes.contact },
  ],
  'contact',
);

const directContactItems = [
  site.contact.email && {
    icon: MailIcon,
    label: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  site.contact.phone && {
    icon: PhoneIcon,
    label: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s/g, '')}`,
  },
].filter(Boolean);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schemas={[
          webPageSchema('contact', { type: 'ContactPage', breadcrumbId: BREADCRUMB_ID('contact') }),
          breadcrumb,
        ]}
      />

      <section className="border-b border-border bg-background" aria-labelledby="contact-heading">
        <div className="container-page py-16 lg:py-20">
          <div className="max-w-3xl">
            <Eyebrow className="mb-6">{contact.hero.eyebrow}</Eyebrow>
            <h1
              id="contact-heading"
              className="text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl"
            >
              {contact.hero.headline}
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-700">
              {contact.hero.copy}
            </p>
          </div>
        </div>
      </section>

      <Section className="!pt-14 lg:!pt-16" ariaLabelledBy="contact-form-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-12">
          <ContactForm />

          <aside aria-labelledby="contact-routes-heading" className="flex flex-col gap-4">
            <h2 id="contact-routes-heading" className="sr-only">
              Ways to work with Spotly
            </h2>

            {directContactItems.length > 0 ? (
              <div className="rounded-xl border border-border bg-white p-6">
                <h3 className="text-lg font-bold text-ink-900">Reach us directly</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {directContactItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="inline-flex items-start gap-2.5 text-sm font-medium text-ink-900 underline-offset-4 hover:underline"
                      >
                        <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {contact.sidebar.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-ink-300 hover:shadow-sm"
              >
                <IconTile icon={item.icon} size="sm" tone="primary" />
                <h3 className="mt-4 text-lg font-bold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.description}</p>
                <a
                  href="#contact-interest"
                  className="mt-4 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-ink-900 underline-offset-4 hover:underline"
                >
                  {item.action}
                  <ArrowRightIcon className="h-4 w-4 text-primary-500" strokeWidth={2} />
                  <span className="sr-only">
                    — go to the enquiry form and choose {item.interest}
                  </span>
                </a>
                <p className="mt-2 text-xs text-muted">
                  Choose &ldquo;{item.interest}&rdquo; under &ldquo;I am interested in&rdquo;.
                </p>
              </div>
            ))}

            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="text-base font-bold text-ink-900">What happens next</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  'We read every enquiry that comes through this form.',
                  'The right person on the Spotly team follows up by email.',
                  'For partnerships, we set up an introductory conversation.',
                ].map((step) => (
                  <li key={step} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" strokeWidth={2.5} />
                    {step}
                  </li>
                ))}
              </ul>
              {site.contact.region ? (
                <p className="mt-5 border-t border-border pt-4 text-sm text-muted">
                  Spotly is building smart parking infrastructure for the{' '}
                  {site.contact.region} and wider region.
                </p>
              ) : null}
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
