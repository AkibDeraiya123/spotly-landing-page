import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { mainNavigation, routes } from '@/config/navigation';

export const metadata = {
  title: 'Page not found',
  description: 'The page you were looking for could not be found on the Spotly website.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex flex-1 items-center bg-background py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6">Error 404</Eyebrow>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              We couldn&rsquo;t find that page.
            </h1>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
              The page may have moved or the link may be out of date. Here is where you can go
              instead.
            </p>

            <nav aria-label="Suggested pages" className="mt-9">
              <ul className="flex flex-col gap-2.5">
                {mainNavigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-base font-semibold text-ink-900 underline-offset-4 hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <Button href={routes.home} size="lg" className="mt-10" withArrow>
              Back to the Spotly homepage
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
