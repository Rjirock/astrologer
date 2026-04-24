import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const allServices = [
  { icon: '☽', title: 'Kundali Matching', desc: 'Comprehensive Vedic compatibility analysis based on all 36 gunas, doshas, and planetary positions to ensure lasting marital harmony and happiness.', tag: 'Marriage' },
  { icon: '🏛️', title: 'Vastu Consultation', desc: 'Align your home, office, or factory with the five elements and cosmic energies for maximum prosperity, health, and positive vibrations.', tag: 'Vastu' },
  { icon: '✋', title: 'Palm Reading', desc: 'Decode the hidden messages in the lines, mounts, and patterns of your palm to understand your destiny, health, relationships, and future.', tag: 'Palmistry' },
  { icon: '🌀', title: 'Feng Shui Astrology', desc: 'Harmonize your living and working spaces using the ancient Chinese art of Feng Shui to attract positive chi and repel negativity.', tag: 'Vastu' },
  { icon: '⭐', title: 'Janam Kundli', desc: 'Get your personalized birth chart (Janam Kundli) with detailed analysis of all 12 houses, planetary positions, dashas, and their effects on your life.', tag: 'Vedic' },
  { icon: '🧠', title: 'Psychological Astrology', desc: 'Understand your mental patterns, emotional tendencies, fears, and strengths through the psychological lens of Vedic astrology.', tag: 'Vedic' },
  { icon: '📐', title: 'Scientific Vastu Shastra', desc: 'Modern Vastu consultation combining ancient shastra principles with scientific reasoning — practical advice without demolition.', tag: 'Vastu' },
  { icon: '🔢', title: 'Numerology', desc: 'Discover how the sacred numbers of your name and birthdate influence your personality, relationships, career path, and life purpose.', tag: 'Numerology' },
  { icon: '👤', title: 'Face Reading', desc: 'Ancient Samudrik Shastra — reading facial features to reveal character traits, destiny indicators, health tendencies, and life predictions.', tag: 'Palmistry' },
  { icon: '💍', title: 'Marriage Astrology', desc: 'Expert guidance on marriage timing, finding the right partner, resolving marital conflicts, and strengthening the sacred bond of matrimony.', tag: 'Marriage' },
  { icon: '🛡️', title: 'Black Magic Remedy', desc: 'Identify and neutralize the effects of black magic, evil eye, and negative energies through powerful Vedic tantric remedies and protective rituals.', tag: 'Remedies' },
  { icon: '⛩️', title: 'Japanese Astrology', desc: 'Insights through the ancient Japanese Nine Star Ki astrology system to understand personality, relationships, and life cycles.', tag: 'International' },
  { icon: '🕯️', title: 'Spiritual Healing', desc: 'Deep spiritual cleansing and healing sessions to remove karmic blocks, negative energies, and restore your natural spiritual balance and aura.', tag: 'Healing' },
  { icon: '🃏', title: 'Tarot Astrology', desc: 'Combining the ancient wisdom of Tarot cards with Vedic astrology for powerful insights into your past, present, and future possibilities.', tag: 'Divination' },
  { icon: '🦜', title: 'Parrot Astrology', desc: 'An ancient and accurate form of astrology from South India where sacred trained parrots select cards to reveal divine predictions about your life.', tag: 'Divination' },
  { icon: '👍', title: 'Thumb Reading', desc: 'Specialized palmistry focusing on the thumb — revealing willpower, determination, logical ability, and the overall direction of your life journey.', tag: 'Palmistry' },
  { icon: '🎲', title: 'Dice Reading', desc: 'Ancient divination technique using sacred dice to answer specific questions about love, career, finance, and health with surprising accuracy.', tag: 'Divination' },
  { icon: '👁️', title: 'Eye Reading', desc: 'Read the soul through the eyes — ancient iridology combined with Vedic traditions to reveal health conditions, personality traits, and destiny.', tag: 'Palmistry' },
  { icon: '🐉', title: 'Chinese Astrology', desc: 'Explore your life through the 12 Chinese zodiac signs and the five element theory to understand compatibility, luck cycles, and life phases.', tag: 'International' },
];

const tagColors = {
  Marriage: 'var(--maroon-light, #a03040)',
  Vastu: 'var(--sacred-green, #3a7d52)',
  Palmistry: 'var(--saffron, #e07b10)',
  Vedic: 'var(--gold)',
  Numerology: '#6B5B95',
  Remedies: 'var(--maroon, #8b1a2a)',
  International: '#4A9EBF',
  Healing: '#7AA66B',
  Divination: '#C4845A',
};

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
      { threshold: 0.08 }
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
        <p style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.75rem' }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{ fontFamily: 'serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: 'var(--cream)', lineHeight: 1.18, marginBottom: subtitle ? '1rem' : 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 'clamp(0.875rem, 1.6vw, 1rem)', color: 'rgba(248,242,230,0.62)', maxWidth: '54ch', margin: '0 auto', lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function ServicesGrid() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} style={{ background: 'var(--dark-1)', padding: 'clamp(3rem, 7vw, 7rem) 0' }}>
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        [data-animate].animate-in { opacity: 1; transform: translateY(0); }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(0.875rem, 1.5vw, 1.5rem);
        }
        @media (min-width: 580px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .service-card {
          padding: clamp(1.25rem, 2.5vw, 1.75rem);
          display: flex;
          flex-direction: column;
          gap: clamp(0.75rem, 1.2vw, 1rem);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,150,12,0.15);
          border-radius: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .service-card:hover {
          border-color: rgba(200,150,12,0.4);
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
          transform: translateY(-2px);
        }
        .service-icon {
          transition: transform 0.3s ease;
        }
        .service-card:hover .service-icon { transform: scale(1.08); }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: clamp(10px, 1.1vw, 12px);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--saffron-light, var(--saffron, #e07b10));
          text-decoration: none;
          transition: gap 0.25s ease;
        }
        .service-card:hover .service-link { gap: 10px; }
      `}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
        <div data-animate>
          <SectionHeader
            eyebrow="All Services"
            title="Complete Astrology Services"
            subtitle="Authentic, comprehensive, and personalized — every service is delivered with decades of expertise and genuine care."
          />
        </div>

        <div className="services-grid">
          {allServices.map((s, i) => {
            const tagColor = tagColors[s.tag] || 'var(--gold)';
            return (
              <div
                key={s.title}
                data-animate
                data-delay={`${(i % 6) * 0.08}s`}
                className="service-card"
              >
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div
                    className="service-icon"
                    style={{
                      width: 'clamp(48px, 5.5vw, 56px)',
                      height: 'clamp(48px, 5.5vw, 56px)',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'clamp(20px, 2.5vw, 26px)',
                      flexShrink: 0,
                      background: 'linear-gradient(135deg, rgba(200,150,12,0.15), rgba(200,150,12,0.05))',
                      border: '1px solid rgba(200,150,12,0.25)',
                    }}
                  >
                    {s.icon}
                  </div>
                  <span style={{
                    fontSize: 'clamp(9px, 1vw, 11px)',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    flexShrink: 0,
                    marginTop: '4px',
                    background: `${tagColor}18`,
                    border: `1px solid ${tagColor}40`,
                    color: tagColor,
                    whiteSpace: 'nowrap',
                  }}>
                    {s.tag}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'serif', fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', fontWeight: 700, color: 'var(--gold)', margin: 0 }}>
                  {s.title}
                </h3>

                <p style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', lineHeight: 1.75, color: 'var(--cream-muted)', margin: 0, flex: 1 }}>
                  {s.desc}
                </p>

                <a href="/contact" className="service-link">
                  Book This Service
                  <ArrowRight size={12} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}