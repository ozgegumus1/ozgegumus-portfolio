import { motion } from 'framer-motion'
import { ScrollReveal } from './ScrollReveal'
import { PremiumButton } from './ui/PremiumButton'
import { heroCtas, personalInfo, ui } from '../data/portfolioData'

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-end px-6 pb-20 pt-14 sm:px-8 sm:pb-28"
    >
      <ScrollReveal>
        <p className="meta-label">
          <em>01</em> — {personalInfo.role}
        </p>
        <motion.h1
          className="display-title mt-8 text-[clamp(3rem,11vw,6.5rem)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {personalInfo.name}
        </motion.h1>
        <p className="mt-8 max-w-md text-sm font-light tracking-wide text-[var(--color-ink-muted)]">
          {personalInfo.tagline}
        </p>
        <div className="mt-14 flex flex-wrap gap-4">
          {heroCtas.map((cta) => (
            <PremiumButton
              key={cta.id}
              href={cta.href}
              variant={cta.variant === 'primary' ? 'primary' : 'outline'}
            >
              {cta.label}
            </PremiumButton>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="divider-line mt-24" />
        <p className="meta-label mt-6">{ui.hero.scroll}</p>
      </ScrollReveal>
    </section>
  )
}
