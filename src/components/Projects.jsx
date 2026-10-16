import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, filterOptions } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  const [filter, setFilter] = useState('ALL')
  const [active, setActive] = useState(null)

  const filtered = useMemo(() => {
    if (filter === 'ALL') return projects
    return projects.filter((p) => p.category.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Featured projects</h2>
          <p className="mt-2 text-muted max-w-[56ch]">
            Selected projects combining software development, cybersecurity, analytics, and
            practical problem solving.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide border transition-colors focus-ring ${
                filter === opt
                  ? 'border-primary/60 text-primary bg-primary/10'
                  : 'border-border text-muted hover:text-text hover:border-white/20'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <motion.div layout className="row g-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} onOpen={setActive} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-muted text-sm text-center py-16">No projects match this filter yet.</p>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
