import { certifications } from '../data/profile'
import { ArrowIcon } from './icons'
import { Stagger, StaggerItem } from './Reveal'
import { Section } from './Section'

/**
 * Issuer marks. These are original monogram tiles tinted with each vendor's
 * signature colour — not reproductions of the official logos, which keeps us
 * clear of the vendors' trademark/brand guidelines. Swap in official SVGs here
 * if you ever get permission to use them.
 */
const ISSUER_MARKS = {
  aws: { label: 'AWS', color: '#FF9900' },
  google: { label: 'GC', color: '#4285F4' },
  oracle: { label: 'O', color: '#EA5C47' },
} as const

function IssuerMark({ issuerKey }: { issuerKey: keyof typeof ISSUER_MARKS }) {
  const { label, color } = ISSUER_MARKS[issuerKey]
  return (
    <span
      aria-hidden="true"
      className="grid h-11 w-11 flex-none place-items-center rounded-xl border text-[11px] font-bold tracking-tight"
      style={{ borderColor: `${color}59`, backgroundColor: `${color}1f`, color }}
    >
      {label}
    </span>
  )
}

export function Certifications() {
  // Nothing to show yet — keep the page clean rather than rendering an empty band.
  if (certifications.length === 0) return null

  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Licenses & certifications"
      intro="Formal credentials backing the day-to-day engineering work — each one links out to its verification page where available."
    >
      <Stagger className="grid gap-5 sm:grid-cols-2">
        {certifications.map((item) => (
          <StaggerItem
            as="article"
            key={`${item.name}-${item.issuer}`}
            className="card card-lift flex h-full flex-col p-6"
          >
            <div className="flex items-start gap-4">
              {item.issuerKey && <IssuerMark issuerKey={item.issuerKey} />}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold leading-snug">{item.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                  {item.issuerUrl ? (
                    <a
                      href={item.issuerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[var(--color-line)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--color-accent-2)] hover:decoration-[var(--color-accent-2)]"
                    >
                      {item.issuer}
                    </a>
                  ) : (
                    item.issuer
                  )}
                </p>
              </div>
              {item.issued && (
                <span className="flex-none rounded-full border border-[var(--color-line)] bg-[var(--color-surface-2)] px-3 py-1 text-xs font-medium text-[var(--color-accent-2)]">
                  {item.issued}
                </span>
              )}
            </div>
            {item.detail && <p className="mt-3 text-sm text-[var(--color-ink-subtle)]">{item.detail}</p>}
            {item.credentialUrl && (
              <a
                href={item.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-[var(--color-accent-2)]"
              >
                Show credential
                <ArrowIcon
                  width={16}
                  height={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            )}
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
