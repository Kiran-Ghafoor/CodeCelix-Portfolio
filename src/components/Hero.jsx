const showcase = [
  { src: 'assets/EcoSee_img.png', alt: 'EchoSee — AI accessibility platform' },
  { src: 'assets/Baig_tours_img.png', alt: 'Baig Tours Pakistan — travel booking website' },
  { src: 'assets/EYF_img.png', alt: 'Entrepreneur Youth Forum — community platform' },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="wrap hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">We build websites and software that businesses use every day.</h1>
          <p className="hero__desc">CodeCelix is a registered software company. Tell us what you need and we will build it and look after it.</p>
          <div className="hero__actions">
            <a className="btn hero__btn--primary" href="#contact">Start a project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
            <a className="btn hero__btn--secondary" href="#work">See our work</a>
          </div>
          <div className="hero__facts">
            <span>Est. 2025</span>
            <span>Naples, Italy</span>
            <span>Remote worldwide</span>
          </div>
        </div>
        <div className="hero__showcase">
          <figure className="hero__showcase-fig hero__showcase-fig--large">
            <img src={showcase[0].src} alt={showcase[0].alt} loading="eager" />
          </figure>
          <div className="hero__showcase-grid">
            {showcase.slice(1).map((item) => (
              <figure className="hero__showcase-fig" key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
