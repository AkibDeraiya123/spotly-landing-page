'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView();
  return true;
}

/**
 * App Router does not always honour a hash after a client navigation or
 * hydration. Re-apply it once the new page is in the DOM.
 */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (scrollToHash()) return undefined;

    const frame = requestAnimationFrame(scrollToHash);
    const timeout = window.setTimeout(scrollToHash, 50);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
