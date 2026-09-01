# Spotly — Website

Marketing website for **Spotly**, a smart parking platform that lets drivers reserve parking before they arrive, automatically assigns an available parking bay, and connects parking infrastructure to a centralised cloud platform.

> **Reserve. Drive. Park.** — Know where you'll park before you arrive.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19
- **JavaScript only** — `.js` / `.jsx`, no TypeScript
- Tailwind CSS 3 driven by a central token file
- No animation libraries, no icon packages, no UI kit

Everything renders as static HTML at build time. The only client-side JavaScript is the mobile navigation menu and the contact form.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /en
```

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
```

Copy `.env.example` to `.env.local` and set the values for your environment.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin. Drives canonical URLs, Open Graph metadata, `sitemap.xml` and `robots.txt`. |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | Optional. URL that accepts a JSON `POST` from the contact form. While it is unset the form validates in the browser but transmits nothing, and the UI says so. |

## Pages

| Route | Audience |
| --- | --- |
| `/en` | Drivers — the core reserve/drive/park story |
| `/en/for-parking-owners` | Parking owners, operators, malls, hotels, developers |
| `/en/for-smart-cities` | Governments, municipalities, enterprise parking and mobility companies |
| `/en/contact` | Everyone — partnership and enquiry form |

`/` redirects to `/en`. Legacy unprefixed paths redirect to their `/en` equivalents (see `next.config.mjs`).

## Changing the design

**All design tokens live in one file: `src/config/theme.js`.** Colours, type scale, radii, shadows, section spacing, breakpoints and container widths are defined there and consumed by `tailwind.config.js`. Change the primary colour in that file and the whole site follows — nothing is hardcoded in components.

```js
// src/config/theme.js
primary: { 500: '#EF5239', DEFAULT: '#EF5239', /* … */ }
```

### The brand palette

Each brand colour is the anchor step of a scale; the surrounding steps are tints and shades of it.

| Brand colour | Token | Used for |
| --- | --- | --- |
| `#EF5239` primary orange | `primary-500` | Brand accent — the assigned bay, section rules, icons, the logo |
| `#CB3721` primary orange dark | `primary-600` | Any filled surface carrying white text: buttons, bay tiles, the selected map pin |
| `#259681` green accent | `accent-500` | Available, confirmed, connected and other positive states |
| `#1B1411` dark | `ink-900` | Headings and dark sections |
| `#5A4D46` brown | `ink-500` / `muted` | Secondary and supporting text |
| `#EAE1DB` beige | `secondary-200` | Warm section backgrounds |
| `#FAF4EF` white | `background` | The page canvas |

Two conventions are worth knowing before you change colours:

**Canvas versus surface.** `#FAF4EF` is the page canvas and the default background of every light section. Pure `#FFFFFF` is reserved for cards and product surfaces that need to lift off it — the app and dashboard mockups in particular stay true white, because that is what makes them read as real product UI.

**Filled surfaces use the 600 step, not 500.** White text on `#EF5239` is 3.5:1, below the 4.5:1 WCAG AA needs for body-sized text. `#CB3721` clears it at 5.1:1, so anything with white text on it uses the dark shade while `#EF5239` remains the accent everywhere it appears as a graphic rather than a text background. The logo is the one exception — logotypes are exempt from contrast requirements, so the mark keeps pure `#EF5239`.

## Changing the content

Marketing copy is not scattered through components. It lives in configuration:

```
src/config/
  theme.js            design tokens
  site.js             brand, URL, contact details, social profiles
  navigation.js       routes, header nav, footer nav
  seo.js              per-page title, description, keywords
  countries.js        contact form country suggestions
  content/
    home.js           homepage copy
    owners.js         parking owners page copy
    cities.js         smart cities page copy
    contact.js        contact page copy and form options
```

`src/config/site.js` deliberately ships with empty `contact` and `social` values. The footer renders only what is filled in, so no placeholder or broken links reach production.

## Component structure

```
src/components/
  layout/     Navbar, Footer
  ui/         Button, Section, SectionHeading, Card, Badge, FlowDiagram
  sections/   PageHero, CTASection
  visuals/    PhoneFrame, MobileAppMockup, ParkingMap, HeroVisual,
              ParkingFloorPlan, BarrierIllustration, DashboardMockup, Diagrams
  forms/      ContactForm
  brand/      Logo
  icons/      inline SVG icon set
  seo/        JsonLd
```

Product mockups and diagrams are built from HTML, CSS and inline SVG — there are no screenshot images to keep in sync, and nothing to download at runtime.

## Icons

`public/favicon.svg` is the source of truth for the Spotly mark — pure geometry using the brand orange and white, so it stays sharp at any size. The rasters were generated from that same geometry rather than resampled from a bitmap.

| File | Purpose |
| --- | --- |
| `favicon.svg` | Primary icon for browsers that support SVG favicons |
| `favicon.ico` | 16/32/48 fallback, referenced explicitly and at the well-known path |
| `apple-touch-icon.png` | 180×180 iOS home screen — **opaque**, because iOS composites transparency onto black |
| `icon-192.png`, `icon-512.png` | Web app manifest icons, `purpose: any` |
| `icon-maskable-512.png` | `purpose: maskable` — the disc is inset to Android's 40% safe zone so it survives being cropped to a circle or squircle |

The manifest is generated by `src/app/manifest.js` and served at `/manifest.webmanifest`; the `<link>` tags come from `metadata.icons` in `src/app/layout.js`.

One sizing rule matters when regenerating these: the mark must fill its canvas. A circular logo with baked-in padding shrinks twice — once by the padding and again by the platform's own safe-zone inset — and at 16px there is no room to lose.

## SEO

- Unique `<title>`, meta description, canonical URL, Open Graph and Twitter metadata per page, generated by `src/lib/metadata.js` from `src/config/seo.js`
- Per-route social card images generated at build time (`opengraph-image.js` in each route folder)
- JSON-LD for `Organization`, `WebSite`, `WebPage` / `ContactPage`, `BreadcrumbList` and `SoftwareApplication` (`src/lib/structured-data.js`)
- `sitemap.xml` and `robots.txt` generated from the route config
- One `<h1>` per page with a logical heading hierarchy, descriptive link text, and semantic landmarks

## Accessibility

- Skip link, semantic landmarks, keyboard-operable navigation with a visible focus ring on every interactive element
- Labelled form controls with inline errors, an error summary and `aria-invalid` / `aria-describedby` wiring
- Status in diagrams and mockups is conveyed with text and icons, never colour alone
- Mockups are exposed as single labelled images so screen readers get a description instead of UI fragments
- `prefers-reduced-motion` disables the few transitions that exist

## Content accuracy

The site describes the product as it is actually designed:

- The driver selects a **parking location**; Spotly assigns the **parking bay** automatically
- Each bay is paired with a **barrier that contains a built-in magnetic sensor** — there is no separate in-bay sensor
- Parking is charged from reservation until the vehicle exits, then deducted from the Spotly wallet
- Dashboard and app figures are labelled as illustrative UI examples
- Forward-looking capabilities (AI, EV charging, fleet, navigation) are explicitly labelled as long-term vision
- No deployments, customers or partnerships are claimed anywhere
