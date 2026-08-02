import { motion } from 'framer-motion'
import { ExternalLink, Folder } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03" title="Projects" comment="a few things I've built" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.repo}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
            className="group flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/50 hover:bg-surface-hover"
          >
            <div className="flex items-center justify-between">
              <Folder className="text-accent" size={26} />
              <ExternalLink
                size={16}
                className="text-text-dim transition-colors group-hover:text-accent"
              />
            </div>

            <h3 className="mt-4 font-mono text-lg font-semibold text-text">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-text-dim">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
