import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { links } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-border-soft px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-text-dim">
          <span className="text-text-dim">{'// '}</span>
          built with React, TypeScript &amp; Tailwind — deployed on GitHub Pages
        </p>

        <div className="flex items-center gap-4">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-text-dim transition-colors hover:text-accent">
            <GithubIcon size={16} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-text-dim transition-colors hover:text-accent">
            <LinkedinIcon size={16} />
          </a>
          <a href={links.email} aria-label="Email" className="text-text-dim transition-colors hover:text-accent">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
