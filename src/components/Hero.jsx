import { motion } from 'framer-motion'
import { ArrowDown, FileDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import photo from '../assets/yajnesh.jpeg'
import { profile } from '../data/profile.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grid-bg"
    >
      {/* ambient gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full opacity-30 blur-[110px]"
          style={{ background: 'radial-gradient(circle, #00e5ff, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full opacity-20 blur-[110px]"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="row g-5 align-items-center">
        <motion.div className="col-lg-6" variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[11px] sm:text-xs font-mono text-primary/90 tracking-wide"
          >
            MCA CYBERSECURITY • SOFTWARE DEVELOPER
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-[2.4rem] leading-[1.1] sm:text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Building secure software.
            <br />
            <span className="text-gradient">Solving real problems.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-[52ch] text-muted text-base sm:text-lg leading-relaxed">
            I'm Yajnesh Poojary, an MCA student specializing in Cybersecurity with a strong
            foundation in Java, Python, SQL, web development, and database management. I enjoy
            building practical applications that combine software engineering, security, data,
            and modern web technologies.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-6 py-3 rounded-lg bg-primary text-[#04121a] font-medium text-sm hover:brightness-110 transition focus-ring"
            >
              View my projects
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-text text-sm hover:border-primary/50 hover:text-primary transition focus-ring"
            >
              <FileDown size={16} /> Download resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-cursor-hover
              className="group relative p-2.5 rounded-full border border-border text-muted hover:text-primary hover:border-primary/50 transition focus-ring"
            >
              <FaGithub size={18} />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] bg-card border border-border px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                GitHub
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-cursor-hover
              className="group relative p-2.5 rounded-full border border-border text-muted hover:text-primary hover:border-primary/50 transition focus-ring"
            >
              <FaLinkedin size={18} />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] bg-card border border-border px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                LinkedIn
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-lg-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
        >
          <div
            className="mx-auto rounded-full overflow-hidden w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]"
            style={{
              border: '3px solid #00e5ff',
              boxShadow: '0 0 70px rgba(0,229,255,0.35), 0 0 22px rgba(0,229,255,0.35)',
            }}
          >
            <img
              src={photo}
              alt="Yajnesh Poojary"
              className="w-full h-full object-cover"
              style={{ transform: 'scale(1.05)' }}
            />
          </div>
        </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-[11px] tracking-[0.15em] focus-ring"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        SCROLL TO EXPLORE
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}
