import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    company: 'Neon Labs',
    role: 'Senior Frontend Engineer',
    period: '2023 — Present',
    description:
      'Led the rebuild of a real‑time analytics dashboard with advanced motion and accessibility. Reduced TTI by 38% and improved Core Web Vitals to green across the stack.',
    tech: ['React', 'Vite', 'Framer Motion', 'WebGL'],
  },
  {
    company: 'Quantum UI',
    role: 'Design Engineer',
    period: '2021 — 2023',
    description:
      'Built a component system and theming engine for multi‑brand products. Shipped 40+ components with strong a11y and dark‑mode first aesthetics.',
    tech: ['Radix', 'Tailwind', 'Storybook', 'TypeScript'],
  },
  {
    company: 'Orbital Systems',
    role: 'Full‑stack Developer',
    period: '2019 — 2021',
    description:
      'Created a desktop‑in‑the‑browser with drag windows and snap layouts. Implemented edge APIs and live collaboration features.',
    tech: ['Node.js', 'Postgres', 'WebSockets', 'Vercel'],
  },
];

function Item({ item, index }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{item.role} · <span className="text-white/80">{item.company}</span></h3>
          <span className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white/70">{item.period}</span>
        </div>
        <p className="mt-3 text-white/70">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80 border border-white/10">{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.10),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          <p className="mt-3 text-white/70">A timeline of roles and impact across product engineering and design systems.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 h-max">
            <p className="text-sm text-white/70">Highlights</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc list-inside">
              <li>Performance‑first mindset</li>
              <li>Design systems at scale</li>
              <li>Motion and accessibility</li>
              <li>3D & immersive interfaces</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-500/60 via-white/20 to-indigo-500/60" />
            <div className="space-y-8">
              {experience.map((item, idx) => (
                <Item key={item.company + idx} item={item} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
