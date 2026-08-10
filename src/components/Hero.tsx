import { m, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { profile } from '../data/profile'
import { ArrowIcon, DownloadIcon } from './icons'
import { SocialIcons } from './SocialIcons'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // Scroll-linked effects — all start at their "visible" value at the top (LCP-safe).
  // Portrait drifts downward on scroll; the section's overflow-hidden + fade keep
  // it contained within the hero so it never reaches the career section.
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 220])
  const radius = useTransform(scrollYProgress, [0, 0.6], ['2rem', '50%']) // square → circle
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <m.div style={{ opacity: fade }} className="container-x grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Copy */}
        <div>
          {profile.availableForFreelance && (
            <p
              className="hero-rise mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-ink-muted)]"
              style={{ animationDelay: '0s' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for freelance web development
            </p>
          )}

          {/* h1 + subheadline are the LCP elements — no entrance animation so they paint instantly */}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.headline.split('&')[0].trim()} &{' '}
            <span className="accent-gradient-text">{profile.headline.split('&')[1].trim()}</span>
            <span className="mt-2 block text-[var(--color-ink-muted)]">{profile.tagline}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]">
            {profile.subheadline}
          </p>

          <div
            className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.12s' }}
          >
            <m.a
              href={profile.cvPath}
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-2)]"
            >
              <DownloadIcon width={18} height={18} />
              Download CV
            </m.a>
            <m.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
            >
              Contact for Freelance
              <ArrowIcon width={18} height={18} className="transition-transform group-hover:translate-x-1" />
            </m.a>
          </div>

          <div className="hero-rise mt-8" style={{ animationDelay: '0.2s' }}>
            <SocialIcons />
          </div>
        </div>

        {/* Portrait — parallax + square→circle morph on scroll */}
        <m.div style={{ y: portraitY }} className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
          <m.div
            style={{ borderRadius: radius }}
            className="absolute -inset-4 -z-10 bg-[var(--color-accent)] opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <m.div
            style={{ borderRadius: radius }}
            className="hero-pop overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)]"
          >
            <img
              src={profile.photo}
              alt="Portrait of Padma Gnanapriya"
              width={640}
              height={640}
              loading="eager"
              fetchPriority="high"
              className="aspect-square w-full object-cover"
            />
          </m.div>
        </m.div>
      </m.div>
    </section>
  )
}
