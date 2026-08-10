import { m, useReducedMotion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

type Tag = 'div' | 'li' | 'article' | 'section' | 'ul' | 'ol'

const EASE = [0.22, 1, 0.36, 1] as const

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: EASE } },
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
}

/** Reduced motion: land in the final state immediately, no travel. */
const staticVariants: Variants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  show: { opacity: 1, y: 0, scale: 1 },
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: Tag
}

/**
 * Single-element scroll reveal: fades, lifts and scales into place the first
 * time it enters the viewport. Renders children server-side (SEO), animates on
 * hydrate.
 */
export function Reveal({ children, className, delay = 0, y = 40, as = 'div' }: RevealProps) {
  const MotionTag = m[as]
  const reduce = useReducedMotion()

  if (reduce) return <MotionTag className={className}>{children}</MotionTag>

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Stagger container — its <StaggerItem> children cascade in one after another
 * as the group scrolls into view. Use for grids, timelines and card rows.
 */
export function Stagger({ children, className, as = 'div' }: RevealProps) {
  const MotionTag = m[as]
  const reduce = useReducedMotion()

  return (
    <MotionTag
      className={className}
      variants={reduce ? undefined : containerVariants}
      initial={reduce ? undefined : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({ children, className, as = 'div' }: RevealProps) {
  const MotionTag = m[as]
  const reduce = useReducedMotion()

  return (
    <MotionTag className={className} variants={reduce ? staticVariants : itemVariants}>
      {children}
    </MotionTag>
  )
}
