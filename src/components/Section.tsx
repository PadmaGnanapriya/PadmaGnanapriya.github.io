import { m, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children: ReactNode
  className?: string
}

const EASE = [0.22, 1, 0.36, 1] as const

/** Semantic <section> with a consistent heading block. */
export function Section({ id, eyebrow, title, intro, children, className = '' }: SectionProps) {
  const reduce = useReducedMotion()

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${className}`}>
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-2)]">
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {/* Accent rule that draws itself in as the heading scrolls into view. */}
          <m.div
            aria-hidden="true"
            className="mt-5 h-px w-28 origin-left bg-gradient-to-r from-[var(--color-accent-2)] to-transparent"
            initial={reduce ? undefined : { scaleX: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          />
          {intro && <p className="mt-5 text-base leading-relaxed text-[var(--color-ink-muted)]">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
