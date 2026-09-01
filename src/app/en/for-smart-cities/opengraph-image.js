import { renderOgImage, size, contentType } from '@/lib/og-image';

export const alt =
  'Spotly for smart cities and government — powering smarter parking for smarter cities.';
export { size, contentType };

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: 'Smart cities & government',
    title: 'Powering Smarter Parking for Smarter Cities.',
    subtitle: 'An intelligent parking platform connecting drivers, operators and infrastructure.',
  });
}
