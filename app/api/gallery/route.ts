import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import defaultGallery from '@/data/gallery.json'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const rootDir = process.cwd()
    const baseDir = path.join(rootDir, 'public', 'projects')
    const metadataPath = path.join(rootDir, 'data', 'photo-metadata.json')

    if (!fs.existsSync(baseDir)) {
      return NextResponse.json(defaultGallery)
    }

    let metadata: Record<string, { id?: string; title?: string; alt?: string; tag?: string; aspect?: string }> = {}
    if (fs.existsSync(metadataPath)) {
      try {
        metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'))
      } catch {
        // Fall back to empty metadata
      }
    }

    const categories = ['completed', 'commercial', 'ongoing', 'interiors'] as const
    const validExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.svg'])
    const categorizedPhotos: Record<string, Array<{
      id: string
      file: string
      imageUrl: string
      thumbnailUrl: string
      title: string
      alt: string
      tag: string
      category: string
      aspect: string
    }>> = {
      completed: [],
      commercial: [],
      ongoing: [],
      interiors: [],
    }

    let globalIndex = 1

    for (const cat of categories) {
      const dir = path.join(baseDir, cat)
      if (!fs.existsSync(dir)) continue

      const files = fs.readdirSync(dir).sort()
      for (const file of files) {
        const ext = path.extname(file).toLowerCase()
        if (!validExts.has(ext)) continue

        const fileMeta = metadata[file] || {}
        const nameWithoutExt = path.parse(file).name
        const isGeneric = /^(img|pxl|dsc|wa|photo)[-_]/i.test(nameWithoutExt) || /^\d+$/.test(nameWithoutExt)

        const defaultTitle =
          cat === 'completed'
            ? 'Completed Residential Villa'
            : cat === 'commercial'
            ? 'Commercial Infrastructure'
            : cat === 'ongoing'
            ? 'Ongoing Construction Project'
            : 'Architectural Interior'

        const title =
          fileMeta.title ||
          (isGeneric
            ? `${defaultTitle} #${globalIndex}`
            : nameWithoutExt
                .replace(/[-_]+/g, ' ')
                .trim()
                .replace(/\b\w/g, (c) => c.toUpperCase()))

        const defaultTag =
          cat === 'completed'
            ? 'Completed Villa'
            : cat === 'commercial'
            ? 'Commercial Project'
            : cat === 'ongoing'
            ? 'Ongoing Project'
            : 'Interior Design'

        const photoItem = {
          id: fileMeta.id || `photo-${globalIndex}`,
          file,
          imageUrl: `/projects/${cat}/${file}`,
          thumbnailUrl: `/projects/${cat}/${file}`,
          title,
          alt: fileMeta.alt || `${title} - SR BUILDTEC`,
          tag: fileMeta.tag || defaultTag,
          category: cat,
          aspect: fileMeta.aspect || 'landscape',
        }

        categorizedPhotos[cat].push(photoItem)
        globalIndex++
      }
    }

    const allPhotos = [
      ...categorizedPhotos.completed,
      ...categorizedPhotos.commercial,
      ...categorizedPhotos.ongoing,
      ...categorizedPhotos.interiors,
    ]

    return NextResponse.json({
      categories: defaultGallery.categories,
      photos: {
        all: allPhotos,
        completed: categorizedPhotos.completed,
        commercial: categorizedPhotos.commercial,
        ongoing: categorizedPhotos.ongoing,
        interiors: categorizedPhotos.interiors,
      },
    })
  } catch {
    return NextResponse.json(defaultGallery)
  }
}

