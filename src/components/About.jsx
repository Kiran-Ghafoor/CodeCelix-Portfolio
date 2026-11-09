import { useEffect, useRef } from 'react';
import { animate, inView, stagger } from 'motion';
import AnimatedTitle from './AnimatedTitle.jsx';

const SPRING = { type: 'spring', stiffness: 260, damping: 22, mass: 0.9 };

const values = [
  {
    title: 'Innovation',
    desc: 'We explore emerging technologies and apply them practically to solve real business challenges.',
  },
  {
    title: 'Integrity',
    desc: 'We build trust through transparent communication, honest timelines, and reliable delivery.',
  },
  {
    title: 'Delivery',
    desc: 'We ship production-ready systems, not slide decks. Every project moves from concept to launch.',
  },
];

export default function About() {
  const valuesRef = useRef(null);

  useEffect(() => {
    const el = valuesRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const stop = inView(el, () => {
      animate('.about__value', { opacity: [0, 1], y: [30, 0], scale: [0.95, 1] },
        { delay: stagger(0.1), ...SPRING });
    }, { amount: 0.3 });

    return stop;
  }, []);

  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="section__head">
          <div>
            <AnimatedTitle>We build the software your business runs on.</AnimatedTitle>
          </div>
          <p className="section__note">Engineering, AI, and product delivery — from first prototype to after launch.</p>
        </div>
        <div className="about__grid">
          <div className="about__text">
            <p className="about__lead">CodeCelix is a software engineering and AI consultancy based in Naples, Italy. We design and build web platforms, mobile apps, and AI systems for businesses that need technology that works — delivered on time, without the buzzwords.</p>
            <p>We work directly with founders and product teams to understand the problem, then ship focused solutions: automation that removes manual work, interfaces people actually like using, and AI that earns its place in your workflow.</p>
            <p>We take on a limited number of projects at a time so every engagement gets real attention. We stay around after launch to maintain and improve what we build — our work is our reference.</p>
          </div>
          <div className="about__visual">
            <div className="about__values" ref={valuesRef}>
              {values.map((value) => (
                <div className="about__value" key={value.title}>
                  <div>
                    <h4>{value.title}</h4>
                    <p>{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
