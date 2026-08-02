import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="01" title="About" comment="a bit of background" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="grid gap-10 lg:grid-cols-[1.4fr_1fr]"
      >
        <div className="space-y-4 text-base leading-relaxed text-text-muted">
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-text-dim">Focus areas</p>
          <ul className="mt-4 space-y-3 font-mono text-sm">
            <li className="flex items-start gap-2 text-text-muted">
              <span className="text-accent">▸</span> Streaming &amp; batch pipelines (Spark, Kafka)
            </li>
            <li className="flex items-start gap-2 text-text-muted">
              <span className="text-accent">▸</span> Lakehouse tables (Delta Lake, Apache Hudi)
            </li>
            <li className="flex items-start gap-2 text-text-muted">
              <span className="text-accent">▸</span> Applied ML (classification, NLP, vision)
            </li>
            <li className="flex items-start gap-2 text-text-muted">
              <span className="text-accent">▸</span> LLM agents &amp; synthetic data
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
