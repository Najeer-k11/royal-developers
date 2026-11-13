import { useMemo, useState } from 'react';
import { projectFilters, projects } from '../data/projects';
import { ArrowUpRight } from './Icons.jsx';
import Picture from './Picture.jsx';
import ProjectDetail from './ProjectDetail.jsx';
import Reveal from './Reveal.jsx';
import './Projects.css';

/* Editorial rhythm: [wide + narrow] / [full] / [narrow + wide] / [full] … */
const SLOTS = ['wide', 'narrow', 'full', 'narrow-first', 'wide-second', 'full'];

function slotFor(index, total) {
  const slot = SLOTS[index % SLOTS.length];
  const opensARow = slot === 'wide' || slot === 'narrow-first';
  // A card that would be left alone on its row takes the full width instead.
  return opensARow && index === total - 1 ? 'full' : slot;
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.status === filter)),
    [filter],
  );

  const countFor = (id) =>
    id === 'all' ? projects.length : projects.filter((project) => project.status === id).length;

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <p className="eyebrow">Our Projects</p>
            <h2 id="projects-title" className="display-md">
              Completed works &amp; <em>ongoing developments.</em>
            </h2>
          </div>
          <p className="section-head__intro muted">
            A portfolio of the developments we have delivered and those currently taking shape.
            Select a project to see its details and photographs.
          </p>
        </Reveal>

        <div className="filters" role="group" aria-label="Filter projects by status">
          {projectFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              className="filters__btn"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
              <span className="filters__count">{String(countFor(item.id)).padStart(2, '0')}</span>
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="empty-state" role="status">
            <p>No projects to show here yet.</p>
            <p className="muted">Projects in this category will appear once they are added.</p>
          </div>
        ) : (
          <ul className="projects__grid" key={filter}>
            {visible.map((project, index) => {
              const slot = slotFor(index, visible.length);
              return (
                <li
                  key={project.id}
                  className={`project-card project-card--${slot}`}
                  style={{ '--i': index }}
                >
                  <div className="project-card__media">
                    <Picture
                      image={project.cover}
                      ratio="var(--ratio)"
                      sizes={
                        slot === 'full'
                          ? '(min-width: 82em) 1320px, 100vw'
                          : '(min-width: 60em) 58vw, 100vw'
                      }
                    />
                    <span className={`status-tag status-tag--${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                    <span className="project-card__cue" aria-hidden="true">
                      View project <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <div className="project-card__info">
                    <span className="project-card__index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3>
                        <button
                          type="button"
                          className="project-card__trigger"
                          aria-haspopup="dialog"
                          onClick={() => setSelected(project)}
                        >
                          {project.name}
                        </button>
                      </h3>
                      <p className="project-card__meta">
                        <span>{project.category}</span>
                        <span>{project.location}</span>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
