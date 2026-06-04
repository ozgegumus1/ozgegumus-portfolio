import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { TextLink } from './ui/TextLink'
import { projects, ui } from '../data/portfolioData'

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28 sm:px-8 sm:py-36">
      <ScrollReveal>
        <p className="meta-label">
          <em>03</em> — {ui.sections.projects}
        </p>
      </ScrollReveal>

      <ul className="mt-14">
        {projects.map((project, index) => {
          const isOpen = openId === project.id
          const isHovered = hoveredId === project.id
          const indexStr = String(index + 1).padStart(2, '0')

          return (
            <ScrollReveal key={project.id} delay={index * 0.04}>
              <li className="relative border-t border-[var(--color-line)]">
                <motion.div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(94,234,212,0.08),transparent_65%)]"
                  initial={false}
                  animate={{ opacity: isHovered || isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  aria-hidden
                />
                <motion.div
                  className="pointer-events-none absolute bottom-0 left-0 h-px bg-[var(--color-glow)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered || isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0, width: '100%', boxShadow: '0 0 16px var(--color-glow-soft)' }}
                  aria-hidden
                />

                <motion.button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : project.id)}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className="relative flex w-full items-baseline gap-6 py-7 text-left sm:gap-10 sm:py-8"
                  aria-expanded={isOpen}
                  whileTap={{ scale: 0.985 }}
                >
                  <motion.span
                    className="w-8 shrink-0 font-mono text-[0.625rem] text-[var(--color-ink-dim)]"
                    animate={{
                      color: isHovered || isOpen ? 'var(--color-glow)' : 'var(--color-ink-dim)',
                      textShadow:
                        isHovered || isOpen ? '0 0 16px var(--color-glow-soft)' : 'none',
                    }}
                  >
                    {indexStr}
                  </motion.span>
                  <motion.span
                    className="display-title min-w-0 flex-1 text-2xl sm:text-3xl"
                    animate={{
                      x: isHovered ? 12 : 0,
                      color: isHovered || isOpen ? 'var(--color-ink)' : 'var(--color-ink-muted)',
                    }}
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  >
                    {project.title}
                  </motion.span>
                  <span className="hidden text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-ink-dim)] sm:block">
                    {project.year}
                  </span>
                  <motion.span
                    className="shrink-0 text-lg text-[var(--color-ink-dim)]"
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      color: isHovered || isOpen ? 'var(--color-glow)' : 'var(--color-ink-dim)',
                      scale: isHovered ? 1.2 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    aria-hidden
                  >
                    +
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="pb-10 pl-14 sm:pl-20"
                        initial={{ y: -8, filter: 'blur(4px)' }}
                        animate={{ y: 0, filter: 'blur(0px)' }}
                        exit={{ y: -4, filter: 'blur(4px)' }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="body-copy max-w-lg">{project.description}</p>
                        <p className="meta-label mt-5">{project.techStack.join(' · ')}</p>
                        <div className="mt-8 flex gap-10">
                          <TextLink href={project.githubUrl} external>
                            {ui.projects.source}
                          </TextLink>
                          {project.liveUrl && (
                            <TextLink href={project.liveUrl} external>
                              {ui.projects.live}
                            </TextLink>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ScrollReveal>
          )
        })}
        <li className="border-t border-[var(--color-line)]" aria-hidden />
      </ul>
    </section>
  )
}
