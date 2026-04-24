function StarField({ count = 55 }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.45 + 0.1,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 4}s`,
  }));
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {stars.map((s) => (
        <div key={s.id} style={{
          position: 'absolute', top: s.top, left: s.left,
          width: `${s.size}px`, height: `${s.size}px`, borderRadius: '50%',
          background: 'rgba(200,150,12,0.7)', opacity: s.opacity,
        }} />
      ))}
    </div>
  );
}
 
export function ServicesHero() {
  return (
    <section
      aria-label="Services hero"
      style={{
        position: 'relative',
        paddingTop: 'clamp(6rem, 12vw, 10rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, var(--dark-1) 0%, var(--maroon-dark) 50%, var(--dark-1) 100%)',
      }}
    >
      <style>{`
        @keyframes rotate-slow { from { transform: translateY(-50%) rotate(0deg); } to { transform: translateY(-50%) rotate(360deg); } }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,150,12,0.4); }
          50%       { box-shadow: 0 0 0 12px rgba(200,150,12,0); }
        }
        .text-gold-shimmer {
          background: linear-gradient(90deg, var(--gold), var(--saffron, #e07b10), var(--gold));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { to { background-position: 200% center; } }
        .hero-ring { display: none; }
        @media (min-width: 1024px) { .hero-ring { display: block; } }
      `}</style>
 
      <StarField count={55} />
 
      {/* Decorative ring */}
      <div
        aria-hidden="true"
        className="hero-ring"
        style={{
          position: 'absolute',
          right: '-5rem',
          top: '50%',
          width: 'clamp(200px, 22vw, 288px)',
          height: 'clamp(200px, 22vw, 288px)',
          borderRadius: '50%',
          border: '2px solid var(--gold)',
          opacity: 0.1,
          pointerEvents: 'none',
          animation: 'rotate-slow 20s linear infinite',
        }}
      />
 
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)', position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Logo badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
          <div style={{
            width: 'clamp(64px, 8vw, 80px)',
            height: 'clamp(64px, 8vw, 80px)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(200,150,12,0.5)',
            animation: 'pulse-glow 2.5s ease-in-out infinite',
          }}>
            <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
 
        <p style={{ fontSize: 'clamp(10px, 1.2vw, 13px)', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--saffron-light, var(--gold))', marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
          Vedic Astrology &bull; Vastu &bull; Palmistry &bull; More
        </p>
 
        <h1 style={{ fontFamily: 'serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 700, color: 'var(--cream)', lineHeight: 1.15, marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
          Our <span className="text-gold-shimmer">Sacred Services</span>
        </h1>
 
        <p style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.125rem)', maxWidth: '52ch', margin: '0 auto', lineHeight: 1.75, color: 'var(--cream-muted)' }}>
          19 authentic Vedic astrology services designed to guide every dimension of your life —
          from marriage and career to health, prosperity, and spiritual peace.
        </p>
 
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: 'clamp(1.5rem, 3vw, 2rem)', fontSize: 'clamp(10px, 1.1vw, 12px)', color: 'var(--cream-muted)' }}>
          <a href="/" style={{ color: 'var(--gold)', textDecoration: 'none' }}>Home</a>
          <span>›</span>
          <span>Services</span>
        </div>
      </div>
 
      <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4rem', pointerEvents: 'none', background: 'linear-gradient(to top, var(--dark-1), transparent)' }} />
    </section>
  );
}