export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    id: 'bylaws-and-sanctions',
    question: 'How do you handle BBMP or BDA plan sanctions and setback regulations in Bengaluru?',
    answer:
      'We coordinate the complete municipal drawing set in accordance with the latest BBMP (Bruhat Bengaluru Mahanagara Palike) or BDA (Bengaluru Development Authority) building bylaws. We ensure all required setbacks, floor area ratios (FAR), rainwater harvesting pits, and parking bays are mathematically compliant before submission, avoiding costly on-site revisions or notice disputes.',
  },
  {
    id: 'timeline-and-duration',
    question: 'What is the typical timeline for constructing an independent villa in Bengaluru?',
    answer:
      'A standard 4,000 to 6,000 sq.ft independent residence typically spans 12 to 15 months from groundbreak to ceremonial handover. This includes 2 months for foundation and plinth engineering, 4–5 months for the RCC framed superstructure and slab curing, 3 months for masonry and plastering, and 4 months for MEP rough-ins, flooring, waterproofing, and custom joinery. Our critical-path schedule accounts for monsoon weather windows.',
  },
  {
    id: 'soil-and-structural-safety',
    question: 'Do you conduct soil testing and structural analysis before designing the foundation?',
    answer:
      'Yes, on every project without exception. Bengaluru soils vary significantly—from hard rock outcroppings in North Bengaluru to deep red clay and former lakebeds in South and East Bengaluru. We commission geotechnical borehole testing to determine the safe bearing capacity (SBC) and water table level, followed by structural frame analysis in compliance with IS 456 and IS 1893 seismic standards.',
  },
  {
    id: 'boq-and-cost-escalations',
    question: 'How does your itemized BOQ prevent unexpected cost overruns during construction?',
    answer:
      'Our contracts are built upon an exhaustive Bill of Quantities (BOQ) that itemizes every cubic meter of concrete, metric ton of Fe550D TMT steel, square foot of blockwork, and electrical/plumbing fitting by brand and specification. Payment stages are strictly milestone-linked (e.g., completion of plinth, casting of 1st floor slab, completion of plastering). We do not apply arbitrary mid-project price escalations unless you formally request a scope amendment.',
  },
  {
    id: 'engineer-supervision-and-updates',
    question: 'How often are qualified civil engineers present on the construction site?',
    answer:
      'A qualified civil site engineer is assigned to supervise daily operations, verify bar-bending schedules, inspect shuttering alignment, and conduct slump and cube crushing tests for every RCC pour. You receive a structured weekly progress brief with dated site photographs, milestone status, and upcoming trade schedules, so you are always fully informed whether you are in Bengaluru or overseas.',
  },
  {
    id: 'waterproofing-and-structural-warranty',
    question: 'What warranties and guarantees do you provide for waterproofing and structural work?',
    answer:
      'We provide a 10-year structural stability guarantee on all RCC frames engineered and poured under our supervision. For critical moisture areas—including terrace roofs, sunken bathroom slabs, and basement retaining walls—we execute multi-layer elastomeric and polymer-modified cementitious waterproofing backed by a 5-year written leak-free guarantee, along with comprehensive post-handover defect liability support.',
  },
]

