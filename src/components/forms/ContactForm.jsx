'use client';

import { useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import { AlertIcon, CheckCircleIcon } from '@/components/icons';
import { countries } from '@/config/countries';
import { contact as contactContent } from '@/config/content/contact';
import {
  HONEYPOT_FIELD,
  MESSAGE_MAX_LENGTH,
  initialValues,
  submitContactForm,
  validateField,
  validateForm,
} from '@/lib/contact-form';

const fieldBase =
  'w-full rounded-md border bg-white px-3.5 text-[0.9375rem] text-ink-900 placeholder:text-muted ' +
  'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0';

function Field({
  id,
  label,
  name,
  error,
  required,
  hint,
  className = '',
  as = 'div',
  children,
}) {
  const describedBy = [error ? `${id}-error` : null, hint ? `${id}-hint` : null]
    .filter(Boolean)
    .join(' ');
  const isGroup = as === 'fieldset';
  const Tag = isGroup ? 'fieldset' : 'div';
  const labelClasses = 'mb-1.5 block text-sm font-semibold text-ink-900';
  const requiredMark = required ? (
    <span className="ml-1 text-primary-600" aria-hidden="true">
      *
    </span>
  ) : (
    <span className="ml-1.5 text-xs font-medium text-muted">(optional)</span>
  );

  return (
    <Tag
      className={className}
      {...(isGroup
        ? {
            id,
            'aria-required': required || undefined,
            'aria-invalid': error ? true : undefined,
            'aria-describedby': describedBy || undefined,
          }
        : {})}
    >
      {isGroup ? (
        <legend className={labelClasses}>
          {label}
          {requiredMark}
        </legend>
      ) : (
        <label htmlFor={id} className={labelClasses}>
          {label}
          {requiredMark}
        </label>
      )}

      {children({ describedBy: describedBy || undefined, invalid: Boolean(error) })}

      {hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p
          id={`${id}-error`}
          className="mt-1.5 flex items-start gap-1.5 text-xs font-semibold text-primary-700"
        >
          <AlertIcon className="mt-px h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          {error}
        </p>
      ) : null}
    </Tag>
  );
}

const inputClasses = (invalid) =>
  `${fieldBase} h-11 ${
    invalid
      ? 'border-primary-500 ring-1 ring-primary-200 focus:ring-primary-500'
      : 'border-ink-400 hover:border-ink-600 focus:border-ink-900 focus:ring-ink-900'
  }`;

/**
 * Field ids are stable rather than generated, so other parts of the page can
 * link straight to a specific field (the sidebar cards do exactly that).
 */
export default function ContactForm({ defaultInterest = '', idPrefix = 'contact' }) {
  const summaryRef = useRef(null);
  const startedAt = useRef(Date.now());

  const [values, setValues] = useState({ ...initialValues, interest: defaultInterest });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorDetail, setErrorDetail] = useState('');

  const fieldId = (name) => `${idPrefix}-${name}`;
  const interests = contactContent.interests;

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    if (type === 'radio' || touched[name]) {
      setTouched((current) => ({ ...current, [name]: true }));
      setErrors((current) => ({ ...current, [name]: validateField(name, value, { interests }) }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validateField(name, value, { interests }) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm(values, { interests });
    setErrors(nextErrors);
    setTouched(
      Object.keys(initialValues).reduce((all, key) => ({ ...all, [key]: true }), {}),
    );

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      /* Move focus to the summary so the errors are announced immediately. */
      window.requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus('submitting');
    setErrorDetail('');
    console.log('Contact form submission', { ...values });

    try {
      await submitContactForm({
        ...values,
        [HONEYPOT_FIELD]: honeypot,
        startedAt: startedAt.current,
      });
      setStatus('success');
      setValues({ ...initialValues, interest: defaultInterest });
      setHoneypot('');
      setTouched({});
      startedAt.current = Date.now();
    } catch (error) {
      setStatus('error');
      setErrorDetail(error?.message === 'rate-limited' ? 'rate-limited' : '');
      window.requestAnimationFrame(() => summaryRef.current?.focus());
    }
  };

  const errorList = Object.entries(errors).filter(([, message]) => Boolean(message));
  const showSummary = errorList.length > 0 || status === 'error';

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-xl border border-accent-200 bg-accent-50 p-8 sm:p-10"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-600 text-white">
          <CheckCircleIcon className="h-7 w-7" strokeWidth={2} />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-ink-900">Thank you — your message is on its way.</h3>
        <p className="mt-3 max-w-prose text-[0.975rem] leading-relaxed text-ink-700">
          A member of the Spotly team will review your enquiry and get back to you at the email
          address you provided.
        </p>

        <Button
          variant="outline"
          className="mt-7"
          onClick={() => {
            setStatus('idle');
            setErrors({});
            setErrorDetail('');
            setHoneypot('');
            startedAt.current = Date.now();
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-heading"
      className="relative rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 id="contact-form-heading" className="text-2xl font-bold text-ink-900">
        Send us a message
      </h2>
      <p className="mt-2.5 max-w-prose text-[0.975rem] leading-relaxed text-muted">
        {contactContent.responseNote}
      </p>

      <div className="absolute -left-[10000px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${idPrefix}-${HONEYPOT_FIELD}`}>Company website</label>
        <input
          id={`${idPrefix}-${HONEYPOT_FIELD}`}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {showSummary ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 rounded-md border border-primary-200 bg-primary-50 px-4 py-3.5"
        >
          <p className="flex items-center gap-2 text-sm font-bold text-primary-700">
            <AlertIcon className="h-4 w-4" strokeWidth={2} />
            {status === 'error'
              ? 'We could not send your message.'
              : `Please check ${errorList.length} ${errorList.length === 1 ? 'field' : 'fields'} below.`}
          </p>
          {status === 'error' ? (
            <p className="mt-1.5 text-sm text-ink-700">
              {errorDetail === 'rate-limited'
                ? 'Too many messages were sent from this network. Please wait a few minutes and try again.'
                : 'Something went wrong while sending your enquiry. Please try again in a moment.'}
            </p>
          ) : (
            <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm text-ink-700">
              {errorList.map(([name, message]) => (
                <li key={name}>
                  <a href={`#${fieldId(name)}`} className="underline underline-offset-2">
                    {message}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id={fieldId('firstName')} label="First name" required error={errors.firstName}>
          {({ describedBy, invalid }) => (
            <input
              id={fieldId('firstName')}
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={invalid}
              aria-describedby={describedBy}
              className={inputClasses(invalid)}
            />
          )}
        </Field>

        <Field id={fieldId('lastName')} label="Last name" required error={errors.lastName}>
          {({ describedBy, invalid }) => (
            <input
              id={fieldId('lastName')}
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={invalid}
              aria-describedby={describedBy}
              className={inputClasses(invalid)}
            />
          )}
        </Field>

        <Field id={fieldId('company')} label="Company" error={errors.company}>
          {({ describedBy, invalid }) => (
            <input
              id={fieldId('company')}
              name="company"
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={invalid}
              aria-describedby={describedBy}
              className={inputClasses(invalid)}
            />
          )}
        </Field>

        <Field id={fieldId('email')} label="Work email" required error={errors.email}>
          {({ describedBy, invalid }) => (
            <input
              id={fieldId('email')}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              placeholder="name@company.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={invalid}
              aria-describedby={describedBy}
              className={inputClasses(invalid)}
            />
          )}
        </Field>

        <Field
          id={fieldId('phone')}
          label="Phone"
          error={errors.phone}
          hint="Include your country code, e.g. +971 50 000 0000."
        >
          {({ describedBy, invalid }) => (
            <input
              id={fieldId('phone')}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={invalid}
              aria-describedby={describedBy}
              className={inputClasses(invalid)}
            />
          )}
        </Field>

        <Field id={fieldId('country')} label="Country" error={errors.country}>
          {({ describedBy, invalid }) => (
            <>
              <input
                id={fieldId('country')}
                name="country"
                type="text"
                autoComplete="country-name"
                list={`${idPrefix}-country-options`}
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={invalid}
                aria-describedby={describedBy}
                className={inputClasses(invalid)}
              />
              <datalist id={`${idPrefix}-country-options`}>
                {countries.map((country) => (
                  <option key={country} value={country} />
                ))}
              </datalist>
            </>
          )}
        </Field>

        <Field
          id={fieldId('interest')}
          label="I am interested in"
          required
          error={errors.interest}
          as="fieldset"
          className="sm:col-span-2"
        >
          {({ invalid }) => (
            <div className="grid gap-2 sm:grid-cols-2">
              {interests.map((interest) => {
                const optionId = `${fieldId('interest')}-${interest
                  .replace(/[^a-z0-9]+/gi, '-')
                  .toLowerCase()
                  .replace(/^-|-$/g, '')}`;
                const selected = values.interest === interest;

                return (
                  <label
                    key={interest}
                    htmlFor={optionId}
                    className={`flex cursor-pointer items-center gap-3 rounded-md border px-3.5 py-3 text-[0.9375rem] transition-colors duration-200 ${
                      selected
                        ? 'border-ink-900 bg-secondary-100 font-semibold text-ink-900'
                        : invalid
                          ? 'border-primary-500 bg-white text-ink-900'
                          : 'border-ink-400 bg-white font-medium text-ink-800 hover:border-ink-600'
                    }`}
                  >
                    <input
                      id={optionId}
                      type="radio"
                      name="interest"
                      value={interest}
                      checked={selected}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="h-4 w-4 shrink-0 accent-primary-600"
                    />
                    {interest}
                  </label>
                );
              })}
            </div>
          )}
        </Field>

        <Field
          id={fieldId('message')}
          label="Message"
          required
          error={errors.message}
          hint={`${values.message.length} of ${MESSAGE_MAX_LENGTH} characters`}
          className="sm:col-span-2"
        >
          {({ describedBy, invalid }) => (
            <textarea
              id={fieldId('message')}
              name="message"
              rows={5}
              required
              maxLength={MESSAGE_MAX_LENGTH}
              placeholder="Tell us about your parking locations, your organisation, or what you would like to explore."
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={invalid}
              aria-describedby={describedBy}
              className={`${fieldBase} resize-y py-3 ${
                invalid
                  ? 'border-primary-500 ring-1 ring-primary-200 focus:ring-primary-500'
                  : 'border-ink-400 hover:border-ink-600 focus:border-ink-900 focus:ring-ink-900'
              }`}
            />
          )}
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted">
          <span className="text-primary-600" aria-hidden="true">
            *
          </span>{' '}
          Required fields. We will only use your details to respond to this enquiry.
        </p>

        <Button type="submit" size="lg" disabled={status === 'submitting'} className="sm:min-w-[12rem]">
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
