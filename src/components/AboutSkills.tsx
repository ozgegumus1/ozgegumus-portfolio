import { ScrollReveal } from './ScrollReveal'
import { personalInfo, skills, ui } from '../data/portfolioData'

const categoryOrder = ['frontend', 'backend', 'devops', 'security'] as const

export function AboutSkills() {
  const grouped = categoryOrder.map((category) => ({
    category,
    label: ui.skillCategories[category],
    items: skills.filter((s) => s.category === category),
  }))

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28 sm:px-8 sm:py-36">
      <div className="grid gap-20 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <p className="meta-label">
            <em>02</em> — {ui.sections.about}
          </p>
          <p className="body-copy mt-10 max-w-sm whitespace-pre-line">{personalInfo.bio}</p>
          <p className="meta-label mt-8">{personalInfo.location}</p>
        </ScrollReveal>

        <div>
          <ScrollReveal delay={0.06}>
            <p className="meta-label">
              <em>02.1</em> — {ui.sections.expertise}
            </p>
          </ScrollReveal>
          <ul className="mt-10 space-y-0">
            {grouped.map((group, i) => (
              <ScrollReveal key={group.category} delay={0.08 + i * 0.04}>
                <li className="group border-t border-[var(--color-line)] py-6 transition-colors hover:border-[var(--color-line-hover)]">
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[var(--color-ink-muted)] transition-colors group-hover:text-[var(--color-glow)] group-hover:[text-shadow:0_0_20px_rgba(94,234,212,0.35)]">
                    {group.label}
                  </p>
                  <p className="mt-3 text-sm font-light tracking-wide text-[var(--color-ink-muted)] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--color-ink)]">
                    {group.items.map((s) => s.name).join(' · ')}
                  </p>
                </li>
              </ScrollReveal>
            ))}
            <li className="border-t border-[var(--color-line)]" aria-hidden />
          </ul>
        </div>
      </div>
    </section>
  )
}
