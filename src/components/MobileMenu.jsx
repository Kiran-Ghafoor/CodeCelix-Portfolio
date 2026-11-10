const links = [
  ['#hero', 'Home'],
  ['#work', 'Work'],
  ['#services', 'Services'],
  ['#company', 'Company'],
  ['#contact', 'Contact'],
];

export default function MobileMenu({ open, active, onClose }) {
  return (
    <div className={`mobile-menu${open ? ' is-open' : ''}`} id="mobileMenu">
      <nav className="mobile-menu__links">
        {links.map(([href, label]) => (
          <a
            key={href}
            href={href}
            className={active === href.slice(1) ? 'active' : undefined}
            onClick={onClose}
          >
            {label}
          </a>
        ))}
        <a className="btn btn--solid" href="#contact" onClick={onClose}>Start a project</a>
      </nav>
    </div>
  );
}
