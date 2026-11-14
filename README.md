# SR BUILDTEC — Construction & Civil Engineering Studio Website

A modern, high-performance, multi-page website for **SR BUILDTEC**, a Bengaluru-based construction and civil engineering firm specializing in turnkey residential villas, commercial structures, structural analysis, and bespoke interior spaces.

Built with **Next.js App Router (Turbopack)**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Visual Direction & Identity Differentiation

The previous website and competitor reference sites relied on generic templates characterized by dark navy/slate backgrounds, aggressive orange/red accents, condensed display type, full-bleed hero banners with floating stat counters, and uniform 3×2 icon grids.

### The New Visual Language:
- **Palette**: Warm, light, editorial architectural palette:
  - Background: Raw sand / limestone (`#F4F0E8` / `#FAF8F5`)
  - Elevated surfaces: Clean architectural white (`#FFFFFF`) and muted linen stone (`#EAE4D8`)
  - Typography & primary tone: Grounded deep forest green (`#1F3A2E`)
  - Single accent: Architectural muted brass (`#B08D57` / `#C5A36E`)
  - Hairline rules: 1px architectural drawing rules (`#DDD6C8`)
- **Typography**: 
  - Headings: Sentence-case serif typography (`Cormorant Garamond` / `Fraunces`)
  - Body: Rational, highly readable sans-serif (`Manrope`)
  - Zero condensed uppercase display fonts (no Oswald/Bebas/Raleway display titles)
- **Layout Language**: Asymmetric editorial layouts, offset image pairings, numbered section markers (`01`, `02`, `03`), left-aligned headings, square or minimal 2px corners (`rounded-sm`), and flat or hairline elevations.
- **Header**: Minimal, sticky with clean logo placement (no circular cropping), navigation items (`Work`, `Services`, `Process`, `Studio`, `Contact`), and an understated text link `Start a project →`. Full-screen mobile overlay menu.
- **Mobile Actions**: One slim sticky bottom contact bar with direct Call (`tel:+918660326541`) and WhatsApp (`wa.me/918660326541`).

---

## 2. Multi-Page Site Structure & Sitemap

Unlike the previous one-page endless scroll, the site is organized as an intentional multi-page architectural journal:

| Route | Page | Purpose & Scope |
|---|---|---|
| `/` | **Home** | Split hero with tall featured project photo, project-first horizontal strip (6 projects), 3 full-width numbered alternating service pillars with photography (not an icon grid), vertical 4-phase process timeline, 3 unexaggerated commitments, 6-question FAQ accordion, and closing quote consultation section. |
| `/studio` | **Studio (About)** | 10+ years story in Bengaluru, geotechnical and municipal site approach, continuous narrative working values (not cards), and clearly structured engineering leadership section. |
| `/services` | **Services Hub** | Comprehensive capabilities overview across all 3 pillars, linking to deep dive subpages. |
| `/services/design-engineering` | **01 Design & Engineering** | Structural Drawings, Architectural Drawings, Structural Analysis, BOQ Preparation, and Fire & Safety Planning with formal deliverables and Bengaluru context. |
| `/services/construction` | **02 Construction** | Residential Construction, Commercial Construction, Project Management, and Metal Fabrication & Design with contract deliverables. |
| `/services/interiors-specialty` | **03 Interiors & Specialty** | Interior Planning, Drywall Partitions, Landscaping, Modular Kitchens, Custom Joinery/Wardrobes, and Fitness Suites. |
| `/work` | **Work (Projects)** | Curated case study archive with interactive category filters (*All, Villas, Commercial, Interiors, Structural & Site*), 14 detailed projects, interactive keyboard-accessible Lightbox viewer, and an expandable 30-photo technical on-site progress archive. |
| `/work/[slug]` | **Case Study Page** | Dedicated SSG case study page for each project featuring geotechnical challenges, engineering solutions, scope deliverables, gallery grid with lightbox, and next/prev project navigation. |
| `/process` | **Process** | Four phases: *Planning & Blueprint*, *Foundation & Earthwork*, *Superstructure & Engineering*, and *Finishing & Handover* with client handover deliverables and on-site testing protocols. |
| `/contact` | **Contact** | Quote consultation form (with phone/email validation, project scope, locality, budget range, and honeypot spam protection), direct WhatsApp chat, telephone click-to-call, email, Google Maps reference, and studio hours. |
| `/_not-found` | **Custom 404** | Warm sand/forest styled not-found page with clear navigation back to active sections. |
| `/sitemap.xml` | **Dynamic XML Sitemap** | Automated SEO index of all static routes, pillars, and 14 project slugs. |
| `/robots.txt` | **Robots Directive** | Directs search engine crawlers with sitemap pointer. |

---

## 3. Getting Started & Development

### Prerequisites
- Node.js 18+ (tested with Node 20 / 22 / 25)
- npm or yarn

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

### Production Build
```bash
# Build production bundle with Next.js Turbopack
npm run build

# Start production server
npm run start
```

---

## 4. Environment Variables

Create a `.env.local` file in the project root:

```bash
# Canonical site URL for SEO metadata, OpenGraph, and sitemap generation
NEXT_PUBLIC_SITE_URL=https://srbuildtec.in

# Optional: Email dispatch for contact form submissions via Resend
RESEND_API_KEY=re_123456789
RESEND_FROM=inquiries@srbuildtec.in
CONTACT_EMAIL=srbuildtec.blr@gmail.com
```

*Note: If `RESEND_API_KEY` is omitted, the contact form API route will still validate inputs, apply rate-limiting and anti-spam honeypot checks, log the submission to the server console, and return a clean success state to the user without failing.*

---

## 5. Content-Editing Guide

All client-facing copy, projects, services, FAQs, and business details are decoupled from UI components and stored in the `/data` directory for seamless editing:

### 1. Business Info & Contact (`data/site.ts`)
- Phone numbers, WhatsApp message pre-fill text, email address.
- Studio working hours and Bengaluru office location.
- Social media links (Instagram, Facebook, YouTube).
- Core working commitments and legal claims notice.

### 2. Services & Deliverables (`data/services.ts`)
- The 3 service pillars (`design-engineering`, `construction`, `interiors-specialty`).
- Individual service titles, technical descriptions, Bengaluru municipal context, and formal client deliverables.

### 3. Projects & Case Studies (`data/projects.ts`)
- `curatedProjects`: Add, update, or reorder the 14 featured case studies. Each project has:
  - `slug`: URL slug (e.g., `contemporary-cantilevered-villa`)
  - `title`, `locality`, `year`, `builtUpArea`, `timeline`, `clientType`
  - `shortSummary`, `challenge`, `engineeringSolution`
  - `heroImage` & `gallery` array with real descriptive `alt` text.
- `archivePhotos`: Photos displayed in the expandable "More site photos" section.

### 4. Frequently Asked Questions (`data/faqs.ts`)
- Add or modify questions and answers covering BBMP approvals, timelines, soil testing, payment stages, and warranties.

### 5. Design Tokens (`data/design-tokens.ts`)
- Central source of truth for color tokens, typography scales, layout spacing, border radii, and transitions.

---

## 6. Deployment to Vercel

The site is built on the standard Next.js App Router and deploys seamlessly to Vercel:

1. Push your code to GitHub / GitLab / Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project** and import the repository.
3. Configure Environment Variables in the project settings:
   - `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`
   - `RESEND_API_KEY` (if using Resend for emails)
4. Click **Deploy**. Vercel will automatically build the static pages and deploy the serverless contact API route.

---

## 7. Checklist for Client Confirmation

| Item | Status | Action Required from Client |
|---|---|---|
| **Verified Certifications** | Strictly omitted | Confirm if any official ISO, OSHA, or government builder certifications exist. If none, keep omitted as currently designed. |
| **Testimonials** | Omitted | Provide real client quotes with client initials/names (e.g. "Private Residence Client, Bengaluru"). Placeholder component is ready to plug in. |
| **Final Tagline** | Current: *"Building Excellence, Engineering The Future"* | Confirm if this tagline should be retained or replaced with a new custom slogan. |
| **Office Address** | Bengaluru, Karnataka | Provide specific street/building address if a physical studio entrance should be listed on the contact page. |
| **Team Profiles** | Verified structure in place | Optional: Provide real headshots and names of founders/lead civil engineers for the Studio page. |
