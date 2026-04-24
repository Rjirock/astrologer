'use client';
import { ShieldCheck, Clock, User, Lock, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  {
    icon: ShieldCheck,
    title: 'Accurate Guidance',
    desc: 'Every reading is backed by decades of study in Vedic astrology, providing you with precise, life-changing insights.',
  },
  {
    icon: Clock,
    title: 'Trusted Experience',
    desc: "Over 25 years of guiding thousands of families through life's most critical decisions with clarity and wisdom.",
  },
  {
    icon: User,
    title: 'Personalized Solutions',
    desc: 'Every consultation is unique — tailored specifically to your birth chart, life situation, and spiritual needs.',
  },
  {
    icon: Lock,
    title: 'Confidential Consultation',
    desc: 'Your personal details and life matters are handled with complete discretion, privacy, and professional ethics.',
  },
  {
    icon: Sparkles,
    title: 'Positive Remedies',
    desc: 'We provide practical, effective Vedic remedies — mantras, gemstones, rituals — that bring real positive change.',
  },
];

export default function WhyChooseUs() {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      style={{ background: 'var(--dark-1)', padding: 'clamp(3.5rem, 8vw, 7rem) 0' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1280px', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
        <div data-animate>
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Thousands Trust Pandit Ji"
            subtitle="We combine ancient Vedic wisdom with genuine compassion to guide you through life's most important moments."
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
            gap: 'clamp(0.875rem, 2vw, 1.25rem)',
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                data-animate
                data-delay={`${i * 0.1}s`}
                className="spiritual-card group"
                style={{
                  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 'clamp(0.75rem, 1.5vw, 1rem)',
                  transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(200,150,12,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                {/* Icon orb */}
                <div
                  className="icon-sacred transition-all duration-500 group-hover:scale-110"
                  style={{
                    width: 'clamp(56px, 7vw, 72px)',
                    height: 'clamp(56px, 7vw, 72px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    style={{
                      color: 'var(--gold)',
                      width: 'clamp(22px, 3vw, 30px)',
                      height: 'clamp(22px, 3vw, 30px)',
                    }}
                  />
                </div>

                <h3
                  className="font-serif font-bold"
                  style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)', color: 'var(--gold)', lineHeight: 1.3 }}
                >
                  {f.title}
                </h3>

                <p
                  style={{
                    fontSize: 'clamp(0.78rem, 1.1vw, 0.85rem)',
                    color: 'var(--cream-muted)',
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {f.desc}
                </p>

                {/* Bottom accent bar */}
                <div
                  style={{
                    width: '32px',
                    height: '2px',
                    borderRadius: '2px',
                    background: 'linear-gradient(90deg, var(--gold), var(--saffron-light))',
                    opacity: 0.5,
                    transition: 'width 0.35s ease, opacity 0.35s ease',
                    alignSelf: 'center',
                  }}
                  className="group-hover:!w-16 group-hover:!opacity-90"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}