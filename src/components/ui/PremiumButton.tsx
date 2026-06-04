import { motion } from 'framer-motion'
import { useCallback, useState, type MouseEvent, type ReactNode } from 'react'

interface Ripple {
  id: number
  x: number
  y: number
}

interface PremiumButtonProps {
  children: ReactNode
  href?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'outline'
  className?: string
  onClick?: () => void
}

export function PremiumButton({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
}: PremiumButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [isHovered, setIsHovered] = useState(false)
  const isPrimary = variant === 'primary'

  const spawnRipple = useCallback((e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const ripple: Ripple = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    setRipples((prev) => [...prev, ripple])
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
    }, 750)
  }, [])

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    spawnRipple(e)
    onClick?.()
  }

  const baseClass =
    'group relative inline-flex min-w-[10rem] items-center justify-center overflow-hidden px-9 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.24em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-glow)]'

  const variantClass = isPrimary
    ? 'border border-[var(--color-line)] bg-[rgba(245,242,237,0.04)] text-[var(--color-ink)]'
    : 'border border-transparent bg-transparent text-[var(--color-ink-muted)]'

  const sharedProps = {
    onClick: handleClick,
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
    className: `${baseClass} ${variantClass} ${className}`,
    whileHover: { scale: 1.045, y: -2 },
    whileTap: { scale: 0.94, y: 0 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 22 },
  }

  const inner = (
    <>
      <motion.span
        className="pointer-events-none absolute inset-0 bg-[var(--color-ink)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        aria-hidden
      />
      <motion.span
        className="pointer-events-none absolute -inset-1 rounded-sm border border-[var(--color-glow)] opacity-0"
        animate={
          isHovered
            ? {
                opacity: [0, 0.8, 0.4],
                scale: [0.98, 1.06, 1.02],
                boxShadow: [
                  '0 0 0 rgba(94,234,212,0)',
                  '0 0 40px rgba(94,234,212,0.35), 0 0 80px rgba(94,234,212,0.12)',
                  '0 0 24px rgba(94,234,212,0.2)',
                ],
              }
            : { opacity: 0, scale: 1, boxShadow: '0 0 0 rgba(94,234,212,0)' }
        }
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
      <motion.span
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-12deg] bg-gradient-to-r from-transparent via-[rgba(94,234,212,0.35)] to-transparent"
        animate={isHovered ? { translateX: '220%' } : { translateX: '-120%' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      />
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
            background:
              'radial-gradient(circle, rgba(94,234,212,0.5) 0%, rgba(245,242,237,0.2) 40%, transparent 70%)',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 32, opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />
      ))}
      <motion.span
        className="relative z-10 mix-blend-normal"
        animate={{
          color: isHovered ? (isPrimary ? '#121110' : 'var(--color-glow)') : undefined,
          letterSpacing: isHovered ? '0.32em' : '0.24em',
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </>
  )

  if (href) {
    return (
      <motion.a href={href} {...sharedProps}>
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} {...sharedProps}>
      {inner}
    </motion.button>
  )
}
