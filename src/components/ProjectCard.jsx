import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { CaseManagementPreview, AnalyticsPreview, GenericPreview } from './ProjectPreview.jsx'

function Preview({ project }) {
  if (project.id === 'cyber-crime-case-management') return <CaseManagementPreview />
  if (project.id === 'ai-sales-analytics-dashboard') return <AnalyticsPreview />
  return <GenericPreview label={project.title} />
}

export default function ProjectCard({ project, onOpen, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="col-md-6"
      onClick={() => onOpen(project)}
      data-cursor-hover
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(project)
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      <div className="group rounded-2xl glass p-6 sm:p-7 h-full d-flex flex-column cursor-pointer hover:border-primary/40 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs text-primary/80">{project.number}</span>
        <span className="text-[10px] tracking-wide px-2.5 py-1 rounded-full border border-primary/30 text-primary/90 font-mono">
          {project.badge}
        </span>
      </div>

      <h3 className="font-display text-xl sm:text-[1.35rem] font-semibold leading-snug group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t.name}
            className="text-[11px] px-2 py-1 rounded-md bg-card border border-border text-muted group-hover:border-primary/25 transition-colors"
          >
            {t.name}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="text-[11px] px-2 py-1 rounded-md bg-card border border-border text-muted">
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      <div className="mt-6 overflow-hidden rounded-xl">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <Preview project={project} />
        </motion.div>
      </div>

      <div className="mt-6 flex items-center gap-4 pt-1">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-sm text-muted group-hover:text-primary transition-colors focus-ring"
        >
          <FaGithub size={15} /> GitHub
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors focus-ring"
          >
            <ExternalLink size={15} /> Live demo
          </a>
        ) : (
          <span className="text-sm text-muted/60">Live demo coming soon</span>
        )}
      </div>
    </div>
    </motion.article>
  )
}
