import { useRef, useState } from 'react';
import { submitContact } from '../lib/submitContact';
import { ArrowRight } from './Icons.jsx';

const EMPTY = { name: '', phone: '', email: '', message: '' };

const validators = {
  name: (value) => (value.trim().length < 2 ? 'Please enter your full name.' : ''),
  phone: (value) => {
    const digits = value.replace(/\D/g, '');
    if (!value.trim()) return 'Please enter your phone number.';
    if (!/^\+?[\d\s\-()]+$/.test(value.trim()) || digits.length < 7 || digits.length > 15) {
      return 'Please enter a valid phone number.';
    }
    return '';
  },
  email: (value) => {
    if (!value.trim()) return 'Please enter your email address.';
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ? '' : 'Please enter a valid email address.';
  },
  message: (value) =>
    value.trim().length < 10 ? 'Please tell us a little about your requirement (at least 10 characters).' : '',
};

const validateAll = (values) =>
  Object.fromEntries(Object.keys(validators).map((field) => [field, validators[field](values[field])]));

const FIELDS = [
  { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name' },
  { name: 'phone', label: 'Phone number', type: 'tel', autoComplete: 'tel', inputMode: 'tel' },
  { name: 'email', label: 'Email address', type: 'email', autoComplete: 'email', wide: true },
];

const RESULT_COPY = {
  sent: {
    title: 'Thank you — your message has been sent.',
    text: 'We will get back to you shortly.',
  },
  'email-app': {
    title: 'Your email app should now be open.',
    text: 'Your message has been prepared there — please press send in your email app to deliver it. Nothing has been sent from this page.',
  },
  unconfigured: {
    title: 'Your message has not been sent.',
    text: 'This form is not yet connected to a mail service. Please reach us by phone, email or WhatsApp using the details on this page.',
  },
  error: {
    title: 'Something went wrong.',
    text: 'Your message could not be sent. Please try again, or contact us directly by phone or email.',
  },
};

export default function ContactForm() {
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [state, setState] = useState('idle'); // idle | submitting | sent | email-app | unconfigured | error

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (touched[name]) setErrors((current) => ({ ...current, [name]: validators[name](value) }));
  };

  const blur = (event) => {
    const { name, value } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validators[name](value) }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    setTouched({ name: true, phone: true, email: true, message: true });

    const firstInvalid = Object.keys(nextErrors).find((field) => nextErrors[field]);
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    setState('submitting');
    try {
      const trimmed = Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value.trim()]));
      const result = await submitContact(trimmed);
      setState(result.status);
      if (result.status === 'sent') {
        setValues(EMPTY);
        setTouched({});
      }
    } catch {
      setState('error');
    }
  };

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: update,
    onBlur: blur,
    required: true,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  });

  const result = RESULT_COPY[state];

  return (
    <form ref={formRef} className="form" onSubmit={submit} noValidate>
      <p className="form__title">Send an enquiry</p>

      <div className="form__grid">
        {FIELDS.map(({ name, label, wide, ...input }) => (
          <div key={name} className={`form__field ${wide ? 'form__field--wide' : ''}`.trim()}>
            <label htmlFor={`contact-${name}`}>{label}</label>
            <input {...input} {...fieldProps(name)} />
            {errors[name] && (
              <p className="form__error" id={`contact-${name}-error`}>
                {errors[name]}
              </p>
            )}
          </div>
        ))}

        <div className="form__field form__field--wide">
          <label htmlFor="contact-message">Your requirement</label>
          <textarea rows="4" {...fieldProps('message')} />
          {errors.message && (
            <p className="form__error" id="contact-message-error">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button type="submit" className="btn btn--dark form__submit" disabled={state === 'submitting'}>
        {state === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        <ArrowRight size={18} />
      </button>

      <div className="form__status" role="status" aria-live="polite">
        {result && (
          <div className={`form__result form__result--${state}`}>
            <p>{result.title}</p>
            <p>{result.text}</p>
          </div>
        )}
      </div>
    </form>
  );
}
