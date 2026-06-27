import { useState, type FormEvent } from 'react'
import { profile } from '../data/profile'
import { SocialIcons } from './SocialIcons'
import { Section } from './Section'

/**
 * Set this to your Formspree endpoint (https://formspree.io) to receive
 * submissions by email, e.g. 'https://formspree.io/f/abcdwxyz'.
 * Leave empty to fall back to opening the visitor's email client (mailto).
 */
const FORM_ENDPOINT = ''

type Errors = Partial<Record<'name' | 'email' | 'details', string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', details: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  function validate(): Errors {
    const next: Errors = {}
    if (values.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!EMAIL_RE.test(values.email.trim())) next.email = 'Please enter a valid email address.'
    if (values.details.trim().length < 10) next.details = 'Tell me a little more (at least 10 characters).'
    return next
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('submitting')

    // No backend configured → open the visitor's email client.
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Freelance enquiry from ${values.name}`)
      const body = encodeURIComponent(`${values.details}\n\nReply to: ${values.email}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('success')
      return
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`)
      setStatus('success')
      setValues({ name: '', email: '', details: '' })
    } catch {
      setStatus('error')
    }
  }

  function field(name: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const inputClass =
    'w-full rounded-xl border bg-[var(--color-surface-2)] px-4 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-ink-subtle)] outline-none transition-colors focus:border-[var(--color-accent)]'

  return (
    <Section
      id="contact"
      eyebrow="Freelance"
      title="Let’s build something"
      intro="Have a web development project in mind? Send a few details and I’ll get back to you."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-[var(--color-ink-muted)]">
            I take on select freelance web development work — modern, fast, accessible sites and apps.
            Prefer email? Reach me at{' '}
            <a href={`mailto:${profile.email}`} className="text-[var(--color-accent-2)] underline-offset-4 hover:underline">
              {profile.email}
            </a>
            .
          </p>
          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
          {status === 'success' ? (
            <div className="flex min-h-48 flex-col items-start justify-center gap-2">
              <h3 className="text-xl font-semibold">Thank you! 🎉</h3>
              <p className="text-[var(--color-ink-muted)]">
                Your message is on its way. I’ll reply to <strong>{values.email || 'your inbox'}</strong> soon.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => field('name', e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`${inputClass} ${errors.name ? 'border-red-500' : 'border-[var(--color-line)]'}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => field('email', e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`${inputClass} ${errors.email ? 'border-red-500' : 'border-[var(--color-line)]'}`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="details" className="mb-1.5 block text-sm font-medium">
                  Project details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  value={values.details}
                  onChange={(e) => field('details', e.target.value)}
                  aria-invalid={!!errors.details}
                  aria-describedby={errors.details ? 'details-error' : undefined}
                  className={`${inputClass} resize-y ${errors.details ? 'border-red-500' : 'border-[var(--color-line)]'}`}
                  placeholder="What would you like to build? Scope, timeline, budget range…"
                />
                {errors.details && (
                  <p id="details-error" className="mt-1.5 text-sm text-red-400">
                    {errors.details}
                  </p>
                )}
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong sending your message. Please email me directly at {profile.email}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-2)] disabled:opacity-60 sm:w-auto"
              >
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
            </div>
          )}
        </form>
      </div>
    </Section>
  )
}
