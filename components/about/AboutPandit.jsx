import { useRef, useEffect } from 'react';
import { Award, BookOpen, Users, Star } from 'lucide-react';

const credentials = [
  { icon: BookOpen, text: 'Vedic Jyotish Acharya' },
  { icon: Award, text: 'Vastu Shastra Expert' },
  { icon: Users, text: '10,000+ Families Served' },
  { icon: Star, text: '25+ Years of Practice' },
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

export default function AboutPandit() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--dark-1)',
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
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 3.5rem);
          align-items: center;
        }
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
            gap: clamp(3rem, 5vw, 4rem);
          }
        }
        .credential-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: clamp(10px, 1.2vw, 13px);
          font-weight: 600;
          background: rgba(200,150,12,0.1);
          border: 1px solid rgba(200,150,12,0.25);
          color: var(--gold);
        }
        .btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-radius: 0.75rem;
          text-decoration: none;
          background: linear-gradient(135deg, var(--gold) 0%, var(--saffron, #e07b10) 50%, var(--gold) 100%);
          color: var(--dark-1);
          border: none;
          cursor: pointer;
          padding: clamp(12px, 1.8vw, 16px) clamp(20px, 3vw, 32px);
          font-size: clamp(11px, 1.3vw, 14px);
          transition: filter 0.25s ease, transform 0.25s ease;
        }
        .btn-gold:hover { filter: brightness(1.1); transform: translateY(-1px); }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 4vw, 2rem)',
      }}>
        <div data-animate>
          <SectionHeader
            eyebrow="Meet The Astrologer"
            title="Shree Jagannath Pandit Ram Kishan"
          />
        </div>

        <div className="about-grid">
          {/* Image side */}
          <div data-animate style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Outer glow ring */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '1.5rem',
                opacity: 0.2,
                filter: 'blur(2rem)',
                background: 'radial-gradient(circle, var(--maroon), transparent)',
                pointerEvents: 'none',
              }}
            />

            {/* Main image */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: 'min(380px, 100%)',
              aspectRatio: '3/4',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              border: '2px solid rgba(200,150,12,0.35)',
            }}>
              <img
                src="/images/pandit-ji.jpg"
                alt="Shree Jagannath Pandit Ram Kishan"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />

              {/* Gold overlay */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(8,3,10,0.8) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Name badge */}
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                padding: '1rem',
                borderRadius: '0.75rem',
                background: 'rgba(8,3,10,0.92)',
                border: '1px solid rgba(200,150,12,0.35)',
              }}>
                <p style={{
                  fontFamily: 'serif',
                  fontSize: 'clamp(13px, 1.5vw, 16px)',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  margin: 0,
                }}>
                  Shree Jagannath Pandit Ram Kishan
                </p>
                <p style={{
                  fontSize: 'clamp(10px, 1.1vw, 12px)',
                  color: 'var(--cream-muted)',
                  marginTop: '4px',
                  marginBottom: 0,
                }}>
                  Vedic Astrologer &amp; Vastu Expert &bull; 25+ Years
                </p>
              </div>
            </div>

            {/* Decorative ring */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: '-1rem',
                top: '-1rem',
                width: '6rem',
                height: '6rem',
                borderRadius: '50%',
                border: '1px solid var(--gold)',
                opacity: 0.2,
                pointerEvents: 'none',
                animation: 'rotate-slow 12s linear infinite',
              }}
            />
          </div>

          {/* Content side */}
          <div data-animate data-delay="0.2s">
            {/* Credential badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(0.5rem, 1vw, 0.75rem)',
              marginBottom: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            }}>
              {credentials.map(({ icon: Icon, text }) => (
                <div key={text} className="credential-badge">
                  <Icon size={13} />
                  {text}
                </div>
              ))}
            </div>

            {/* Body text */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(0.875rem, 1.5vw, 1.25rem)',
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              lineHeight: 1.8,
              color: 'var(--cream-muted)',
            }}>
              <p style={{ margin: 0 }}>
                Shree Jagannath Pandit Ram Kishan is a highly revered Vedic astrologer with over
                <strong style={{ color: 'var(--gold)' }}> 25 years of dedicated practice</strong> in the
                ancient sciences of Jyotish, Vastu Shastra, Palmistry, and Numerology. Born into a
                lineage of learned pandits, he has devoted his life to unlocking the sacred wisdom
                of the Vedas for the benefit of thousands of families.
              </p>
              <p style={{ margin: 0 }}>
                Based in Sakchi (near Chappan Bhog, Gurudwara), Pandit Ji has guided clients from
                across India and abroad — helping them navigate marriage decisions, career crossroads,
                financial challenges, health concerns, and spiritual obstacles with clarity and compassion.
              </p>
              <p style={{ margin: 0 }}>
                His approach blends rigorous classical knowledge with deep intuitive wisdom. Whether
                it is a troubled marriage, a stagnant career, or the effects of negative energies —
                Pandit Ji provides
                <strong style={{ color: 'var(--gold)' }}> personalized, practical, and proven remedies</strong> rooted in
                authentic Vedic tradition.
              </p>
              <p style={{ margin: 0 }}>
                Over 10,000 families have experienced transformative changes in their lives under
                his guidance. His consultations are known for their pinpoint accuracy, compassionate
                delivery, and powerful remedies that bring real, lasting results.
              </p>
            </div>

            <a href="/contact" className="btn-gold" style={{ marginTop: 'clamp(1.5rem, 3vw, 2rem)' }}>
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}