import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  Box,
  Code2,
  Globe2,
  Layers3,
  ShoppingBag,
  Sparkles,
  UserRound,
} from 'lucide-react'
import type { Project } from '../data/projects'

const iconMap = {
  user: UserRound,
  cube: Box,
  store: ShoppingBag,
  sparkles: Sparkles,
  bot: Bot,
  code: Code2,
  layers: Layers3,
}

type ProjectCardProps = {
  project: Project
}

const getDomain = (url: string) => {
  if (url === '#') {
    return 'more-projects.example'
  }

  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return 'project.link'
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon as keyof typeof iconMap] ?? Globe2
  const domain = getDomain(project.url)

  return (
    <motion.article
      layout
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="project-card"
    >
      <div className="project-card__icon-wrap">
        <Icon className="project-card__icon" />
      </div>

      <div className="project-card__header">
        <div>
          <h3>{project.name}</h3>
          <p className="project-card__category">{project.category}</p>
        </div>
        <span className="project-card__arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <p className="project-card__description">{project.description}</p>

      <div className="project-card__domain">{domain}</div>

      <a
        className="project-card__link"
        href={project.url}
        target={project.url === '#' ? undefined : '_blank'}
        rel={project.url === '#' ? undefined : 'noopener noreferrer'}
        aria-label={`Visit ${project.name}`}
      >
        Visit Website <ArrowUpRight size={16} />
      </a>
    </motion.article>
  )
}
