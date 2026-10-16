import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-start sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl glass p-6 sm:p-8"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 p-2 rounded-full border border-border text-muted hover:text-primary hover:border-primary/50 transition focus-ring"
            >
              <X size={18} />
            </button>

            <span className="font-mono text-xs text-primary/80">{project.number}</span>
            <h3 className="font-display text-2xl font-semibold mt-2 pr-10">{project.title}</h3>
            <span className="inline-block mt-3 text-[10px] tracking-wide px-2.5 py-1 rounded-full border border-primary/30 text-primary/90 font-mono">
              {project.badge}
            </span>

            <div className="mt-6 space-y-6 text-sm">
              <Section title="Project overview" text={project.description} />
              {project.problem && <Section title="Problem" text={project.problem} />}
              {project.solution && <Section title="Solution" text={project.solution} />}

              <div>
                <h4 className="font-mono text-[11px] text-primary tracking-wide mb-2">KEY FEATURES</h4>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-muted">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-[11px] text-primary tracking-wide mb-2">TECHNOLOGY</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t.name}
                      className="text-xs px-2.5 py-1 rounded-md bg-card border border-border text-muted"
                    >
                      {t.name}
                      {t.status === 'planned' && <em className="ml-1.5 text-primary/70 not-italic">(Planned)</em>}
                    </span>
                  ))}
                </div>
              </div>

              {project.contribution && <Section title="My contribution" text={project.contribution} />}
              {project.result && <Section title="Result" text={project.result} />}

              <div className="flex items-center gap-4 pt-2 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-text hover:text-primary transition-colors focus-ring"
                >
                  <FaGithub size={16} /> View on GitHub
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-text hover:text-primary transition-colors focus-ring"
                  >
                    <ExternalLink size={16} /> Live demo
                  </a>
                ) : (
                  <span className="mt-4 text-sm text-muted/60">Live demo coming soon</span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Section({ title, text }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] text-primary tracking-wide mb-1.5">{title.toUpperCase()}</h4>
      <p className="text-muted leading-relaxed">{text}</p>
    </div>
  )
}
