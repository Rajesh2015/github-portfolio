import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { blogPosts, links } from '../data/content'

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="04" title="Writing" comment="notes from the blog" />

      <div className="divide-y divide-border-soft rounded-lg border border-border bg-surface">
        {blogPosts.map((post, i) => (
          <motion.a
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-surface-hover"
          >
            <span className="font-mono text-sm text-text-muted transition-colors group-hover:text-text">
              {post.title}
            </span>
            <ArrowUpRight
              size={16}
              className="shrink-0 text-text-dim transition-colors group-hover:text-accent"
            />
          </motion.a>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href={links.blog}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm text-accent hover:underline"
        >
          more posts on rajeshblogs.in →
        </a>
      </div>
    </section>
  )
}
