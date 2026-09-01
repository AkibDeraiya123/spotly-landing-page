/**
 * Contact form validation + submission transport.
 *
 * There is no Spotly backend wired up yet, so submission is deliberately a
 * single seam: set NEXT_PUBLIC_CONTACT_ENDPOINT to a URL that accepts a JSON
 * POST and the form starts delivering messages with no other changes.
 */

export const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '';

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
 * @returns {Promise<{ delivered: boolean }>}
 * @throws  {Error} when a configured endpoint rejects the submission
 */
export async function submitContactForm(values) {
  if (!CONTACT_ENDPOINT) {
    return { delivered: false };
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...values,
      submittedAt: new Date().toISOString(),
      source: 'spotly-website-contact-form',
    }),
  });

  if (!response.ok) {
    throw new Error(`Contact form submission failed with status ${response.status}`);
  }

  return { delivered: true };
}
