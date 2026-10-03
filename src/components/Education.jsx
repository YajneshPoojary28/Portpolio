import { motion } from 'framer-motion'

const education = [
  {
    period: '2025 – Present',
    degree: 'Master of Computer Applications — Cybersecurity',
    school: 'Mangalore Institute of Technology and Engineering (MITE)',
    location: 'Moodbidri, Karnataka',
    score: '7.70',
    scoreLabel: 'CGPA',
  },
  {
    period: '2022 – 2025',
    degree: 'Bachelor of Computer Applications',
    school: 'Smt. Sundari Ananda Alva Campus',
    location: 'Vidyagiri, Moodbidri, Karnataka',
    score: '8.47',
    scoreLabel: 'CGPA',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-10">
          <motion.div
            className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          <div className="space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                className="relative"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <span
                  className="absolute -left-8 sm:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-primary"
                  style={{ boxShadow: '0 0 12px rgba(0,229,255,0.6)' }}
                />
                <div className="rounded-2xl glass p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="font-mono text-xs text-primary">{item.period}</span>
                    <span className="text-right">
                      <span className="font-display text-lg font-semibold text-gradient">{item.score}</span>
                      <span className="text-muted text-xs ml-1.5">{item.scoreLabel}</span>
                    </span>
                  </div>
                  <h3 className="font-medium text-text text-lg">{item.degree}</h3>
                  <p className="mt-1 text-muted text-sm">{item.school}</p>
                  <p className="text-muted text-sm">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
