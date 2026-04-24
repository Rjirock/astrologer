import { useRef, useEffect } from 'react';

const defaultImages = [
  { src: '/images/best-astrologer.jpg', title: 'Best Astrologer', desc: "Jamshedpur's Most Trusted" },
  { src: '/images/marriage.jpg', title: 'Marriage Astrology', desc: 'Love & Arrange Marriage Solutions' },
  { src: '/images/career.jpg', title: 'Career Guidance', desc: 'Education & Career Solutions' },
  { src: '/images/gallery-9.jpg', title: 'Love Solutions', desc: 'Get All Love Problem Solutions' },
  { src: '/images/gallery-10.jpg', title: 'Wife Back', desc: 'Lost Love & Relationship Solutions' },
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

function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
      {eyebrow && (
        <p style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.6rem' }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', color: 'var(--cream)', lineHeight: 1.2, margin: 0 }}>
        {title}
      </h2>
    </div>
  );
}

export default function MiniGallery({
  items = defaultImages,
  eyebrow = 'Sacred Moments',
  title = 'Our Spiritual Gallery',
}) {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} style={{ background: 'var(--dark-3, var(--dark-2))', padding: 'clamp(2.5rem, 5vw, 5rem) 0' }}>
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        [data-animate].animate-in { opacity: 1; transform: translateY(0); }

        /*
          Gallery layout strategy:
          - Mobile  (<480px): 1 column, full width, fixed height 220px
          - Small   (480–767px): 2 columns, fixed height 200px
          - Medium  (768–1023px): 3 columns, fixed height 240px
          - Large   (≥1024px): all 5 side-by-side in one row, equal width
          
          Images use object-fit: cover so they fill the card without distortion.
          No aspect-ratio tricks — explicit heights ensure all cards are equal.
        */

        .mini-gallery-grid {
          display: grid;
          gap: clamp(0.5rem, 1vw, 0.875rem);
          grid-template-columns: 1fr;
        }
        .mini-gallery-card { height: 220px; }

        @media (min-width: 480px) {
          .mini-gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .mini-gallery-card { height: 200px; }
        }
        @media (min-width: 768px) {
          .mini-gallery-grid { grid-template-columns: repeat(3, 1fr); }
          .mini-gallery-card { height: 240px; }
        }
        @media (min-width: 1024px) {
          /* All 5 side by side */
          .mini-gallery-grid { grid-template-columns: repeat(5, 1fr); }
          .mini-gallery-card { height: clamp(220px, 22vw, 320px); }
        }

        .mini-gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 0.875rem;
          cursor: pointer;
          border: 1px solid rgba(200,150,12,0.2);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .mini-gallery-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,150,12,0.5);
          transform: translateY(-3px);
        }

        .mini-gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .mini-gallery-card:hover img { transform: scale(1.08); }

        .mini-gallery-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(0.75rem, 1.5vw, 1rem);
          background: linear-gradient(to top, rgba(8,3,10,0.92) 0%, rgba(8,3,10,0.3) 45%, transparent 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .mini-gallery-card:hover .mini-gallery-overlay { opacity: 1; }

        /* Always show a subtle gradient so the card isn't stark */
        .mini-gallery-base-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,3,10,0.55) 0%, transparent 55%);
          pointer-events: none;
        }

        /* Title always visible at bottom */
        .mini-gallery-title-always {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: clamp(0.625rem, 1.2vw, 0.875rem);
        }

        .mini-gallery-inset {
          position: absolute;
          inset: 0;
          border-radius: 0.875rem;
          pointer-events: none;
          opacity: 0;
          box-shadow: inset 0 0 0 1.5px rgba(200,150,12,0.6);
          transition: opacity 0.3s ease;
        }
        .mini-gallery-card:hover .mini-gallery-inset { opacity: 1; }
      `}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
        <SectionHeader eyebrow={eyebrow} title={title} />

        <div className="mini-gallery-grid">
          {items.map((item, i) => (
            <div
              key={i}
              data-animate
              data-delay={`${i * 0.1}s`}
              className="mini-gallery-card"
            >
              {/* Full image — always visible, fills card */}
              <img src={item.src} alt={item.title} />

              {/* Subtle always-on base gradient */}
              <div className="mini-gallery-base-overlay" />

              {/* Title always shown at bottom */}
              <div className="mini-gallery-title-always">
                <p style={{
                  fontFamily: 'serif',
                  fontSize: 'clamp(11px, 1.2vw, 13px)',
                  fontWeight: 700,
                  color: 'var(--gold)',
                  margin: 0,
                  lineHeight: 1.3,
                  textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                }}>
                  {item.title}
                </p>
              </div>

              {/* Hover overlay with description */}
              <div className="mini-gallery-overlay">
                <p style={{ fontFamily: 'serif', fontSize: 'clamp(11px, 1.2vw, 13px)', fontWeight: 700, color: 'var(--gold)', margin: '0 0 3px', lineHeight: 1.3 }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 'clamp(10px, 1vw, 12px)', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.4 }}>
                  {item.desc}
                </p>
              </div>

              {/* Gold inset border on hover */}
              <div className="mini-gallery-inset" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}