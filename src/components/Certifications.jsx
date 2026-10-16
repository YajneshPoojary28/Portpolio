import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/certifications.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="rounded-2xl glass p-6 flex flex-col"
            >
              <div className="w-9 h-9 rounded-lg border border-primary/30 text-primary flex items-center justify-center mb-4">
                <Award size={16} />
              </div>
              <h3 className="font-medium text-text leading-snug">{cert.title}</h3>
              <p className="mt-2 text-sm text-muted">{cert.issuer} — {cert.year}</p>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:brightness-125 transition focus-ring"
                >
                  View credential <ExternalLink size={14} />
                </a>
              ) : (
                <span className="mt-4 text-xs text-muted/60">Credential link coming soon</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
