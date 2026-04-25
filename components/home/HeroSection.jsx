'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Star, ArrowRight } from 'lucide-react';
import StarField from '@/components/shared/StarField';

const stats = [
  { number: '10,000+', label: 'Happy Clients' },
  { number: '25+', label: 'Years Experience' },
  { number: '19+', label: 'Services Offered' },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden hero-bg"
      style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center' }}
      aria-label="Hero section"
    >
      <StarField count={80} />

      {/* Zodiac Wheel — desktop only */}
      <div
        className="absolute hidden xl:block pointer-events-none"
        style={{
          right: '-80px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(380px, 38vw, 560px)',
          height: 'clamp(380px, 38vw, 560px)',
          opacity: 0.12,
          animation: 'rotate-slow 30s linear infinite',
        }}
        aria-hidden="true"
      >
        <Image src="/images/zodiac-wheel.jpg" alt="" fill className="object-contain rounded-full" />
      </div>

      {/* Decorative rings */}
      <div
        className="absolute hidden xl:block pointer-events-none rounded-full"
        style={{
          right: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(380px, 38vw, 560px)',
          height: 'clamp(380px, 38vw, 560px)',
          border: '2px solid var(--gold)',
          opacity: 0.10,
          animation: 'rotate-slow 30s linear infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute hidden xl:block pointer-events-none rounded-full"
        style={{
          right: '-50px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(280px, 28vw, 400px)',
          height: 'clamp(280px, 28vw, 400px)',
          border: '1px solid var(--gold-light)',
          opacity: 0.12,
          animation: 'rotate-slow 15s linear infinite reverse',
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,150,12,0.055) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Container */}
      <div
        className="relative z-10 mx-auto w-full"
        style={{ maxWidth: '1280px', padding: 'clamp(5rem, 12vw, 7rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 6vw, 5rem)' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(2.5rem, 6vw, 4rem)',
            alignItems: 'center',
          }}
        >
          {/* Left: Content */}
          <div style={{ order: 1 }}>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full font-semibold uppercase"
              style={{
                padding: 'clamp(6px, 1.2vw, 9px) clamp(12px, 2vw, 18px)',
                marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
                fontSize: 'clamp(9px, 1vw, 11px)',
                letterSpacing: '0.22em',
                background: 'rgba(200,150,12,0.12)',
                border: '1px solid rgba(200,150,12,0.35)',
                color: 'var(--gold)',
              }}
            >
              <Star size={10} fill="currentColor" />
              Vedic Jyotish &bull; 25+ Years Experience
              <Star size={10} fill="currentColor" />
            </div>
            <h1
              className="font-serif font-bold leading-tight"
              style={{
                fontSize: 'clamp(1.9rem, 5.5vw, 4rem)',
                color: 'var(--cream)',
                marginBottom: 'clamp(4rem, 2.5vw, 3rem)',
                maxWidth: '20ch',
                lineHeight: 1.13,
              }}
            >
              Indian Famous Astrologer{' '}
              <span className="text-gold-shimmer">
                Sri Jagannath Pandit Ram Kishan
              </span>
            </h1>

            {/* Heading */}
            <h2
              className="font-serif font-bold leading-tight"
              style={{
                fontSize: 'clamp(1.9rem, 5.5vw, 4rem)',
                color: 'var(--cream)',
                marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
                maxWidth: '18ch',
                lineHeight: 1.13,
              }}
            >
              Trusted Astrology Guidance for{' '}
              <span className="text-gold-shimmer">
                Life, Marriage, Career &amp; Peace
              </span>
            </h2>

            {/* Sub-heading */}
            <p
              style={{
                fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
                color: 'var(--cream-muted)',
                lineHeight: 1.75,
                maxWidth: '52ch',
                marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
              }}
            >
              Shree Jagannath Pandit Ram Kishan brings over 25 years of authentic Vedic wisdom
              to guide you through life&apos;s most important decisions — with clarity, compassion,
              and proven remedies.
            </p>

            {/* Stats */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(1.25rem, 4vw, 2.5rem)',
                marginBottom: 'clamp(2rem, 4vw, 2.75rem)',
                paddingBottom: 'clamp(1.25rem, 3vw, 2rem)',
                borderBottom: '1px solid rgba(200,150,12,0.14)',
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-serif font-bold"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--gold)', lineHeight: 1 }}
                  >
                    {stat.number}
                  </p>
                  <p
                    style={{
                      fontSize: 'clamp(9px, 1.1vw, 11px)',
                      color: 'var(--cream-muted)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginTop: '4px',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.6rem, 1.5vw, 0.875rem)' }}>
              <Link
                href="/contact"
                className="btn-gold"
                style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', padding: 'clamp(11px, 1.5vw, 14px) clamp(18px, 2.5vw, 26px)' }}
              >
                Book Consultation
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:7739606061"
                className="btn-outline-gold"
                style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', padding: 'clamp(11px, 1.5vw, 14px) clamp(18px, 2.5vw, 26px)' }}
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href="https://wa.me/917739606061"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl font-bold font-serif transition-all duration-300"
                style={{
                  fontSize: 'clamp(12px, 1.3vw, 14px)',
                  padding: 'clamp(11px, 1.5vw, 14px) clamp(18px, 2.5vw, 26px)',
                  background: 'rgba(37,211,102,0.12)',
                  border: '2px solid rgba(37,211,102,0.4)',
                  color: '#25D366',
                }}
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div style={{ order: 2, display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(120,20,30,0.35), transparent 70%)', opacity: 0.8 }}
              aria-hidden="true"
            />

            {/* Portrait */}
            <div
              className="relative animate-pulse-glow"
              style={{
                width: 'clamp(240px, 45vw, 440px)',
                height: 'clamp(240px, 45vw, 440px)',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(200,150,12,0.4)',
                background: 'var(--dark-3)',
                flexShrink: 0,
              }}
            >
              <Image
                src="/logo.png"
                alt="Shree Jagannath Pandit Ram Kishan"
                fill
                className="object-cover object-top"
                priority
              />
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(200,150,12,0.09) 0%, transparent 60%)' }}
                aria-hidden="true"
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute animate-float-up rounded-xl flex items-center gap-3"
              style={{
                bottom: 'clamp(8px, 2vw, 16px)',
                left: 'clamp(-8px, 2vw, 16px)',
                padding: 'clamp(10px, 1.5vw, 14px) clamp(12px, 2vw, 18px)',
                background: 'rgba(8,3,10,0.93)',
                border: '1px solid rgba(200,150,12,0.4)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="relative rounded-full overflow-hidden flex-shrink-0"
                style={{ width: 'clamp(32px, 3vw, 40px)', height: 'clamp(32px, 3vw, 40px)' }}
              >
                <Image src="/logo.png" alt="" fill className="object-cover" />
              </div>
              <div>
                <p className="font-serif font-bold" style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', color: 'var(--gold)', lineHeight: 1.3 }}>
                  Shree Jagannath
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 'clamp(60px, 8vw, 100px)', background: 'linear-gradient(to top, var(--dark-1), transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}