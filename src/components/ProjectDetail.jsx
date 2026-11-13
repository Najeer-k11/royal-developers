import { useEffect, useMemo, useState } from 'react';
import { Close } from './Icons.jsx';
import Modal from './Modal.jsx';
import Picture from './Picture.jsx';
import './ProjectDetail.css';

export default function ProjectDetail({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(
    () => (project ? [project.cover, ...(project.gallery ?? [])].filter(Boolean) : []),
    [project],
  );

  useEffect(() => setActiveIndex(0), [project]);

  return (
    <Modal
      open={Boolean(project)}
      onClose={onClose}
      label={project ? `Project details: ${project.name}` : 'Project details'}
      className="project-detail"
    >
      {project && (
        <article className="project-detail__panel">
          <button type="button" className="icon-btn project-detail__close" onClick={onClose}>
            <span className="visually-hidden">Close project details</span>
            <Close size={18} />
          </button>

          <div className="project-detail__media">
            <Picture
              key={activeIndex}
              image={images[activeIndex]}
              ratio="4 / 3"
              tone="dark"
              eager
              sizes="(min-width: 60em) 60vw, 100vw"
            />
            {images.length > 1 && (
              <ul className="project-detail__thumbs" aria-label="Project photographs">
                {images.map((image, index) => (
                  <li key={image.src}>
                    <button
                      type="button"
                      aria-label={`Show photograph ${index + 1} of ${images.length}`}
                      aria-pressed={index === activeIndex}
                      onClick={() => setActiveIndex(index)}
                    >
                      <Picture image={image} ratio="1 / 1" tone="dark" sizes="96px" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="project-detail__body">
            <p className="eyebrow">{project.status}</p>
            <h2 className="display-sm">{project.name}</h2>

            <dl className="project-detail__facts">
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{project.category}</dd>
              </div>
              {project.details?.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>

            <p className="muted">{project.description}</p>

            <a className="btn btn--dark" href="#contact" onClick={onClose}>
              Enquire about this project
            </a>
          </div>
        </article>
      )}
    </Modal>
  );
}
