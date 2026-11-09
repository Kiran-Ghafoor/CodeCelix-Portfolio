import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import Hero from './components/Hero.jsx';
import Company from './components/Company.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('main > section[id]');

    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      let current = '';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) current = section.getAttribute('id');
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <Navbar
        scrolled={scrolled}
        active={active}
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
      />
      <MobileMenu open={menuOpen} active={active} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <Company />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
