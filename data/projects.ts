export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  aspectRatio?: 'landscape' | 'portrait' | 'square'
}

export interface ProjectCaseStudy {
  slug: string
  title: string
  locality: string
  city: string
  category: 'villas' | 'commercial' | 'interiors' | 'structural'
  categoryLabel: string
  year: string
  builtUpArea: string
  timeline: string
  clientType: string
  scope: string[]
  shortSummary: string
  challenge: string
  engineeringSolution: string
  heroImage: ProjectImage
  gallery: ProjectImage[]
}

export interface ArchivePhoto {
  id: string
  src: string
  title: string
  category: 'villas' | 'commercial' | 'interiors' | 'structural'
  tag: string
  locality: string
  alt: string
}

export const curatedProjects: ProjectCaseStudy[] = [
  {
    slug: 'contemporary-cantilevered-villa',
    title: 'The Contemporary Cantilevered Villa',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'villas',
    categoryLabel: 'Villas',
    year: '2024',
    builtUpArea: '5,200 sq.ft',
    timeline: '14 Months',
    clientType: 'Private Residence',
    scope: [
      'Architectural & structural drawings',
      'RCC framed structure & seismic tie-beams',
      'Exterior facade with geometric canopy',
      'Turnkey electrical, plumbing & sanitary MEP',
      'Ceremonial handover & occupancy readiness',
    ],
    shortSummary:
      'Turnkey luxury residence with cantilevered geometric portico, double-height foyer, and precision RCC framing.',
    challenge:
      'A dense residential site with tight boundaries and stringent setback regulations required careful earth retention and noise-controlled concrete pours.',
    engineeringSolution:
      'Engineered an isolated column footing system with raft tie-beams, coupled with lightweight solid block masonry to balance structural dead-weight while maximizing usable carpet area.',
    heroImage: {
      src: '/images/gallery/IMG-20261017-WA0023.jpg',
      alt: 'Completed contemporary luxury villa with geometric facade and ceremonial housewarming entryway in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261017-WA0023.jpg',
        alt: 'Front elevation showcasing cantilevered balcony and architectural entry canopy',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0016.jpg',
        alt: 'Double-height living lounge with bespoke fluted panelling and layered illumination',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0033.jpg',
        alt: 'Master bedroom suite with integrated cove lighting and custom upholstered headboard',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0050.jpg',
        alt: 'Modular kitchen with quartz island counter and soft-close marine ply cabinetry',
      },
    ],
  },
  {
    slug: 'linear-modern-residence',
    title: 'The Linear Modern Residence',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'villas',
    categoryLabel: 'Villas',
    year: '2024',
    builtUpArea: '4,800 sq.ft',
    timeline: '13 Months',
    clientType: 'Family Villa',
    scope: [
      'Soil bearing capacity analysis',
      'RCC superstructure with high-grade M25 concrete',
      'Weather-resistant exterior texture coating',
      'Waterproofing with 10-year multi-barrier membrane',
    ],
    shortSummary:
      'Multi-storey residence combining expansive glass fenestrations, cantilevered balconies, and solar terrace integration.',
    challenge:
      'Variable sandy-clay subsoil conditions necessitated enhanced foundation stabilization to prevent differential settlement.',
    engineeringSolution:
      'Implemented combined trapezoidal footings with deep plinth beams, testing concrete batches with compressive cube crushing at 7 and 28 days to verify strength.',
    heroImage: {
      src: '/images/gallery/IMG-20261017-WA0034.jpg',
      alt: 'Front perspective of multi-storey modern villa with architectural railings in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261017-WA0034.jpg',
        alt: 'Exterior elevation of the linear modern residence',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0019.jpg',
        alt: 'Architectural living room with open spatial flow into dining zone',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0080.jpg',
        alt: 'Floor-to-ceiling wardrobe dressing suite with internal sensor illumination',
      },
      {
        src: '/images/gallery/IMG-20261017-WA0092.jpg',
        alt: 'Active roof slab casting showing laser leveling and steel reinforcement grid',
      },
    ],
  },
  {
    slug: 'multi-dwelling-modern-residence',
    title: 'The Multi-Dwelling Modern Residence',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'villas',
    categoryLabel: 'Villas',
    year: '2024',
    builtUpArea: '6,400 sq.ft',
    timeline: '16 Months',
    clientType: 'Multi-Generational Residence',
    scope: [
      'Comprehensive architectural working drawings',
      'Post-tensioned beam layout for open ground parking',
      'Structural steel terrace pergola',
      'Full interior carpentry & modular joinery',
    ],
    shortSummary:
      'Triple-level architectural villa designed for multi-generational privacy, featuring stilt parking and an open terrace garden.',
    challenge:
      'Achieving clear spans on the ground floor for 4-car stilt parking without intermediate columns that would obstruct vehicular maneuvering.',
    engineeringSolution:
      'Designed a heavy transfer girder grid at first-floor level in M30 grade concrete, routing column loads smoothly to perimeter footings.',
    heroImage: {
      src: '/images/gallery/IMG-20261017-WA0044.jpg',
      alt: 'Completed multi-storey residence with stilt parking and modern balustrades in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261017-WA0044.jpg',
        alt: 'Street-facing facade with contemporary stone accents and glass balconies',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0020.jpg',
        alt: 'Spacious drawing room with bespoke TV console and recessed downlighting',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0040.jpg',
        alt: 'Architectural bedroom with minimalist bedside millwork',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0051.jpg',
        alt: 'Parallel modular kitchen with acrylic finish and tall pantry unit',
      },
    ],
  },
  {
    slug: 'classical-symmetrical-residence',
    title: 'The Classical Symmetrical Residence',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'villas',
    categoryLabel: 'Villas',
    year: '2023',
    builtUpArea: '5,800 sq.ft',
    timeline: '15 Months',
    clientType: 'Private Residence',
    scope: [
      'Turnkey civil contracting',
      'Compound wall, gate fabrication & security barriers',
      'Rainwater harvesting sump & recharge borewells',
      'High-gloss marble flooring and hardwood doors',
    ],
    shortSummary:
      'Imposing 4-level home featuring classical symmetrical portico elements fused with contemporary structural framing.',
    challenge:
      'Navigating a high ground water table during monsoon excavation while protecting neighboring compound structures.',
    engineeringSolution:
      'Deployed sheet pile shoring and continuous dewatering pumps, establishing a dry foundation pit before pouring waterproofed raft footing.',
    heroImage: {
      src: '/images/gallery/IMG-20261020-WA0013.jpg',
      alt: 'Multi-storey residential project with ornamental entrance gate and modern balconies in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261020-WA0013.jpg',
        alt: 'Elevation of residence showing compound wall and gate details',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0014.jpg',
        alt: 'Alternate angle highlighting vertical fenestration and terrace parapet',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0024.jpg',
        alt: 'Living hall view with seamless Italian marble flooring installation',
      },
      {
        src: '/images/gallery/IMG-20261017-WA0074.jpg',
        alt: 'Solid blockwork and lintel beam alignment during construction phase',
      },
    ],
  },
  {
    slug: 'courtyard-gated-villa',
    title: 'The Courtyard Gated Villa',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'villas',
    categoryLabel: 'Villas',
    year: '2023',
    builtUpArea: '4,100 sq.ft',
    timeline: '12 Months',
    clientType: 'Private Villa',
    scope: [
      'Architectural compliance and community coordination',
      'Structural design and BOQ preparation',
      'Drywall acoustic partitions for home office',
      'Complete modular wardrobes & kitchen',
    ],
    shortSummary:
      'Airy contemporary villa with open courtyard, skylit staircase, and bespoke joinery throughout.',
    challenge:
      'Strict township developer guidelines regarding external finishes, roof pitches, and construction hours.',
    engineeringSolution:
      'Scheduled off-site fabrication of structural steel elements and modular joinery to minimize on-site assembly time.',
    heroImage: {
      src: '/images/gallery/IMG-20261017-WA0060.jpg',
      alt: 'Modern residential villa exterior with clean lines and landscaped entry in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261017-WA0060.jpg',
        alt: 'Exterior elevation with textured sand render and glass balustrades',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0025.jpg',
        alt: 'Dining room perspective with fluted wood wall panelling',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0045.jpg',
        alt: 'Guest bedroom with custom fitted wardrobe and study desk',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0074.jpg',
        alt: 'Integrated home wellness workout space with rubberized sports flooring',
      },
    ],
  },
  {
    slug: 'high-rise-structural-steel-annex',
    title: 'High-Rise Rooftop Structural Steel Annex',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'commercial',
    categoryLabel: 'Commercial',
    year: '2024',
    builtUpArea: '12,500 sq.ft',
    timeline: '8 Months',
    clientType: 'Commercial Corporate Facility',
    scope: [
      'Rooftop crane mobilization & safety rigging',
      'Heavy structural steel frame fabrication & erection',
      'High-tensile bolt torquing & ultrasonic weld testing',
      'Industrial metal decking & lightweight concrete pour',
    ],
    shortSummary:
      'High-altitude structural steel framing and rooftop expansion on an operational commercial facility in Bengaluru.',
    challenge:
      'Erecting multi-ton structural steel beams over an active building without disrupting ground-floor operations or pedestrian traffic.',
    engineeringSolution:
      'Employed precision rooftop derrick crane rigging and engineered modular steel assemblies pre-fabricated offsite and hoisted during approved night windows.',
    heroImage: {
      src: '/images/gallery/IMG-20261017-WA0135.jpg',
      alt: 'High-rise rooftop crane lifting structural steel girders against the Bengaluru skyline',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261017-WA0135.jpg',
        alt: 'Derrick crane rigging and structural steel installation on rooftop',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0132.jpg',
        alt: 'Structural steel framing joints and heavy moment-resisting connections',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0135.jpg',
        alt: 'Wide perspective of commercial steel framework during clear daylight assembly',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0100.jpg',
        alt: 'On-site engineering briefing and safety inspection with team',
      },
    ],
  },
  {
    slug: 'commercial-retail-office-center',
    title: 'Commercial Retail & Office Complex',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'commercial',
    categoryLabel: 'Commercial',
    year: '2023',
    builtUpArea: '14,000 sq.ft',
    timeline: '18 Months',
    clientType: 'Commercial Retail & Office',
    scope: [
      'Structural load analysis for commercial footfall',
      'Fire & life safety planning adhering to NBC norms',
      'Lift shaft concrete casting & structural alignment',
      'Heavy-duty floor screeds & acoustic drywall partitions',
    ],
    shortSummary:
      'Commercial retail and office center engineered for high occupancy, open retail spans, and complete fire suppression infrastructure.',
    challenge:
      'Dense urban setting with busy pedestrian foot traffic and strict municipal delivery windows.',
    engineeringSolution:
      'Implemented ready-mix concrete pumps with dedicated noise mufflers, scheduling casting runs during low-traffic early morning periods.',
    heroImage: {
      src: '/images/gallery/IMG-20261020-WA0076.jpg',
      alt: 'Finished interior fitness and commercial space with heavy equipment floor load planning in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261020-WA0076.jpg',
        alt: 'Commercial grade training zone with mirror arrays and impact flooring',
      },
      {
        src: '/images/gallery/IMG-20261017-WA0099.jpg',
        alt: 'Large-span concrete slab casting with mechanical trowel smoothing',
      },
      {
        src: '/images/gallery/IMG-20261017-WA0105.jpg',
        alt: 'Active floor framing with formwork shoring and safety edge perimeter',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0026.jpg',
        alt: 'Executive interior meeting lounge with clean acoustic ceiling detail',
      },
    ],
  },
  {
    slug: 'duplex-living-media-suite',
    title: 'Duplex Living Lounge & Media Suite',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'interiors',
    categoryLabel: 'Interiors',
    year: '2024',
    builtUpArea: '3,200 sq.ft Fit-Out',
    timeline: '5 Months',
    clientType: 'Private Client',
    scope: [
      'Interior spatial planning & 3D visualization',
      'Bespoke fluted acoustic wall paneling',
      'Concealed architectural lighting design',
      'Italian marble restoration and seal',
    ],
    shortSummary:
      'Warm contemporary interior fit-out featuring floor-to-ceiling timber fluting, integrated indirect cove illumination, and bespoke audio-visual joinery.',
    challenge:
      'Integrating a sound-insulated home cinema lounge within an open-concept duplex without creating harsh acoustic flutter echoes.',
    engineeringSolution:
      'Constructed isolated double-stud acoustic drywall lined with high-density rockwool and faced with slotted micro-perforated acoustic timber veneer panels.',
    heroImage: {
      src: '/images/gallery/IMG-20261020-WA0016.jpg',
      alt: 'Luxury living room with bespoke fluted panelling, low-profile media unit, and modern lighting in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261020-WA0016.jpg',
        alt: 'Primary media lounge with custom veneer backdrops',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0019.jpg',
        alt: 'Wide angle showing open circulation into formal dining',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0022.jpg',
        alt: 'Accent wall detail featuring recessed brass channel and warm strip lighting',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0028.jpg',
        alt: 'Corridor perspective with minimalist door architraves and hidden hinges',
      },
    ],
  },
  {
    slug: 'master-suite-bespoke-joinery',
    title: 'Master Suite & Bespoke Joinery',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'interiors',
    categoryLabel: 'Interiors',
    year: '2024',
    builtUpArea: '1,800 sq.ft Fit-Out',
    timeline: '3.5 Months',
    clientType: 'Private Residence',
    scope: [
      'Master bedroom and walk-in dressing suite planning',
      'Custom floor-to-ceiling wardrobe joinery',
      'Integrated soft sensor lighting in wardrobe bays',
      'Custom floating bedside consoles and headboard',
    ],
    shortSummary:
      'Serene, clutter-free bedroom interior featuring bespoke millwork, tailored wardrobe compartments, and acoustic comfort.',
    challenge:
      'Maximizing storage within a room containing multiple structural column offsets and large French windows.',
    engineeringSolution:
      'Engineered continuous flush wardrobe carcasses that seamlessly encase the structural columns, converting awkward niches into concealed jewelry safes and pull-out trouser racks.',
    heroImage: {
      src: '/images/gallery/IMG-20261020-WA0033.jpg',
      alt: 'Master bedroom suite with integrated cove lighting, upholstered wall and minimalist side tables in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261020-WA0033.jpg',
        alt: 'Bed wall detailing with warm ambient illumination and custom bedside furniture',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0080.jpg',
        alt: 'Walk-in wardrobe with floor-to-ceiling frosted glass shutters and internal lighting',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0081.jpg',
        alt: 'Close-up of wardrobe joinery and soft-closing drawer organizers',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0041.jpg',
        alt: 'Ensuite vanity zone with concealed plumbing and anti-fog mirror heating',
      },
    ],
  },
  {
    slug: 'marine-ply-modular-kitchen',
    title: 'BWP Marine Ply Modular Kitchen',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'interiors',
    categoryLabel: 'Interiors',
    year: '2023',
    builtUpArea: '450 sq.ft Kitchen & Pantry',
    timeline: '6 Weeks',
    clientType: 'Luxury Apartment',
    scope: [
      'Kitchen work triangle ergonomic planning',
      'Boiling Water Proof (BWP) 710 marine ply fabrication',
      'Quartz countertop with seamless under-mount sink',
      'Soft-close German drawer systems and corner carousels',
    ],
    shortSummary:
      'High-specification culinary space featuring dual-tone acrylic cabinetry, quartz surfaces, and fully concealed ventilation ducts.',
    challenge:
      'Rerouting existing building plumbing and high-volume chimney exhausts without lowering the main ceiling height.',
    engineeringSolution:
      'Drafted tight false ceiling bulkheads dedicated solely to duct runs, maintaining a clean 9.5-foot primary ceiling clearance throughout the kitchen.',
    heroImage: {
      src: '/images/gallery/IMG-20261020-WA0050.jpg',
      alt: 'Modern modular kitchen with grey and white cabinetry, quartz countertop, and integrated appliances in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261020-WA0050.jpg',
        alt: 'Main kitchen workspace showing preparation island and breakfast counter',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0051.jpg',
        alt: 'Tall appliance unit with built-in oven and microwave niche',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0052.jpg',
        alt: 'Detail of anti-scratch acrylic finish and brushed brass handles',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0054.jpg',
        alt: 'Pantry shelving and organized spice pull-out hardware',
      },
    ],
  },
  {
    slug: 'commercial-private-fitness-suite',
    title: 'Commercial & Private Fitness Suite',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'commercial',
    categoryLabel: 'Commercial',
    year: '2024',
    builtUpArea: '2,400 sq.ft',
    timeline: '3 Months',
    clientType: 'Residential Clubhouse Facility',
    scope: [
      'Structural point-load calculations for gym weights',
      'High-density 20mm rubberized shock-absorbing flooring',
      'Safety mirror arrays with plywood backer boards',
      'Dedicated fresh air exchange HVAC integration',
    ],
    shortSummary:
      'Specialized fitness and conditioning amenity engineered for heavy free-weight drops, acoustic damping, and climate stability.',
    challenge:
      'Preventing impact vibrations from heavy barbell drops from transmitting through the concrete slab to adjacent residential spaces.',
    engineeringSolution:
      'Installed a floating floor system with dual-density neoprene isolators beneath high-density vulcanized rubber tiles, achieving superior vibration attenuation.',
    heroImage: {
      src: '/images/gallery/IMG-20261020-WA0074.jpg',
      alt: 'Spacious fitness suite with professional strength machines, mirror wall, and shock-absorbing flooring in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261020-WA0074.jpg',
        alt: 'Cardio and strength training floor overview',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0075.jpg',
        alt: 'Free weights zone with reinforced floor underlayment',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0078.jpg',
        alt: 'Stretching and functional training area with acoustic wall panels',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0076.jpg',
        alt: 'Mirror wall alignment and concealed power connection points',
      },
    ],
  },
  {
    slug: 'bespoke-wardrobes-millwork',
    title: 'Bespoke Wardrobes & Architectural Millwork',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'interiors',
    categoryLabel: 'Interiors',
    year: '2023',
    builtUpArea: '2,600 sq.ft Fit-Out',
    timeline: '2 Months',
    clientType: 'Private Villa',
    scope: [
      'Custom joinery shop drawings',
      'Anti-fungal polyurethane edge-banding',
      'Concealed drawer glides and wardrobe lock systems',
      'Study consoles and floating television backdrops',
    ],
    shortSummary:
      'Precision architectural joinery package delivering floor-to-ceiling wardrobes, bespoke vanities, and fluted accent paneling.',
    challenge:
      'Achieving perfectly plumb and level floor-to-ceiling shutter alignment despite slight irregularities in existing site plastering.',
    engineeringSolution:
      'Used laser leveling devices and precision scribing techniques on-site to ensure zero gap tolerances between ceiling coving and wardrobe crowns.',
    heroImage: {
      src: '/images/gallery/IMG-20261020-WA0082.jpg',
      alt: 'Custom wardrobe suite with matte laminate finish and integrated LED illumination in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261020-WA0082.jpg',
        alt: 'Fitted wardrobe with internal valet rails and velvet-lined jewelry drawers',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0081.jpg',
        alt: 'Close-up of precision hardware and edge-banded shutter corners',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0037.jpg',
        alt: 'Bespoke floating study desk and bookshelf millwork',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0062.jpg',
        alt: 'Wall panelling detail coordinating bedroom and vanity space',
      },
    ],
  },
  {
    slug: 'large-span-rcc-superstructure',
    title: 'Large-Span RCC Superstructure Casting',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'structural',
    categoryLabel: 'Structural & Site',
    year: '2024',
    builtUpArea: '18,000 sq.ft Structure',
    timeline: 'Active Milestone',
    clientType: 'Commercial R&D Facility',
    scope: [
      'Foundation excavation & soil compaction audits',
      'Formwork design and prop load capacity testing',
      'Fe550D TMT reinforcement tie checks',
      'Continuous ready-mix concrete pump pour with slump tests',
    ],
    shortSummary:
      'Multi-bay reinforced concrete superstructure execution featuring heavy column grids, slab casting, and rigorous site testing.',
    challenge:
      'Pouring large continuous slab areas in high summer heat without thermal cracking or cold joints.',
    engineeringSolution:
      'Scheduled pours during cooler early morning hours with chilled batching water and applied wet hessian cloth curing continuously for 21 days.',
    heroImage: {
      src: '/images/gallery/IMG-20261017-WA0092.jpg',
      alt: 'RCC roof slab casting in progress with workers leveling freshly pumped concrete in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261017-WA0092.jpg',
        alt: 'Workers using vibrators and screeds to level fresh concrete slab',
      },
      {
        src: '/images/gallery/IMG-20261017-WA0099.jpg',
        alt: 'Smooth finish troweling after initial concrete set',
      },
      {
        src: '/images/gallery/IMG-20261017-WA0046.jpg',
        alt: 'Deep footing excavation and steel rebar cage placement',
      },
      {
        src: '/images/gallery/IMG-20261017-WA0107.jpg',
        alt: 'Formwork shoring and beam bottom reinforcement checks',
      },
    ],
  },
  {
    slug: 'solid-masonry-lintel-framework',
    title: 'Solid Masonry & Heavy Lintel Framework',
    locality: 'Bengaluru, Karnataka',
    city: 'Bengaluru',
    category: 'structural',
    categoryLabel: 'Structural & Site',
    year: '2024',
    builtUpArea: '8,500 sq.ft Structure',
    timeline: 'Active Milestone',
    clientType: 'Commercial Logistics & Office',
    scope: [
      'Solid concrete block masonry with polymer-modified mortar',
      'Continuous RCC lintel bands and tie-beams',
      'Concealed conduit channelling without structural damage',
      'Plumbing sleeve casting inside beams',
    ],
    shortSummary:
      'Heavy structural masonry and lintel beam alignment engineered for thermal insulation and crack-free longevity.',
    challenge:
      'High wind exposure in exposed open plateaus requiring enhanced lateral masonry tie-ins to resist cross-wind pressures.',
    engineeringSolution:
      'Integrated cast-in-situ reinforced concrete bond beams at lintel and sill levels, securely tied into the main RCC columns.',
    heroImage: {
      src: '/images/gallery/IMG-20261017-WA0074.jpg',
      alt: 'Solid concrete blockwork walls with cast RCC lintel beams and column junctions on site in Bengaluru',
      aspectRatio: 'landscape',
    },
    gallery: [
      {
        src: '/images/gallery/IMG-20261017-WA0074.jpg',
        alt: 'Solid block masonry with sharp joint alignment and clean mortar lines',
      },
      {
        src: '/images/gallery/IMG-20261017-WA0070.jpg',
        alt: 'Active multi-storey framing showing scaffolding and site safety netting',
      },
      {
        src: '/images/gallery/IMG-20261017-WA0081.jpg',
        alt: 'Column shuttering and reinforcement inspection prior to concrete pour',
      },
      {
        src: '/images/gallery/IMG-20261020-WA0100.jpg',
        alt: 'Engineer on site reviewing structural drawings with masonry foreman',
      },
    ],
  },
]

export const archivePhotos: ArchivePhoto[] = [
  {
    id: 'arch-1',
    src: '/images/gallery/IMG-20261017-WA0046.jpg',
    title: 'Foundation Footing & Deep Excavation',
    category: 'structural',
    tag: 'Foundation',
    locality: 'Bengaluru, Karnataka',
    alt: 'Excavated foundation trenches with rebar reinforcement footings in Bengaluru soil',
  },
  {
    id: 'arch-2',
    src: '/images/gallery/IMG-20261017-WA0070.jpg',
    title: 'Multi-Storey Scaffolding & Site Safety Netting',
    category: 'structural',
    tag: 'Site Progress',
    locality: 'Bengaluru, Karnataka',
    alt: 'External scaffolding and safety mesh around active multi-storey construction',
  },
  {
    id: 'arch-3',
    src: '/images/gallery/IMG-20261017-WA0076.jpg',
    title: 'Column Casting & Shuttering Framework',
    category: 'structural',
    tag: 'RCC Framing',
    locality: 'Bengaluru, Karnataka',
    alt: 'Steel column shuttering boxes clamped and braced for vertical concrete pour',
  },
  {
    id: 'arch-4',
    src: '/images/gallery/IMG-20261017-WA0079.jpg',
    title: 'External Perimeter Masonry Alignment',
    category: 'structural',
    tag: 'Masonry',
    locality: 'Bengaluru, Karnataka',
    alt: 'Perimeter blockwork masonry course laid with precision spirit levels',
  },
  {
    id: 'arch-5',
    src: '/images/gallery/IMG-20261017-WA0081.jpg',
    title: 'Beam Reinforcement & Stirrup Spacing Check',
    category: 'structural',
    tag: 'Quality Audit',
    locality: 'Bengaluru, Karnataka',
    alt: 'Steel TMT bars bound with GI binding wire at calibrated stirrup intervals',
  },
  {
    id: 'arch-6',
    src: '/images/gallery/IMG-20261017-WA0100.jpg',
    title: 'Floor Slab Shuttering & Centering Props',
    category: 'structural',
    tag: 'Formwork',
    locality: 'Bengaluru, Karnataka',
    alt: 'Heavy-duty steel acrow props supporting marine shuttering plywood before slab casting',
  },
  {
    id: 'arch-7',
    src: '/images/gallery/IMG-20261017-WA0103.jpg',
    title: 'Electrical Conduit Routing in Slab Deck',
    category: 'structural',
    tag: 'MEP Conduits',
    locality: 'Bengaluru, Karnataka',
    alt: 'Heavy-gauge PVC electrical pipes wired into rebar grid before concrete pour',
  },
  {
    id: 'arch-8',
    src: '/images/gallery/IMG-20261017-WA0105.jpg',
    title: 'Perimeter Safety Guardrails on Active Floor',
    category: 'structural',
    tag: 'Site Safety',
    locality: 'Bengaluru, Karnataka',
    alt: 'Edge protection railings and safety barricades on high-rise construction level',
  },
  {
    id: 'arch-9',
    src: '/images/gallery/IMG-20261017-WA0107.jpg',
    title: 'Concrete Vibration & Compaction Process',
    category: 'structural',
    tag: 'Concrete Quality',
    locality: 'Bengaluru, Karnataka',
    alt: 'Needle vibrator being immersed into freshly poured concrete to eliminate air voids',
  },
  {
    id: 'arch-10',
    src: '/images/gallery/IMG-20261017-WA0124.jpg',
    title: 'Curing Ponding on Freshly Cast Roof Slab',
    category: 'structural',
    tag: 'Curing Protocol',
    locality: 'Bengaluru, Karnataka',
    alt: 'Water ponds constructed with sand bunds over roof slab for hydration curing',
  },
  {
    id: 'arch-11',
    src: '/images/gallery/IMG-20261017-WA0125.jpg',
    title: 'Parapet Wall Masonry & Terrace Waterproofing Prep',
    category: 'structural',
    tag: 'Terrace Work',
    locality: 'Bengaluru, Karnataka',
    alt: 'Roof parapet masonry and fillet coving prior to application of waterproof coating',
  },
  {
    id: 'arch-12',
    src: '/images/gallery/IMG-20261017-WA0133.jpg',
    title: 'External Sand-Face Plaster Application',
    category: 'structural',
    tag: 'Plastering',
    locality: 'Bengaluru, Karnataka',
    alt: 'Masons applying double-coat waterproof sand-faced external cement plaster',
  },
  {
    id: 'arch-13',
    src: '/images/gallery/IMG-20261017-WA0136.jpg',
    title: 'Structural Steel Truss & Staircase Fabrication',
    category: 'commercial',
    tag: 'Fabrication',
    locality: 'Bengaluru, Karnataka',
    alt: 'Heavy structural steel framework for cantilevered architectural staircase',
  },
  {
    id: 'arch-14',
    src: '/images/gallery/IMG-20261017-WA0138.jpg',
    title: 'Finished Terrace Canopy with Powder-Coated MS Pergola',
    category: 'villas',
    tag: 'Handover Finish',
    locality: 'Bengaluru, Karnataka',
    alt: 'Rooftop metal pergola with tempered glass canopy over terrace garden',
  },
  {
    id: 'arch-15',
    src: '/images/gallery/IMG-20261017-WA0143.jpg',
    title: 'Window Sills Granite Casing & Weather Flashing',
    category: 'villas',
    tag: 'Detailing',
    locality: 'Bengaluru, Karnataka',
    alt: 'Single-slab honed black granite window sill detailing to prevent rainwater ingress',
  },
  {
    id: 'arch-16',
    src: '/images/gallery/IMG-20261017-WA0144.jpg',
    title: 'Finished Villa Compound Wall & Automated Gate Track',
    category: 'villas',
    tag: 'Turnkey Detail',
    locality: 'Bengaluru, Karnataka',
    alt: 'Precision sliding gate track embedded into heavy-duty reinforced driveway apron',
  },
  {
    id: 'arch-17',
    src: '/images/gallery/IMG-20261017-WA0153.jpg',
    title: 'Subsurface Drainage Chamber Construction',
    category: 'structural',
    tag: 'Plumbing & Drainage',
    locality: 'Bengaluru, Karnataka',
    alt: 'Inspection chamber and sewer pipe connections laid to municipal invert levels',
  },
  {
    id: 'arch-18',
    src: '/images/gallery/IMG-20261017-WA0155.jpg',
    title: 'Overhead RCC Water Tank Casting & Waterproofing',
    category: 'structural',
    tag: 'Waterproofing',
    locality: 'Bengaluru, Karnataka',
    alt: 'Overhead concrete tank with food-grade epoxy waterproofing on interior surfaces',
  },
  {
    id: 'arch-19',
    src: '/images/gallery/IMG-20261017-WA0160.jpg',
    title: 'Granite Thresholds & Main Entry Masonry',
    category: 'villas',
    tag: 'Finishing',
    locality: 'Bengaluru, Karnataka',
    alt: 'Solid granite frame installation around main entrance doorway',
  },
  {
    id: 'arch-20',
    src: '/images/gallery/IMG-20261020-WA0022.jpg',
    title: 'Warm Indirect Foyer Illumination',
    category: 'interiors',
    tag: 'Interior Lighting',
    locality: 'Bengaluru, Karnataka',
    alt: 'Recessed LED lighting strips washing textured limestone foyer wall',
  },
  {
    id: 'arch-21',
    src: '/images/gallery/IMG-20261020-WA0028.jpg',
    title: 'Concealed Door Frames in Fluted Corridor',
    category: 'interiors',
    tag: 'Joinery',
    locality: 'Bengaluru, Karnataka',
    alt: 'Flush-to-wall doors integrated seamlessly with architectural timber wall slats',
  },
  {
    id: 'arch-22',
    src: '/images/gallery/IMG-20261020-WA0030.jpg',
    title: 'Formal Dining Accent Wall with Brass Inlays',
    category: 'interiors',
    tag: 'Accent Walls',
    locality: 'Bengaluru, Karnataka',
    alt: 'Muted forest-toned accent wall featuring vertical brushed brass inlay profiles',
  },
  {
    id: 'arch-23',
    src: '/images/gallery/IMG-20261020-WA0034.jpg',
    title: 'Guest Bedroom Custom Wardrobe & Floating Console',
    category: 'interiors',
    tag: 'Custom Joinery',
    locality: 'Bengaluru, Karnataka',
    alt: 'Clean minimalist wardrobe doors with integrated matte metal finger-pull recesses',
  },
  {
    id: 'arch-24',
    src: '/images/gallery/IMG-20261020-WA0035.jpg',
    title: 'Architectural False Ceiling with Magnetic Track Lights',
    category: 'interiors',
    tag: 'False Ceiling',
    locality: 'Bengaluru, Karnataka',
    alt: 'Recessed magnetic black track lighting channel flush-mounted in gypsum false ceiling',
  },
  {
    id: 'arch-25',
    src: '/images/gallery/IMG-20261020-WA0053.jpg',
    title: 'Modular Tall Pantry Unit with Blum Hardware',
    category: 'interiors',
    tag: 'Kitchen Hardware',
    locality: 'Bengaluru, Karnataka',
    alt: 'Full-extension pantry pull-out unit demonstrating smooth damping action',
  },
  {
    id: 'arch-26',
    src: '/images/gallery/IMG-20261020-WA0055.jpg',
    title: 'Ensuite Vanity Cabinet with Quartz Countertop',
    category: 'interiors',
    tag: 'Vanity Joinery',
    locality: 'Bengaluru, Karnataka',
    alt: 'Wall-hung moisture-resistant vanity cabinet with seamless quartz basin cutout',
  },
  {
    id: 'arch-27',
    src: '/images/gallery/IMG-20261020-WA0061.jpg',
    title: 'Bespoke Home Study Credenza & Open Bookcase',
    category: 'interiors',
    tag: 'Millwork',
    locality: 'Bengaluru, Karnataka',
    alt: 'Custom walnut-finish open shelving unit with integrated warm shelf puck lights',
  },
  {
    id: 'arch-28',
    src: '/images/gallery/IMG-20261020-WA0075.jpg',
    title: 'Weight Training Station with Impact Shock Damping',
    category: 'commercial',
    tag: 'Fitness Facility',
    locality: 'Bengaluru, Karnataka',
    alt: 'Heavy dumbbell rack situated over 25mm vulcanized high-density acoustic flooring tiles',
  },
  {
    id: 'arch-29',
    src: '/images/gallery/IMG-20261020-WA0093.jpg',
    title: 'Terrace Garden Waterproofing & Drainage Layer',
    category: 'structural',
    tag: 'Landscaping',
    locality: 'Bengaluru, Karnataka',
    alt: 'Dimpled drainage cells and non-woven geofabric laid prior to planter soil installation',
  },
  {
    id: 'arch-30',
    src: '/images/gallery/IMG-20261020-WA0100.jpg',
    title: 'Engineering Review of Rebar Spacing on Active Deck',
    category: 'structural',
    tag: 'Supervision',
    locality: 'Bengaluru, Karnataka',
    alt: 'Civil engineers checking bar spacing and cover block heights against structural schedule',
  },
]
