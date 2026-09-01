import { renderOgImage, size, contentType } from '@/lib/og-image';

export const alt = 'Spotly — Reserve. Drive. Park. Know where you will park before you arrive.';
export { size, contentType };

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: 'Smart parking platform',
    title: 'Reserve. Drive. Park.',
    subtitle: "Know where you'll park before you arrive.",
  });
}
