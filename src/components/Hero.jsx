import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300/80 mb-4">Designer • Developer • Dreamer</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              Building immersive, cyberpunk-inspired experiences
            </h1>
            <p className="mt-5 text-white/80 max-w-xl">
              I craft futuristic interfaces, interactive 3D scenes, and performant web apps. Dive into my world of motion, light, and code.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-transparent border border-white/20 hover:border-white/40 px-5 py-3 text-sm font-semibold text-white/90 transition"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
