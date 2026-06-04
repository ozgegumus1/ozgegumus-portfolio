import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { PremiumButton } from './ui/PremiumButton'
import { TextLink } from './ui/TextLink'
import { personalInfo, socialLinks, ui } from '../data/portfolioData'

const fieldLabels = {
  name: ui.contact.name,
  email: ui.contact.email,
  message: ui.contact.message,
} as const

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28 pb-32 sm:px-8 sm:py-36">
      <div className="grid gap-20 lg:grid-cols-2">
        <ScrollReveal>
          <p className="meta-label">
            <em>05</em> — {ui.sections.contact}
          </p>
          <p className="body-copy mt-6 max-w-sm">{ui.contact.hint}</p>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="display-title mt-8 inline-block text-2xl sm:text-3xl"
            whileHover={{
              scale: 1.02,
              color: 'var(--color-glow)',
              textShadow: '0 0 40px rgba(94,234,212,0.25)',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 26 }}
          >
            {personalInfo.email}
          </motion.a>
          <ul className="mt-12 flex flex-wrap gap-10">
            {socialLinks.map((social) => (
              <li key={social.platform}>
                <TextLink href={social.url} external>
                  {social.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <form onSubmit={handleSubmit} className="space-y-10">
            {(['name', 'email', 'message'] as const).map((field) => (
              <div key={field} className="relative">
                <label htmlFor={field} className="meta-label block">
                  {fieldLabels[field]}
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    name={field}
                    required
                    rows={3}
                    className="mt-4 w-full resize-none border-0 border-b bg-transparent py-3 text-sm font-light text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink-dim)]"
                    style={{
                      borderColor:
                        focused === field ? 'var(--color-glow)' : 'var(--color-line)',
                      boxShadow:
                        focused === field
                          ? '0 1px 0 0 var(--color-glow), 0 4px 24px rgba(94,234,212,0.12)'
                          : 'none',
                    }}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                  />
                ) : (
                  <input
                    id={field}
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    required
                    className="mt-4 w-full border-0 border-b bg-transparent py-3 text-sm font-light text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink-dim)]"
                    style={{
                      borderColor:
                        focused === field ? 'var(--color-glow)' : 'var(--color-line)',
                      boxShadow:
                        focused === field
                          ? '0 1px 0 0 var(--color-glow), 0 4px 24px rgba(94,234,212,0.12)'
                          : 'none',
                    }}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                  />
                )}
                <motion.span
                  className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-[var(--color-glow)]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focused === field ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0, boxShadow: '0 0 12px var(--color-glow-soft)' }}
                  aria-hidden
                />
              </div>
            ))}

            <div className="pt-4">
              {submitted ? (
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="meta-label text-[var(--color-glow)] [text-shadow:0_0_24px_rgba(94,234,212,0.4)]"
                >
                  {ui.contact.success}
                </motion.p>
              ) : (
                <PremiumButton type="submit" variant="primary">
                  {ui.contact.submit}
                </PremiumButton>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>

      <footer className="divider-line mt-28 pt-8">
        <p className="meta-label">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </footer>
    </section>
  )
}
