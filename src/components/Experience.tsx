import { experience } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="From intern to engineering leadership"
      intro="A focused journey at Velaris — growing through full-stack delivery into a leadership role centred on enterprise integrations and performance at scale."
    >
      <ol className="relative border-l border-[var(--color-line)] pl-6 sm:pl-8">
        {experience.map((item, i) => (
          <Reveal as="li" key={`${item.role}-${item.period}`} delay={i * 0.05} className="mb-10 last:mb-0">
            {/* node */}
            <span
              className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                item.current
                  ? 'border-[var(--color-accent-2)] bg-[var(--color-accent)]'
                  : 'border-[var(--color-line)] bg-[var(--color-surface-2)]'
              }`}
              aria-hidden="true"
            />
            <article className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {item.role}
                  <span className="text-[var(--color-ink-muted)]"> · {item.company}</span>
                </h3>
                <p className="flex items-center gap-2 text-sm text-[var(--color-ink-subtle)]">
                  {item.current && (
                    <span className="rounded-full bg-[var(--color-accent)]/15 px-2 py-0.5 text-xs font-medium text-[var(--color-accent-2)]">
                      Current
                    </span>
                  )}
                  {item.period}
                </p>
              </div>
              <p className="mt-3 text-[var(--color-ink-muted)]">{item.summary}</p>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-[var(--color-ink-muted)]">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent-2)]" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
