import { motion } from 'framer-motion'

const path = [
  'Java',
  'Data Structures & Algorithms',
  'Spring Boot',
  'SQL',
  'Web Development',
  'Cybersecurity',
  'Cloud',
  'AI & Data Analytics',
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Learning() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Currently learning</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-0 overflow-x-auto pb-2 lg:overflow-visible">
          {path.map((step, i) => (
            <motion.div
              key={step}
              className="flex items-center lg:flex-1 gap-3 lg:gap-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
            >
              <div className="shrink-0 lg:flex-1 lg:mx-1">
                <div className="rounded-xl glass px-4 py-3 text-center min-w-[150px] lg:min-w-0">
                  <span className="text-sm font-medium text-text">{step}</span>
                </div>
              </div>
              {i < path.length - 1 && (
                <span className="hidden lg:block w-6 h-px bg-gradient-to-r from-primary/60 to-secondary/60 shrink-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
