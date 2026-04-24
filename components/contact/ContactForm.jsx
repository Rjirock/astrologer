"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// ─── Icons (inline SVG wrappers) ────────────────────────────────────────────
const Icon = ({ d, size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <path d={d} />
  </svg>
);

const Icons = {
  User: () => <Icon d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Phone: () => <Icon d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  Calendar: () => <Icon d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />,
  Message: () => <Icon d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  Send: () => <Icon d="m22 2-7 20-4-9-9-4zm0 0L11 13" />,
  Check: () => <Icon d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3" size={32} />,
  Alert: () => <Icon d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" size={32} />,
};

// ─── EmailJS config ──────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_2hc8k09";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  || "XBqgTnZBJaW_Ijc-m";

// ─── Shared style tokens ─────────────────────────────────────────────────────
const GOLD   = "#e8c84a";
const GOLD2  = "#c8922a";
const BG     = "#0f0a1e";
const CARD   = "#17102e";
const BORDER = "rgba(200,160,60,0.18)";
const TEXT   = "#f0e8d8";
const MUTED  = "rgba(220,205,185,0.55)";

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "11px 12px 11px 40px",
  background: "rgba(255,255,255,0.04)",
  border: `1px solid ${BORDER}`,
  borderRadius: "10px",
  color: TEXT,
  fontSize: "clamp(13px, 2vw, 15px)",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontSize: "clamp(11px, 1.8vw, 13px)",
  fontWeight: 600,
  letterSpacing: "0.04em",
  color: MUTED,
  textTransform: "uppercase",
};

const iconWrapStyle = {
  position: "absolute",
  left: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  color: MUTED,
  pointerEvents: "none",
  display: "flex",
};

const SERVICES = [
  "Kundali Analysis",
  "Palmistry Reading",
  "Vastu Consultation",
  "Numerology",
  "Tarot Reading",
  "Marriage Matchmaking",
  "Career Guidance",
  "Other",
];

// ─── Reusable field wrapper ──────────────────────────────────────────────────
function Field({ label, icon: IconComp, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={labelStyle}>{label}</label>
      <div style={{ position: "relative" }}>
        <span style={iconWrapStyle}>
          <IconComp />
        </span>
        {children}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    user_name: "", user_email: "", user_phone: "", service: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focused, setFocused] = useState(null);
  const [selectOpen, setSelectOpen] = useState(false);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { ...formData, to_name: "Pandit Ram Kishan Ji" },
        EMAILJS_PUBLIC_KEY
      );
      if (res.status === 200) {
        setSubmitStatus("success");
        setFormData({ user_name: "", user_email: "", user_phone: "", service: "", message: "" });
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const fieldFocusStyle = (name) => ({
    ...inputStyle,
    borderColor: focused === name ? GOLD : BORDER,
    boxShadow: focused === name ? `0 0 0 3px rgba(232,200,74,0.12)` : "none",
  });

  return (
    <>
      <style>{`
        @media (min-width: 600px) {
          .cf-grid-2 { grid-template-columns: 1fr 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(220,205,185,0.3); }
        input:focus, textarea:focus, select:focus { outline: none; }
        .cf-select-opt { background: #1e1638; color: ${TEXT}; padding: 8px 12px; cursor: pointer; font-size: 14px; }
        .cf-select-opt:hover { background: rgba(232,200,74,0.15); color: ${GOLD}; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          padding: "clamp(20px, 5vw, 40px)",
          borderRadius: "20px",
          background: CARD,
          border: `1px solid ${BORDER}`,
          boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
          overflow: "hidden",
        }}
      >
        {/* Corner accents */}
        <div style={{ position:"absolute", top:0, right:0, width:60, height:60, borderTop:`2px solid ${BORDER}`, borderRight:`2px solid ${BORDER}`, borderTopRightRadius:20, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:0, left:0, width:60, height:60, borderBottom:`2px solid ${BORDER}`, borderLeft:`2px solid ${BORDER}`, borderBottomLeftRadius:20, pointerEvents:"none" }} />

        <h3 style={{ margin:"0 0 clamp(16px,3vw,28px)", fontSize:"clamp(18px,3.5vw,26px)", fontWeight:700, fontFamily:"Georgia, serif", color: TEXT }}>
          Book Your Consultation
        </h3>

        {/* ── Success ── */}
        {submitStatus === "success" && (
          <motion.div initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }}
            style={{ padding:"clamp(24px,5vw,40px)", textAlign:"center", borderRadius:14, background:"rgba(232,200,74,0.07)", border:`1px solid rgba(232,200,74,0.25)` }}>
            <div style={{ width:64, height:64, margin:"0 auto 16px", borderRadius:"50%", background:"rgba(232,200,74,0.15)", display:"flex", alignItems:"center", justifyContent:"center", color: GOLD }}>
              <Icons.Check />
            </div>
            <h4 style={{ margin:"0 0 8px", fontSize:"clamp(16px,3vw,20px)", fontWeight:700, color: TEXT }}>Message Sent!</h4>
            <p style={{ margin:0, color: MUTED, fontSize:"clamp(13px,2vw,15px)" }}>
              Pandit Ji will contact you within 24 hours.
            </p>
          </motion.div>
        )}

        {/* ── Error ── */}
        {submitStatus === "error" && (
          <motion.div initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }}
            style={{ padding:"clamp(24px,5vw,40px)", textAlign:"center", borderRadius:14, background:"rgba(200,60,60,0.07)", border:"1px solid rgba(200,60,60,0.25)" }}>
            <div style={{ width:64, height:64, margin:"0 auto 16px", borderRadius:"50%", background:"rgba(200,60,60,0.15)", display:"flex", alignItems:"center", justifyContent:"center", color:"#e05555" }}>
              <Icons.Alert />
            </div>
            <h4 style={{ margin:"0 0 8px", fontSize:"clamp(16px,3vw,20px)", fontWeight:700, color: TEXT }}>Something Went Wrong</h4>
            <p style={{ margin:"0 0 16px", color: MUTED, fontSize:"clamp(13px,2vw,15px)" }}>
              Please try again or contact us via WhatsApp.
            </p>
            <button onClick={() => setSubmitStatus(null)}
              style={{ padding:"8px 22px", borderRadius:"8px", border:`1px solid ${GOLD}`, background:"transparent", color: GOLD, cursor:"pointer", fontSize:14, fontWeight:600 }}>
              Try Again
            </button>
          </motion.div>
        )}

        {/* ── Form ── */}
        {!submitStatus && (
          <form ref={formRef} onSubmit={handleSubmit}
            style={{ display:"flex", flexDirection:"column", gap:"clamp(12px,2.5vw,20px)" }}>

            {/* Row 1 */}
            <div className="cf-grid-2"
              style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(12px,2.5vw,20px)" }}>
              <Field label="Full Name" icon={Icons.User}>
                <input name="user_name" placeholder="Your name" value={formData.user_name}
                  onChange={handleChange} required
                  onFocus={() => setFocused("user_name")} onBlur={() => setFocused(null)}
                  style={fieldFocusStyle("user_name")} />
              </Field>
              <Field label="Email Address" icon={Icons.Mail}>
                <input name="user_email" type="email" placeholder="your@email.com" value={formData.user_email}
                  onChange={handleChange} required
                  onFocus={() => setFocused("user_email")} onBlur={() => setFocused(null)}
                  style={fieldFocusStyle("user_email")} />
              </Field>
            </div>

            {/* Row 2 */}
            <div className="cf-grid-2"
              style={{ display:"grid", gridTemplateColumns:"1fr", gap:"clamp(12px,2.5vw,20px)" }}>
              <Field label="Phone Number" icon={Icons.Phone}>
                <input name="user_phone" type="tel" placeholder="+91 98765 43210" value={formData.user_phone}
                  onChange={handleChange} required
                  onFocus={() => setFocused("user_phone")} onBlur={() => setFocused(null)}
                  style={fieldFocusStyle("user_phone")} />
              </Field>

              {/* Custom Select */}
              <div style={{ display:"flex", flexDirection:"column" }}>
                <label style={labelStyle}>Select Service</label>
                <div style={{ position:"relative" }}>
                  <span style={iconWrapStyle}><Icons.Calendar /></span>
                  <button type="button" onClick={() => setSelectOpen((o) => !o)}
                    style={{
                      ...fieldFocusStyle("service"),
                      padding: "11px 36px 11px 40px",
                      textAlign:"left", cursor:"pointer", width:"100%",
                      borderColor: selectOpen ? GOLD : (focused === "service" ? GOLD : BORDER),
                      boxShadow: selectOpen ? `0 0 0 3px rgba(232,200,74,0.12)` : "none",
                      display:"flex", alignItems:"center",
                      color: formData.service ? TEXT : "rgba(220,205,185,0.3)",
                    }}>
                    {formData.service || "Choose a service"}
                  </button>
                  {/* Chevron */}
                  <svg style={{ position:"absolute", right:12, top:"50%", transform:`translateY(-50%) rotate(${selectOpen?180:0}deg)`, transition:"transform 0.2s", color: MUTED, pointerEvents:"none" }}
                    xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  {selectOpen && (
                    <div style={{ position:"absolute", top:"calc(100% + 4px)", left:0, right:0, borderRadius:10, overflow:"hidden", border:`1px solid ${BORDER}`, boxShadow:"0 16px 32px rgba(0,0,0,0.5)", zIndex:50 }}>
                      {SERVICES.map((s) => (
                        <div key={s} className="cf-select-opt"
                          style={{ background: formData.service===s ? "rgba(232,200,74,0.15)" : "#1e1638", color: formData.service===s ? GOLD : TEXT, padding:"10px 14px", cursor:"pointer", fontSize:"clamp(13px,2vw,14px)" }}
                          onClick={() => { setFormData((p)=>({...p, service:s})); setSelectOpen(false); }}>
                          {s}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Message */}
            <Field label="Your Message" icon={Icons.Message}>
              <textarea name="message" placeholder="Please share your date of birth, time, and place for accurate consultation. Describe your concerns..."
                value={formData.message} onChange={handleChange} required rows={5}
                onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                style={{
                  ...fieldFocusStyle("message"),
                  paddingTop:12, paddingBottom:12,
                  resize:"vertical", minHeight:100,
                  lineHeight:1.6, verticalAlign:"top",
                  borderColor: focused === "message" ? GOLD : BORDER,
                  boxShadow: focused === "message" ? `0 0 0 3px rgba(232,200,74,0.12)` : "none",
                }} />
            </Field>

            {/* Submit */}
            <button type="submit" disabled={isSubmitting}
              style={{
                width:"100%",
                padding: "clamp(12px,2.5vw,16px)",
                borderRadius:12,
                border:"none",
                background: isSubmitting ? "rgba(200,160,60,0.4)" : `linear-gradient(135deg, ${GOLD} 0%, ${GOLD2} 60%, #8040c0 100%)`,
                color: "#0f0a1e",
                fontWeight:700,
                fontSize:"clamp(14px,2.5vw,17px)",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                display:"flex", alignItems:"center", justifyContent:"center", gap:10,
                transition:"opacity 0.2s, transform 0.1s",
                letterSpacing:"0.04em",
                fontFamily:"inherit",
              }}
              onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.opacity = "0.9"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
              {isSubmitting ? (
                <>
                  <span style={{ width:18, height:18, border:"2px solid rgba(0,0,0,0.25)", borderTopColor:"#0f0a1e", borderRadius:"50%", animation:"spin 0.7s linear infinite", display:"inline-block" }} />
                  Sending...
                </>
              ) : (
                <>
                  <Icons.Send />
                  Send Message
                </>
              )}
            </button>

            <p style={{ margin:0, textAlign:"center", fontSize:"clamp(11px,1.8vw,12px)", color: MUTED }}>
              By submitting, you agree to receive consultation updates via email and phone.
            </p>
          </form>
        )}
      </motion.div>
    </>
  );
}