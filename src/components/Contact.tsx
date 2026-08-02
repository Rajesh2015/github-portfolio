import { motion } from 'framer-motion'
import { Mail, Newspaper } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import SectionHeading from './SectionHeading'
import { links, profile } from '../data/content'

const CONTACT_LINKS = [
  { label: 'Email', value: profile.email, href: links.email, icon: Mail },
  { label: 'GitHub', value: '@Rajesh2015', href: links.github, icon: GithubIcon },
  { label: 'LinkedIn', value: 'rajesh-kumar-dash', href: links.linkedin, icon: LinkedinIcon },
  { label: 'Medium', value: '@rajeshblogs', href: links.medium, icon: Newspaper },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="05" title="Contact" comment="let's talk" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-border bg-surface p-8 sm:p-10"
      >
        <p className="max-w-xl text-base leading-relaxed text-text-muted">
          I'm always open to talking about data engineering, ML, or a new project idea. The fastest
          way to reach me is email — I try to reply within a day or two.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {CONTACT_LINKS.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-md border border-border-soft bg-bg-soft px-4 py-3 transition-colors hover:border-accent/40"
            >
              <Icon size={18} className="shrink-0 text-accent" />
              <span className="font-mono text-sm text-text-muted transition-colors group-hover:text-text">
                {value}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
