"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    badge: "✦ Popular",
    title: "Love Marriage Solution",
    desc: "Want to marry your dream partner? Get powerful Vedic love marriage solutions guided by divine wisdom.",
    image: "/images/marriage.jpg",
    delay: 0,
  },
  {
    id: 2,
    badge: "✦ Effective",
    title: "Get Lost Love Back",
    desc: "Love is precious — don't let it slip away. Ancient remedies to reunite you with your soulmate.",
    image: "/images/gallery-9.jpg",
    delay: 120,
  },
  {
    id: 3,
    badge: "✦ Trusted",
    title: "Husband Wife Dispute",
    desc: "Restore harmony in your marriage. Resolve conflicts and rebuild the sacred bond of love.",
    image: "/images/gallery-7.jpg",
    delay: 240,
  },
  {
    id: 4,
    badge: "✦ Proven",
    title: "Parents Approval",
    desc: "Facing family opposition? Sacred mantras and astrological guidance to win parental blessings.",
    image: "/images/gallery-1.jpg",
    delay: 100,
  },
  {
    id: 5,
    badge: "✦ Sacred",
    title: "Love Problem Solution",
    desc: "Is love life filled with troubles? One consultation brings divine clarity and lasting peace.",
    image: "/images/gallery-6.jpg",
    delay: 220,
  },
  {
    id: 6,
    badge: "✦ Vedic",
    title: "Career & Business Problem",
    desc: "Overcome professional obstacles with astrology. Unlock the path to success and prosperity.",
    image: "/images/career.jpg",
    delay: 340,
  },
  {
    id: 7,
    badge: "✦ Healing",
    title: "Relationship Problem",
    desc: "End the distance between hearts. Vedic remedies that bring love and understanding back.",
    image: "/images/gallery-10.jpg",
    delay: 80,
  },
  {
    id: 8,
    badge: "✦ Divine",
    title: "Kundali & Palm Reading",
    desc: "Reveal destiny through your birth chart and sacred palm lines — life, love, career & health.",
    image: "/images/best-astrologer.jpg",
    delay: 200,
  },
  {
    id: 9,
    badge: "✦ Cosmic",
    title: "Vastu & Numerology",
    desc: "Align your home and life with cosmic energies for prosperity, peace and positive vibrations.",
    image: "/images/gallery-5.jpg",
    delay: 320,
  },
];

/* ─── Single Card ─── */
function ServiceCard({ service, isVisible }) {
  return (
    <div
      style={{
        background: "linear-gradient(160deg, rgba(20,15,40,0.97) 0%, rgba(10,8,25,0.99) 100%)",
        border: "1px solid rgba(212,175,55,0.2)",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.96)",
        transition: `opacity 0.7s ease ${service.delay}ms, transform 0.7s ease ${service.delay}ms, border-color 0.4s ease, box-shadow 0.4s ease`,
      }}
      className="service-card-hover"
    >
      {/* Top gold line on hover — handled via CSS class below */}
      <div className="card-top-line" />

      {/* Image */}
      <div className="card-img-wrapper" style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            filter: "brightness(0.85) saturate(1.1)",
            transition: "transform 0.6s ease",
          }}
          className="card-img-zoom"
        />

        {/* Badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(212,175,55,0.15)",
            border: "1px solid rgba(212,175,55,0.4)",
            borderRadius: "20px",
            padding: "4px 12px",
            fontFamily: "'Cinzel', serif",
            fontSize: "10px",
            letterSpacing: "1px",
            color: "#d4af37",
            zIndex: 3,
          }}
        >
          {service.badge}
        </div>
      </div>

      {/* Body */}
      <div className="card-body-padding">
        <div
          className="card-title-el"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "16px",
            fontWeight: 600,
            color: "#e8d5a0",
            marginBottom: "8px",
            lineHeight: 1.3,
            transition: "color 0.3s ease",
          }}
        >
          {service.title}
        </div>
        <div
          className="card-divider-el"
          style={{
            width: "36px",
            height: "1px",
            background: "linear-gradient(90deg, #d4af37, transparent)",
            marginBottom: "10px",
            transition: "width 0.4s ease",
          }}
        />
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.65,
            marginBottom: "16px",
            fontStyle: "italic",
            fontFamily: "'Crimson Text', Georgia, serif",
          }}
        >
          {service.desc}
        </p>
        <a
          href="tel:7739606061"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #d4af37 0%, #b8962e 50%, #c8a83a 100%)",
            color: "#0a0a1a",
            textDecoration: "none",
            fontFamily: "'Cinzel', serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            padding: "11px 18px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            width: "100%",
            textAlign: "center",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(212,175,55,0.25)",
          }}
          className="card-cta-btn"
        >
          📞 &nbsp;CALL NOW · +91 77396 06061
        </a>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
            observer.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

        .services-section-bg {
          background: linear-gradient(135deg, #0a0a1a 0%, #0d0d24 40%, #080818 70%, #0a0a1a 100%);
          padding: 60px 20px 80px;
          position: relative;
          overflow: hidden;
        }

        /* ── Card image height ── */
        .card-img-wrapper {
          height: 260px;
        }

        /* ── Card body padding (desktop default) ── */
        .card-body-padding {
          padding: 22px 24px 26px;
        }

        .stars-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image:
            radial-gradient(1px 1px at 15% 20%, rgba(212,175,55,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 60%, rgba(212,175,55,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 60% 10%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 80% 40%, rgba(212,175,55,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 75%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 50%, rgba(212,175,55,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 90%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 85%, rgba(212,175,55,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 30%, rgba(255,255,255,0.3) 0%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }

        .services-grid-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1080px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Mobile overrides ── */
        @media (max-width: 480px) {
          .services-section-bg {
            padding: 36px 14px 50px;
          }

          .card-img-wrapper {
            height: 180px;
          }

          .card-body-padding {
            padding: 16px 18px 20px;
          }

          .services-grid-layout {
            gap: 14px;
          }
        }

        @media (max-width: 768px) {
          .services-grid-layout { grid-template-columns: 1fr; gap: 20px; }
        }

        @media (min-width: 480px) and (max-width: 900px) {
          .services-grid-layout { grid-template-columns: repeat(2, 1fr); }
        }

        .service-card-hover {
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease !important;
        }

        .service-card-hover:hover {
          border-color: rgba(212,175,55,0.6) !important;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 30px rgba(212,175,55,0.12) !important;
          transform: translateY(-6px) scale(1.01) !important;
        }

        .service-card-hover:hover .card-top-line {
          opacity: 1 !important;
        }

        .service-card-hover:hover .card-img-zoom {
          transform: scale(1.07);
        }

        .service-card-hover:hover .card-title-el {
          color: #d4af37 !important;
        }

        .service-card-hover:hover .card-divider-el {
          width: 60px !important;
        }

        .card-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .card-cta-btn:hover {
          background: linear-gradient(135deg, #e8c547 0%, #d4af37 100%) !important;
          box-shadow: 0 6px 30px rgba(212,175,55,0.45) !important;
          transform: translateY(-1px);
        }

        .bottom-view-btn:hover {
          background: rgba(212,175,55,0.1) !important;
          border-color: #d4af37 !important;
          box-shadow: 0 0 30px rgba(212,175,55,0.2) !important;
        }
      `}</style>

      <section className="services-section-bg">
        <div className="stars-overlay" />

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "48px", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-block",
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#d4af37",
              textTransform: "uppercase",
              marginBottom: "12px",
              opacity: 0.85,
            }}
          >
            ✦ Sacred Services ✦
          </div>

          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(22px, 4vw, 34px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "10px",
              textShadow: "0 0 40px rgba(212,175,55,0.3)",
            }}
          >
            Divine Solutions for Life's Challenges
          </h2>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "14px auto" }}>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }} />
            <div style={{ width: "8px", height: "8px", background: "#d4af37", transform: "rotate(45deg)", boxShadow: "0 0 10px rgba(212,175,55,0.8)" }} />
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }} />
          </div>

          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.55)",
              fontStyle: "italic",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.6,
              fontFamily: "'Crimson Text', Georgia, serif",
            }}
          >
            25+ years of Vedic wisdom guiding thousands toward love, peace &amp; prosperity
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="services-grid-layout">
          {services.map((service, index) => (
            <div key={service.id} ref={(el) => (cardRefs.current[index] = el)}>
              <ServiceCard service={service} isVisible={visibleCards.has(index)} />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div style={{ textAlign: "center", marginTop: "50px", position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.45)",
              fontStyle: "italic",
              marginBottom: "16px",
              fontFamily: "'Crimson Text', Georgia, serif",
            }}
          >
            Explore our full range of 19+ sacred Vedic services
          </p>
          <Link
            href="/services"
            className="bottom-view-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              border: "1px solid rgba(212,175,55,0.5)",
              color: "#d4af37",
              textDecoration: "none",
              fontFamily: "'Cinzel', serif",
              fontSize: "12px",
              letterSpacing: "2px",
              padding: "13px 32px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.4s ease",
            }}
          >
            ✦ VIEW ALL SERVICES ✦
          </Link>
        </div>
      </section>
    </>
  );
}
