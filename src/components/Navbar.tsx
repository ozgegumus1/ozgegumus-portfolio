import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { navLinks, personalInfo } from '../data/portfolioData'

export function Navbar() {
  const [activeId, setActiveId] = useState(navLinks[0]?.id ?? 'hero')
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-42% 0px -48% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(28,26,24,0.5)] backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-8"
        aria-label="Main navigation"
      >
        <motion.a
          href="#hero"
          className="text-[0.6875rem] font-medium uppercase tracking-[0.28em] text-[var(--color-ink)]"
          whileHover={{
            scale: 1.06,
            textShadow: '0 0 24px rgba(94,234,212,0.4)',
            color: 'var(--color-glow)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 450, damping: 26 }}
        >
          {personalInfo.name.split(' ')[0]}
        </motion.a>

        <ul className="flex gap-7 sm:gap-11">
          {navLinks.map((link) => {
            const isActive = activeId === link.id
            const isHovered = hoveredId === link.id

            return (
              <li key={link.id}>
                <motion.a
                  href={`#${link.id}`}
                  className="relative block py-1 text-[0.6875rem] font-medium uppercase tracking-[0.22em]"
                  onHoverStart={() => setHoveredId(link.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.span
                    animate={{
                      color:
                        isActive || isHovered
                          ? 'var(--color-glow)'
                          : 'var(--color-ink-muted)',
                      y: isHovered ? -2 : 0,
                      textShadow: isHovered
                        ? '0 0 20px rgba(94,234,212,0.5)'
                        : '0 0 0 transparent',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  >
                    {link.label}
                  </motion.span>
                  {(isActive || isHovered) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--color-glow)]"
                      style={{
                        boxShadow: '0 0 12px var(--color-glow-soft), 0 0 24px rgba(94,234,212,0.2)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
