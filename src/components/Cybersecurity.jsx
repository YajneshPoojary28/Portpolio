import { motion } from 'framer-motion'
import { ShieldCheck, KeyRound, Database, FileSearch, Lock } from 'lucide-react'

const cards = [
  {
    icon: ShieldCheck,
    title: 'Secure applications',
    text: 'Focus on building applications with authentication and controlled access.',
  },
  {
    icon: KeyRound,
    title: 'Authentication & authorization',
    text: 'Understanding secure user access and role-based permissions.',
  },
  {
    icon: Database,
    title: 'Data security',
    text: 'Designing applications with responsible data storage and management.',
  },
  {
    icon: FileSearch,
    title: 'Cyber crime systems',
    text: 'Applying software development to cyber crime case and investigation management.',
  },
  {
    icon: Lock,
    title: 'Application security',
    text: 'Considering security throughout application development.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Cybersecurity() {
  return (
    <section className="relative py-24 sm:py-32 grid-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Security mindset</h2>
          <p className="mt-2 text-muted max-w-[52ch]">
            Building applications with security and responsible data management in mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="rounded-2xl glass p-6 hover:shadow-[0_0_40px_-15px_rgba(0,229,255,0.35)] transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-primary/30 text-primary mb-4">
                <card.icon size={18} />
              </div>
              <h3 className="font-medium text-text">{card.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
