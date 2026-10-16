import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 'MCA', label: 'Cybersecurity', numeric: false },
  { value: 'BCA', label: '2022 – 2025', numeric: false },
  { value: 7.7, label: 'MCA CGPA', numeric: true, decimals: 2 },
  { value: 8.47, label: 'BCA CGPA', numeric: true, decimals: 2 },
]

function CountUp({ target, decimals = 0, inView }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplay(target)
      return
    }
    let raf
    const duration = 1100
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return <>{display.toFixed(decimals)}</>
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="py-4 sm:py-8">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="rounded-2xl glass px-5 py-6 sm:py-7 text-center"
            >
              <div className="font-display text-2xl sm:text-3xl font-semibold text-gradient">
                {stat.numeric ? <CountUp target={stat.value} decimals={stat.decimals} inView={inView} /> : stat.value}
              </div>
              <div className="mt-1.5 text-muted text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
