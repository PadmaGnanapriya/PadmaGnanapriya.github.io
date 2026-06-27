import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** vertical offset to animate from (px) */
  y?: number
  as?: 'div' | 'li' | 'article' | 'section'
}

/**
 * Subtle, enterprise scroll-reveal. Fades + lifts content into place once,
 * the first time it enters the viewport. Honours prefers-reduced-motion via
 * the global CSS override, and renders its children server-side for SEO.
 */
export function Reveal({ children, className, delay = 0, y = 18, as = 'div' }: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
