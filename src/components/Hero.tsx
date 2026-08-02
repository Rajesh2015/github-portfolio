import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/content'
import profilePhoto from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-24 pt-36 md:flex-row md:items-start md:pt-44"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-1 flex-col items-center text-center md:items-start md:text-left"
      >
        <img
          src={profilePhoto}
          alt={profile.name}
          className="h-40 w-40 shrink-0 rounded-full object-cover object-[70%_35%] ring-4 ring-accent/40 shadow-[0_0_48px_-8px_var(--color-accent)] md:h-48 md:w-48 lg:h-56 lg:w-56"
        />

        <p className="mt-8 font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
          {profile.name}.
        </h1>
        <h2 className="mt-2 text-2xl font-semibold text-text-muted sm:text-3xl">{profile.role}.</h2>

        <p className="mt-3 flex items-center gap-1.5 font-mono text-sm text-text-dim">
          <MapPin size={14} /> {profile.location}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
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
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-text-muted transition-colors hover:border-text-dim hover:text-text"
          >
            Resume
            <Download size={16} />
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
          <div className="flex items-center gap-1.5 border-b border-border-soft bg-bg-soft px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-text-dim">whoami.sh</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed">
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
