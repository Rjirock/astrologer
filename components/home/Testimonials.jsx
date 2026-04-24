'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Jamshedpur, Jharkhand',
    stars: 5,
    text: "Pandit Ji's Kundali matching guidance saved my marriage. His predictions were incredibly accurate and the remedies he suggested brought peace to our family within weeks.",
    initials: 'PS',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Kolkata, West Bengal',
    stars: 5,
    text: 'After struggling with career problems for years, one consultation with Pandit Ram Kishan Ji changed everything. His Vastu advice for my office transformed my business completely.',
    initials: 'RK',
  },
  {
    name: 'Sunita Devi',
    location: 'Patna, Bihar',
    stars: 5,
    text: 'I was deeply troubled by black magic effects. Pandit Ji identified the issue immediately and his spiritual healing remedy resolved it in just 21 days. Truly blessed guidance.',
    initials: 'SD',
  },
  {
    name: 'Amit Agarwal',
    location: 'Ranchi, Jharkhand',
    stars: 5,
    text: 'The palm reading was extraordinarily accurate — events from my past he described without me saying a word. His guidance for future decisions gave me great clarity.',
    initials: 'AA',
  },
  {
    name: 'Meena Patel',
    location: 'Dhanbad, Jharkhand',
    stars: 5,
    text: "My daughter's marriage was delayed for years. After following Pandit Ji's numerology remedies and gemstone recommendations, she got married within 6 months. Divine grace!",
    initials: 'MP',
  },
  {
    name: 'Vikram Singh',
    location: 'Bokaro, Jharkhand',
    stars: 5,
    text: "Pandit Ram Kishan Ji's tarot reading gave me incredible insight into my business partnership. His advice was spot on. I consider him my spiritual advisor for life.",
    initials: 'VS',
  },
];

function TestimonialCard({ t, delay = 0 }) {
  return (
    <div
      className="spiritual-card h-full flex flex-col"
      style={{
        padding: 'clamp(1.25rem, 3vw, 1.75rem)',
        gap: 'clamp(0.75rem, 1.5vw, 1rem)',
        animation: `fadeSlideUp 0.5s ease ${delay}ms both`,
      }}
    >
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Quote style={{ color: 'rgba(200,150,12,0.3)', width: 26, height: 26, flexShrink: 0 }} />

      {/* Stars */}
      <div style={{ display: 'flex', gap: '3px' }}>
        {Array.from({ length: t.stars }).map((_, s) => (
          <Star key={s} size={13} fill="var(--gold)" style={{ color: 'var(--gold)' }} />
        ))}
      </div>

      {/* Review text */}
      <p
        style={{
          fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)',
          color: 'var(--cream-muted)',
          lineHeight: 1.75,
          fontStyle: 'italic',
          flex: 1,
        }}
      >
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(200,150,12,0.12)',
        }}
      >
        <div
          style={{
            width: 'clamp(36px, 4vw, 44px)',
            height: 'clamp(36px, 4vw, 44px)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--maroon), var(--maroon-light))',
            color: 'var(--gold-pale)',
            fontFamily: 'var(--font-serif, serif)',
            fontWeight: 700,
            fontSize: 'clamp(11px, 1.3vw, 13px)',
            flexShrink: 0,
          }}
        >
          {t.initials}
        </div>
        <div>
          <p
            className="font-serif font-bold"
            style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)', color: 'var(--cream)', lineHeight: 1.3 }}
          >
            {t.name}
          </p>
          <p style={{ fontSize: 'clamp(10px, 1vw, 12px)', color: 'var(--cream-muted)' }}>
            {t.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [perPage, setPerPage] = useState(3);
  const ref = useScrollAnimation();
  const timerRef = useRef(null);
  const totalSlides = testimonials.length;

  // Responsive per-page count
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerPage(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  const go = useCallback(
    (idx) => setActive(((idx % totalSlides) + totalSlides) % totalSlides),
    [totalSlides]
  );

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => go(active + 1), 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoPlay, active, go]);

  const prev = () => { setAutoPlay(false); go(active - 1); };
  const next = () => { setAutoPlay(false); go(active + 1); };

  const visibleCards = Array.from({ length: perPage }, (_, i) =>
    testimonials[(active + i) % totalSlides]
  );

  return (
    <section
      ref={ref}
      style={{ background: 'var(--dark-1)', padding: 'clamp(3.5rem, 8vw, 7rem) 0' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1280px', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
        <div data-animate>
          <SectionHeader
            eyebrow="Client Stories"
            title="What Our Clients Say"
            subtitle="Thousands of lives transformed through authentic Vedic guidance. Here is what our clients share."
          />
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${perPage}, 1fr)`,
            gap: 'clamp(0.875rem, 2vw, 1.25rem)',
            marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)',
          }}
        >
          {visibleCards.map((t, i) => (
            <TestimonialCard key={`${active}-${i}`} t={t} delay={i * 80} />
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            style={{
              width: 'clamp(38px, 5vw, 46px)',
              height: 'clamp(38px, 5vw, 46px)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(200,150,12,0.1)',
              border: '1px solid rgba(200,150,12,0.3)',
              color: 'var(--gold)',
              cursor: 'pointer',
              transition: 'transform 0.25s ease, background 0.25s ease',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.background = 'rgba(200,150,12,0.18)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(200,150,12,0.1)';
            }}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAutoPlay(false); setActive(i); }}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  borderRadius: '100px',
                  height: '7px',
                  width: i === active ? '22px' : '7px',
                  background: i === active ? 'var(--gold)' : 'rgba(200,150,12,0.28)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'width 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next testimonials"
            style={{
              width: 'clamp(38px, 5vw, 46px)',
              height: 'clamp(38px, 5vw, 46px)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(200,150,12,0.1)',
              border: '1px solid rgba(200,150,12,0.3)',
              color: 'var(--gold)',
              cursor: 'pointer',
              transition: 'transform 0.25s ease, background 0.25s ease',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.background = 'rgba(200,150,12,0.18)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(200,150,12,0.1)';
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}