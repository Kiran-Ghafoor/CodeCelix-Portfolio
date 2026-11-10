import BrandLogo from './BrandLogo.jsx';

const links = [
  ['#hero', 'Home'],
  ['#work', 'Work'],
  ['#services', 'Services'],
  ['#company', 'Company'],
  ['#contact', 'Contact'],
];

export default function Navbar({ scrolled, active, menuOpen, onToggle }) {
  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`} id="siteNav">
      <div className="wrap nav__inner">
        <a href="#" className="brand">
          <BrandLogo width={60} height={60} />
        </a>
        <nav className="nav__links" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <a key={href} href={href} className={active === href.slice(1) ? 'active' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav__cta">
          <a className="btn btn--solid" href="#contact">Start a project</a>
        </div>
        <button
          type="button"
          className={`nav__toggle${menuOpen ? ' is-open' : ''}`}
          id="navToggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={onToggle}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
