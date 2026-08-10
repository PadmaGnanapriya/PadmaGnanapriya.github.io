import { m, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { experience } from '../data/profile'
import { Stagger, StaggerItem } from './Reveal'
import { Section } from './Section'

/**
 * Renders **bolded** spans inside a highlight string, mirroring the emphasis
 * used in the CV. Everything outside the markers stays plain text.
 */
function withEmphasis(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).reduce<ReactNode[]>((nodes, part, i) => {
    if (!part) return nodes
    if (part.startsWith('**') && part.endsWith('**')) {
      nodes.push(
        <strong key={i} className="font-semibold text-[var(--color-ink)]">
          {part.slice(2, -2)}
        </strong>,
      )
    } else {
      nodes.push(part)
    }
    return nodes
  }, [])
}

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  // Fills the timeline rail as the section moves through the viewport.
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 80%', 'end 55%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 })

  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Experience"
      intro="A focused journey at Velaris — growing through full-stack delivery into a leadership role centred on enterprise integrations, reliability and performance at scale."
    >
      <div ref={trackRef} className="relative">
        {/* Scroll-linked accent rail drawn over the static timeline line. */}
        <m.span
          aria-hidden="true"
          style={{ scaleY: reduce ? 1 : scaleY }}
          className="absolute inset-y-0 left-0 w-px origin-top bg-gradient-to-b from-[var(--color-accent-2)] via-[var(--color-accent)] to-transparent"
        />
        <Stagger as="ol" className="relative border-l border-[var(--color-line)] pl-6 sm:pl-8">
        {experience.map((item) => (
          <StaggerItem as="li" key={`${item.role}-${item.period}`} className="mb-10 last:mb-0">
            {/* node */}
            {item.current && (
              <span
                aria-hidden="true"
                className="absolute -left-[15px] mt-[-3px] h-8 w-8 rounded-full bg-[var(--color-accent)]/25 blur-md"
              />
            )}
            <span
              className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                item.current
                  ? 'border-[var(--color-accent-2)] bg-[var(--color-accent)]'
                  : 'border-[var(--color-line)] bg-[var(--color-surface-2)]'
              }`}
              aria-hidden="true"
            />
            <article className="card card-lift p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {item.role}
                  <span className="text-[var(--color-ink-muted)]">
                    {' · '}
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[var(--color-line)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--color-accent-2)] hover:decoration-[var(--color-accent-2)]"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </span>
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
              <p className="mt-1.5 text-xs italic text-[var(--color-ink-subtle)]">{item.stack}</p>
              <p className="mt-3 text-[var(--color-ink-muted)]">{item.summary}</p>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-[var(--color-ink-muted)]">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent-2)]" aria-hidden="true" />
                    <span>{withEmphasis(h)}</span>
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
        </Stagger>
      </div>
    </Section>
  )
}
