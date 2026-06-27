import { motion } from 'motion/react'
import { profile } from '../data/profile'
import { ArrowIcon, DownloadIcon } from './icons'
import { SocialIcons } from './SocialIcons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="grid-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        {/* Copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-ink-muted)]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for freelance web development
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.headline.split('&')[0].trim()} &{' '}
            <span className="accent-gradient-text">Associate Tech Lead</span>
            <span className="mt-2 block text-[var(--color-ink-muted)]">{profile.tagline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]"
          >
            {profile.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-2)]"
            >
              <DownloadIcon width={18} height={18} />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
            >
              Contact for Freelance
              <ArrowIcon width={18} height={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-8"
          >
            <SocialIcons />
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
        >
          <div
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-[var(--color-accent)] opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)]">
            <img
              src={profile.photo}
              alt="Portrait of Padma Gnanapriya"
              width={640}
              height={640}
              loading="eager"
              className="aspect-square w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
