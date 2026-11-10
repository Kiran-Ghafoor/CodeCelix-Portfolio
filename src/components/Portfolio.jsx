import AnimatedTitle from './AnimatedTitle.jsx';
import projects from '../data/projects.js';

const featuredTitles = [
  'EchoSee',
  'NextWave Integrated Solutions',
  'Canvas & Cravings',
  'Smart City Traffic Control',
];

const featured = featuredTitles
  .map((title) => projects.find((project) => project.title === title))
  .filter(Boolean);

export default function Portfolio() {
  return (
    <section id="work" className="work">
      <div className="wrap">
        <AnimatedTitle className="section__title work__title">Work we are proud of</AnimatedTitle>
        <div className="work-list">
          {featured.map((project, index) => (
            <article
              className={`work-row${index % 2 === 1 ? ' work-row--reverse' : ''}`}
              key={project.title}
            >
              <div className="work-row__media">
                <img src={project.image} alt={`${project.title} website homepage`} loading="lazy" />
              </div>
              <div className="work-row__body">
                <h3 className="work-row__title">{project.title}</h3>
                <p className="work-row__desc">{project.desc}</p>
                <ul className="work-row__tags">
                  {project.tags.slice(0, 2).map((tag) => (
                    <li className="work-row__tag" key={tag}>{tag}</li>
                  ))}
                </ul>
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
        <div className="work__all">
          <a className="btn btn--solid" href="/projects">See all work</a>
        </div>
      </div>
    </section>
  );
}
