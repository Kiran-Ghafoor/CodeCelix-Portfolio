import { useEffect } from 'react';
import { homeHref, isProjectsPage } from '../utils/routes.js';

const links = [
  ['#hero', 'Home'],
  ['/projects', 'Work'],
  ['#services', 'Services'],
  ['#company', 'Company'],
  ['#contact', 'Contact'],
];

export default function MobileMenu({ open, active, onClose }) {
  const onProjectsPage = isProjectsPage();

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <div className={`mobile-menu${open ? ' is-open' : ''}`} id="mobileMenu" aria-hidden={!open}>
      <button
        type="button"
        className="mobile-menu__backdrop"
        aria-label="Close menu"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />
      <nav className="mobile-menu__panel" aria-label="Mobile navigation">
        <div className="mobile-menu__links">
          {links.map(([href, label]) => {
            const isActive = href === '/projects'
              ? onProjectsPage || active === 'work'
              : active === href.slice(1);
            return (
              <a
                key={href}
                href={homeHref(href)}
                className={isActive ? 'active' : undefined}
                onClick={onClose}
              >
                {label}
              </a>
            );
          })}
          <a className="btn btn--solid" href={homeHref('#contact')} onClick={onClose}>Start a project</a>
        </div>
      </nav>
    </div>
  );
}
