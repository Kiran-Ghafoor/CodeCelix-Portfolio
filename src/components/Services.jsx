import AnimatedTitle from './AnimatedTitle.jsx';

const services = [
  {
    title: 'Websites and web apps',
    desc: 'Company sites, booking systems, dashboards.',
  },
  {
    title: 'Mobile apps',
    desc: 'Android and iPhone apps for your customers or your team.',
  },
  {
    title: 'AI automation',
    desc: 'Remove repeat work like data entry and document handling.',
  },
  {
    title: 'AI assistants',
    desc: 'Chat and task assistants that work inside your business.',
  },
  {
    title: 'Design',
    desc: 'Screens and brand look for apps and websites.',
  },
  {
    title: 'Support after launch',
    desc: 'Fixes, updates, and new features when you need them.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap services__layout">
        <div className="services__intro">
          <AnimatedTitle className="section__title services__title">What we can build for you</AnimatedTitle>
        </div>
        <ul className="services__list">
          {services.map((service) => (
            <li className="services__item" key={service.title}>
              <h3 className="services__item-title">{service.title}</h3>
              <p className="services__item-desc">{service.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
