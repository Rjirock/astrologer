import { useRef, useEffect } from 'react';

const images = [
  {
    src: '/images/gallery-2.jpg',
    title: 'Palm Reading',
    desc: 'Discover your future through palm lines',
    featured: false,
  },
  {
    src: '/images/gallery-3.jpg',
    title: 'Astrology & Numerology',
    desc: 'Face Reading, Palm Reading & Kundali Analysis',
    featured: false,
  },
  {
    src: '/images/gallery-7.jpg',
    title: 'Marriage Solutions',
    desc: 'Divorce Prevention & Relationship Guidance',
    featured: false,
  },
  {
    src: '/images/gallery-8.jpg',
    title: 'Future & Career',
    desc: 'Career Guidance & Life Path Consultation',
    featured: false,
  },
];

// Minimal scroll animation hook (replaces useScrollAnimation)
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

// Inline SectionHeader (replaces the shared component)
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
      {eyebrow && (
        <p
          style={{
            fontSize: 'clamp(10px, 1.1vw, 12px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 600,
            marginBottom: '0.75rem',
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          fontFamily: 'serif',
          fontWeight: 700,
          fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
          color: 'var(--cream)',
          lineHeight: 1.18,
          marginBottom: subtitle ? '1rem' : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(0.875rem, 1.6vw, 1rem)',
            color: 'rgba(248,242,230,0.62)',
            maxWidth: '54ch',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function GallerySection() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--dark-2)',
        padding: 'clamp(3.5rem, 8vw, 7rem) 0',
      }}
    >
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        @media (min-width: 640px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .gallery-featured { grid-column: span 2; grid-row: span 2; }
        }
        .gallery-card:hover img {
          transform: scale(1.08);
        }
        .gallery-card:hover .gallery-desc {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .gallery-card:hover .gallery-inset-border {
          opacity: 1 !important;
        }
      `}</style>

      <div
        className="mx-auto"
        style={{ maxWidth: '1280px', padding: '0 clamp(1rem, 4vw, 2rem)' }}
      >
        <div data-animate>
          <SectionHeader
            eyebrow="Sacred Gallery"
            title="Glimpses of Our Divine Practice"
            subtitle="Every consultation is a sacred journey. Explore moments from our spiritual sessions and practice."
          />
        </div>

        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridAutoRows: 'clamp(130px, 18vw, 200px)',
            gap: 'clamp(0.5rem, 1.2vw, 0.875rem)',
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              data-animate
              data-delay={`${i * 0.07}s`}
              className={`gallery-card${img.featured ? ' gallery-featured' : ''}`}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0.75rem',
                border: '1px solid rgba(200,150,12,0.15)',
                cursor: 'pointer',
                transition: 'box-shadow 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 12px 40px rgba(0,0,0,0.55), 0 0 0 1.5px rgba(200,150,12,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(8,3,10,0.88) 0%, rgba(8,3,10,0.25) 45%, transparent 100%)',
                  transition: 'opacity 0.4s',
                }}
              />

              {/* Text content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 'clamp(0.6rem, 1.5vw, 1rem)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'serif',
                    fontWeight: 700,
                    fontSize: 'clamp(10px, 1.3vw, 13px)',
                    color: 'var(--gold)',
                    lineHeight: 1.3,
                    marginBottom: '2px',
                  }}
                >
                  {img.title}
                </p>
                <p
                  className="gallery-desc"
                  style={{
                    fontSize: 'clamp(9px, 1vw, 11px)',
                    color: 'var(--cream-muted)',
                    opacity: 0,
                    transform: 'translateY(4px)',
                    transition: 'opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s',
                    lineHeight: 1.4,
                  }}
                >
                  {img.desc}
                </p>
              </div>

              {/* Gold inset border on hover */}
              <div
                className="gallery-inset-border"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '0.75rem',
                  pointerEvents: 'none',
                  opacity: 0,
                  boxShadow: 'inset 0 0 0 1.5px rgba(200,150,12,0.45)',
                  transition: 'opacity 0.3s',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}