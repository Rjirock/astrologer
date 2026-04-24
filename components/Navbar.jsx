'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const pathname = usePathname();
  const menuRef = useRef(null);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        ref={menuRef}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
          background: scrolled ? 'rgba(8, 3, 10, 0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,150,12,0.18)' : 'none',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.6)' : 'none',
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: '1280px', padding: '0 clamp(1rem, 4vw, 2rem)' }}
        >
          <div className="flex items-center justify-between" style={{ height: 'clamp(64px, 8vw, 80px)' }}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0" style={{ textDecoration: 'none' }}>
              <div
                className="relative rounded-full overflow-hidden flex-shrink-0 transition-all duration-500 group-hover:scale-105"
                style={{
                  width: 'clamp(40px, 5vw, 52px)',
                  height: 'clamp(40px, 5vw, 52px)',
                  border: '2px solid rgba(200,150,12,0.6)',
                  boxShadow: '0 0 16px rgba(200,150,12,0.25), inset 0 0 8px rgba(200,150,12,0.08)',
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Shree Jagannath Pandit Ram Kishan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden xs:block" style={{ lineHeight: 1.2 }}>
                <p
                  className="font-serif uppercase tracking-widest"
                  style={{ fontSize: 'clamp(9px, 1.1vw, 11px)', color: 'var(--gold)', letterSpacing: '0.2em' }}
                >
                  Shree Jagannath
                </p>
                <p
                  className="font-serif font-bold"
                  style={{ fontSize: 'clamp(12px, 1.4vw, 15px)', color: 'var(--cream)', letterSpacing: '0.04em' }}
                >
                  Pandit Ram Kishan
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center" style={{ gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-serif uppercase tracking-widest relative group"
                    style={{
                      fontSize: 'clamp(11px, 1.1vw, 13px)',
                      color: isActive ? 'var(--gold)' : 'var(--cream-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      letterSpacing: '0.12em',
                    }}
                    onMouseEnter={e => { if (!isActive) e.target.style.color = 'var(--cream)'; }}
                    onMouseLeave={e => { if (!isActive) e.target.style.color = 'var(--cream-muted)'; }}
                  >
                    {link.label}
                    <span
                      className="absolute left-0 -bottom-1 h-px transition-all duration-400"
                      style={{
                        width: isActive ? '100%' : '0%',
                        background: 'linear-gradient(90deg, var(--gold), var(--saffron-light))',
                      }}
                    />
                    <span
                      className="absolute left-0 -bottom-1 h-px w-0 group-hover:w-full transition-all duration-400"
                      style={{ background: 'rgba(200,150,12,0.5)' }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:7739606061"
                className="hidden sm:inline-flex items-center gap-2 font-serif font-bold uppercase tracking-wider rounded-xl transition-all duration-300"
                style={{
                  fontSize: 'clamp(10px, 1.1vw, 12px)',
                  padding: 'clamp(8px, 1.2vw, 11px) clamp(14px, 2vw, 22px)',
                  background: 'linear-gradient(135deg, var(--gold) 0%, var(--saffron) 50%, var(--gold) 100%)',
                  backgroundSize: '200% 200%',
                  color: 'var(--dark-1)',
                  boxShadow: '0 4px 16px rgba(200,150,12,0.3)',
                  letterSpacing: '0.08em',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(200,150,12,0.5)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(200,150,12,0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Phone size={13} />
                Call Now
              </a>

              {/* Hamburger */}
              <button
                className="lg:hidden flex items-center justify-center rounded-xl transition-all duration-300"
                style={{
                  width: '42px',
                  height: '42px',
                  color: 'var(--gold)',
                  background: menuOpen ? 'rgba(200,150,12,0.15)' : 'rgba(200,150,12,0.08)',
                  border: '1px solid rgba(200,150,12,0.25)',
                  flexShrink: 0,
                }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span
                  style={{
                    display: 'block',
                    transition: 'transform 0.3s ease, opacity 0.2s ease',
                    transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className="lg:hidden"
          style={{
            maxHeight: menuOpen ? '100dvh' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
            background: 'rgba(8,3,10,0.99)',
            borderTop: menuOpen ? '1px solid rgba(200,150,12,0.15)' : 'none',
          }}
        >
          <div
            style={{
              padding: 'clamp(1.25rem, 5vw, 2rem) clamp(1rem, 4vw, 2rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
              transition: 'opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s',
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = activeLink === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif uppercase tracking-widest flex items-center justify-between rounded-xl"
                  style={{
                    fontSize: 'clamp(13px, 3.5vw, 16px)',
                    padding: 'clamp(12px, 3vw, 16px)',
                    color: isActive ? 'var(--gold)' : 'var(--cream)',
                    textDecoration: 'none',
                    letterSpacing: '0.12em',
                    background: isActive ? 'rgba(200,150,12,0.08)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(200,150,12,0.2)' : 'transparent',
                    transitionDelay: `${i * 40}ms`,
                    transition: 'background 0.2s ease, color 0.2s ease',
                    marginBottom: '0.25rem',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--gold)',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Mobile action buttons */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(200,150,12,0.12)',
              }}
            >
              <a
                href="tel:7739606061"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 font-serif font-bold uppercase tracking-wider rounded-xl"
                style={{
                  padding: '14px 16px',
                  fontSize: '12px',
                  background: 'linear-gradient(135deg, var(--gold), var(--saffron))',
                  color: 'var(--dark-1)',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                }}
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href="https://wa.me/917739606061"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 font-serif font-bold uppercase tracking-wider rounded-xl"
                style={{
                  padding: '14px 16px',
                  fontSize: '12px',
                  background: 'rgba(37,211,102,0.12)',
                  border: '2px solid rgba(37,211,102,0.35)',
                  color: '#25D366',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                }}
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(2px)' }}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}