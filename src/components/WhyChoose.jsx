import { useEffect, useRef } from 'react';
import { animate, inView, stagger } from 'motion';
import AnimatedTitle from './AnimatedTitle.jsx';

const SPRING = { type: 'spring', stiffness: 260, damping: 22, mass: 0.9 };

const reasons = [
  {
    title: 'Industry Expertise',
    desc: 'Deep knowledge across multiple industries enables us to understand your challenges and deliver solutions that work in the real world.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7v14M21 7v14M6 11h4v4H6zM14 11h4v4h-4zM9 3h6l3 4H6z" /></svg>,
  },
  {
    title: 'Dedicated Team',
    desc: 'Every project gets a dedicated team committed to your success, from initial strategy through deployment and ongoing support.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
  },
  {
    title: 'Timely Delivery',
    desc: 'We respect deadlines and deliver projects on schedule without compromising quality or cutting corners on implementation.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  },
  {
    title: 'Support After Launch',
    desc: "We don't disappear at handover. We stay involved to maintain, extend, and keep your systems running smoothly.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6" /><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" /></svg>,
  },
];

export default function WhyChoose() {
  const gridRef = useRef(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const stop = inView(el, () => {
      animate('.why-card', { opacity: [0, 1], y: [36, 0], scale: [0.93, 1] },
        { delay: stagger(0.1), ...SPRING });
    }, { amount: 0.25 });

    return stop;
  }, []);

  return (
    <section className="why-choose" id="why-us">
      <div className="wrap">
        <div className="section__head">
          <div>
            <AnimatedTitle>From first brief to launch — and beyond.</AnimatedTitle>
          </div>
        </div>
        <div className="why-grid" ref={gridRef}>
          {reasons.map((reason) => (
            <div className="why-card" key={reason.title}>
              <div className="why-card__icon">{reason.icon}</div>
              <h4>{reason.title}</h4>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
