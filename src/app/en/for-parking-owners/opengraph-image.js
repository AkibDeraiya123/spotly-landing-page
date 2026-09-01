import { renderOgImage, size, contentType } from '@/lib/og-image';

export const alt =
  'Spotly for parking owners — turn parking spaces into a smarter, more connected business.';
export { size, contentType };

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: 'For parking owners',
    title: 'Turn parking spaces into a smarter business.',
    subtitle: 'Manage, monetise and optimise your parking infrastructure with Spotly.',
  });
}
