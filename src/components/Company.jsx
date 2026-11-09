const tick = (
  <span className="company-card__tick" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
  </span>
);

export default function Company() {
  return (
    <section className="company" id="company">
      <div className="wrap">
        <h2 className="section__title company__title">A registered company you can verify</h2>
        <div className="company__grid">
          <article className="company-card">
            <h3 className="company-card__title">Incorporated with SECP {tick}</h3>
            <p>CODECELIX (PRIVATE) LIMITED is registered with the Securities and Exchange Commission of Pakistan under the Companies Act, 2017. We are a company limited by shares.</p>
            <dl className="company-card__facts">
              <div className="company-card__fact">
                <dt>Incorporation date:</dt>
                <dd>August 5, 2026</dd>
              </div>
              <div className="company-card__fact">
                <dt>Status:</dt>
                <dd>Private Limited Company</dd>
              </div>
            </dl>
          </article>
          <article className="company-card">
            <h3 className="company-card__title">Registered with PSEB {tick}</h3>
            <p>CODECELIX is registered with the Pakistan Software Export Board under the Ministry of IT and Telecom. This lets us export IT services and work with clients worldwide.</p>
            <dl className="company-card__facts">
              <div className="company-card__fact">
                <dt>Registration no.:</dt>
                <dd>Z-25-21475/26</dd>
              </div>
              <div className="company-card__fact">
                <dt>Valid till:</dt>
                <dd>July 2027</dd>
              </div>
            </dl>
          </article>
        </div>
        <p className="company__note">We are a small team that takes on a limited number of projects at a time. We stay after launch to fix and improve what we build.</p>
      </div>
    </section>
  );
}
