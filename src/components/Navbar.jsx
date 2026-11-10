import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo.jsx';
import { homeHref, isProjectsPage } from '../utils/routes.js';

const links = [
  ['#hero', 'Home'],
  ['/projects', 'Work'],
  ['#services', 'Services'],
  ['#company', 'Company'],
  ['#contact', 'Contact'],
];

function sectionIsDark(element) {
  let node = element;
  while (node && node !== document.documentElement) {
    const match = getComputedStyle(node).backgroundColor.match(/rgba?\(([^)]+)\)/);
    if (match) {
      const [r, g, b, a = 1] = match[1].split(',').map((value) => parseFloat(value));
      if (a > 0) {
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        return luminance < 0.5;
      }
    }
    node = node.parentElement;
  }
  return false;
}

export default function Navbar({ scrolled, active, menuOpen, onToggle }) {
  const [onDark, setOnDark] = useState(false);
  const onProjectsPage = isProjectsPage();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const sections = Array.from(document.querySelectorAll('main > section'));
    if (!sections.length) return undefined;

    const visible = new Set();
    let observer;

    const connect = () => {
      if (observer) observer.disconnect();
      const navHeight = document.querySelector('header.nav')?.offsetHeight || 76;
      const bottomInset = Math.max(window.innerHeight - navHeight, 0);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) visible.add(entry.target);
            else visible.delete(entry.target);
          });
          const current = sections.find((section) => visible.has(section));
          if (current) setOnDark(sectionIsDark(current));
        },
        { rootMargin: `0px 0px -${bottomInset}px 0px`, threshold: 0 }
      );

      visible.clear();
      sections.forEach((section) => observer.observe(section));
    };

    connect();

    let frame;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(connect);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`nav${scrolled ? ' is-scrolled' : ''}${onDark ? ' nav--on-dark' : ''}`}
      id="siteNav"
    >
      <div className="wrap nav__inner">
        <a href={homeHref('#hero')} className="brand">
          <BrandLogo width={60} height={60} />
        </a>
        <nav className="nav__links" aria-label="Main navigation">
          {links.map(([href, label]) => {
            const isActive = href === '/projects'
              ? onProjectsPage || active === 'work'
              : active === href.slice(1);
            return (
              <a key={href} href={homeHref(href)} className={isActive ? 'active' : undefined}>
                {label}
              </a>
            );
          })}
        </nav>
        <div className="nav__cta">
          <a className="btn btn--solid" href={homeHref('#contact')}>Start a project</a>
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
