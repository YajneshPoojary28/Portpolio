import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LINES = ['$ locate page', 'search: not found', 'status: 404']

export default function NotFound() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [reduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reduced) {
      setLineIndex(LINES.length)
      return
    }
    if (lineIndex >= LINES.length) return
    const current = LINES[lineIndex]
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1)
      setCharIndex(0)
    }, 350)
    return () => clearTimeout(t)
  }, [lineIndex, charIndex])

  return (
    <main className="min-h-screen flex items-center justify-center px-5 grid-bg">
      <div className="text-center max-w-md">
        <p className="font-display text-6xl sm:text-7xl font-semibold text-gradient">404</p>
        <p className="mt-3 font-mono text-sm tracking-[0.2em] text-primary">ACCESS DENIED</p>
        <p className="mt-4 text-muted">The requested page could not be located.</p>

        <div className="mt-8 rounded-2xl glass p-5 font-mono text-xs text-left">
          {LINES.slice(0, lineIndex + 1).map((line, i) => {
            const isCurrent = i === lineIndex && charIndex < line.length
            const text = i < lineIndex ? line : line.slice(0, charIndex)
            return (
              <div key={i} className="text-muted">
                <span className="text-primary">{text}</span>
                {isCurrent && <span className="inline-block w-[6px] h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />}
              </div>
            )
          })}
        </div>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-[#04121a] font-medium text-sm hover:brightness-110 transition focus-ring"
        >
          Return to system
        </Link>
      </div>
    </main>
  )
}
