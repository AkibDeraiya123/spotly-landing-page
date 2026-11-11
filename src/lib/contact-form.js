/**
 * Contact form validation + submission transport.
 *
 * Submissions always go to /api/contact so honeypot, timing and rate-limit
 * checks run on the server. Accepted messages are emailed through Resend.
 */

export const HONEYPOT_FIELD = 'companyWebsite';

export const initialValues = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  interest: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_PATTERN = /^[+()\d][\d\s().-]{6,}$/;

export const MESSAGE_MAX_LENGTH = 2000;

export function validateField(name, value, { interests = [] } = {}) {
  const trimmed = (value || '').trim();

  switch (name) {
    case 'firstName':
      if (!trimmed) return 'Enter your first name.';
      if (trimmed.length < 2) return 'First name must be at least 2 characters.';
      return '';
    case 'lastName':
      if (!trimmed) return 'Enter your last name.';
      if (trimmed.length < 2) return 'Last name must be at least 2 characters.';
      return '';
    case 'email':
      if (!trimmed) return 'Enter your work email address.';
      if (!EMAIL_PATTERN.test(trimmed)) return 'Enter a valid email address, for example name@company.com.';
      return '';
    case 'phone':
      if (!trimmed) return '';
      if (!PHONE_PATTERN.test(trimmed)) return 'Enter a valid phone number, including the country code.';
      return '';
    case 'interest':
      if (!trimmed) return 'Select what you are interested in.';
      if (interests.length && !interests.includes(trimmed)) return 'Select an option from the list.';
      return '';
    case 'message':
      if (!trimmed) return 'Tell us a little about what you need.';
      if (trimmed.length < 10) return 'Please add a little more detail (at least 10 characters).';
      if (trimmed.length > MESSAGE_MAX_LENGTH) return `Keep your message under ${MESSAGE_MAX_LENGTH} characters.`;
      return '';
    default:
      return '';
  }
}

export function validateForm(values, options) {
  return Object.keys(initialValues).reduce((errors, name) => {
    const error = validateField(name, values[name], options);
    if (error) errors[name] = error;
    return errors;
  }, {});
}

/**
 * @returns {Promise<{ ok: boolean, delivered?: boolean }>}
 * @throws  {Error} when the server rejects the submission
 */
export async function submitContactForm(values) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  if (response.status === 429) {
    throw new Error('rate-limited');
  }

  if (!response.ok) {
    throw new Error(`Contact form submission failed with status ${response.status}`);
  }

  return response.json();
}
