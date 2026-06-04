import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

const variants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
