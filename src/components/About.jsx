export default function About() {
  return (
    <section className="intro" id="about">
      <div className="wrap intro__grid">
        <div className="intro__content">
          <h2 className="intro__title">We build things that look good and work even better.</h2>
          <p className="intro__text">CodeCelix brings design, engineering and automation into one small studio. Every project is written for the business in front of us, then handed over cleanly so you own it.</p>
          <a className="btn intro__btn" href="#help">How we can help</a>
        </div>
        <div className="intro__media">
          <img src="assets/img_hero9.jpg" alt="CodeCelix project work" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
