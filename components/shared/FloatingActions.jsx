"use client"

import { useState, useEffect } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '+917739606061';
const WHATSAPP_NUMBER = '917739606061';
const WHATSAPP_MESSAGE = encodeURIComponent(
  `🙏 Namaste Pandit Ji,\n\nI visited your website and would like to book a consultation.\n\nI am seeking guidance regarding:\n• [Please specify: Kundali/Marriage/Career/Vastu/Other]\n\nKindly let me know your availability and consultation process.\n\nThank you.`
);

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1400);
    const t2 = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }, 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fab-in {
          from { opacity: 0; transform: scale(0.5) translateY(40px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fab-sub-in {
          from { opacity: 0; transform: scale(0.7) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fab-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,150,12,0.45), 0 8px 32px rgba(0,0,0,0.5); }
          50%       { box-shadow: 0 0 0 12px rgba(200,150,12,0), 0 8px 32px rgba(0,0,0,0.5); }
        }
        @keyframes ring-ping {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes tooltip-in {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <div
        aria-label="Contact actions"
        style={{
          position: 'fixed',
          bottom: 'clamp(1rem, 3vw, 1.5rem)',
          right: 'clamp(1rem, 3vw, 1.5rem)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 'clamp(0.6rem, 1.5vw, 0.875rem)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        {/* Tooltip */}
        {showTooltip && !expanded && (
          <div
            style={{
              position: 'absolute',
              bottom: 'calc(100% + 0.5rem)',
              right: 0,
              background: 'rgba(8,3,10,0.95)',
              border: '1px solid rgba(200,150,12,0.35)',
              borderRadius: '12px',
              padding: '10px 16px',
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(12px)',
              animation: 'tooltip-in 0.3s ease both',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(11px, 1.2vw, 13px)',
                color: 'var(--cream)',
                fontWeight: 600,
                margin: 0,
              }}
            >
              🙏 Need guidance? Connect now!
            </p>
            {/* Arrow */}
            <div
              style={{
                position: 'absolute',
                bottom: '-7px',
                right: '22px',
                width: '12px',
                height: '12px',
                background: 'rgba(8,3,10,0.95)',
                border: '1px solid rgba(200,150,12,0.35)',
                borderTop: 'none',
                borderLeft: 'none',
                transform: 'rotate(45deg)',
              }}
            />
          </div>
        )}

        {/* Sub-actions */}
        {expanded && (
          <>
            {/* Call */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                animation: 'fab-sub-in 0.3s ease 0.05s both',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(11px, 1.2vw, 13px)',
                  fontWeight: 600,
                  color: 'var(--cream)',
                  background: 'rgba(8,3,10,0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  backdropFilter: 'blur(8px)',
                  whiteSpace: 'nowrap',
                }}
              >
                Call Now
              </span>
              <a
                href={`tel:${PHONE_NUMBER}`}
                aria-label="Call Pandit Ji"
                style={{
                  width: 'clamp(50px, 6vw, 58px)',
                  height: 'clamp(50px, 6vw, 58px)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: '#fff',
                  boxShadow: '0 6px 24px rgba(59,130,246,0.45)',
                  flexShrink: 0,
                  transition:
                    'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(59,130,246,0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(59,130,246,0.45)';
                }}
              >
                <Phone
                  style={{
                    width: 'clamp(20px, 2.5vw, 24px)',
                    height: 'clamp(20px, 2.5vw, 24px)',
                  }}
                />
              </a>
            </div>

            {/* WhatsApp */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                animation: 'fab-sub-in 0.3s ease both',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(11px, 1.2vw, 13px)',
                  fontWeight: 600,
                  color: 'var(--cream)',
                  background: 'rgba(8,3,10,0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  backdropFilter: 'blur(8px)',
                  whiteSpace: 'nowrap',
                }}
              >
                WhatsApp
              </span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                style={{
                  width: 'clamp(50px, 6vw, 58px)',
                  height: 'clamp(50px, 6vw, 58px)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #22c55e, #15803d)',
                  color: '#fff',
                  boxShadow: '0 6px 24px rgba(34,197,94,0.45)',
                  flexShrink: 0,
                  transition:
                    'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(34,197,94,0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(34,197,94,0.45)';
                }}
              >
                <svg
                  style={{
                    width: 'clamp(22px, 2.8vw, 28px)',
                    height: 'clamp(22px, 2.8vw, 28px)',
                  }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </>
        )}

        {/* Main FAB */}
        <div
          style={{
            position: 'relative',
            animation: 'fab-in 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
          }}
        >
          {/* Ping rings — only when collapsed */}
          {!expanded && (
            <>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '2px solid rgba(200,150,12,0.45)',
                  animation: 'ring-ping 2s ease-out infinite',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '2px solid rgba(200,150,12,0.3)',
                  animation: 'ring-ping 2s ease-out 0.6s infinite',
                  pointerEvents: 'none',
                }}
              />
            </>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? 'Close contact menu' : 'Open contact menu'}
            aria-expanded={expanded}
            style={{
              position: 'relative',
              width: 'clamp(52px, 6.5vw, 64px)',
              height: 'clamp(52px, 6.5vw, 64px)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: expanded
                ? 'rgba(60,60,70,0.95)'
                : 'linear-gradient(135deg, var(--gold) 0%, var(--saffron) 50%, var(--gold) 100%)',
              backgroundSize: '200% 200%',
              border: 'none',
              cursor: 'pointer',
              animation: !expanded ? 'fab-pulse 2.5s ease-in-out infinite' : 'none',
              boxShadow: expanded
                ? '0 8px 32px rgba(0,0,0,0.5)'
                : '0 8px 32px rgba(200,150,12,0.4)',
              transition:
                'background 0.3s ease, box-shadow 0.3s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
              color: expanded ? 'var(--cream)' : 'var(--dark-1)',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span
              style={{
                display: 'block',
                transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                transform: expanded ? 'rotate(135deg)' : 'rotate(0deg)',
              }}
            >
              {expanded ? (
                <X
                  style={{
                    width: 'clamp(22px, 2.8vw, 28px)',
                    height: 'clamp(22px, 2.8vw, 28px)',
                  }}
                />
              ) : (
                <MessageCircle
                  style={{
                    width: 'clamp(22px, 2.8vw, 28px)',
                    height: 'clamp(22px, 2.8vw, 28px)',
                  }}
                />
              )}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}