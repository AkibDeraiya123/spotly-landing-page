import { NextResponse } from 'next/server';
import { contact } from '@/config/content/contact';
import { sendContactEnquiry } from '@/lib/contact-email';
import { validateForm } from '@/lib/contact-form';
import { clientIp, isRateLimited, rejectReason } from '@/lib/contact-security';

function publicError(status, message) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request) {
  const ip = clientIp(request);
  console.log('ip', ip);
  if (isRateLimited(ip)) {
    return publicError(429, 'Too many messages from this network. Please try again later.');
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return publicError(400, 'We could not read that submission. Please try again.');
  }

  const fields = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    company: payload.company,
    email: payload.email,
    phone: payload.phone,
    country: payload.country,
    interest: payload.interest,
    message: payload.message,
  };

  const fieldErrors = validateForm(fields, { interests: contact.interests });
  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400 });
  }

  const blocked = rejectReason(payload);
  if (blocked) {
    /* Honeypot and timing traps look like success so bots do not retry. */
    if (blocked === 'honeypot' || blocked === 'timing') {
      return NextResponse.json({ ok: true, delivered: false });
    }

    return publicError(400, 'We could not accept this enquiry. Please try again with a work email.');
  }

  try {
    await sendContactEnquiry(fields);
  } catch (error) {
    console.error('Contact enquiry email failed:', error instanceof Error ? error.message : error);
    return publicError(
      502,
      'Something went wrong while sending your enquiry. Please try again in a moment.',
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
