"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Inline StarField (no external dependency)
function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.004 + 0.001,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.alpha += s.speed;
        if (s.alpha > 1) s.speed *= -1;
        if (s.alpha < 0) s.speed *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,220,120,${s.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

export default function ContactHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "clamp(280px, 50vh, 520px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f0a1e 0%, #1a1030 50%, #12082a 100%)",
      }}
    >
      <StarField />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(15,10,30,0.6) 60%, rgba(20,14,40,0.95) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative rings — hidden on tiny screens */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "clamp(12px, 5vw, 80px)",
          left: "clamp(8px, 3vw, 40px)",
          width: "clamp(48px, 8vw, 128px)",
          height: "clamp(48px, 8vw, 128px)",
          border: "1px solid rgba(200,160,60,0.18)",
          borderRadius: "50%",
          animation: "pulse 3s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "clamp(12px, 5vw, 80px)",
          right: "clamp(8px, 3vw, 40px)",
          width: "clamp(36px, 6vw, 96px)",
          height: "clamp(36px, 6vw, 96px)",
          border: "1px solid rgba(160,120,220,0.18)",
          borderRadius: "50%",
          animation: "pulse 4s ease-in-out infinite 1s",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "780px",
          margin: "0 auto",
          padding: "clamp(48px, 8vw, 96px) clamp(16px, 5vw, 32px)",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(12px, 2.5vw, 24px)" }}
        >
          {/* Badge */}
          <span
            style={{
              display: "inline-block",
              padding: "6px 18px",
              fontSize: "clamp(10px, 2vw, 13px)",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "1px solid rgba(200,160,60,0.35)",
              borderRadius: "999px",
              color: "#e8c84a",
              background: "rgba(200,160,60,0.08)",
              backdropFilter: "blur(4px)",
            }}
          >
            Get In Touch
          </span>

          {/* Heading */}
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(28px, 6vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.15,
              fontFamily: "'Georgia', 'Times New Roman', serif",
              color: "#f0e8d8",
            }}
          >
            Contact{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #e8c84a 0%, #c8922a 50%, #a060d8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pandit Ji
            </span>
          </h1>

          {/* Divider */}
          <div
            style={{
              width: "clamp(48px, 10vw, 80px)",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #e8c84a, transparent)",
              borderRadius: "2px",
            }}
          />

          {/* Subtext */}
          <p
            style={{
              margin: 0,
              maxWidth: "520px",
              fontSize: "clamp(13px, 2.2vw, 18px)",
              lineHeight: 1.7,
              color: "rgba(220,205,185,0.7)",
            }}
          >
            Reach out to schedule your personal consultation. Begin your journey towards
            clarity, peace, and spiritual enlightenment today.
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}