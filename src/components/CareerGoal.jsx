import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CareerGoal() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-3xl glass px-6 sm:px-14 py-14 sm:py-16 relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full opacity-25 blur-[110px]"
            style={{ background: 'radial-gradient(circle, #00e5ff, transparent 70%)' }}
          />
          <h2 className="relative font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            Building towards what's next
          </h2>
          <p className="relative mt-5 text-muted max-w-[56ch] mx-auto leading-relaxed">
            I'm looking for an opportunity where I can contribute as an entry-level Software
            Developer, Java Developer, Full-Stack Developer, or cybersecurity-oriented developer.
          </p>
          <p className="relative mt-4 text-muted max-w-[56ch] mx-auto leading-relaxed">
            My goal is to work on real-world applications, learn from experienced developers,
            solve meaningful problems, and grow into a strong software engineer.
          </p>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative mt-9 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-[#04121a] font-medium text-sm hover:brightness-110 transition focus-ring"
          >
            Let's connect <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
