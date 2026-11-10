import { useEffect } from 'react';
import projects from '../data/projects.js';

const order = [
  'EchoSee',
  'NextWave Integrated Solutions',
  'Entrepreneur Youth Forum (EYF)',
  'Modern Animated Business Website',
  'Canvas & Cravings',
  'StyloVerse AI Fashion Sales Assistant',
  'FitZone AI Gym Assistant',
  'Inventory & Sales Management System',
  'Smart City Traffic Control',
  'Letterwise – Smarter Inbox, More Focus',
  'CodeCelix Lead Finder',
];

const allProjects = order
  .map((title) => projects.find((project) => project.title === title))
  .filter(Boolean);

export default function ProjectsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'All our work — CodeCelix';
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <section className="projects-page">
      <div className="wrap">
        <div className="projects-page__head">
          <a className="projects-page__back" href="/">← Back to home</a>
          <h1 className="projects-page__title">All our work</h1>
          <p className="projects-page__intro">
            A selection of the websites, mobile apps and AI systems we have designed and built for real businesses.
          </p>
        </div>
        <div className="projects-grid">
          {allProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__media">
                <img src={project.image} alt={`${project.title} website homepage`} loading="lazy" />
              </div>
              <h2 className="project-card__title">{project.title}</h2>
              <p className="project-card__desc">{project.desc}</p>
              <ul className="project-card__tags">
                {project.tags.slice(0, 2).map((tag) => (
                  <li className="project-card__tag" key={tag}>{tag}</li>
                ))}
              </ul>
              {project.link && (
                <a
                  className="project-card__link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit the ${project.title} website`}
                >
                  Visit site
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
