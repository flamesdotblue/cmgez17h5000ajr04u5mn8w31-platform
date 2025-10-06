import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Layers, Palette, Cloud, Server, Database, Terminal, Box, Rocket } from 'lucide-react';

const ringVariants = (duration = 30) => ({
  animate: {
    rotate: 360,
    transition: { repeat: Infinity, ease: 'linear', duration },
  },
});

function OrbitRing({ size, reverse = false, duration = 30, children }) {
  return (
    <motion.div
      variants={ringVariants(duration)}
      animate="animate"
      style={{ width: size, height: size }}
      className={`absolute inset-0 m-auto rounded-full border border-white/10 ${reverse ? '' : ''}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-full blur-xl opacity-40" style={{ background: 'radial-gradient(closest-side, rgba(217,70,239,0.15), transparent 70%)' }} />
      {children}
    </motion.div>
  );
}

function OrbitIcon({ angle, distance, children }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * distance;
  const y = Math.sin(rad) * distance;
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
    >
      <div className="relative p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:scale-110 transition-transform">
        {children}
        <div className="absolute -inset-3 -z-10 rounded-full opacity-20" style={{ background: 'conic-gradient(from 0deg, rgba(99,102,241,0.25), rgba(236,72,153,0.25), rgba(56,189,248,0.25), rgba(99,102,241,0.25))' }} />
      </div>
    </div>
  );
}

export default function TechToolkit() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Tech Toolkit</h2>
          <p className="mt-3 text-white/70">Tools and platforms I use to build immersive, performant experiences. Icons orbit in a solar system—because everything revolves around great DX.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.35)] border border-white/10">
                  <Rocket className="h-10 w-10" />
                </div>
                <p className="mt-4 text-sm text-white/70">Core</p>
              </div>
              <div className="absolute -inset-20 blur-3xl opacity-30" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.25), transparent 60%)' }} />
            </div>

            <OrbitRing size={360} duration={36}>
              <OrbitIcon angle={0} distance={180}><Cpu className="h-5 w-5" /></OrbitIcon>
              <OrbitIcon angle={72} distance={180}><Code className="h-5 w-5" /></OrbitIcon>
              <OrbitIcon angle={144} distance={180}><Layers className="h-5 w-5" /></OrbitIcon>
              <OrbitIcon angle={216} distance={180}><Palette className="h-5 w-5" /></OrbitIcon>
              <OrbitIcon angle={288} distance={180}><Cloud className="h-5 w-5" /></OrbitIcon>
            </OrbitRing>

            <OrbitRing size={520} duration={52}>
              <OrbitIcon angle={30} distance={260}><Server className="h-5 w-5" /></OrbitIcon>
              <OrbitIcon angle={120} distance={260}><Database className="h-5 w-5" /></OrbitIcon>
              <OrbitIcon angle={210} distance={260}><Terminal className="h-5 w-5" /></OrbitIcon>
              <OrbitIcon angle={300} distance={260}><Box className="h-5 w-5" /></OrbitIcon>
            </OrbitRing>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 80 }}
              className="pointer-events-none absolute inset-0 m-auto"
              style={{ width: 680, height: 680 }}
            >
              <div className="w-full h-full rounded-full border border-dashed border-white/10" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300/80">Frontend</p>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>React, Vite</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Radix UI</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">3D & Visuals</p>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>Spline</li>
                <li>Canvas / WebGL</li>
                <li>Shaders (GLSL-like patterns)</li>
                <li>Motion Systems</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">Backend</p>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>Node.js</li>
                <li>Edge / Serverless</li>
                <li>Postgres / Redis</li>
                <li>tRPC / REST</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300/80">Infra & DX</p>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>Vercel</li>
                <li>CI/CD</li>
                <li>Testing & Linting</li>
                <li>Observability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
