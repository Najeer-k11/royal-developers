import { useEffect, useRef } from 'react';
import { company, hero } from '../data/company';
import { ArrowRight } from './Icons.jsx';
import './Hero.css';

export default function Hero() {
  const sectionRef = useRef(null);

  // Gentle parallax: the photograph drifts and the copy eases away on scroll.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.min(Math.max(window.scrollY / section.offsetHeight, 0), 1);
      section.style.setProperty('--progress', progress.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" className="hero on-dark" ref={sectionRef}>
      <div className="hero__media" aria-hidden="true">
        {hero.image && (
          <img
            src={hero.image.src}
            srcSet={hero.image.srcSet}
            sizes="100vw"
            width={hero.image.width}
            height={hero.image.height}
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        )}
      </div>

      <div className="hero__content container">
        <p className="eyebrow hero__label">{hero.label}</p>
        <h1 className="display-lg hero__title">
          {hero.heading.map((line) => (
            <span key={line} className="hero__line">
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <p className="lead hero__text">{hero.text}</p>
        <div className="hero__actions">
          <a className="btn btn--gold" href="#projects">
            Explore Our Projects
            <ArrowRight size={18} />
          </a>
          <a className="btn btn--outline-light" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero__foot container">
        <p>{company.descriptor}</p>
        <a href="#about" className="hero__scroll">
          Scroll
          <span aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
