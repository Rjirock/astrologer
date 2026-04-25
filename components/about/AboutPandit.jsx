"use client";

import { useRef, useEffect } from "react";
import { Award, BookOpen, Users, Star, Phone } from "lucide-react";

/* ─── Data ─── */
const credentials = [
  { icon: BookOpen, text: "Vedic Jyotish Acharya" },
  { icon: Award,    text: "Vastu Shastra Expert" },
  { icon: Users,    text: "10,000+ Families Served" },
  { icon: Star,     text: "25+ Years of Practice" },
];

const bodyParagraphs = [
  {
    id: 1,
    content: (
      <>
        Shree Jagannath Pandit Ram Kishan is a highly revered Vedic astrologer with over{" "}
        <strong className="gold-text">25 years of dedicated practice</strong> in the ancient
        sciences of Jyotish, Vastu Shastra, Palmistry, and Numerology. Born into a lineage of
        learned pandits, he has devoted his life to unlocking the sacred wisdom of the Vedas
        for the benefit of thousands of families.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        Based in Sakchi (near Chappan Bhog, Gurudwara), Pandit Ji has guided clients from
        across India and abroad — helping them navigate marriage decisions, career crossroads,
        financial challenges, health concerns, and spiritual obstacles with clarity and compassion.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        His approach blends rigorous classical knowledge with deep intuitive wisdom. Whether it
        is a troubled marriage, a stagnant career, or the effects of negative energies — Pandit Ji
        provides{" "}
        <strong className="gold-text">personalized, practical, and proven remedies</strong> rooted
        in authentic Vedic tradition.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        Over 10,000 families have experienced transformative changes in their lives under his
        guidance. His consultations are known for their pinpoint accuracy, compassionate delivery,
        and powerful remedies that bring real, lasting results.
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        In Jamshedpur's fast-moving life, it's easy to look successful… yet feel completely lost inside.
        <br /><br />
        You may have the job, the home, even the appreciation from others…<br />
        But still wake up with a quiet emptiness in your heart.
        <br /><br />
        A deep longing for clarity, connection, and peace.
        <br /><br />
        That's where <strong className="gold-text">Shree Jagannath Pandit Ram Kisan Ji</strong>, one of the most trusted astrologers in Jamshedpur, walks beside you—<br />
        Not with judgment, but with deep, ancient wisdom.
        <br /><br />
        Through the sacred science of <strong className="gold-text">Nadi Jyotish</strong>, he doesn't just predict your future—<br />
        He helps you understand why things are happening in your life<br />
        And how you can finally realign your path with purpose, success, and inner peace.
      </>
    ),
  },
];

/* ─── Scroll Animation Hook ─── */
function useScrollAnimation() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay") || "0s";
            entry.target.style.transitionDelay = delay;
            entry.target.classList.add("animate-in");
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

/* ─── Section Header ─── */
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="section-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

/* ─── Main Component ─── */
export default function AboutPandit() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="about-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

        /* ── CSS Variables ── */
        .about-section {
          --gold:        #d4af37;
          --gold-dim:    rgba(212,175,55,0.18);
          --gold-border: rgba(212,175,55,0.3);
          --dark:        #0a0814;
          --dark-card:   rgba(14,10,30,0.97);
          --cream:       #f0e6c8;
          --cream-muted: rgba(240,230,200,0.6);
          --serif:       'Cinzel', Georgia, serif;
          --body-font:   'Crimson Text', Georgia, serif;
        }

        /* ── Section ── */
        .about-section {
          background: linear-gradient(160deg, #0a0814 0%, #0d0b1e 50%, #080612 100%);
          padding: clamp(3rem, 7vw, 7rem) 0;
          position: relative;
          overflow: hidden;
        }

        /* Subtle starfield */
        .about-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(1px 1px at 12% 18%, rgba(212,175,55,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 38% 55%, rgba(212,175,55,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 65% 12%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 82% 42%, rgba(212,175,55,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 78%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 20% 82%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 92%, rgba(212,175,55,0.3) 0%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Container ── */
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 5vw, 2.5rem);
          position: relative;
          z-index: 1;
        }

        /* ── Section Header ── */
        .section-header {
          text-align: center;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
        }
        .eyebrow {
          font-family: var(--serif);
          font-size: clamp(10px, 1.1vw, 12px);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 600;
          margin: 0 0 0.75rem;
        }
        .section-title {
          font-family: var(--serif);
          font-weight: 700;
          font-size: clamp(1.5rem, 4vw, 2.6rem);
          color: var(--cream);
          line-height: 1.2;
          margin: 0 0 0.75rem;
          text-shadow: 0 0 40px rgba(212,175,55,0.2);
        }
        .section-subtitle {
          font-family: var(--body-font);
          font-size: clamp(0.9rem, 1.6vw, 1.05rem);
          color: var(--cream-muted);
          max-width: 52ch;
          margin: 0 auto;
          line-height: 1.7;
          font-style: italic;
        }

        /* ── Gold divider ── */
        .gold-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 1rem auto 0;
        }
        .gold-divider-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .gold-divider-dot {
          width: 7px;
          height: 7px;
          background: var(--gold);
          transform: rotate(45deg);
          box-shadow: 0 0 8px rgba(212,175,55,0.7);
        }

        /* ── About Grid ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2.5rem, 5vw, 4rem);
          align-items: start;
        }
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 420px 1fr;
            align-items: center;
          }
        }

        /* ── Scroll animation ── */
        [data-animate] {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Image Column ── */
        .image-col {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .image-glow {
          position: absolute;
          inset: -20px;
          border-radius: 2rem;
          background: radial-gradient(circle at center, rgba(120,60,10,0.35), transparent 70%);
          filter: blur(2.5rem);
          pointer-events: none;
          z-index: 0;
        }
        .image-frame {
          position: relative;
          width: 100%;
          max-width: min(380px, 100%);
          aspect-ratio: 3 / 4;
          border-radius: 1.5rem;
          overflow: hidden;
          border: 2px solid var(--gold-border);
          box-shadow: 0 24px 64px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.08);
          z-index: 1;
        }
        .image-frame img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 55%, rgba(8,3,16,0.88) 100%);
          pointer-events: none;
        }
        .image-badge {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
          padding: 0.875rem 1rem;
          border-radius: 0.75rem;
          background: rgba(8,3,16,0.92);
          border: 1px solid var(--gold-border);
          backdrop-filter: blur(8px);
        }
        .image-badge-name {
          font-family: var(--serif);
          font-size: clamp(12px, 1.4vw, 15px);
          font-weight: 700;
          color: var(--gold);
          margin: 0 0 4px;
          line-height: 1.3;
        }
        .image-badge-sub {
          font-family: var(--body-font);
          font-size: clamp(10px, 1.1vw, 12px);
          color: var(--cream-muted);
          margin: 0;
          font-style: italic;
        }
        .image-ring {
          position: absolute;
          right: -0.75rem;
          top: -0.75rem;
          width: 5.5rem;
          height: 5.5rem;
          border-radius: 50%;
          border: 1px solid var(--gold);
          opacity: 0.18;
          pointer-events: none;
          z-index: 2;
          animation: rotate-slow 14s linear infinite;
        }

        /* ── Content Column ── */
        .content-col {
          display: flex;
          flex-direction: column;
          gap: clamp(1.25rem, 2.5vw, 1.75rem);
        }

        /* ── Credential badges ── */
        .credentials-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .credential-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 13px;
          border-radius: 8px;
          font-family: var(--serif);
          font-size: clamp(9px, 1.1vw, 11px);
          font-weight: 600;
          letter-spacing: 0.04em;
          background: var(--gold-dim);
          border: 1px solid var(--gold-border);
          color: var(--gold);
          white-space: nowrap;
        }

        /* ── Body text ── */
        .body-text-stack {
          display: flex;
          flex-direction: column;
          gap: clamp(0.75rem, 1.5vw, 1.1rem);
        }
        .body-para {
          font-family: var(--body-font);
          font-size: clamp(0.95rem, 1.55vw, 1.05rem);
          line-height: 1.85;
          color: var(--cream-muted);
          margin: 0;
        }
        .gold-text {
          color: var(--gold);
          font-style: normal;
        }

        /* ── Divider rule ── */
        .content-divider {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, var(--gold), transparent);
          flex-shrink: 0;
        }

        /* ── CTA Button ── */
        .btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: var(--serif);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-radius: 0.75rem;
          text-decoration: none;
          background: linear-gradient(135deg, #d4af37 0%, #b8962e 50%, #c8a83a 100%);
          color: #0a0814;
          border: none;
          cursor: pointer;
          padding: clamp(12px, 1.8vw, 15px) clamp(22px, 3vw, 34px);
          font-size: clamp(10px, 1.2vw, 13px);
          transition: filter 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 24px rgba(212,175,55,0.25);
          align-self: flex-start;
        }
        .btn-gold:hover {
          filter: brightness(1.12);
          transform: translateY(-2px);
          box-shadow: 0 8px 36px rgba(212,175,55,0.4);
        }

        /* ── Animations ── */
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── Mobile tweaks ── */
        @media (max-width: 640px) {
          .image-frame {
            max-width: min(300px, 100%);
          }
          .credentials-row {
            gap: 0.4rem;
          }
        }
      `}</style>

      <div className="about-container">

        {/* Header */}
        <div data-animate>
          <SectionHeader
            eyebrow="✦ Meet The Astrologer ✦"
            title="Shree Jagannath Pandit Ram Kishan"
            subtitle="Vedic Astrologer · Vastu Expert · 25+ Years of Sacred Practice"
          />
          <div className="gold-divider">
            <div className="gold-divider-line" />
            <div className="gold-divider-dot" />
            <div className="gold-divider-line" />
          </div>
        </div>

        {/* Two-column grid */}
        <div className="about-grid" style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}>

          {/* ── Image Column ── */}
          <div className="image-col" data-animate>
            <div className="image-glow" aria-hidden="true" />

            <div className="image-frame">
              <img
                src="/images/pandit-ji.jpg"
                alt="Shree Jagannath Pandit Ram Kishan"
                loading="lazy"
              />
              <div className="image-overlay" aria-hidden="true" />
              <div className="image-badge">
                <p className="image-badge-name">Shree Jagannath Pandit Ram Kishan</p>
                <p className="image-badge-sub">Vedic Astrologer &amp; Vastu Expert &bull; 25+ Years</p>
              </div>
            </div>

            <div className="image-ring" aria-hidden="true" />
          </div>

          {/* ── Content Column ── */}
          <div className="content-col" data-animate data-delay="0.18s">

            {/* Credential Badges */}
            <div className="credentials-row">
              {credentials.map(({ icon: Icon, text }) => (
                <div key={text} className="credential-badge">
                  <Icon size={12} />
                  {text}
                </div>
              ))}
            </div>

            <div className="content-divider" />

            {/* Body Paragraphs */}
            <div className="body-text-stack">
              {bodyParagraphs.map(({ id, content }) => (
                <p key={id} className="body-para">{content}</p>
              ))}
            </div>

            {/* CTA */}
            <a href="/contact" className="btn-gold">
              <Phone size={14} />
              Book a Consultation
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
