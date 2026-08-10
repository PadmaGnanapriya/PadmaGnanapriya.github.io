import { education } from '../data/profile'
import { Stagger, StaggerItem } from './Reveal'
import { Section } from './Section'

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Background"
      title="Education"
      intro="A software engineering foundation from the University of Kelaniya, backed by professional training."
    >
      <Stagger className="grid gap-5 sm:grid-cols-2">
        {education.map((item) => (
          <StaggerItem as="article" key={item.qualification} className="card card-lift flex h-full flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold leading-snug">{item.qualification}</h3>
              <span className="flex-none rounded-full border border-[var(--color-line)] bg-[var(--color-surface-2)] px-3 py-1 text-xs font-medium text-[var(--color-accent-2)]">
                {item.tag}
              </span>
            </div>
            <p className="mt-2 text-[var(--color-ink-muted)]">{item.institution}</p>
            {item.detail && <p className="mt-3 text-sm text-[var(--color-ink-subtle)]">{item.detail}</p>}
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
