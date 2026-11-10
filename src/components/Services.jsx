import AnimatedTitle from './AnimatedTitle.jsx';

const services = [
  {
    title: 'Websites and web apps',
    desc: 'Company sites, booking systems and dashboards that load fast and look sharp.',
    image: 'assets/CodeCelixWeb_img.png',
  },
  {
    title: 'Mobile apps',
    desc: 'Android and iPhone apps for your customers or your own team.',
    image: 'assets/Daywise_Productivity_Coach.png',
  },
  {
    title: 'AI automation',
    desc: 'Hand off the repeat work, like data entry and document handling.',
    image: 'assets/ai_powered_automation.png',
  },
  {
    title: 'AI assistants',
    desc: 'Chat helpers that answer customers and support your staff.',
    image: 'assets/StyloVerse_img.png',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap" id="help">
        <AnimatedTitle className="section__title services__title">How we can help</AnimatedTitle>
        <div className="services__grid">
          {services.map((service) => (
            <article className="service-panel" key={service.title}>
              <div className="service-panel__media">
                <img src={service.image} alt={`${service.title} by CodeCelix`} loading="lazy" />
              </div>
              <div className="service-panel__body">
                <h3 className="service-panel__title">{service.title}</h3>
                <p className="service-panel__desc">{service.desc}</p>
                <a className="service-panel__link" href="#contact">Learn more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
