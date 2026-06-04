import { ScrollReveal } from './ScrollReveal'
import { references, ui } from '../data/portfolioData'

export function References() {
  return (
    <section id="references" className="mx-auto max-w-5xl px-6 py-28 sm:px-8 sm:py-36">
      <ScrollReveal>
        <p className="meta-label">
          <em>04</em> — {ui.sections.references}
        </p>
      </ScrollReveal>

      <ul className="mt-14">
        {references.map((ref, i) => (
          <ScrollReveal key={ref.id} delay={i * 0.06}>
            <li className="group border-t border-[var(--color-line)] py-8 transition-colors hover:border-[var(--color-line-hover)]">
              <p className="display-title text-xl sm:text-2xl text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-glow)]">
                {ref.name}
              </p>
              <p className="mt-2 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-[var(--color-ink-muted)]">
                {ref.title}
              </p>
              <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-ink-dim)]">
                {ref.company}
              </p>
            </li>
          </ScrollReveal>
        ))}
        <li className="border-t border-[var(--color-line)]" aria-hidden />
      </ul>
    </section>
  )
}