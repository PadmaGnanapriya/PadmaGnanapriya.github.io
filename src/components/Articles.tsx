import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { fetchMediumArticles, type Article } from '../lib/medium'
import { ArrowIcon } from './icons'
import { Stagger, StaggerItem } from './Reveal'
import { Section } from './Section'

type State =
  | { status: 'loading' }
  | { status: 'ready'; articles: Article[] }
  | { status: 'empty' }

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function Articles() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    let active = true
    fetchMediumArticles(9).then((articles) => {
      if (!active) return
      setState(articles.length ? { status: 'ready', articles } : { status: 'empty' })
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <Section
      id="articles"
      eyebrow="Writing"
      title="Articles on Medium"
      intro="Notes on engineering, architecture and building at scale — pulled live from my Medium feed, so new posts appear here automatically."
    >
      {state.status === 'loading' && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card h-64 animate-pulse p-6">
              <div className="h-32 w-full rounded-lg bg-[var(--color-surface-2)]" />
              <div className="mt-4 h-4 w-3/4 rounded bg-[var(--color-surface-2)]" />
              <div className="mt-2 h-4 w-1/2 rounded bg-[var(--color-surface-2)]" />
            </div>
          ))}
        </div>
      )}

      {state.status === 'empty' && (
        <div className="card flex flex-col items-start gap-4 p-8">
          <p className="text-[var(--color-ink-muted)]">
            Articles couldn’t be loaded right now. Read them directly on Medium.
          </p>
          <a
            href={profile.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--color-accent)]"
          >
            Visit my Medium <ArrowIcon width={16} height={16} />
          </a>
        </div>
      )}

      {state.status === 'ready' && (
        <>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {state.articles.map((article) => (
              <StaggerItem as="article" key={article.link} className="card card-lift group flex h-full flex-col overflow-hidden">
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col">
                  {article.thumbnail && (
                    <div className="aspect-[16/9] overflow-hidden bg-[var(--color-surface-2)]">
                      <img
                        src={article.thumbnail}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs text-[var(--color-ink-subtle)]">{formatDate(article.pubDate)}</p>
                    <h3 className="mt-2 line-clamp-2 font-semibold leading-snug transition-colors group-hover:text-[var(--color-accent-2)]">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-[var(--color-ink-muted)]">
                      {article.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-2)]">
                      Read on Medium <ArrowIcon width={15} height={15} />
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10">
            <a
              href={profile.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              View all articles on Medium <ArrowIcon width={16} height={16} />
            </a>
          </div>
        </>
      )}
    </Section>
  )
}
