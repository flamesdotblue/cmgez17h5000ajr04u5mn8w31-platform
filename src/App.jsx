import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechToolkit from './components/TechToolkit';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main>
        <section id="hero" className="relative">
          <Hero />
        </section>
        <section id="toolkit" className="relative">
          <TechToolkit />
        </section>
        <section id="projects" className="relative">
          <Projects />
        </section>
        <section id="experience" className="relative">
          <Experience />
        </section>
        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>
    </div>
  );
}
