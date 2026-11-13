export default function Company() {
  return (
    <section className="company" id="company">
      <div className="wrap">
        <div className="company__panel">
          <header className="company__head">
            <h2 className="company__heading">You can check us. We are a registered company.</h2>
            <p className="company__subtitle">Our registration details are public. Look us up on the official websites.</p>
          </header>
          <div className="company__grid">
            <article className="cert-card">
              <div className="cert-card__top">
                <img
                  className="cert-card__logo"
                  src="assets/SECP_LOGO.jfif"
                  alt="SECP logo"
                  loading="lazy"
                />
                <div>
                  <h3 className="cert-card__title">Incorporated with SECP</h3>
                  <p className="cert-card__org">Securities and Exchange Commission of Pakistan, under the Companies Act, 2017.</p>
                </div>
              </div>
              <dl className="cert-card__facts">
                <div className="cert-card__fact">
                  <dt>Incorporation date</dt>
                  <dd>August 5, 2026</dd>
                </div>
                <div className="cert-card__fact">
                  <dt>Company type</dt>
                  <dd>Private Limited Company</dd>
                </div>
                <div className="cert-card__fact">
                  <dt>Status</dt>
                  <dd>Registered</dd>
                </div>
              </dl>
              <a
                className="cert-card__link"
                href="https://www.secp.gov.pk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify on secp.gov.pk
              </a>
            </article>
            <article className="cert-card">
              <div className="cert-card__top">
                <img
                  className="cert-card__logo"
                  src="assets/PSEB_LOGO.jfif"
                  alt="PSEB logo"
                  loading="lazy"
                />
                <div>
                  <h3 className="cert-card__title">Registered with PSEB</h3>
                  <p className="cert-card__org">Pakistan Software Export Board, under the Ministry of IT and Telecom.</p>
                </div>
              </div>
              <dl className="cert-card__facts">
                <div className="cert-card__fact">
                  <dt>Registration number</dt>
                  <dd>Z-25-21475/26</dd>
                </div>
                <div className="cert-card__fact">
                  <dt>Valid until</dt>
                  <dd>July 2027</dd>
                </div>
                <div className="cert-card__fact">
                  <dt>Status</dt>
                  <dd>Active</dd>
                </div>
              </dl>
              <a
                className="cert-card__link"
                href="https://www.pseb.org.pk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify on pseb.org.pk
              </a>
            </article>
          </div>
        </div>
        <p className="company__note">We are a small team that takes a limited number of projects at a time. We stay after launch to fix and improve what we build.</p>
      </div>
    </section>
  );
}
