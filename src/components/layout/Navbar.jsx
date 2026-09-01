'use client';

import { useEffect, useId, useState } from 'react';
import AppLink from '@/components/ui/AppLink';
import { usePathname } from 'next/navigation';
import Logo from '@/components/brand/Logo';
import Button from '@/components/ui/Button';
import { CloseIcon, MenuIcon } from '@/components/icons';
import { mainNavigation, primaryCta } from '@/config/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const menuId = useId();

  /**
   * The open menu is tracked by the route it was opened on, so navigating
   * anywhere closes it without an effect that chases the pathname.
   */
  const [openedOn, setOpenedOn] = useState(null);
  const open = openedOn === pathname;
  const setOpen = (next) => setOpenedOn(next ? pathname : null);

  /* Escape closes the menu; lock background scroll while it is open. */
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenedOn(null);
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const isCurrent = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur-md supports-[backdrop-filter]:bg-background/85">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNavigation.map((item) => {
                const current = isCurrent(item.href);

                return (
                  <li key={item.href}>
                    <AppLink
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                      className={`relative flex h-9 items-center rounded-md px-3 text-[0.9375rem] font-medium transition-colors duration-200 ${
                        current
                          ? 'font-semibold text-ink-900'
                          : 'text-ink-600 hover:bg-secondary-100 hover:text-ink-900'
                      }`}
                    >
                      <span className={item.shortLabel ? 'hidden xl:inline' : undefined}>
                        {item.label}
                      </span>
                      {item.shortLabel ? (
                        <span className="xl:hidden">{item.shortLabel}</span>
                      ) : null}
                      {current ? (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-3 -bottom-[0.3rem] h-0.5 rounded-full bg-primary-500"
                        />
                      ) : null}
                    </AppLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button href={primaryCta.href} size="md" variant="primary">
              {primaryCta.label}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close main menu' : 'Open main menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-ink-900 transition-colors duration-200 hover:bg-secondary-100 lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="animate-fade-in-down border-t border-border bg-white lg:hidden"
        >
          <nav aria-label="Main (mobile)" className="container-page py-5">
            <ul className="flex flex-col gap-1">
              {mainNavigation.map((item) => {
                const current = isCurrent(item.href);

                return (
                  <li key={item.href}>
                    <AppLink
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                      className={`flex items-center justify-between rounded-md px-3 py-3.5 text-base transition-colors duration-200 ${
                        current
                          ? 'bg-secondary-100 font-semibold text-ink-900'
                          : 'font-medium text-ink-700 hover:bg-secondary-100'
                      }`}
                    >
                      {item.label}
                      {current ? (
                        <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary-600">
                          Current
                        </span>
                      ) : null}
                    </AppLink>
                  </li>
                );
              })}
            </ul>

            <Button href={primaryCta.href} size="lg" className="mt-5 w-full">
              {primaryCta.label}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
