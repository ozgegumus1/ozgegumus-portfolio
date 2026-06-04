import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface TextLinkProps {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
}

export function TextLink({ href, children, className = '', external }: TextLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group relative inline-flex items-center gap-2 overflow-hidden py-1 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-muted)] ${className}`}
      whileHover={{ x: 6, color: 'var(--color-glow)' }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
    >
      <motion.span
        className="text-[var(--color-glow)]"
        initial={{ x: -8, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        aria-hidden
      >
        →
      </motion.span>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 h-px w-full bg-[var(--color-glow)]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
      <motion.span
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,rgba(94,234,212,0.15),transparent_70%)] opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        aria-hidden
      />
    </motion.a>
  )
}
