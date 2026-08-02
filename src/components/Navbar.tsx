import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { links } from '../data/content'

const NAV_ITEMS = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'blog', label: 'blog' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'border-b border-border bg-bg/90 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-text">
          <span className="text-accent">~/</span>
          <span className="font-semibold">rajesh-dash</span>
          <span className="cursor-blink text-accent">_</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-sm text-text-muted md:flex">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition-colors hover:text-accent">
                <span className="text-text-dim">{String(i + 1).padStart(2, '0')}.</span> {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        <button
          className="text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg-soft px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 font-mono text-sm text-text-muted">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="transition-colors hover:text-accent"
                >
                  <span className="text-text-dim">{String(i + 1).padStart(2, '0')}.</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
