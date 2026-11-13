import { values } from '../data/company';
import Reveal from './Reveal.jsx';
import './WhyChoose.css';

export default function WhyChoose() {
  return (
    <section className="section section--dark on-dark why" aria-labelledby="why-title">
      <div className="container why__grid">
        <Reveal className="why__head">
          <p className="eyebrow">{values.eyebrow}</p>
          <h2 id="why-title" className="display-md">
            {values.heading}
          </h2>
          <p className="muted">{values.intro}</p>
        </Reveal>

        <ol className="why__list">
          {values.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={(index % 2) * 100}>
              <span className="why__numeral" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p className="muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
