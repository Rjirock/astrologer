import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 77396 06061'],
    action: 'tel:+917739606061',
    isExternal: false,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    details: ['Chat on WhatsApp', 'Quick Response'],
    action: 'https://wa.me/917739606061',
    isExternal: true,
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['panditramkishan@gmail.com'],
    action: 'mailto:panditramkishan@gmail.com',
    isExternal: false,
  },
  {
    icon: MapPin,
    title: 'Location',
    details: ['Sakchi, near Chappan Bhog', 'Gurudwara, Jamshedpur'],
    action: 'https://maps.google.com',
    isExternal: true,
  },
];

const timings = [
  { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 6:00 PM' },
  { day: 'Sunday', time: 'By Appointment Only' },
];

export default function ContactInfo() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(1.25rem, 2.5vw, 2rem)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
      }}
    >
      <style>{`
        .contact-card-link {
          display: flex;
          align-items: center;
          gap: clamp(0.75rem, 1.5vw, 1rem);
          padding: clamp(0.875rem, 1.5vw, 1.125rem);
          border-radius: 0.875rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,150,12,0.15);
          text-decoration: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease;
        }
        .contact-card-link:hover {
          border-color: rgba(200,150,12,0.45);
          box-shadow: 0 6px 24px rgba(0,0,0,0.3);
          transform: translateX(3px);
        }
        .contact-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          flex-shrink: 0;
          transition: background 0.3s ease, color 0.3s ease;
          background: rgba(200,150,12,0.1);
          color: var(--gold);
        }
        .contact-card-link:hover .contact-icon-wrap {
          background: var(--gold);
          color: var(--dark-1);
        }
        .timing-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: clamp(0.5rem, 1vw, 0.75rem) 0;
          border-bottom: 1px solid rgba(200,150,12,0.12);
        }
        .timing-row:last-child { border-bottom: none; }
      `}</style>

      {/* Pandit Ji Card */}
      <div style={{
        position: 'relative',
        padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        borderRadius: '1rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(200,150,12,0.2)',
        overflow: 'hidden',
      }}>
        {/* Corner accent */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '8rem',
          height: '8rem',
          background: 'radial-gradient(circle at top right, rgba(200,150,12,0.15), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
          <div style={{
            width: 'clamp(64px, 8vw, 80px)',
            height: 'clamp(64px, 8vw, 80px)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(200,150,12,0.5)',
            flexShrink: 0,
          }}>
            <img src="/logo.png" alt="Shri Jagannath Pandit Ram Kishan" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'serif', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', fontWeight: 700, color: 'var(--cream)', margin: '0 0 2px' }}>
              Shri Jagannath Pandit
            </h3>
            <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 'clamp(13px, 1.3vw, 15px)', margin: '0 0 2px' }}>
              Ram Kishan
            </p>
            <p style={{ fontSize: 'clamp(11px, 1.1vw, 13px)', color: 'var(--cream-muted)', margin: 0 }}>
              25+ Years Experience
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.625rem, 1vw, 0.875rem)' }}>
        {contactDetails.map(({ icon: Icon, title, details, action, isExternal }, index) => (
          <a
            key={title}
            href={action}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="contact-card-link"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 0.4s ease ${index * 0.08 + 0.3}s, transform 0.4s ease ${index * 0.08 + 0.3}s, border-color 0.3s ease, box-shadow 0.3s ease`,
            }}
          >
            <div className="contact-icon-wrap" style={{
              width: 'clamp(40px, 4.5vw, 48px)',
              height: 'clamp(40px, 4.5vw, 48px)',
            }}>
              <Icon size={18} />
            </div>
            <div>
              <h4 style={{ fontWeight: 600, fontSize: 'clamp(13px, 1.3vw, 15px)', color: 'var(--cream)', margin: '0 0 2px' }}>
                {title}
              </h4>
              {details.map((detail, i) => (
                <p key={i} style={{ fontSize: 'clamp(11px, 1.1vw, 13px)', color: 'var(--cream-muted)', margin: 0, lineHeight: 1.5 }}>
                  {detail}
                </p>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Consultation Timings */}
      <div style={{
        padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        borderRadius: '1rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(200,150,12,0.2)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: 'clamp(0.875rem, 1.5vw, 1.25rem)' }}>
          <Clock size={18} style={{ color: 'var(--gold)' }} />
          <h3 style={{ fontFamily: 'serif', fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', fontWeight: 700, color: 'var(--cream)', margin: 0 }}>
            Consultation Hours
          </h3>
        </div>
        <div>
          {timings.map((item, index) => (
            <div key={index} className="timing-row">
              <span style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', color: 'var(--cream-muted)' }}>{item.day}</span>
              <span style={{ fontSize: 'clamp(12px, 1.2vw, 14px)', fontWeight: 600, color: 'var(--cream)' }}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Note */}
      <div style={{
        padding: 'clamp(0.875rem, 1.5vw, 1.125rem)',
        borderRadius: '0.75rem',
        background: 'rgba(200,150,12,0.07)',
        border: '1px solid rgba(200,150,12,0.25)',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 'clamp(11px, 1.2vw, 13px)', color: 'var(--cream)', margin: 0, lineHeight: 1.6 }}>
          <strong>Note:</strong> For urgent consultations, please call directly or send a WhatsApp message for quick response.
        </p>
      </div>
    </div>
  );
}