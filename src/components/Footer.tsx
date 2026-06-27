import { profile } from '../data/profile'
import { DownloadIcon } from './icons'
import { SocialIcons } from './SocialIcons'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--color-line)] py-12">
      <div className="container-x flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-[var(--color-ink-subtle)]">{profile.headline}</p>
        </div>

        <SocialIcons />

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent-2)] hover:underline"
          >
            <DownloadIcon width={16} height={16} />
            Download CV
          </a>
          <p className="text-sm text-[var(--color-ink-subtle)]">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
