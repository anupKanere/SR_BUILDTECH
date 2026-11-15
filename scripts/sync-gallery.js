const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BASE_PROJECTS_DIR = path.join(ROOT_DIR, 'public', 'projects');
const METADATA_FILE = path.join(ROOT_DIR, 'data', 'photo-metadata.json');
const OUTPUT_FILE = path.join(ROOT_DIR, 'data', 'gallery.json');

const CATEGORIES = [
  {
    id: 'all',
    label: 'All Works',
    tagline: 'Explore a curated showcase of our recent handovers, commercial complexes, active construction sites, structural engineering, and luxury interiors.'
  },
  {
    id: 'completed',
    label: 'Completed Projects',
    tagline: 'Featured turnkey villas and multi-storey residences from our delivered projects, executed with uncompromising craftsmanship.'
  },
  {
    id: 'commercial',
    label: 'Commercial Projects',
    tagline: 'High-rise structural framing, industrial facilities, tower crane operations, commercial amenities, and corporate infrastructure.'
  },
  {
    id: 'onsite',
    label: 'On-Site Construction',
    tagline: 'Real-time updates from our active project sites: foundation excavations, RCC slab casting, concrete blockwork, and expert site supervision.'
  },
  {
    id: 'interiors',
    label: 'Architectural Interiors',
    tagline: 'Bespoke living lounges, master bedroom suites, modular kitchens, luxury bathrooms, custom wardrobes, and private media theatres.'
  }
];

const VALID_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.svg']);

const DEFAULT_TAGS = {
  completed: 'Completed Project',
  commercial: 'Commercial Project',
  onsite: 'Site Progress',
  interiors: 'Interior Design'
};

const DEFAULT_TITLES = {
  completed: 'Completed Residential Project',
  commercial: 'Commercial Infrastructure Project',
  onsite: 'On-Site Construction Progress',
  interiors: 'Architectural Interior Space'
};

function formatTitleFromFilename(filename, category, index) {
  const nameWithoutExt = path.parse(filename).name;
  
  // If it's a camera or WhatsApp image (e.g. IMG-2024..., PXL_..., DSC_...)
  if (/^(img|pxl|dsc|wa|photo)[-_]/i.test(nameWithoutExt) || /^\d+$/.test(nameWithoutExt)) {
    return `${DEFAULT_TITLES[category] || 'Featured Project'} #${index + 1}`;
  }
  
  // Format slug/words: "luxury_villa_elevation" -> "Luxury Villa Elevation"
  return nameWithoutExt
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function syncGallery() {
  let metadata = {};
  if (fs.existsSync(METADATA_FILE)) {
    try {
      metadata = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf-8'));
    } catch (err) {
      console.warn('Could not read photo-metadata.json, proceeding with defaults:', err.message);
    }
  }

  const categoryFolders = ['completed', 'commercial', 'onsite', 'interiors'];
  const categorizedPhotos = {
    completed: [],
    commercial: [],
    onsite: [],
    interiors: []
  };

  let globalIndex = 1;

  for (const cat of categoryFolders) {
    const dir = path.join(BASE_PROJECTS_DIR, cat);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const files = fs.readdirSync(dir).sort();

    files.forEach((file, index) => {
      const ext = path.extname(file).toLowerCase();
      if (!VALID_EXTENSIONS.has(ext)) return;

      const fileMeta = metadata[file] || {};
      const id = fileMeta.id || `photo-${globalIndex}`;
      const title = fileMeta.title || formatTitleFromFilename(file, cat, index);
      const tag = fileMeta.tag || DEFAULT_TAGS[cat] || 'Featured Work';
      const alt = fileMeta.alt || `${title} - SR BUILDTEC`;
      const aspect = fileMeta.aspect || 'landscape';

      const photoItem = {
        id,
        file,
        imageUrl: `/projects/${cat}/${file}`,
        thumbnailUrl: `/projects/${cat}/${file}`,
        title,
        alt,
        tag,
        category: cat,
        aspect
      };

      categorizedPhotos[cat].push(photoItem);
      globalIndex++;
    });
  }

  // Combine for 'all'
  const allPhotos = [
    ...categorizedPhotos.completed,
    ...categorizedPhotos.commercial,
    ...categorizedPhotos.onsite,
    ...categorizedPhotos.interiors
  ];

  const galleryData = {
    categories: CATEGORIES,
    photos: {
      all: allPhotos,
      completed: categorizedPhotos.completed,
      commercial: categorizedPhotos.commercial,
      onsite: categorizedPhotos.onsite,
      interiors: categorizedPhotos.interiors
    }
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(galleryData, null, 2), 'utf-8');

  console.log(' Gallery sync completed successfully:');
  console.log(`  - Completed: ${categorizedPhotos.completed.length} photos`);
  console.log(`  - Commercial: ${categorizedPhotos.commercial.length} photos`);
  console.log(`  - Onsite: ${categorizedPhotos.onsite.length} photos`);
  console.log(`  - Interiors: ${categorizedPhotos.interiors.length} photos`);
  console.log(`  - Total in All: ${allPhotos.length} photos`);
}

if (require.main === module) {
  syncGallery();
}

module.exports = { syncGallery };

