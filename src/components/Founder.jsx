import { founder } from '../data/company';
import Reveal from './Reveal.jsx';
import './Founder.css';

export default function Founder() {
  return (
    <section id="founder" className="section section--dark on-dark founder" aria-labelledby="founder-title">
      <div className="container founder__grid">
        <Reveal className="founder__portrait">
          <img
            src={founder.portrait}
            alt={`Portrait of the founder of Royal Developers`}
            width="960"
            height="960"
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <div className="founder__body">
          <Reveal>
            <p className="eyebrow">A Message from the Founder</p>
            <h2 id="founder-title" className="visually-hidden">
              Founder’s message
            </h2>
            <blockquote className="founder__quote">
              <p>“{founder.quote}”</p>
            </blockquote>
          </Reveal>

          <Reveal className="founder__message" delay={120}>
            {founder.message.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="founder__signature" delay={200}>
            <div>
              <p className="founder__name">{founder.name}</p>
              <p className="founder__role">{founder.designation}</p>
            </div>
            <p className="founder__intro muted">{founder.intro}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
