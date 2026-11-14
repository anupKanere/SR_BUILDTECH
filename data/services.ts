export interface ServiceItem {
  id: string
  title: string
  shortDesc: string
  detailedDesc: string
  deliverables: string[]
  bengaluruContext?: string
}

export interface ServicePillar {
  slug: string
  number: string
  title: string
  shortTitle: string
  summary: string
  detailedIntro: string
  heroImage: string
  heroImageAlt: string
  services: ServiceItem[]
}

export const servicePillars: ServicePillar[] = [
  {
    slug: 'design-engineering',
    number: '01',
    title: 'Design & Engineering',
    shortTitle: 'Design & Engineering',
    summary:
      'Precision architectural planning, computer-aided structural calculations, and comprehensive quantity estimation engineered for long-term durability.',
    detailedIntro:
      'We combine architectural clarity with rigorous civil engineering. Before work begins on-site, every beam, column, and foundation footing is modeled to satisfy Indian Standard (IS) codes, optimizing material efficiency while guaranteeing seismic and gravity load resilience in Bengaluru’s red clay and varied subsoils.',
    heroImage: '/images/gallery/IMG-20261017-WA0074.jpg',
    heroImageAlt: 'Structural blockwork, RCC lintels, and precision column alignment on an active Bengaluru site',
    services: [
      {
        id: 'structural-drawings',
        title: 'Structural Drawings',
        shortDesc: 'Comprehensive reinforcement details, column schedules, and footing layouts.',
        detailedDesc:
          'Detailed structural working drawings covering foundation footings, grade beams, column centers, slab reinforcement, lintels, and staircases. Each sheet is drafted with bar bending schedules (BBS) to eliminate site cutting wastage.',
        deliverables: [
          'Foundation & footing layout drawings',
          'Column center-line and reinforcement schedules',
          'Plinth and floor beam cross-sections',
          'Slab reinforcement details and bar-bending schedules',
        ],
        bengaluruContext: 'Tailored for BBMP setback guidelines and local subsoil bearing capacity tests.',
      },
      {
        id: 'architectural-drawings',
        title: 'Architectural Drawings',
        shortDesc: 'Spatial layouts, working elevations, cross-sections, and municipal approval sets.',
        detailedDesc:
          'Floor plans conceived for natural cross-ventilation, daylight penetration, and functional spatial flow. We draft coordinated floor plans, 4-side elevations, longitudinal sections, and plumbing/electrical coordination diagrams.',
        deliverables: [
          'Master architectural floor plans (1:50 scale)',
          'Dimensional exterior elevations and building sections',
          'Door and window opening schedules with lintel depths',
          'Sanitary, plumbing, and electrical conduit schematics',
        ],
        bengaluruContext: 'Optimized for Bengaluru plot dimensions (30x40, 30x50, 40x60, and irregular layouts).',
      },
      {
        id: 'structural-analysis',
        title: 'Structural Analysis',
        shortDesc: 'Computational load analysis simulating dead, live, wind, and seismic forces.',
        detailedDesc:
          'Engineering stress analysis using computational modeling tools to test structural member capacity against IS 456 (Plain and Reinforced Concrete) and IS 1893 (Earthquake Resistant Design). Prevents over-reinforcement and avoids deflection vulnerabilities.',
        deliverables: [
          '3D computational frame analysis model',
          'Moment, shear, and axial force calculation sheets',
          'Soil-structure interaction and settlement checks',
          'Structural safety engineering endorsement',
        ],
        bengaluruContext: 'Accounts for Bengaluru Zone II seismic parameters and seasonal water table fluctuations.',
      },
      {
        id: 'boq-preparation',
        title: 'BOQ Preparation',
        shortDesc: 'Itemized Bill of Quantities establishing exact material quantities and cost predictability.',
        detailedDesc:
          'A transparent breakdown of every cubic meter of concrete, metric ton of Fe550D TMT steel, square foot of blockwork, plaster, waterproofing, and tile finish. Provides an unalterable benchmark against unauthorized cost escalation.',
        deliverables: [
          'Detailed bill of quantities categorized by work phase',
          'Material grade specifications (cement grade, steel brand, aggregate sizes)',
          'Labor component breakdown and machinery rate analysis',
          'Milestone-linked cash-flow schedule for construction stages',
        ],
        bengaluruContext: 'Based on current Bengaluru market rates for aggregates, river sand alternatives, and cement.',
      },
      {
        id: 'fire-safety-planning',
        title: 'Fire & Safety Planning',
        shortDesc: 'Life safety zoning, egress mapping, hydrant positioning, and emergency protocols.',
        detailedDesc:
          'Fire safety engineering for multi-storey residential and commercial builds. We plan fire-rated stair enclosures, travel distances, extinguisher points, hose reel positions, and smoke ventilation pathways adhering to the National Building Code (NBC) of India.',
        deliverables: [
          'Emergency egress and evacuation route plans',
          'Fire suppression pipe routing and hydrant placement layouts',
          'Fire-rated wall and doorway specification sheets',
          'Fire NOC compliance documentation advisory',
        ],
        bengaluruContext: 'Aligned with Karnataka State Fire and Emergency Services regulatory norms.',
      },
    ],
  },
  {
    slug: 'construction',
    number: '02',
    title: 'Construction',
    shortTitle: 'Construction',
    summary:
      'Turnkey residential and commercial construction executed with rigorous on-site supervision, disciplined material testing, and timeline transparency.',
    detailedIntro:
      'We turn architectural drawings into enduring concrete and steel structures. From site preparation and earth retention to superstructure casting and structural steel fabrication, our in-house civil engineers manage all on-site quality controls, cube testing, and trade coordination.',
    heroImage: '/images/gallery/IMG-20261017-WA0023.jpg',
    heroImageAlt: 'Completed turnkey residential villa elevation by SR BUILDTEC in Bengaluru',
    services: [
      {
        id: 'residential-construction',
        title: 'Residential Construction',
        shortDesc: 'Turnkey villa and independent home construction from foundation to final paint coat.',
        detailedDesc:
          'End-to-end villa execution including site surveying, excavation, anti-termite soil treatment, RCC framed structure erection, AAC/solid block masonry, waterproofing, MEP installations, and architectural plastering. Every milestone is inspected against strict engineering tolerances.',
        deliverables: [
          'Complete turnkey construction management',
          'Daily site supervisor log and weekly photo updates',
          'Certified compressive cube test results for all RCC pours',
          'Final as-built drawings and warranty handover binder',
        ],
        bengaluruContext: 'Extensive turnkey delivery track record across prominent residential and commercial layouts in Bengaluru.',
      },
      {
        id: 'commercial-construction',
        title: 'Commercial Construction',
        shortDesc: 'Reinforced multi-storey retail, office, and mixed-use commercial buildings.',
        detailedDesc:
          'Robust structural execution tailored for commercial loads, high-traffic footfall, and expansive clear-span requirements. We manage post-tensioned slabs, structural steel mezzanine frameworks, lift shaft alignment, and heavy-duty utility routing.',
        deliverables: [
          'Fast-track structural frame erection',
          'High-tolerance flat floor casting for commercial occupancy',
          'Service core coordination (lifts, transformers, generators, water storage)',
          'Occupancy handover documentation',
        ],
        bengaluruContext: 'Engineered for Bengaluru urban bylaws, parking ratios, and commercial utility connections.',
      },
      {
        id: 'project-management',
        title: 'Project Management',
        shortDesc: 'Comprehensive schedule oversight, vendor procurement, and engineering quality assurance.',
        detailedDesc:
          'Dedicated civil project management ensuring your build stays within the approved BOQ and timeline. We coordinate trade contractors, monitor material deliveries, enforce on-site safety protocols, and maintain strict quality audit checklists at every pour.',
        deliverables: [
          'Gantt chart timeline with critical-path milestone tracking',
          'Material procurement verification and delivery audit logs',
          'Bi-weekly cost vs. progress variance reporting',
          'Quality assurance checklists signed off before each casting stage',
        ],
        bengaluruContext: 'Mitigates common Bengaluru challenges like monsoon casting scheduling and material supply bottlenecks.',
      },
      {
        id: 'metal-fabrication',
        title: 'Metal Fabrication & Design',
        shortDesc: 'Structural steel framing, architectural pergolas, bespoke railings, and safety grilles.',
        detailedDesc:
          'Precision metal engineering incorporating MS and SS structural sections, laser-cut gates, rooftop structural trusses, industrial staircases, and cantilevered balcony railings. All steelwork undergoes thorough anti-corrosive primer treatment prior to enamel or powder coating.',
        deliverables: [
          'Structural steel shop fabrication drawings',
          'Weld joint ultrasonic/visual inspection reports',
          'Hot-dip galvanized and zinc-chromate primed finishes',
          'On-site erection and anchor bolt engineering',
        ],
        bengaluruContext: 'Weather-resistant finishing suited to Bengaluru humidity cycles and terrace weather exposure.',
      },
    ],
  },
  {
    slug: 'interiors-specialty',
    number: '03',
    title: 'Interiors & Specialty Works',
    shortTitle: 'Interiors & Specialty',
    summary:
      'Refined architectural fit-outs, precision custom joinery, ergonomic modular kitchens, and specialized amenity environments.',
    detailedIntro:
      'The bridge between structural permanence and everyday living comfort. Our interior division delivers architectural drywall partitions, custom millwork, bespoke bedroom joinery, high-specification modular kitchens, landscape hardscaping, and private fitness suites.',
    heroImage: '/images/gallery/IMG-20261020-WA0016.jpg',
    heroImageAlt: 'Architectural interior living lounge with bespoke fluted panelling and layered lighting',
    services: [
      {
        id: 'interior-planning',
        title: 'Interior Planning',
        shortDesc: 'Spatial ergonomics, false ceiling schematics, lighting calculations, and finish selections.',
        detailedDesc:
          'Comprehensive interior architecture aligning space planning with mechanical services. We produce false ceiling reflective plans, cove lighting details, switchboard elevation heights, material sample boards, and bespoke furniture placement diagrams.',
        deliverables: [
          'Reflected ceiling plans (RCP) with luminaire wattages',
          'Detailed wall elevation working sheets with material callouts',
          'Flooring tile and Italian marble laying pattern schematics',
          'Bathroom sanitary fixture coordination drawings',
        ],
        bengaluruContext: 'Optimized for high-ceiling contemporary villas and urban Bengaluru apartment configurations.',
      },
      {
        id: 'modular-kitchens',
        title: 'Modular Kitchens',
        shortDesc: 'Ergonomic, moisture-resistant cabinetry with premium German hardware and stone counters.',
        detailedDesc:
          'Custom modular kitchens constructed using BWP (Boiling Water Proof) marine ply, anti-scratch acrylic or laminate shutters, and soft-close mechanisms. Designed specifically for Indian cooking workflows with dedicated wet and dry preparation zones.',
        deliverables: [
          'Kitchen work triangle ergonomics layout',
          'Cabinet millwork manufacturing drawings with hardware schedules',
          'Granite/quartz countertop fabrication details with under-mount sink cutouts',
          'Chimney, hob, dishwasher, and water purifier conduit coordination',
        ],
        bengaluruContext: 'Built with marine-grade core materials resistant to Bengaluru tap water and spice exposure.',
      },
      {
        id: 'custom-joinery',
        title: 'Custom Joinery & Wardrobes',
        shortDesc: 'Floor-to-ceiling wardrobes, fluted wall panelling, bespoke vanity units, and study consoles.',
        detailedDesc:
          'Precision carpentry crafted in calibration with your room dimensions. We manufacture integrated master bedroom wardrobes with internal sensor lighting, fluted acoustic panelling, TV media backdrops, and solid hardwood entrance doorways.',
        deliverables: [
          'Detailed joinery shop drawings with section profiles',
          'Internal wardrobe organization schematics (hangers, drawers, lockable safes)',
          'Veneer/laminate matching and edge-banding precision specifications',
          'Hardware fittings warranty and maintenance guide',
        ],
        bengaluruContext: 'Factory-pressed and finished to ensure thermal stability through Bengaluru seasonal shifts.',
      },
      {
        id: 'fitness-suites',
        title: 'Fitness Suites & Wellness Spaces',
        shortDesc: 'Specialized flooring, acoustic drywall, mirror arrays, and equipment floor load planning.',
        detailedDesc:
          'Bespoke home gymnasiums and commercial fitness amenities. We calculate floor dead-load capacity for heavy free weights, install high-density shock-absorbing rubber flooring, integrate mirrored training walls, and install high-volume air exchange ventilation.',
        deliverables: [
          'Structural floor load assessment for gym machinery',
          'Acoustic insulation and impact-dampening flooring details',
          'Safety-backed mirror panelling and wall reinforcement plans',
          'Ventilation and power distribution layout for cardio equipment',
        ],
        bengaluruContext: 'Executed in luxury private residences and community clubhouses across Bengaluru.',
      },
      {
        id: 'drywall-partitions',
        title: 'Drywall Partitions',
        shortDesc: 'Acoustic-rated Gypsum partitions, demountable commercial walls, and fire-resistant dividers.',
        detailedDesc:
          'High-speed interior space division using light-gauge galvanized steel framing, mineral wool acoustic infill, and impact-resistant plasterboard. Delivers sound isolation between bedrooms or flexible office cabins without heavy masonry dead-loads.',
        deliverables: [
          'Partition wall framing layout with stud spacing specifications',
          'Acoustic STC rating calculation sheets',
          'Concealed service conduit cutouts and reinforcement for wall-hung items',
          'Seamless jointing and Level-4 painting preparation',
        ],
        bengaluruContext: 'Ideal for fast-track corporate office fit-outs and residential floorplan reconfigurations.',
      },
      {
        id: 'landscaping',
        title: 'Landscaping & Hardscaping',
        shortDesc: 'Terrace garden drainage, paving stone layouts, perimeter planters, and outdoor lighting.',
        detailedDesc:
          'Integrated landscape engineering connecting indoor living spaces to outdoor courtyards and rooftop terraces. We install root-barrier waterproofing membranes, geofabric drainage cells, granite cobble driveways, and automated drip irrigation.',
        deliverables: [
          'Hardscape master plan with slope drainage gradients',
          'Multi-layer terrace waterproofing and drainage cell details',
          'Native plant selection suited to Bengaluru climate',
          'Low-voltage exterior garden illumination schematics',
        ],
        bengaluruContext: 'Native species and water-harvesting hardscape designed for Bengaluru soil and sunlight patterns.',
      },
    ],
  },
]

