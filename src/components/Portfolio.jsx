import AnimatedTitle from './AnimatedTitle.jsx';
import projects from '../data/projects.js';

const projectsWithImages = projects.filter((project) => project.image);

export default function Portfolio() {
  return (
    <section id="work" className="work">
      <div className="wrap">
        <AnimatedTitle className="section__title work__title">Websites we have built</AnimatedTitle>
        <div className="work-list">
          {projectsWithImages.map((project, index) => (
            <article
              className={`work-row${index % 2 === 1 ? ' work-row--reverse' : ''}`}
              key={project.title}
            >
              <div className="work-row__media">
                <img src={project.image} alt={`${project.title} website`} loading="lazy" />
              </div>
              <div className="work-row__body">
                <h3 className="work-row__title">{project.title}</h3>
                <p className="work-row__desc">{project.desc}</p>
                <p className="work-row__tech">{project.tags.join(' · ')}</p>
                {project.link && (
                  <a
                    className="work-row__link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit the ${project.title} website`}
                  >
                    Visit site
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
