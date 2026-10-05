import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#030303] border-t border-white/10 text-xs font-mono text-[#9A9A9A] relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 Santhosh Ram K. Built with React, Three.js & Tailwind CSS.
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-full border border-white/14 bg-white/[0.03] text-white hover:bg-white hover:text-black transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
