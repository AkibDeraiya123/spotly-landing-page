import { renderOgImage, size, contentType } from '@/lib/og-image';

export const alt = 'Contact Spotly — let us build the future of parking together.';
export { size, contentType };

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: 'Contact Spotly',
    title: "Let's build the future of parking together.",
    subtitle: 'Partnerships, smart cities, parking ownership and technology integration.',
  });
}
