import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { navLinks, profile } from '../data/profile.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => (e) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-[0_1px_0_0_rgba(255,255,255,0.06)]' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16 md:h-[68px]">
        <a
          href="#home"
          onClick={handleNav('#home')}
          className="font-display text-lg tracking-tight text-text focus-ring"
        >
          <span className="text-primary">Y</span>AJNESH
        </a>

        <div className="d-none d-lg-flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNav(link.href)}
                className={`relative px-3 py-2 text-sm transition-colors focus-ring ${
                  isActive ? 'text-text' : 'text-muted hover:text-text'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                    style={{ background: 'linear-gradient(90deg, #00e5ff, #6366f1)' }}
                  />
                )}
              </a>
            )
          })}
        </div>

        <div className="d-none d-lg-flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-full border border-border text-muted hover:text-primary hover:border-primary/50 transition-colors focus-ring"
          >
            <FaGithub size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-full border border-border text-muted hover:text-primary hover:border-primary/50 transition-colors focus-ring"
          >
            <FaLinkedin size={17} />
          </a>
        </div>

        <button
          className="d-lg-none p-2 text-text focus-ring"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="d-lg-none glass overflow-hidden"
          >
            <div className="px-5 pb-6 pt-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNav(link.href)}
                  className="py-3 text-sm border-b border-border/70 text-muted hover:text-text focus-ring"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2.5 rounded-lg border border-border text-sm text-muted hover:text-primary hover:border-primary/50 focus-ring"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2.5 rounded-lg border border-border text-sm text-muted hover:text-primary hover:border-primary/50 focus-ring"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
