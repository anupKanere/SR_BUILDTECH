import React from 'react'
import type { Metadata } from 'next'
import { WorkPageClient } from './WorkPageClient'

export const metadata: Metadata = {
  title: 'Work & Projects — Turnkey Villas, Commercial Builds & Interiors',
  description:
    'Curated case studies of completed luxury villas, commercial steel erections, and bespoke architectural interior projects delivered across Bengaluru by SR BUILDTEC.',
}

export default function WorkPage() {
  return <WorkPageClient />
}

