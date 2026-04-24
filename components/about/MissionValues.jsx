import { useRef, useEffect } from 'react';
import { Heart, Lightbulb, Home, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Honest Guidance',
    desc: 'We believe truth is the foundation of trust. Pandit Ji provides clear, unbiased guidance without exaggeration or fear-mongering — only authentic insights.',
    color: 'var(--maroon-light, #a03040)',
  },
  {
    icon: Lightbulb,
    title: 'Spiritual Wisdom',
    desc: 'Rooted in thousands of years of Vedic tradition, our practice draws from the deepest wells of ancient Indian spiritual knowledge and sacred texts.',
    color: 'var(--saffron, #e07b10)',
  },
  {
    icon: Home,
    title: 'Helping Families',
    desc: 'From marriage compatibility to Vastu for new homes, our mission is to strengthen families and bring harmony, prosperity, and peace to every household.',
    color: 'var(--sacred-green, #3a7d52)',
  },
  {
    icon: Sparkles,
    title: 'Positive Solutions',
    desc: 'Every challenge has a remedy. We focus on constructive, empowering solutions — practical mantras, gemstones, and rituals that create real positive change.',
    color: 'var(--gold)',
  },
];

function useScrollAnimation() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || '0s';
            entry.target.style.transitionDelay = delay;
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
      {eyebrow && (
        <p style={{
          fontSize: 'clamp(10px, 1.1vw, 12px)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          fontWeight: 600,
          marginBottom: '0.75rem',
        }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{
        fontFamily: 'serif',
        fontWeight: 700,
        fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
        color: 'var(--cream)',
        lineHeight: 1.18,
        marginBottom: subtitle ? '1rem' : 0,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: 'clamp(0.875rem, 1.6vw, 1rem)',
          color: 'rgba(248,242,230,0.62)',
          maxWidth: '54ch',
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function MissionValues() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--dark-2)',
        padding: 'clamp(3rem, 7vw, 7rem) 0',
      }}
    >
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(1rem, 2vw, 1.5rem);
        }
        @media (min-width: 640px) {
          .values-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .values-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .value-card {
          padding: clamp(1.5rem, 3vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: clamp(0.875rem, 1.5vw, 1.25rem);
          text-align: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,150,12,0.15);
          border-radius: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .value-card:hover {
          border-color: rgba(200,150,12,0.35);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .value-icon-wrap {
          transition: transform 0.3s ease;
        }
        .value-card:hover .value-icon-wrap {
          transform: scale(1.1);
        }
      `}</style>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 4vw, 2rem)',
      }}>
        <div data-animate>
          <SectionHeader
            eyebrow="Our Mission & Values"
            title="Principles That Guide Our Practice"
            subtitle="Every consultation, every remedy, every interaction is guided by these sacred principles."
          />
        </div>

        <div className="values-grid">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                data-animate
                data-delay={`${i * 0.12}s`}
                className="value-card"
              >
                {/* Icon */}
                <div
                  className="value-icon-wrap"
                  style={{
                    width: 'clamp(52px, 6vw, 64px)',
                    height: 'clamp(52px, 6vw, 64px)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    background: `linear-gradient(135deg, ${v.color}22, ${v.color}08)`,
                    border: `1px solid ${v.color}44`,
                  }}
                >
                  <Icon size={28} style={{ color: v.color }} />
                </div>

                <h3 style={{
                  fontFamily: 'serif',
                  fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  margin: 0,
                }}>
                  {v.title}
                </h3>

                <p style={{
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  lineHeight: 1.7,
                  color: 'var(--cream-muted)',
                  margin: 0,
                }}>
                  {v.desc}
                </p>

                {/* Bottom accent line */}
                <div style={{
                  height: '2px',
                  width: '3rem',
                  borderRadius: '9999px',
                  background: v.color,
                  opacity: 0.5,
                  margin: '0 auto',
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}