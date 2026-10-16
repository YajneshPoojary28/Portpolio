import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #00e5ff, #6366f1)',
      }}
      aria-hidden="true"
    />
  )
}
