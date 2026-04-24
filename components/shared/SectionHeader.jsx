export default function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p
          className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
          style={{ color: 'var(--saffron-light)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
        style={{ color: light ? 'var(--dark-1)' : 'var(--cream)' }}
      >
        <span className="text-gold-shimmer">{title}</span>
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base md:text-lg max-w-2xl leading-relaxed"
          style={{
            color: light ? 'rgba(8,3,10,0.7)' : 'var(--cream-muted)',
            margin: centered ? '16px auto 0' : '16px 0 0',
          }}
        >
          {subtitle}
        </p>
      )}
      <div className="gold-divider-ornament mt-6" style={{ maxWidth: centered ? '220px' : '180px', margin: centered ? '24px auto 0' : '24px 0 0' }}>
        <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
      </div>
    </div>
  );
}
