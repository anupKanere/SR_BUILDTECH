import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { curatedProjects } from '@/data/projects'
import { ProjectCaseStudyClient } from './ProjectCaseStudyClient'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return curatedProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = curatedProjects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Case Study',
    }
  }

  return {
    title: `${project.title} — ${project.locality}, Bengaluru`,
    description: `${project.shortSummary} Engineered and executed by SR BUILDTEC in ${project.locality}, Bengaluru.`,
    openGraph: {
      title: `${project.title} | SR BUILDTEC`,
      description: project.shortSummary,
      images: [
        {
          url: project.heroImage.src,
          alt: project.heroImage.alt,
        },
      ],
    },
  }
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params
  const projectIndex = curatedProjects.findIndex((p) => p.slug === slug)

  if (projectIndex === -1) {
    notFound()
  }

  const project = curatedProjects[projectIndex]
  const prevProject =
    curatedProjects[(projectIndex - 1 + curatedProjects.length) % curatedProjects.length]
  const nextProject =
    curatedProjects[(projectIndex + 1) % curatedProjects.length]

  return (
    <ProjectCaseStudyClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  )
}

