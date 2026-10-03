import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINES = [
  { text: '$ whoami', type: 'cmd' },
  { text: 'yajnesh@developer:~$', type: 'prompt' },
  { text: '', type: 'blank' },
  { text: '> MCA Cybersecurity', type: 'out' },
  { text: '> Software Developer', type: 'out' },
  { text: '> Java', type: 'out' },
  { text: '> Python', type: 'out' },
  { text: '> SQL', type: 'out' },
  { text: '> Web Development', type: 'out' },
  { text: '', type: 'blank' },
  { text: 'system.status = "building";', type: 'code' },
  { text: 'security.mode = "enabled";', type: 'code' },
  { text: 'learning.status = "continuous";', type: 'code' },
]

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reducedMotion) {
      setLineIndex(LINES.length)
      return
    }
    if (lineIndex >= LINES.length) return
    const current = LINES[lineIndex]

    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 18 + Math.random() * 22)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1)
      setCharIndex(0)
    }, current.type === 'blank' ? 80 : 220)
    return () => clearTimeout(t)
  }, [lineIndex, charIndex])

  const colorFor = (type) => {
    switch (type) {
      case 'cmd':
        return 'text-primary'
      case 'prompt':
        return 'text-secondary'
      case 'out':
        return 'text-text/90'
      case 'code':
        return 'text-muted'
      default:
        return 'text-muted'
    }
  }

  return (
    <div className="relative rounded-2xl glass p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-relaxed shadow-[0_0_60px_-15px_rgba(0,229,255,0.25)]">
      <div className="flex items-center gap-1.5 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-muted text-xs tracking-wide">terminal — zsh</span>
      </div>

      <div className="min-h-[220px] sm:min-h-[240px]" role="img" aria-label="Terminal displaying Yajnesh Poojary's role and technology stack">
        {LINES.slice(0, lineIndex + 1).map((line, i) => {
          const isCurrent = i === lineIndex && charIndex < line.text.length
          const text = i < lineIndex ? line.text : line.text.slice(0, charIndex)
          return (
            <div key={i} className={colorFor(line.type)}>
              {text}
              {isCurrent && <span className="inline-block w-[7px] h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />}
            </div>
          )
        })}
        {lineIndex >= LINES.length && (
          <span className="inline-block w-[7px] h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />
        )}
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)' }}
        animate={reducedMotion ? {} : { opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
