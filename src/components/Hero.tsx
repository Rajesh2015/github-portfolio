import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { profile } from '../data/content'
import profilePhoto from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-24 pt-36 lg:flex-row lg:items-center lg:pt-44">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <div className="mb-4 flex items-center gap-3">
          <img
            src={profilePhoto}
            alt={profile.name}
            className="h-16 w-16 rounded-full object-cover object-[70%_35%] ring-2 ring-accent/40 shadow-[0_0_20px_-4px_var(--color-accent)]"
          />
          <p className="font-mono text-sm text-accent">Hi, my name is</p>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl lg:text-6xl">
          {profile.name}.
        </h1>
        <h2 className="mt-2 text-2xl font-semibold text-text-muted sm:text-3xl">{profile.role}.</h2>

        <p className="mt-3 flex items-center gap-1.5 font-mono text-sm text-text-dim">
          <MapPin size={14} /> {profile.location}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent-soft px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            View Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-text-muted transition-colors hover:border-text-dim hover:text-text"
          >
            Get in touch
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex-1"
      >
        <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/40">
          <div className="flex items-center gap-1.5 border-b border-border-soft bg-bg-soft px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-text-dim">whoami.sh</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
            <code>
              <span className="text-text-dim">$</span> <span className="text-text">whoami</span>
              {'\n\n'}
              <span className="text-accent-2">const</span> <span className="text-text">engineer</span> ={' '}
              <span className="text-text">{'{'}</span>
              {'\n  '}
              <span className="text-accent">name</span>: <span className="text-accent-3">'Rajesh Kumar Dash'</span>,
              {'\n  '}
              <span className="text-accent">role</span>: <span className="text-accent-3">'Data Engineer & Data Scientist'</span>,
              {'\n  '}
              <span className="text-accent">stack</span>: [<span className="text-accent-3">'Spark'</span>,{' '}
              <span className="text-accent-3">'Kafka'</span>, <span className="text-accent-3">'Databricks'</span>,{' '}
              <span className="text-accent-3">'Python'</span>],
              {'\n  '}
              <span className="text-accent">currentlyLearning</span>: <span className="text-accent-3">'LLM agents'</span>,
              {'\n  '}
              <span className="text-accent">openTo</span>: <span className="text-accent-3">'new projects'</span>,
              {'\n'}
              <span className="text-text">{'}'}</span>
              {'\n\n'}
              <span className="text-text-dim"># {'=>'} hire this human</span>
              <span className="cursor-blink text-accent">▍</span>
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  )
}
