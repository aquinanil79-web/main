import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'

type ProjectGridProps = {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="project-grid">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.25 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
