'use client';
import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const targets = el.querySelectorAll('[data-animate]');
    targets.forEach((t) => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(36px)';
      t.style.transition = `opacity 0.75s ease-out ${t.dataset.delay || '0s'}, transform 0.75s ease-out ${t.dataset.delay || '0s'}`;
      observer.observe(t);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
