import AnimatedTitle from './AnimatedTitle.jsx';

const projects = [
  {
    name: 'EchoSee',
    description: 'AI-powered accessibility platform providing real-time speech-to-text captioning through AR smart glasses.',
    technologies: 'AI, Web Application, Accessibility',
    image: 'assets/EcoSee_img.png',
    url: 'https://echo-see.vercel.app/',
    featured: true,
  },
  {
    name: 'Baig Tours',
    description: 'Modern travel booking website showcasing curated tour packages across Pakistan with a seamless booking experience.',
    technologies: 'Travel & Tourism, Tour Booking, Web Development, UI/UX Design',
    image: 'assets/Baig_tours_img.png',
    url: 'https://baig-tours-pakistan.vercel.app/',
    featured: true,
  },
  {
    name: 'Canvas & Cravings',
    description: 'Restaurant and café website with premium branding, an online menu, table reservations, and smooth animations.',
    technologies: 'Restaurant Website, Hospitality, UI/UX Design, Frontend Development',
    image: 'assets/canvas_cravings_img.png',
    url: 'https://canvas-cravings.vercel.app/',
    featured: true,
  },
  {
    name: 'Entrepreneur Youth Forum',
    url: 'https://www.entrepreneuryouthforum.org',
    featured: false,
  },
  {
    name: 'ECM Solutions',
    url: null,
    featured: false,
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const moreProjects = projects.filter((project) => !project.featured);

export default function Portfolio() {
  return (
    <section id="work" className="work">
      <div className="wrap">
        <AnimatedTitle className="section__title work__title">Websites we have built</AnimatedTitle>
        <div className="work-list">
          {featuredProjects.map((project, index) => (
            <article
              className={`work-row${index % 2 === 1 ? ' work-row--reverse' : ''}`}
              key={project.name}
            >
              <div className="work-row__media">
                <img src={project.image} alt={`${project.name} website`} loading="lazy" />
              </div>
              <div className="work-row__body">
                <h3 className="work-row__title">{project.name}</h3>
                <p className="work-row__desc">{project.description}</p>
                <p className="work-row__tech">{project.technologies}</p>
                <a
                  className="work-row__link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit the ${project.name} website`}
                >
                  Visit site
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="work__more">
          More projects:{' '}
          {moreProjects.map((project, index) => (
            <span key={project.name}>
              {index > 0 && ' and '}
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              ) : (
                <span className="work__more-plain">{project.name}</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
