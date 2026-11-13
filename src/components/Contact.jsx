import { contact } from '../data/company';
import { whatsappUrl } from '../lib/submitContact';
import ContactForm from './ContactForm.jsx';
import { Clock, Mail, MapPin, Phone, WhatsApp } from './Icons.jsx';
import Reveal from './Reveal.jsx';
import './Contact.css';

export default function Contact() {
  const whatsapp = whatsappUrl();
  const { phone, email, address, hours } = contact;

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal className="contact__info">
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-title" className="display-md">
            {contact.heading}
          </h2>
          <p className="lead muted">{contact.text}</p>

          <address className="contact__details">
            <div>
              <Phone size={18} />
              <span className="contact__label">Phone</span>
              {phone.value ? <a href={`tel:${phone.value}`}>{phone.label}</a> : <span>{phone.label}</span>}
            </div>
            <div>
              <Mail size={18} />
              <span className="contact__label">Email</span>
              {email.value ? <a href={`mailto:${email.value}`}>{email.label}</a> : <span>{email.label}</span>}
            </div>
            <div>
              <MapPin size={18} />
              <span className="contact__label">Office</span>
              <span>
                {address.lines.map((line) => (
                  <span key={line} className="contact__line">
                    {line}
                  </span>
                ))}
                {address.mapUrl && (
                  <a className="contact__map" href={address.mapUrl} target="_blank" rel="noreferrer">
                    View on map
                  </a>
                )}
              </span>
            </div>
            <div>
              <Clock size={18} />
              <span className="contact__label">Hours</span>
              <span>{hours}</span>
            </div>
          </address>

          <div className="contact__whatsapp">
            {whatsapp ? (
              <a className="btn btn--outline-dark" href={whatsapp} target="_blank" rel="noreferrer">
                <WhatsApp size={18} />
                Chat on WhatsApp
              </a>
            ) : (
              <>
                <span className="btn btn--outline-dark" aria-disabled="true">
                  <WhatsApp size={18} />
                  Chat on WhatsApp
                </span>
                <p className="contact__note muted">WhatsApp number to be added.</p>
              </>
            )}
          </div>
        </Reveal>

        <Reveal className="contact__form" delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
