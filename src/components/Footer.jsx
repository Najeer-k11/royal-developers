import { company, contact, navigation, social } from '../data/company';
import { socialIcons } from './Icons.jsx';
import './Footer.css';

export default function Footer() {
  const { phone, email, address } = contact;

  return (
    <footer className="footer on-dark">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" aria-label={`${company.name} — back to top`}>
              <img
                src={company.logoFull}
                alt={`${company.name} — ${company.tagline}`}
                width="640"
                height="508"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="muted">{company.shortIntro}</p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2>Explore</h2>
            <ul>
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2>Contact</h2>
            <address>
              {phone.value ? <a href={`tel:${phone.value}`}>{phone.label}</a> : <span>{phone.label}</span>}
              {email.value ? <a href={`mailto:${email.value}`}>{email.label}</a> : <span>{email.label}</span>}
              <span>
                {address.lines.map((line) => (
                  <span key={line} className="footer__line">
                    {line}
                  </span>
                ))}
              </span>
            </address>
          </div>

          <div className="footer__col">
            <h2>Follow</h2>
            <ul className="footer__social">
              {social.map(({ id, label, url }) => {
                const Icon = socialIcons[id];
                return (
                  <li key={id}>
                    {url ? (
                      <a href={url} target="_blank" rel="noreferrer" aria-label={label}>
                        <Icon size={18} />
                      </a>
                    ) : (
                      <span className="is-unlinked" title={`${label} — link to be added`}>
                        <Icon size={18} />
                        <span className="visually-hidden">{label} (link to be added)</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="footer__tagline">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
