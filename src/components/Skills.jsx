import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Technical arsenal</h2>
          <p className="mt-2 text-muted max-w-[52ch]">
            Technologies and concepts I use to build practical software solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-primary tracking-wide mb-4">{group.category}</h3>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-3">
                {group.items.map((item, i) => (
                  <div className="col" key={item.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
                    whileHover={{ y: -3 }}
                    className="h-full group rounded-xl border border-border bg-card/60 px-4 py-4 hover:border-primary/40 transition-colors relative overflow-hidden"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'radial-gradient(circle at 20% 0%, rgba(0,229,255,0.08), transparent 60%)' }}
                    />
                    <p className="relative font-medium text-sm text-text">{item.name}</p>
                    <p className="relative mt-1 text-[12px] text-muted leading-snug">{item.note}</p>
                  </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
