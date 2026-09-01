import AppLink from '@/components/ui/AppLink';
import Logo from '@/components/brand/Logo';
import { footerNavigation, routes } from '@/config/navigation';
import { site } from '@/config/site';
import { MailIcon, MapPinIcon, PhoneIcon } from '@/components/icons';

export default function Footer() {
  const year = new Date().getFullYear();

  const contactItems = [
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
    site.contact.address && { icon: MapPinIcon, label: site.contact.address },
  ].filter(Boolean);

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)]">
          <div>
            <Logo tone="inverse" />
            <p className="mt-5 max-w-xs font-display text-lg font-bold text-white">
              {site.tagline}
            </p>
            <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-white/60">
              {site.supportingTagline} Spotly is a smart parking platform connecting drivers,
              parking operators and cities.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNavigation.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                  {group.title}
                </h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.href}`}>
                      <AppLink
                        href={link.href}
                        className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                Get in touch
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <AppLink
                    href={routes.contact}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    Contact the Spotly team
                  </AppLink>
                </li>
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-2.5 text-sm text-white/70">
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                    {item.href ? (
                      <a href={item.href} className="transition-colors duration-200 hover:text-white">
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-white/55">{site.corporatePositioning}</p>
        </div>
      </div>
    </footer>
  );
}
