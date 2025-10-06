import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Nexus UI',
    description:
      'A component library with luminescent themes and motion primitives optimized for dark UIs.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    repo: '#',
    demo: '#',
    accent: 'from-fuchsia-600 to-indigo-600',
  },
  {
    title: 'Quantum Canvas',
    description:
      'Procedural generative art playground with shader-like effects running in the browser.',
    tech: ['Canvas', 'WebGL', 'Vite'],
    repo: '#',
    demo: '#',
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Orbit OS',
    description:
      'A minimalist desktop-in-the-browser with draggable windows and snap layouts.',
    tech: ['React', 'Zustand', 'Radix UI'],
    repo: '#',
    demo: '#',
    accent: 'from-emerald-500 to-teal-600',
  },
];

function Card({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
    >
      <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr ${p.accent} blur-2xl`} />
      <div className="relative p-6">
        <div className={`inline-flex items-center text-xs uppercase tracking-wider bg-gradient-to-r ${p.accent} text-white px-2 py-1 rounded-md`}>Featured</div>
        <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-white/70">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80 border border-white/10">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a href={p.repo} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <Github className="h-4 w-4" /> Code
          </a>
          <a href={p.demo} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ExternalLink className="h-4 w-4" /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(155,135,245,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected Projects</h2>
          <p className="mt-3 text-white/70">
            A snapshot of experiments and products that explore motion, accessibility, and high performance.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
