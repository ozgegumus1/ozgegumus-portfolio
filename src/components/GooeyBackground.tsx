import { useEffect, useRef } from 'react'
import '../styles/gooey.css'

interface GooeyBackgroundProps {
  children: React.ReactNode
}

export function GooeyBackground({ children }: GooeyBackgroundProps) {
  const interactiveRef = useRef<HTMLDivElement>(null)
  const curX = useRef(0)
  const curY = useRef(0)
  const tgX = useRef(0)
  const tgY = useRef(0)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const interactive = interactiveRef.current
    if (!interactive) return

    const handleMouseMove = (e: MouseEvent) => {
      tgX.current = e.clientX
      tgY.current = e.clientY
    }

    const animate = () => {
      curX.current += (tgX.current - curX.current) / 20
      curY.current += (tgY.current - curY.current) / 20
      interactive.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`
      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div className="gooey-root" aria-hidden="true">
        <svg className="absolute h-0 w-0" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div className="gooey-gradient-bg">
          <div className="gooey-gradients-container">
            <div className="gooey-blob gooey-blob--g1" />
            <div className="gooey-blob gooey-blob--g2" />
            <div className="gooey-blob gooey-blob--g3" />
            <div className="gooey-blob gooey-blob--g4" />
            <div className="gooey-blob gooey-blob--g5" />
            <div ref={interactiveRef} className="gooey-blob gooey-blob--interactive" />
          </div>
        </div>
      </div>

      <div className="site-content relative z-10 min-h-screen">
        <div className="site-inner">{children}</div>
      </div>
    </>
  )
}
