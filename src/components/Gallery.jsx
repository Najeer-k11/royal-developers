import { useMemo, useState } from 'react';
import { galleryItems } from '../data/gallery';
import Lightbox from './Lightbox.jsx';
import Picture from './Picture.jsx';
import Reveal from './Reveal.jsx';
import './Gallery.css';

const ALL = 'All';

export default function Gallery() {
  const [filter, setFilter] = useState(ALL);
  const [openIndex, setOpenIndex] = useState(null);

  // Only photographs that actually exist are shown; filters follow the data.
  const items = useMemo(() => galleryItems.filter((item) => item.image), []);
  const categories = useMemo(() => [ALL, ...new Set(items.map((item) => item.category))], [items]);
  const visible = useMemo(
    () => (filter === ALL ? items : items.filter((item) => item.category === filter)),
    [items, filter],
  );

  const changeFilter = (category) => {
    setOpenIndex(null);
    setFilter(category);
  };

  return (
    <section id="gallery" className="section section--white gallery" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 id="gallery-title" className="display-md">
              A closer look at <em>our work.</em>
            </h2>
          </div>
          <p className="section-head__intro muted">
            Completed buildings, interiors, exteriors and progress from our sites. Select any
            photograph to view it in full.
          </p>
        </Reveal>

        <div className="filters" role="group" aria-label="Filter gallery by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="filters__btn"
              aria-pressed={filter === category}
              onClick={() => changeFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="empty-state" role="status">
            <p>Photographs coming soon.</p>
            <p className="muted">New images will appear here as they are added.</p>
          </div>
        ) : (
          <ul className="gallery__grid" key={filter}>
            {visible.map((item, index) => (
              <li key={item.id} style={{ '--i': Math.min(index, 8) }}>
                <button
                  type="button"
                  className="gallery__item"
                  aria-haspopup="dialog"
                  aria-label={`View photograph: ${item.caption} (${item.category})`}
                  onClick={() => setOpenIndex(index)}
                >
                  <Picture
                    image={item.image}
                    sizes="(min-width: 64em) 31vw, (min-width: 40em) 46vw, 100vw"
                  />
                  <span className="gallery__caption" aria-hidden="true">
                    <span>{item.category}</span>
                    {item.caption}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Lightbox
        items={visible}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
