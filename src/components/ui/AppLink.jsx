'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function splitHash(href) {
  const index = href.indexOf('#');
  if (index === -1) return { path: href, hash: '' };
  return { path: href.slice(0, index), hash: href.slice(index) };
}

function samePath(a, b) {
  const normalize = (value) => value.replace(/\/$/, '') || '/';
  return normalize(a) === normalize(b);
}

/**
 * Next.js `<Link>` treats hash-only URLs as a client navigation of the current
 * route, which resets scroll to the top instead of moving to the target.
 * Same-page hashes therefore use a real `<a>`; everything else stays a Link.
 */
export default function AppLink({ href, onClick, ...props }) {
  const pathname = usePathname();
  const { path, hash } = splitHash(href);

  if (hash && (!path || samePath(path, pathname))) {
    return <a href={hash} onClick={onClick} {...props} />;
  }

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (!hash && samePath(path, pathname) && window.location.hash) {
      window.history.replaceState(null, '', path);
      window.scrollTo({ top: 0 });
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
