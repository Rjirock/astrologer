import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Pandit Ji' },
  { href: '/services', label: 'Our Services' },
  { href: '/contact', label: 'Contact Us' },
];

const services = [
  'Kundali Matching',
  'Palm Reading',
  'Vastu Consultation',
  'Numerology',
  'Marriage Astrology',
  'Tarot Reading',
];

// ✅ ADD YOUR REAL SOCIAL LINKS HERE
const socialLinks = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/YOUR_PAGE_NAME', // 👈 replace this
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/shree_jagannath_pandit?igsh=MW4zanJvZXFyNDNncw==', // 👈 replace this
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: 'https://www.youtube.com/@YOUR_CHANNEL',   // 👈 replace this
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://www.twitter.com/YOUR_USERNAME',   // 👈 replace this
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark-2)', borderTop: '1px solid rgba(200,150,12,0.2)' }}>
      {/* Gold ornament top */}
      <div className="gold-divider" />

      <div className="container mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: '2px solid rgba(200,150,12,0.5)' }}>
                <Image src="/logo.png" alt="Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="font-serif text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                  Shree Jagannath
                </p>
                <p className="font-serif text-sm font-bold" style={{ color: 'var(--cream)' }}>
                  Pandit Ram Kishan
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--cream-muted)' }}>
              Trusted astrologer guiding thousands of families towards clarity, peace, and prosperity through authentic Vedic wisdom.
            </p>

            {/* ✅ Social Icons with real links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(200,150,12,0.1)',
                    border: '1px solid rgba(200,150,12,0.2)',
                    color: 'var(--gold)',
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold mb-5" style={{ color: 'var(--gold)' }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-2 transition-colors duration-200 group"
                    style={{ color: 'var(--cream-muted)' }}
                  >
                    <span style={{ color: 'var(--gold)', fontSize: '0.5rem' }}>◆</span>
                    <span className="group-hover:text-gold" style={{ transition: 'color 0.2s' }}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-base font-bold mb-5" style={{ color: 'var(--gold)' }}>
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm flex items-center gap-2 group"
                    style={{ color: 'var(--cream-muted)' }}
                  >
                    <span style={{ color: 'var(--gold)', fontSize: '0.5rem' }}>◆</span>
                    <span>{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-bold mb-5" style={{ color: 'var(--gold)' }}>
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:7739606061"
                  className="flex items-start gap-3 text-sm transition-colors duration-200"
                  style={{ color: 'var(--cream-muted)' }}
                >
                  <Phone size={16} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
                  7739606061
                </a>
              </li>
              <li>
                <a
                  href="mailto:shreejagannathramkrishnashastr@gmail.com"
                  className="flex items-start gap-3 text-sm"
                  style={{ color: 'var(--cream-muted)' }}
                >
                  <Mail size={16} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
                  shreejagannathramkrishnashastr@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm" style={{ color: 'var(--cream-muted)' }}>
                  <MapPin size={16} style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }} />
                  Near Chappan Bhog, Gurudwara, Sakchi, Jamshedpur-831001
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917739606061"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-6 text-xs px-4 py-2.5 w-full justify-center"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-4"
        style={{ borderTop: '1px solid rgba(200,150,12,0.12)', background: 'var(--dark-1)' }}
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'var(--cream-muted)' }}>
            &copy; {new Date().getFullYear()} Shree Jagannath Pandit Ram Kishan. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(200,150,12,0.5)' }}>
            Jai Jagannath ✦ Jai Hanuman ✦ Om Namah Shivaya
          </p>
        </div>
      </div>
    </footer>
  );
}