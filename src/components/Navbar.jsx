import React from 'react';
import { Rocket, Folder, Mail, Cpu, Briefcase } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="p-2 rounded-md bg-gradient-to-tr from-fuchsia-600 to-indigo-600 group-hover:scale-110 transition-transform">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-tight">Futura Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#toolkit" className="text-white/80 hover:text-white transition flex items-center gap-2"><Cpu className="h-4 w-4" /> Toolkit</a>
            <a href="#projects" className="text-white/80 hover:text-white transition flex items-center gap-2"><Folder className="h-4 w-4" /> Projects</a>
            <a href="#experience" className="text-white/80 hover:text-white transition flex items-center gap-2"><Briefcase className="h-4 w-4" /> Experience</a>
            <a href="#contact" className="text-white/80 hover:text-white transition flex items-center gap-2"><Mail className="h-4 w-4" /> Contact</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition">GitHub</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
