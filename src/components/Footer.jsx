import BrandLogo from './BrandLogo.jsx';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="brand">
              <BrandLogo width={34} height={34} />
            </div>
            <p>Software and AI consultancy based in Naples, Italy — building web platforms, mobile apps, and automation for real businesses.</p>
            <div className="footer__social">
              <a href="https://www.linkedin.com/company/codecelix/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer__social-link">LinkedIn</a>
              <a href="https://www.instagram.com/codecelix/" target="_blank" rel="noopener noreferrer" className="footer__social-link">Instagram</a>
            </div>
          </div>
          <div className="footer__links">
            <h4>Explore</h4>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#company">Company</a>
          </div>
          <div className="footer__contact">
            <h4>Contact</h4>
            <a href="mailto:infocodecelix@gmail.com"><span className="footer__contact-label">Email</span>infocodecelix@gmail.com</a>
            <a href="tel:+393508540334"><span className="footer__contact-label">Phone</span>+39 350 854 0334</a>
            <div className="footer__contact-address">
              <span className="footer__contact-label">Office</span>
              <span>Centro Direzionale, Is. A2<br />Scala B, 80143 Napoli NA<br />Italy</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__fine">&copy; <span id="yr">{new Date().getFullYear()}</span> CodeCelix. All rights reserved.</div>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
