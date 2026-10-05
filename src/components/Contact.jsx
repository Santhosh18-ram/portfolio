import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'santhoshramk18@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-28 bg-[#050505] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2 block">
            06. Next Steps
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl font-bold text-[#F5F5F5] tracking-tight leading-tight max-w-4xl mx-auto">
            Let's build something together
          </h2>
        </div>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#9A9A9A] mb-10 font-sans leading-relaxed">
          I am actively seeking a <strong>Web Development Internship</strong>. Whether you have a project idea, a job opportunity, or just want to connect — my inbox is always open.
        </p>

        {/* Copy Email Button with Toast Feedback */}
        <div className="flex flex-col items-center justify-center gap-4 mb-16">
          <div className="inline-flex items-center gap-3 p-2 pl-5 rounded-xl bg-white/[0.03] border border-white/14">
            <Mail className="w-5 h-5 text-white/70" />
            <span className="font-mono text-sm sm:text-base text-white font-medium">
              {email}
            </span>
            <button
              onClick={handleCopyEmail}
              className="btn-white text-xs py-2 px-4 ml-2"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Email
                </>
              )}
            </button>
          </div>

          {copied && (
            <p className="text-xs font-mono text-white/80 animate-fade-in">
              ✓ Email address copied to clipboard!
            </p>
          )}
        </div>

        {/* Social Links Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/Santhosh18-ram"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            <Github className="w-4 h-4" /> GitHub Profile <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://linkedin.com/in/ramk1817"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn Profile <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="tel:+917019675503"
            className="btn-outline-white"
          >
            <Phone className="w-4 h-4" /> +91 7019675503
          </a>
        </div>
      </div>
    </section>
  );
}
