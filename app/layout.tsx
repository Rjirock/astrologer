import type { Metadata, Viewport } from 'next'
import { Cinzel, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/shared/FloatingActions'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Shree Jagannath Pandit Ram Kishan | Trusted Astrologer',
  description:
    'Shree Jagannath Pandit Ram Kishan — a trusted astrologer offering personalized guidance in Kundali Matching, Palm Reading, Vastu, Numerology, Marriage Astrology, and more. Book your consultation today.',
  keywords:
    'astrologer, pandit, kundali, palm reading, vastu, numerology, marriage astrology, tarot, Jagannath, Ram Kishan, jyotish',
  authors: [{ name: 'Shree Jagannath Pandit Ram Kishan' }],
  creator: 'Shree Jagannath Pandit Ram Kishan',
  openGraph: {
    title: 'Shree Jagannath Pandit Ram Kishan | Trusted Astrologer',
    description:
      'Trusted astrologer with decades of experience. Personalized solutions for life, marriage, career, and peace.',
    type: 'website',
    locale: 'en_IN',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
  generator: 'Next.js',
}

export const viewport: Viewport = {
  themeColor: '#C8960C',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingActions />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
