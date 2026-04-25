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
    delay: 150,
  },
  {
    id: 3,
    badge: "✦ Trusted",
    title: "Husband Wife Dispute",
    desc: "Restore harmony in your marriage. Resolve conflicts and rebuild the sacred bond of love.",
    image: "/images/gallery-7.jpg",
    delay: 300,
  },
  {
    id: 4,
    badge: "✦ Proven",
    title: "Parents Approval",
    desc: "Facing family opposition? Sacred mantras and astrological guidance to win parental blessings.",
    image: "/images/gallery-1.jpg",
    delay: 0,
  },
  {
    id: 5,
    badge: "✦ Sacred",
    title: "Love Problem Solution",
    desc: "Is love life filled with troubles? One consultation brings divine clarity and lasting peace.",
    image: "/images/gallery-6.jpg",
    delay: 150,
  },
  {
    id: 6,
    badge: "✦ Vedic",
    title: "Career & Business Problem",
    desc: "Overcome professional obstacles with astrology. Unlock the path to success and prosperity.",
    image: "/images/career.jpg",
    delay: 300,
  },
  {
    id: 7,
    badge: "✦ Healing",
    title: "Relationship Problem",
    desc: "End the distance between hearts. Vedic remedies that bring love and understanding back.",
    image: "/images/gallery-10.jpg",
    delay: 0,
  },
  {
    id: 8,
    badge: "✦ Divine",
    title: "Kundali & Palm Reading",
    desc: "Reveal destiny through your birth chart and sacred palm lines — life, love, career & health.",
    image: "/images/best-astrologer.jpg",
    delay: 150,
  },
  {
    id: 9,
    badge: "✦ Cosmic",
    title: "Vastu & Numerology",
    desc: "Align your home and life with cosmic energies for prosperity, peace and positive vibrations.",
    image: "/images/gallery-5.jpg",
    delay: 300,
  },
];

/* ─── Single Card ─── */
function ServiceCard({ service, isVisible }) {
  return (
    <div
      className="service-card-hover"
      style={{
        background: "linear-gradient(160deg, rgba(20,15,40,0.97) 0%, rgba(10,8,25,0.99) 100%)",
        border: "1px solid rgba(212,175,55,0.2)",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        /* ── Scroll-in: zoom out from big to normal ── */
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1) translateY(0)" : "scale(1.14) translateY(20px)",
        transition: `
          opacity   0.85s cubic-bezier(0.22, 1, 0.36, 1) ${service.delay}ms,
          transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${service.delay}ms,
          border-color 0.4s ease,
          box-shadow   0.4s ease
        `,
      }}
    >
      {/* Gold shimmer top edge — reveals on hover */}
      <div className="card-top-line" />

      {/* ── Full-size Image — no bottom gradient overlay ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "260px",
          overflow: "hidden",
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="card-img-zoom"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
            filter: "brightness(0.88) saturate(1.15)",
            transition: "transform 0.85s cubic-bezier(0.22,1,0.36,1), filter 0.4s ease",
          }}
        />

        {/* Badge floats over image */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            background: "rgba(8,6,20,0.7)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(212,175,55,0.55)",
            borderRadius: "20px",
            padding: "5px 14px",
            fontFamily: "'Cinzel', serif",
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "#d4af37",
            zIndex: 3,
          }}
        >
          {service.badge}
        </div>
      </div>

      {/* ── Card Body ── */}
      <div style={{ padding: "20px 22px 22px" }}>
        <div
          className="card-title-el"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "15.5px",
            fontWeight: 600,
            color: "#e8d5a0",
            marginBottom: "9px",
            lineHeight: 1.35,
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
            marginBottom: "11px",
            transition: "width 0.45s ease",
          }}
        />

        <p
          style={{
            fontSize: "13.5px",
            color: "rgba(255,255,255,0.47)",
            lineHeight: 1.72,
            marginBottom: "18px",
            fontStyle: "italic",
            fontFamily: "'Crimson Text', Georgia, serif",
          }}
        >
          {service.desc}
        </p>

        <a
          href="tel:7739606061"
          className="card-cta-btn"
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
            padding: "12px 18px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            width: "100%",
            textAlign: "center",
            transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
            boxShadow: "0 4px 18px rgba(212,175,55,0.2)",
          }}
        >
          📞&nbsp; CALL NOW · +91 77396 06061
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
        { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

        /* ── Section ── */
        .services-section-bg {
          background: linear-gradient(135deg, #0a0a1a 0%, #0d0d24 40%, #080818 70%, #0a0a1a 100%);
          padding: 70px 20px 90px;
          position: relative;
          overflow: hidden;
        }

        /* ── Starfield ── */
        .stars-overlay {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(1px 1px at  8% 15%, rgba(212,175,55,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 22% 68%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 38% 12%, rgba(212,175,55,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 72% 35%, rgba(212,175,55,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 88% 58%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 90%, rgba(212,175,55,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 65%  5%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 22%, rgba(212,175,55,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 44% 44%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 30%, rgba(212,175,55,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 78% 88%, rgba(255,255,255,0.4) 0%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Grid ── */
        .services-grid-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 900px) {
          .services-grid-layout { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 560px) {
          .services-grid-layout { grid-template-columns: 1fr; gap: 18px; }
        }

        /* ── Card hover states ── */
        .service-card-hover:hover {
          border-color: rgba(212,175,55,0.65) !important;
          box-shadow: 0 28px 70px rgba(0,0,0,0.75), 0 0 40px rgba(212,175,55,0.13) !important;
          transform: scale(1.03) translateY(-6px) !important;
        }
        .service-card-hover:hover .card-top-line   { opacity: 1 !important; }
        .service-card-hover:hover .card-img-zoom   {
          transform: scale(1.09) !important;
          filter: brightness(1.0) saturate(1.3) !important;
        }
        .service-card-hover:hover .card-title-el   { color: #d4af37 !important; }
        .service-card-hover:hover .card-divider-el { width: 64px !important; }

        /* ── Gold shimmer top line ── */
        .card-top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #d4af37 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 4;
        }

        /* ── CTA hover ── */
        .card-cta-btn:hover {
          background: linear-gradient(135deg, #f0d060 0%, #d4af37 100%) !important;
          box-shadow: 0 8px 36px rgba(212,175,55,0.5) !important;
          transform: translateY(-2px);
          letter-spacing: 2px;
        }

        /* ── Bottom btn hover ── */
        .bottom-view-btn:hover {
          background: rgba(212,175,55,0.08) !important;
          border-color: #d4af37 !important;
          box-shadow: 0 0 40px rgba(212,175,55,0.22) !important;
          letter-spacing: 3px;
        }
      `}</style>

      <section className="services-section-bg">
        <div className="stars-overlay" />

        {/* ── Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "56px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              letterSpacing: "5px",
              color: "#d4af37",
              textTransform: "uppercase",
              marginBottom: "14px",
              opacity: 0.8,
            }}
          >
            ✦ Sacred Services ✦
          </span>

          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 0,
              textShadow: "0 0 50px rgba(212,175,55,0.35)",
              lineHeight: 1.2,
            }}
          >
            Divine Solutions for Life's Challenges
          </h2>

          {/* Gold divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              margin: "18px auto",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #d4af37)",
              }}
            />
            <div
              style={{
                width: "9px",
                height: "9px",
                background: "#d4af37",
                transform: "rotate(45deg)",
                boxShadow: "0 0 14px rgba(212,175,55,0.9)",
              }}
            />
            <div
              style={{
                width: "70px",
                height: "1px",
                background: "linear-gradient(90deg, #d4af37, transparent)",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.5)",
              fontStyle: "italic",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.65,
              fontFamily: "'Crimson Text', Georgia, serif",
            }}
          >
            25+ years of Vedic wisdom guiding thousands toward love, peace &amp; prosperity
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="services-grid-layout">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <ServiceCard service={service} isVisible={visibleCards.has(index)} />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.4)",
              fontStyle: "italic",
              marginBottom: "18px",
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
              border: "1px solid rgba(212,175,55,0.45)",
              color: "#d4af37",
              textDecoration: "none",
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              letterSpacing: "2.5px",
              padding: "14px 36px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            ✦ VIEW ALL SERVICES ✦
          </Link>
        </div>
      </section>
    </>
  );
}