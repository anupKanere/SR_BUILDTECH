import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileStickyBar } from '@/components/layout/MobileStickyBar'
import { SkipToContent } from '@/components/ui/SkipToContent'
import { siteConfig } from '@/data/site'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://srbuildtec.in'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F4F0E8',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — Civil Engineering & Turnkey Construction | Bengaluru`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Bengaluru-based construction and civil engineering firm specializing in turnkey residential villas, commercial structures, structural analysis, and bespoke interior spaces.',
  keywords: [
    'SR BUILDTEC',
    'Bengaluru construction company',
    'civil engineering Bengaluru',
    'turnkey residential villa Bengaluru',
    'commercial construction Bengaluru',
    'structural drawings Bengaluru',
    'BOQ preparation',
    'turnkey villa construction',
    'Bengaluru builder',
    'residential construction',
  ],
  authors: [{ name: 'SR BUILDTEC' }],
  creator: 'SR BUILDTEC',
  publisher: 'SR BUILDTEC',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    title: 'SR BUILDTEC — Engineering & Construction in Bengaluru',
    description:
      'Turnkey residential villas, commercial structures, structural engineering, and bespoke interiors with complete BOQ transparency in Bengaluru.',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/gallery/IMG-20261017-WA0023.jpg',
        width: 1200,
        height: 630,
        alt: 'SR BUILDTEC Contemporary Villa Handover in Bengaluru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR BUILDTEC — Engineering & Construction in Bengaluru',
    description:
      'Turnkey residential villas, commercial structures, and civil engineering in Bengaluru.',
    images: ['/images/gallery/IMG-20261017-WA0023.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/company-logo.jpeg',
    shortcut: '/company-logo.jpeg',
    apple: '/company-logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteUrl}/images/gallery/IMG-20261017-WA0023.jpg`,
    logo: `${siteUrl}/company-logo.jpeg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9716',
      longitude: '77.5946',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
    ],
    priceRange: '₹₹₹',
    areaServed: {
      '@type': 'City',
      name: 'Bengaluru',
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${manrope.variable} font-sans bg-sand text-forest antialiased min-h-screen flex flex-col selection:bg-forest selection:text-sand`}
      >
        <SkipToContent />
        <Header />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  )
}
