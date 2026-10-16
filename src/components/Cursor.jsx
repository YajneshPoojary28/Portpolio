import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  )
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }

    const move = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) dotRef.current.style.opacity = 1
      if (ringRef.current) ringRef.current.style.opacity = 1
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`
      }
    }

    let raf
    const animate = () => {
      ring.x += (pos.x - ring.x) * 0.18
      ring.y += (pos.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(animate)
    }

    const over = (e) => {
      const target = e.target.closest('button, a, [data-cursor-hover]')
      setHovering(Boolean(target))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
        style={{
          width: hovering ? '52px' : '34px',
          height: hovering ? '52px' : '34px',
          borderColor: hovering ? 'rgba(0,229,255,0.9)' : 'rgba(0,229,255,0.5)',
          background: hovering ? 'rgba(0,229,255,0.08)' : 'transparent',
        }}
      />
    </>
  )
}
