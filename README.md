# Spotly

Premium bilingual landing experience for **Spotly** — parking with confidence.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion
- Custom i18n (`en` / `ar`) with RTL support — ready for more locales

## Develop

```bash
cd ~/Desktop/parkeasy-web
npm run dev
```

- English: [http://localhost:3000/en](http://localhost:3000/en)
- Arabic: [http://localhost:3000/ar](http://localhost:3000/ar)

## Add a language later

1. Add the locale code in `src/i18n/config.ts`
2. Create `src/i18n/dictionaries/<locale>.ts`
3. Register it in `src/i18n/getDictionary.ts`
4. Set RTL in `getDirection()` if needed

## Placeholders to replace

- Logo
- App / dashboard / barrier photos
- Demo booking URL (currently `mailto:hello@spotly.com`)
- Contact phone / address
- Real metrics (dashboard numbers are illustrative)
