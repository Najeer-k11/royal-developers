import { contact } from '../data/company';

/**
 * Contact form delivery — the single place to wire up a real form service.
 *
 * Resolves with one of:
 *   { status: 'sent' }          message was accepted by the configured endpoint
 *   { status: 'email-app' }     no endpoint; visitor's email app was opened with the message pre-filled
 *   { status: 'unconfigured' }  no endpoint and no email address — nothing was sent
 * Rejects if the configured endpoint fails.
 */
export async function submitContact(values) {
  const { endpoint } = contact.form;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values),
    });
    if (!response.ok) throw new Error(`Form endpoint responded with ${response.status}`);
    return { status: 'sent' };
  }

  if (contact.email.value) {
    const subject = `Property enquiry from ${values.name}`;
    const body = `${values.message}\n\nName: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}`;
    window.location.href = `mailto:${contact.email.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return { status: 'email-app' };
  }

  return { status: 'unconfigured' };
}

export function whatsappUrl() {
  const { number, message } = contact.whatsapp;
  if (!number) return null;
  return `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
}
