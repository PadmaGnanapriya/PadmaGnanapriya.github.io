import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MediumIcon } from './icons'

const links = [
  { href: profile.socials.github, label: 'GitHub', Icon: GitHubIcon },
  { href: profile.socials.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: profile.socials.medium, label: 'Medium', Icon: MediumIcon },
]

export function SocialIcons({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  )
}
