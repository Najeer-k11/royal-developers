import { about } from '../data/company';
import Picture from './Picture.jsx';
import Reveal from './Reveal.jsx';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__intro">
          <Reveal className="about__heading">
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 id="about-title" className="display-md">
              {about.heading[0]} <em>{about.heading[1]}</em>
            </h2>
          </Reveal>
          <Reveal className="about__copy" delay={120}>
            <p className="lead">{about.lead}</p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="muted">
                {paragraph}
              </p>
            ))}
            <a className="link-line" href="#projects">
              View our work
            </a>
          </Reveal>
        </div>

        <div className="about__visual">
          <Reveal className="about__image-main">
            <Picture image={about.image} ratio="16 / 10" sizes="(min-width: 60em) 70vw, 100vw" />
          </Reveal>
          <Reveal className="about__image-detail" delay={150}>
            <Picture image={about.detailImage} ratio="4 / 5" sizes="(min-width: 60em) 26vw, 45vw" />
          </Reveal>
        </div>

        <ul className="about__principles">
          {about.principles.map((principle, index) => (
            <Reveal as="li" key={principle.title} delay={index * 90}>
              <span className="about__numeral" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{principle.title}</h3>
              <p className="muted">{principle.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
