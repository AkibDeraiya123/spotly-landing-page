/**
 * Server-side checks for the contact form. These only work if submissions
 * go through /api/contact — client-only checks are skipped by bots.
 */

import { HONEYPOT_FIELD } from '@/lib/contact-form';

const MIN_SUBMIT_MS = 3000;
const MAX_FORM_AGE_MS = 1000 * 60 * 60 * 2;
const MAX_URLS = 2;
const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 10;
const RATE_LIMIT_MAX = 4;

const DISPOSABLE_DOMAINS = new Set([
  '10minutemail.com',
  'guerrillamail.com',
  'mailinator.com',
  'tempmail.com',
  'temp-mail.org',
  'trashmail.com',
  'yopmail.com',
  'sharklasers.com',
  'getnada.com',
  'discard.email',
  'mailnesia.com',
  'moakt.com',
  'throwaway.email',
]);

const hitsByIp = new Map();

export function clientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

export function isRateLimited(ip) {
  const now = Date.now();
  const current = hitsByIp.get(ip);

  if (!current || now >= current.resetAt) {
    hitsByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX;
}

export function isDisposableEmail(email) {
  const domain = String(email || '')
    .trim()
    .toLowerCase()
    .split('@')[1];
  return Boolean(domain && DISPOSABLE_DOMAINS.has(domain));
}

function urlCount(text) {
  const matches = String(text || '').match(/https?:\/\/|www\./gi);
  return matches ? matches.length : 0;
}

/**
 * @returns {string | null} a machine-facing reason, or null if the payload looks legitimate
 */
export function rejectReason(payload) {
  if (String(payload[HONEYPOT_FIELD] || '').trim()) {
    return 'honeypot';
  }

  const startedAt = Number(payload.startedAt);
  if (!Number.isFinite(startedAt)) return 'timing';

  const age = Date.now() - startedAt;
  if (age < MIN_SUBMIT_MS || age > MAX_FORM_AGE_MS) return 'timing';

  const email = String(payload.email || '').trim();
  if (isDisposableEmail(email)) return 'disposable-email';

  const blob = [payload.firstName, payload.lastName, payload.company, payload.message]
    .filter(Boolean)
    .join(' ');
  if (urlCount(blob) > MAX_URLS) return 'link-spam';

  return null;
}
