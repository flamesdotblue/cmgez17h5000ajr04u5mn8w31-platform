import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative py-24 border-top border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-indigo-500/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold">Let's build the future</h3>
            <p className="mt-3 text-white/70 max-w-prose">
              Have a project in mind or just want to say hi? I'm open to collaborations, freelance work, and interesting problems.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 hover:border-white/40 transition">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/20 hover:border-white/40 transition">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <form className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/80 mb-1">Name</label>
                <input type="text" className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Email</label>
                <input type="email" className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="ada@lovelace.dev" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/80 mb-1">Message</label>
              <textarea rows={5} className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Tell me about your idea..." />
            </div>
            <button type="button" className="mt-6 inline-flex items-center justify-center w-full rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-3 font-semibold hover:opacity-90 transition">
              Send message
            </button>
            <p className="mt-3 text-xs text-white/60">This form is a demo. The send action is disabled in this preview.</p>
          </form>
        </div>

        <div className="pt-16 mt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Futura Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-white transition">Back to top</a>
            <span className="text-white/20">•</span>
            <a href="#toolkit" className="hover:text-white transition">Toolkit</a>
            <span className="text-white/20">•</span>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <span className="text-white/20">•</span>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <span className="text-white/20">•</span>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
