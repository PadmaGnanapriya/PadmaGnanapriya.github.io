import { skillGroups } from '../data/profile'
import { Stagger, StaggerItem } from './Reveal'
import { Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills matrix"
      intro="The stack I use to design, build and operate scalable products — grouped by where it lives in the system."
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem as="article" key={group.category} className="card card-lift flex h-full flex-col p-6">
            <h3 className="text-lg font-semibold">{group.category}</h3>
            <p className="mt-1 text-sm text-[var(--color-ink-subtle)]">{group.blurb}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="inline-flex items-center rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
