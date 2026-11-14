export interface SiteConfig {
  name: string
  legalName: string
  tagline: string
  description: string
  experienceYears: number
  location: {
    city: string
    state: string
    country: string
    region: string
    postalCodePlaceholder: string
    formatted: string
  }
  contact: {
    phone: string
    phoneDisplay: string
    whatsapp: string
    whatsappDisplay: string
    whatsappLink: string
    email: string
  }
  hours: {
    monToSat: string
    sunday: string
    whatsappSupport: string
  }
  socials: {
    instagram: string
    facebook: string
    youtube: string
  }
  navLinks: Array<{ label: string; href: string }>
  commitments: Array<{
    number: string
    title: string
    description: string
  }>
  verifiedClaimsNotice: string
}

export const siteConfig: SiteConfig = {
  name: 'SR BUILDTEC',
  legalName: 'SR BUILDTEC Construction & Engineering',
  tagline: 'Building Excellence, Engineering The Future',
  description:
    'Bengaluru-based construction and civil engineering firm specializing in turnkey residential villas, commercial structures, structural analysis, and bespoke interior spaces.',
  experienceYears: 10,
  location: {
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    region: 'South India',
    postalCodePlaceholder: '560001',
    formatted: 'Bengaluru, Karnataka, India',
  },
  contact: {
    phone: '+918660326541',
    phoneDisplay: '+91 86603 26541',
    whatsapp: '918660326541',
    whatsappDisplay: '+91 86603 26541',
    whatsappLink: 'https://wa.me/918660326541?text=Hello%20SR%20BUILDTEC,%20I%20would%20like%20to%20discuss%20a%20construction%20project%20in%20Bengaluru.',
    email: 'srbuildtec.blr@gmail.com',
  },
  hours: {
    monToSat: 'Monday – Saturday: 9:00 AM – 7:00 PM',
    sunday: 'Sunday: 10:00 AM – 5:00 PM',
    whatsappSupport: 'WhatsApp enquiries answered 24/7',
  },
  socials: {
    instagram: 'https://instagram.com/srbuildtec',
    facebook: 'https://facebook.com/srbuildtec',
    youtube: 'https://youtube.com/@srbuildtec',
  },
  navLinks: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Studio', href: '/studio' },
    { label: 'Contact', href: '/contact' },
  ],
  commitments: [
    {
      number: '01',
      title: 'Structural rigour before groundbreak',
      description:
        'Every project begins with peer-reviewed structural calculations, architectural drawings, and soil-specific foundation designs before a single excavation bucket enters the site.',
    },
    {
      number: '02',
      title: 'Transparent, itemized BOQ contracts',
      description:
        'We provide detailed Bill of Quantities with clear material specifications, brand tiers, and stage-linked payments. Zero surprise cost escalations or arbitrary markup.',
    },
    {
      number: '03',
      title: 'Engineer-led site supervision',
      description:
        'Casting, steel reinforcement binds, cube compressive tests, and curing cycles are directly inspected by qualified civil engineers with weekly written progress briefs to you.',
    },
  ],
  verifiedClaimsNotice:
    'SR BUILDTEC adheres strictly to verified engineering standards and Bengaluru local bylaws. We do not display unverified third-party certifications.',
}

