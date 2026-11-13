import { useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Close } from './Icons.jsx';
import Modal from './Modal.jsx';
import './Lightbox.css';

const SWIPE_THRESHOLD = 48;

export default function Lightbox({ items, index, onChange, onClose }) {
  const open = index !== null && Boolean(items[index]);
  const item = open ? items[index] : null;
  const total = items.length;
  const touchStartX = useRef(null);

  const step = useCallback(
    (direction) => onChange((current) => (current === null ? current : (current + direction + total) % total)),
    [onChange, total],
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, step]);

  // Warm the neighbouring photographs so navigation feels immediate.
  useEffect(() => {
    if (!open || total < 2) return;
    [1, -1].forEach((offset) => {
      const neighbour = items[(index + offset + total) % total];
      if (neighbour?.image) new Image().src = neighbour.image.src;
    });
  }, [open, index, items, total]);

  return (
    <Modal open={open} onClose={onClose} label="Photograph viewer" className="lightbox">
      {item && (
        <div
          className="lightbox__stage"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const delta = event.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(delta) > SWIPE_THRESHOLD) step(delta < 0 ? 1 : -1);
          }}
        >
          <button type="button" className="icon-btn icon-btn--light lightbox__close" onClick={onClose}>
            <span className="visually-hidden">Close photograph viewer</span>
            <Close size={18} />
          </button>

          <figure className="lightbox__figure">
            <img
              key={item.id}
              src={item.image.src}
              width={item.image.width}
              height={item.image.height}
              alt={item.image.alt}
              decoding="async"
            />
            <figcaption aria-live="polite">
              <span className="lightbox__caption">
                <span>{item.category}</span>
                {item.caption}
              </span>
              <span className="lightbox__count">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </figcaption>
          </figure>

          {total > 1 && (
            <>
              <button
                type="button"
                className="icon-btn icon-btn--light lightbox__nav lightbox__nav--prev"
                onClick={() => step(-1)}
              >
                <span className="visually-hidden">Previous photograph</span>
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="icon-btn icon-btn--light lightbox__nav lightbox__nav--next"
                onClick={() => step(1)}
              >
                <span className="visually-hidden">Next photograph</span>
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      )}
    </Modal>
  );
}
