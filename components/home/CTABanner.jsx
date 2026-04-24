import { Phone, MessageCircle, CalendarDays, Sparkles } from 'lucide-react';

// Inline StarField (replaces the shared component)
function StarField({ count = 40 }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 4}s`,
  }));

  return (
    <>
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: var(--star-opacity); }
          50% { opacity: calc(var(--star-opacity) * 0.3); }
        }
      `}</style>
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}
      >
        {stars.map((s) => (
          <div
            key={s.id}
            style={{
              position: 'absolute',
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: '50%',
              background: 'rgba(200,150,12,0.7)',
              '--star-opacity': s.opacity,
              opacity: s.opacity,
              animation: `star-twinkle ${s.duration} ${s.delay} ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}

const trustBullets = [
  'Free first consultation',
  '100% Confidential',
  'Trusted by 10,000+ clients',
];

export default function CTABanner() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem, 9vw, 7rem) 0',
        background:
          'linear-gradient(135deg, var(--maroon-dark) 0%, var(--maroon) 45%, var(--dark-1) 100%)',
      }}
    >
      <style>{`
        @keyframes rotate-slow {
          from { transform: translateY(-50%) rotate(0deg); }
          to   { transform: translateY(-50%) rotate(360deg); }
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
          transition: filter 0.25s ease, transform 0.25s ease;
        }
        .btn-gold:hover { filter: brightness(1.1); transform: translateY(-1px); }

        .btn-outline-gold {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-radius: 0.75rem;
          text-decoration: none;
          background: transparent;
          color: var(--gold);
          border: 2px solid rgba(200,150,12,0.6);
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .btn-outline-gold:hover {
          background: rgba(200,150,12,0.1);
          transform: translateY(-1px);
        }

        .text-gold-shimmer {
          background: linear-gradient(90deg, var(--gold), var(--saffron, #e07b10), var(--gold));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
      `}</style>

      <StarField count={40} />

      {/* Corner spiritual image */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          width: 'clamp(120px, 18vw, 280px)',
          height: 'clamp(120px, 18vw, 280px)',
          opacity: 0.12,
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/spiritual.jpg"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, transparent 0%, var(--maroon-dark) 75%)',
          }}
        />
      </div>

      {/* Decorative rings */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 'clamp(-80px, -6vw, -50px)',
          top: '50%',
          width: 'clamp(220px, 28vw, 360px)',
          height: 'clamp(220px, 28vw, 360px)',
          border: '2px solid var(--gold)',
          borderRadius: '50%',
          opacity: 0.1,
          pointerEvents: 'none',
          animation: 'rotate-slow 25s linear infinite',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 'clamp(-60px, -5vw, -40px)',
          top: '50%',
          width: 'clamp(160px, 20vw, 260px)',
          height: 'clamp(160px, 20vw, 260px)',
          border: '1px solid var(--gold-light)',
          borderRadius: '50%',
          opacity: 0.1,
          pointerEvents: 'none',
          animation: 'rotate-slow 18s linear infinite reverse',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '720px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 clamp(1rem, 4vw, 2rem)',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '9999px',
            fontWeight: 600,
            textTransform: 'uppercase',
            padding: 'clamp(5px, 1vw, 8px) clamp(14px, 2.5vw, 22px)',
            marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
            fontSize: 'clamp(9px, 1vw, 11px)',
            letterSpacing: '0.22em',
            color: 'var(--gold-light)',
            background: 'rgba(200,150,12,0.1)',
            border: '1px solid rgba(200,150,12,0.25)',
          }}
        >
          <Sparkles size={10} />
          Your Transformation Awaits
          <Sparkles size={10} />
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: 'serif',
            fontWeight: 700,
            fontSize: 'clamp(1.75rem, 5.5vw, 3.5rem)',
            color: 'var(--cream)',
            marginBottom: 'clamp(0.875rem, 2vw, 1.25rem)',
            lineHeight: 1.13,
          }}
        >
          Need Guidance{' '}
          <span className="text-gold-shimmer">Today?</span>
        </h2>

        {/* Sub-text */}
        <p
          style={{
            fontSize: 'clamp(0.875rem, 1.8vw, 1.1rem)',
            color: 'rgba(248,242,230,0.72)',
            lineHeight: 1.75,
            maxWidth: '50ch',
            margin: '0 auto',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          Do not let uncertainty hold you back. Get personalized Vedic guidance from
          Pandit Ram Kishan Ji and find your path to clarity, peace, and prosperity.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(0.625rem, 1.5vw, 0.875rem)',
            justifyContent: 'center',
            marginBottom: 'clamp(1.5rem, 3vw, 2.25rem)',
          }}
        >
          <a
            href="/contact"
            className="btn-gold"
            style={{
              fontSize: 'clamp(11px, 1.3vw, 14px)',
              padding: 'clamp(12px, 1.8vw, 16px) clamp(20px, 3vw, 32px)',
            }}
          >
            <CalendarDays size={16} />
            Book Appointment
          </a>
          <a
            href="tel:7739606061"
            className="btn-outline-gold"
            style={{
              fontSize: 'clamp(11px, 1.3vw, 14px)',
              padding: 'clamp(12px, 1.8vw, 16px) clamp(20px, 3vw, 32px)',
            }}
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href="https://wa.me/917739606061"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'serif',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              borderRadius: '0.75rem',
              fontSize: 'clamp(11px, 1.3vw, 14px)',
              padding: 'clamp(12px, 1.8vw, 16px) clamp(20px, 3vw, 32px)',
              background: 'rgba(37,211,102,0.14)',
              border: '2px solid rgba(37,211,102,0.45)',
              color: '#25D366',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        {/* Trust bullets */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'clamp(0.5rem, 1.5vw, 1rem)',
          }}
        >
          {trustBullets.map((item, i) => (
            <span
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: 'clamp(10px, 1.1vw, 12px)',
                color: 'rgba(248,242,230,0.45)',
                letterSpacing: '0.04em',
              }}
            >
              {i > 0 && (
                <span
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '3px',
                    borderRadius: '50%',
                    background: 'rgba(200,150,12,0.4)',
                    marginRight: '2px',
                  }}
                />
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}