import { useEffect, useRef } from 'react';
import { animate, inView, stagger } from 'motion';

const SPRING = { type: 'spring', stiffness: 260, damping: 22, mass: 0.9 };

export default function AnimatedTitle({ children, className = 'section__title' }) {
  const ref = useRef(null);
  const words = String(children).trim().split(/\s+/);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inners = el.querySelectorAll('.word-inner');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      inners.forEach((w) => { w.style.transform = 'translateY(0)'; });
      return;
    }

    const stop = inView(el, () => {
      animate(inners, { y: ['110%', '0%'] }, { delay: stagger(0.05), ...SPRING });
    }, { amount: 0.6 });

    return stop;
  }, [children]);

  return (
    <h2 className={className} ref={ref}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="word" style={{ display: 'inline-block', overflow: 'hidden' }}>
            <span className="word-inner" style={{ display: 'inline-block', transform: 'translateY(110%)' }}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h2>
  );
}
