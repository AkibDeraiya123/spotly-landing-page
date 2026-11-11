/**
 * Delivers an accepted contact enquiry by email through Resend.
 *
 * Requires RESEND_API_KEY and RESEND_FROM_EMAIL (a sender on a domain
 * verified in Resend). CONTACT_TO_EMAIL overrides the inbox; otherwise
 * the message goes to the address in site config.
 */

import { Resend } from 'resend';
import { site } from '@/config/site';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function oneLine(value, max = 180) {
  return String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

const DETAIL_ROWS = [
  ['Name', (fields) => `${fields.firstName || ''} ${fields.lastName || ''}`.trim()],
  ['Company', (fields) => fields.company],
  ['Email', (fields) => fields.email],
  ['Phone', (fields) => fields.phone],
  ['Country', (fields) => fields.country],
  ['Interest', (fields) => fields.interest],
];

function recipient() {
  return oneLine(process.env.CONTACT_TO_EMAIL || site.contact.email, 320);
}

export function contactMailerConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL && recipient());
}

function buildEnquiry(fields) {
  const submittedAt = new Date().toISOString();
  const name = oneLine(`${fields.firstName || ''} ${fields.lastName || ''}`.trim()) || 'Someone';
  const interest = oneLine(fields.interest);
  const subject = interest
    ? `New Spotly enquiry from ${name} — ${interest}`
    : `New Spotly enquiry from ${name}`;

  const details = DETAIL_ROWS.map(([label, pick]) => ({
    label,
    value: oneLine(pick(fields), 500) || '—',
  }));
  const message = String(fields.message || '').trim();

  const text = [
    'New enquiry from the Spotly website',
    '',
    ...details.map((row) => `${row.label}: ${row.value}`),
    '',
    'Message:',
    message,
    '',
    `Submitted: ${submittedAt}`,
  ].join('\n');

  const rows = details
    .map(
      (row) => `
        <tr>
          <td style="padding:8px 16px 8px 0;color:#6b6560;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(row.label)}</td>
          <td style="padding:8px 0;color:#1c1917;font-size:15px;">${escapeHtml(row.value)}</td>
        </tr>`,
    )
    .join('');

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#f6f4f2;color:#1c1917;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e7e2dc;border-radius:12px;">
      <tr>
        <td style="padding:24px 28px 8px;">
          <p style="margin:0;color:#EF5239;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Spotly</p>
          <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;">New website enquiry</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 28px 4px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 28px 24px;">
          <p style="margin:12px 0 6px;color:#6b6560;font-size:13px;">Message</p>
          <p style="margin:0;font-size:15px;line-height:1.55;white-space:pre-wrap;">${escapeHtml(message)}</p>
          <p style="margin:20px 0 0;color:#6b6560;font-size:12px;">Submitted ${escapeHtml(submittedAt)}. Reply to this email to respond to ${escapeHtml(name)}.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return {
    subject: oneLine(subject, 180),
    text,
    html,
    replyTo: oneLine(fields.email, 320),
    submittedAt,
  };
}

export async function sendContactEnquiry(fields) {
  if (!contactMailerConfigured()) {
    throw new Error('Contact email is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL.');
  }

  const enquiry = buildEnquiry(fields);
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: [recipient()],
    replyTo: enquiry.replyTo,
    subject: enquiry.subject,
    text: enquiry.text,
    html: enquiry.html,
  });

  if (error) {
    throw new Error(error.message || 'Resend rejected the enquiry');
  }
}
