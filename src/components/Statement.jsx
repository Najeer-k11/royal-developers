import { company, statement } from '../data/company';
import Picture from './Picture.jsx';
import Reveal from './Reveal.jsx';
import './Statement.css';

/** Full-width photographic interlude between the gallery and contact. */
export default function Statement() {
  return (
    <section className="statement on-dark" aria-label="Our promise">
      <div className="statement__media" aria-hidden="true">
        <Picture image={statement.image && { ...statement.image, alt: '' }} ratio="auto" tone="dark" />
      </div>
      <Reveal className="statement__content container">
        <p className="statement__text">{statement.text}</p>
        <p className="statement__tagline">{company.tagline}</p>
      </Reveal>
    </section>
  );
}
