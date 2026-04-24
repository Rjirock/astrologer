'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: '☽',
    title: 'Kundali Matching',
    desc: 'Ensure marital harmony with comprehensive Kundali matching based on all 36 gunas and doshas.',
    tag: 'Marriage',
  },
  {
    icon: '✋',
    title: 'Palm Reading',
    desc: 'Reveal your destiny through the sacred lines of your palm — life, love, fate, and health.',
    tag: 'Divination',
  },
  {
    icon: '🏠',
    title: 'Vastu Consultation',
    desc: 'Align your home or office with cosmic energies for prosperity, peace, and positive vibrations.',
    tag: 'Spaces',
  },
  {
    icon: '🔢',
    title: 'Numerology',
    desc: 'Discover how the sacred numbers in your life shape your personality, career, and destiny.',
    tag: 'Numbers',
  },
  {
    icon: '💍',
    title: 'Marriage Astrology',
    desc: 'Navigate marriage timing, compatibility, and relationship remedies through Vedic astrology.',
    tag: 'Relationships',
  },
  {
    icon: '🃏',
    title: 'Tarot Reading',
    desc: 'Gain spiritual insight into past, present, and future through ancient tarot card wisdom.',
    tag: 'Insight',
  },
];

export default function ServicesPreview() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="section-bg-glow"
      style={{ background: 'var(--dark-2)', padding: 'clamp(3.5rem, 8vw, 7rem) 0' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1280px', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
        <div data-animate>
          <SectionHeader
            eyebrow="Popular Services"
            title="Our Sacred Astrology Services"
            subtitle="From Kundali to Vastu, we offer a wide range of authentic Vedic services to guide every aspect of your life."
          />
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(0.875rem, 2vw, 1.25rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              data-animate
              data-delay={`${i * 0.08}s`}
              className="spiritual-card group"
              style={{
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(0.75rem, 1.5vw, 1rem)',
                transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,150,12,0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Top row: icon + tag */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: 'clamp(48px, 6vw, 60px)',
                    height: 'clamp(48px, 6vw, 60px)',
                    borderRadius: '14px',
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                    background: 'linear-gradient(135deg, rgba(200,150,12,0.15), rgba(200,150,12,0.05))',
                    border: '1px solid rgba(200,150,12,0.25)',
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--saffron-light)',
                    background: 'rgba(200,150,12,0.08)',
                    border: '1px solid rgba(200,150,12,0.2)',
                    borderRadius: '100px',
                    padding: '3px 10px',
                    height: 'fit-content',
                  }}
                >
                  {s.tag}
                </span>
              </div>

              <h3
                className="font-serif font-bold"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--gold)', lineHeight: 1.25 }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)',
                  color: 'var(--cream-muted)',
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {s.desc}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(200,150,12,0.18), transparent)',
                  margin: '0.25rem 0',
                }}
              />

              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider group/link"
                style={{
                  fontSize: 'clamp(9px, 1vw, 11px)',
                  color: 'var(--saffron-light)',
                  textDecoration: 'none',
                  letterSpacing: '0.12em',
                }}
              >
                Learn More
                <ArrowRight size={12} className="group-hover/link:translate-x-1" style={{ transition: 'transform 0.3s ease' }} />
              </Link>
            </div>
          ))}
        </div>

        {/* View all */}
        <div data-animate style={{ textAlign: 'center' }}>
          <Link
            href="/services"
            className="btn-gold"
            style={{
              fontSize: 'clamp(12px, 1.3vw, 14px)',
              padding: 'clamp(12px, 1.8vw, 16px) clamp(24px, 3vw, 36px)',
            }}
          >
            View All 19 Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}