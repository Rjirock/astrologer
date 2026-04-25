"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: 1,
    title: "Love Marriage",
    description:
      "A loving relationship that is known to both partners' acquaintances. Connect with the right resources for support.",
    phone: "+91-7004419491",
    image:
      "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=600&q=80",
    icon: "💑",
  },
  {
    id: 2,
    title: "EX Love Back",
    description:
      "So, get back together with your ex-boyfriend. By following the right rituals, make your love life stronger and happier than ever before.",
    phone: "+91-7004419491",
    image:
      "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&q=80",
    icon: "💞",
  },
  {
    id: 3,
    title: "One Sided Love",
    description:
      "Transform it into a healthy relationship. Keeping a secret with someone you've loved for a long time, and knowing that no one else knows, is the best feeling.",
    phone: "+91-7004419491",
    image:
      "/one_sided_love.avif",
    icon: "💔",
  },
  {
    id: 4,
    title: "Family Problem",
    description:
      "Paying attention can easily resolve family conflicts. Stay away from arguments and spread positivity within your family.",
    phone: "+91-7004419491",
    image:
      "/family_problem.webp",
    icon: "🏠",
  },
  {
    id: 5,
    title: "Health Problems",
    description:
      "You can easily feel healthy and stay free from unnecessary health problems. Maintain a safe distance from illness.",
    phone: "+91-7004419491",
    image:
    "/Health Problems.png",
    icon: "🌿",
  },
  {
    id: 6,
    title: "Inter-Caste Marriage",
    description:
      "Now any couple can have an intercaste marriage with the blessings and approval of their parents. Your wishes have been fulfilled.",
    phone: "+91-7004419491",
    image:
      "/inter_caste_marriage.jfif",
    icon: "🪷",
  },
];

const MandalaIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 60, height: 60 }}>
    <circle cx="30" cy="30" r="28" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="3 2" />
    <circle cx="30" cy="30" r="20" stroke="#D4AF37" strokeWidth="0.5" />
    <circle cx="30" cy="30" r="10" stroke="#D4AF37" strokeWidth="0.8" />
    <circle cx="30" cy="30" r="4" fill="#D4AF37" opacity="0.7" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 30 + 10 * Math.cos(rad);
      const y1 = 30 + 10 * Math.sin(rad);
      const x2 = 30 + 20 * Math.cos(rad);
      const y2 = 30 + 20 * Math.sin(rad);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4AF37" strokeWidth="0.6" />;
    })}
    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const cx = 30 + 20 * Math.cos(rad);
      const cy = 30 + 20 * Math.sin(rad);
      return <circle key={i} cx={cx} cy={cy} r="2" fill="#D4AF37" opacity="0.6" />;
    })}
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
);

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, idx])]);
            }, idx * 120);
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        :root {
          --deep-maroon: #3D0C11;
          --rich-maroon: #6B1B22;
          --saffron: #E8740C;
          --gold: #D4AF37;
          --gold-light: #F0D060;
          --cream: #FDF8EE;
          --card-bg: #FFFDF7;
          --text-dark: #2A0A0E;
        }

        .services-section {
          background: linear-gradient(160deg, #1a0408 0%, #2e0912 40%, #1a0408 100%);
          padding: 90px 20px;
          font-family: 'Cormorant Garamond', serif;
          position: relative;
          overflow: hidden;
        }

        .services-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(ellipse at 20% 20%, rgba(212,175,55,0.07) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 80%, rgba(232,116,12,0.07) 0%, transparent 60%);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
          position: relative;
        }

        .section-eyebrow {
          font-family: 'Cinzel', serif;
          color: var(--gold);
          font-size: 0.78rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          margin-bottom: 14px;
          opacity: 0.85;
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          color: var(--cream);
          line-height: 1.15;
          margin: 0 0 16px;
          text-shadow: 0 2px 24px rgba(212,175,55,0.25);
        }

        .section-title span {
          color: var(--gold);
        }

        .title-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 0 auto;
        }

        .divider-line {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold));
        }
        .divider-line.right {
          background: linear-gradient(90deg, var(--gold), transparent);
        }

        .divider-gem {
          width: 8px;
          height: 8px;
          background: var(--gold);
          transform: rotate(45deg);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1180px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cards-grid { grid-template-columns: 1fr; gap: 20px; }
          .services-section { padding: 60px 16px; }
        }

        .service-card {
          background: #1a1a1a;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 32px rgba(0,0,0,0.55), 0 1px 0 rgba(212,175,55,0.2) inset;
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          transition:
            opacity 0.6s cubic-bezier(.22,.68,0,1.2),
            transform 0.6s cubic-bezier(.22,.68,0,1.2),
            box-shadow 0.4s ease;
          border: 1px solid rgba(212,175,55,0.2);
        }

        .service-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .service-card:hover {
          box-shadow:
            0 16px 48px rgba(0,0,0,0.45),
            0 0 0 1.5px var(--gold),
            0 0 32px rgba(212,175,55,0.15);
          transform: translateY(-6px) scale(1.015) !important;
        }

        .card-image-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
        }

        .card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(.22,.68,0,1.2);
        }

        .service-card:hover .card-image-wrap img {
          transform: scale(1.08);
        }

        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(61,12,17,0.1) 0%,
            rgba(61,12,17,0.55) 100%
          );
          transition: opacity 0.4s ease;
        }

        .service-card:hover .card-image-overlay {
          opacity: 0.7;
        }

        .card-icon-badge {
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, var(--deep-maroon), var(--rich-maroon));
          border: 2px solid var(--gold);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          z-index: 2;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          transition: transform 0.4s cubic-bezier(.22,.68,0,1.2), box-shadow 0.4s;
        }

        .service-card:hover .card-icon-badge {
          transform: translateX(-50%) scale(1.1) rotate(5deg);
          box-shadow: 0 6px 24px rgba(212,175,55,0.35);
        }

        .card-body {
          padding: 36px 24px 28px;
          text-align: center;
        }

        .card-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .card-ornament-line {
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.7));
        }
        .card-ornament-line.right {
          background: linear-gradient(90deg, rgba(212,175,55,0.7), transparent);
        }
        .card-ornament-dot {
          width: 5px;
          height: 5px;
          background: var(--gold);
          border-radius: 50%;
          opacity: 0.9;
        }

        .card-title {
          font-family: 'Cinzel', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px;
          letter-spacing: 0.03em;
          transition: color 0.3s;
        }

        .service-card:hover .card-title {
          color: var(--gold-light);
        }

        .card-desc {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.08rem;
          color: rgba(255,255,255,0.78);
          line-height: 1.7;
          margin: 0 0 22px;
        }

        .card-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--deep-maroon) 0%, var(--rich-maroon) 100%);
          color: var(--gold-light);
          font-family: 'Cinzel', serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 11px 22px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(.22,.68,0,1.2);
          box-shadow: 0 4px 16px rgba(61,12,17,0.3);
        }

        .card-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gold) 0%, var(--saffron) 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          border-radius: 50px;
        }

        .card-btn:hover::before {
          opacity: 1;
        }

        .card-btn:hover {
          color: var(--deep-maroon);
          transform: scale(1.05);
          box-shadow: 0 8px 28px rgba(212,175,55,0.4);
        }

        .card-btn span, .card-btn svg {
          position: relative;
          z-index: 1;
        }

        .card-btn:hover svg path {
          fill: var(--deep-maroon);
        }

        .gold-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.08) 50%,
            transparent 60%
          );
          transition: left 0.5s ease;
          pointer-events: none;
        }

        .service-card:hover .gold-shimmer {
          left: 150%;
        }

        .bg-deco {
          position: absolute;
          pointer-events: none;
          opacity: 0.06;
        }
        .bg-deco-1 { top: 40px; left: 40px; }
        .bg-deco-2 { top: 40px; right: 40px; transform: scaleX(-1); }
        .bg-deco-3 { bottom: 40px; left: 40px; transform: scaleY(-1); }
        .bg-deco-4 { bottom: 40px; right: 40px; transform: scale(-1); }
      `}</style>

      <section className="services-section" ref={sectionRef}>
        {/* Background decorative mandalas */}
        <div className="bg-deco bg-deco-1"><MandalaIcon /></div>
        <div className="bg-deco bg-deco-2"><MandalaIcon /></div>
        <div className="bg-deco bg-deco-3"><MandalaIcon /></div>
        <div className="bg-deco bg-deco-4"><MandalaIcon /></div>

        <div className="section-header">
          <p className="section-eyebrow">✦ Divine Guidance & Sacred Remedies ✦</p>
          <h2 className="section-title">
            Our <span>Spiritual</span> Services
          </h2>
          <div className="title-divider">
            <div className="divider-line"></div>
            <div className="divider-gem"></div>
            <div className="divider-line right"></div>
          </div>
        </div>

        <div className="cards-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card${visibleCards.includes(index) ? " visible" : ""}`}
              data-index={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="gold-shimmer" />

              <div className="card-image-wrap">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="card-image-overlay" />
                <div className="card-icon-badge">{service.icon}</div>
              </div>

              <div className="card-body">
                <div className="card-ornament">
                  <div className="card-ornament-line"></div>
                  <div className="card-ornament-dot"></div>
                  <div className="card-ornament-line right"></div>
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
                <a
                  href={`tel:${service.phone}`}
                  className="card-btn"
                >
                  <PhoneIcon />
                  <span>{service.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}