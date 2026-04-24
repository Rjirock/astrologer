import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 10000, suffix: '+', label: 'Happy Clients', desc: 'Families guided with Vedic wisdom' },
  { target: 25, suffix: '+', label: 'Years Experience', desc: 'Decades of authentic practice' },
  { target: 50000, suffix: '+', label: 'Consultations', desc: 'Life-changing readings delivered' },
  { target: 19, suffix: '', label: 'Services Offered', desc: 'Comprehensive astrology solutions' },
];

// Inline useCounter hook (replaces @/hooks/useCounter)
function useCounter(target, duration, start) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, start]);

  return count;
}

// Inline StarField
function StarField({ count = 30 }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.4 + 0.1,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 4}s`,
  }));
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {stars.map((s) => (
        <div key={s.id} style={{
          position: 'absolute',
          top: s.top,
          left: s.left,
          width: `${s.size}px`,
          height: `${s.size}px`,
          borderRadius: '50%',
          background: 'rgba(200,150,12,0.7)',
          opacity: s.opacity,
        }} />
      ))}
    </div>
  );
}

function CounterItem({ target, suffix, label, desc, start }) {
  const count = useCounter(target, 2200, start);
  return (
    <div style={{
      textAlign: 'center',
      padding: 'clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem)',
      borderRight: '1px solid rgba(200,150,12,0.2)',
      borderBottom: '1px solid rgba(200,150,12,0.2)',
    }}
      className="counter-item"
    >
      <div style={{
        fontFamily: 'serif',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 700,
        color: 'var(--gold)',
        marginBottom: '0.375rem',
        lineHeight: 1,
      }}>
        {count.toLocaleString('en-IN')}{suffix}
      </div>
      <div style={{
        fontFamily: 'serif',
        fontSize: 'clamp(0.9rem, 1.5vw, 1.125rem)',
        fontWeight: 600,
        color: 'var(--cream)',
        marginBottom: '0.375rem',
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 'clamp(11px, 1.2vw, 13px)',
        color: 'var(--cream-muted)',
      }}>
        {desc}
      </div>
    </div>
  );
}

export default function ExperienceCounters() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        padding: 'clamp(3rem, 7vw, 6rem) 0',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 50%, var(--dark-1) 100%)',
      }}
    >
      <style>{`
        .text-gold-shimmer {
          background: linear-gradient(90deg, var(--gold), var(--saffron, #e07b10), var(--gold));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { to { background-position: 200% center; } }

        .counters-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 1024px) {
          .counters-grid { grid-template-columns: repeat(4, 1fr); }
          .counter-item:nth-child(4n) { border-right: none !important; }
          .counter-item { border-bottom: none !important; }
        }
        @media (max-width: 1023px) {
          .counter-item:nth-child(2n) { border-right: none !important; }
          .counter-item:nth-last-child(-n+2) { border-bottom: none !important; }
        }
      `}</style>

      <StarField count={30} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 4vw, 2rem)',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Eyebrow */}
        <p style={{
          textAlign: 'center',
          fontSize: 'clamp(10px, 1.2vw, 13px)',
          fontWeight: 600,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--gold-light, var(--gold))',
          marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
        }}>
          ✦ &nbsp; Our Impact in Numbers &nbsp; ✦
        </p>

        <h2 style={{
          fontFamily: 'serif',
          fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
          fontWeight: 700,
          textAlign: 'center',
          color: 'var(--cream)',
          marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
          lineHeight: 1.2,
        }}>
          Decades of{' '}
          <span className="text-gold-shimmer">Divine Service</span>
        </h2>

        {/* Stats grid */}
        <div
          className="counters-grid"
          style={{ border: '1px solid rgba(200,150,12,0.2)', borderRadius: '1rem', overflow: 'hidden' }}
        >
          {stats.map((s) => (
            <CounterItem key={s.label} {...s} start={started} />
          ))}
        </div>
      </div>
    </section>
  );
}