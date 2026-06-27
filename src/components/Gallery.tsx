import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { galleryFilters, galleryImages, type GalleryCategory } from '../data/profile'
import { Section } from './Section'

type Filter = GalleryCategory | 'all'

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('all')
  const [broken, setBroken] = useState<Set<string>>(new Set())

  const visible = useMemo(
    () =>
      galleryImages
        .filter((img) => filter === 'all' || img.category === filter)
        .filter((img) => !broken.has(img.src)),
    [filter, broken],
  )

  const allBroken = broken.size >= galleryImages.length

  return (
    <Section
      id="gallery"
      eyebrow="Life"
      title="Gallery"
      intro="Moments from the journey — collaboration and leadership at the office, and the university days that started it all."
    >
      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
        {galleryFilters.map((f) => {
          const active = filter === f.key
          return (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink-muted)] hover:border-[var(--color-accent)]'
              }`}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      {allBroken ? (
        <div className="card p-8 text-[var(--color-ink-muted)]">
          Add photos to <code className="text-[var(--color-accent-2)]">public/gallery/office/</code> and{' '}
          <code className="text-[var(--color-accent-2)]">public/gallery/university/</code>, then list them in{' '}
          <code className="text-[var(--color-accent-2)]">src/data/profile.ts</code>.
        </div>
      ) : (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          <AnimatePresence mode="popLayout">
            {visible.map((img) => (
              <motion.figure
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="card group relative break-inside-avoid overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  onError={() => setBroken((prev) => new Set(prev).add(img.src))}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {img.alt}
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      )}
    </Section>
  )
}
