import { useEffect, useMemo, useState } from 'react';
import { company, contact, founder, navigation } from '../data/company';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { useScrollLock } from '../hooks/useScrollLock';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);
  const sectionIds = useMemo(() => navigation.map((item) => item.id), []);
  const active = useActiveSection(sectionIds);
  useScrollLock(menuOpen);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 60em)');
    const onResize = () => desktop.matches && setMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`.trim()}
    >
      <div className="header__bar container">
        <a className="header__logo" href="#home" onClick={closeMenu} aria-label={`${company.name} — home`}>
          <img src={company.logoMark} alt={company.name} width="540" height="361" />
        </a>

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__end">
          <a className="header__founder" href="#founder" onClick={closeMenu}>
            <span className="header__founder-text">
              <span>Founder</span>
              <span>Our Story</span>
            </span>
            <img src={founder.thumb} alt={`${founder.name}, Founder of Royal Developers`} width="192" height="192" />
          </a>

          <button
            type="button"
            className="header__toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="header__toggle-lines" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" inert={!menuOpen}>
        <nav className="mobile-menu__inner container" aria-label="Mobile">
          <ul className="mobile-menu__links">
            {navigation.map((item, index) => (
              <li key={item.id} style={{ '--i': index }}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__foot">
            <p>{company.tagline}</p>
            <p>
              {contact.phone.label} · {contact.email.label}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
