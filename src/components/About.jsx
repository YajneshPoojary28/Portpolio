import { motion } from 'framer-motion'

const profileRows = [
  { label: 'Role', value: 'Software Developer' },
  { label: 'Specialization', value: 'Cybersecurity' },
  { label: 'Primary language', value: 'Java' },
  { label: 'Other languages', value: 'Python · C · PHP · SQL' },
  { label: 'Database', value: 'MySQL · PostgreSQL · SQLite' },
  { label: 'Web', value: 'HTML · CSS · JavaScript' },
  { label: 'Framework', value: 'Django · Spring Boot' },
  { label: 'Tools', value: 'Git · GitHub · VS Code' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">About me</h2>
          <p className="mt-2 text-muted">Developer. Problem solver. Continuous learner.</p>
        </motion.div>

        <div className="row g-5 align-items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="col-lg-6 space-y-5 text-[15px] sm:text-base leading-relaxed text-muted max-w-[62ch]"
          >
            <p>
              I am an MCA student specializing in Cybersecurity with a strong interest in
              software development, secure applications, databases, and intelligent systems.
            </p>
            <p>
              My development journey includes building web applications, database-driven
              systems, analytics dashboards, and security-oriented projects.
            </p>
            <p>
              I enjoy breaking complex problems into smaller components, designing practical
              solutions, and continuously improving my programming and development skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotateX: 4 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="col-lg-6"
          >
            <div className="rounded-2xl glass p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-primary tracking-wide">DEVELOPER_PROFILE.json</span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <dl className="divide-y divide-border">
              {profileRows.map((row) => (
                <div key={row.label} className="flex justify-between gap-4 py-3 text-sm">
                  <dt className="text-muted uppercase tracking-wide text-[11px] pt-0.5">{row.label}</dt>
                  <dd className="text-text text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
