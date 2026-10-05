import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Trophy } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'skillsphere',
      num: '01',
      title: 'SkillSphere – Peer-to-Peer Skill Exchange Platform',
      tech: 'Python, MySQL',
      image: 'assets/images/thumbs/skillsphere-real.png',
      liveUrl: 'https://santhosh18-ram.github.io/Skill-Sphere/',
      githubUrl: 'https://github.com/Santhosh18-ram/Skill-Sphere',
      bullets: [
        'Designed a normalized 8-table MySQL schema with 1:1, 1:M, and M:N relationships, enforced via foreign keys, UNIQUE, and CHECK constraints.',
        'Built a skill-matching engine using stored procedures (sp_find_matching_partners) to pair students by complementary skills.',
        'Implemented transaction-safe session booking and 4 triggers for automated notifications and profile scoring.',
        'Created 3 views and 11 indexes to optimize reporting and query performance.',
      ],
      tags: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'Stored Procedures', icon: 'devicon-mysql-plain' },
        { name: 'Triggers & Views', icon: 'devicon-mysql-plain' },
      ],
    },
    {
      id: 'talktoheal',
      num: '02',
      title: 'Talk To Heal – AI Voice Healthcare Triage System',
      tech: 'HTML, CSS, JavaScript, Python (Flask)',
      image: 'assets/images/thumbs/talktoheal-real.png',
      liveUrl: 'https://santhosh18-ram.github.io/Talk-to-heal/',
      githubUrl: 'https://github.com/Santhosh18-ram/Talk-to-heal',
      bullets: [
        'Built a multilingual (8-language) voice-and-text symptom checker using the Web Speech API for speech-to-text and text-to-speech.',
        'Designed a diagnostic engine classifying symptoms across 8 medical departments with 4-level severity triage.',
        'Built the front-end UI and a Flask backend serving diagnosis logic via REST API.',
      ],
      tags: [
        { name: 'HTML5 / CSS3', icon: 'devicon-html5-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'Web Speech API', icon: 'devicon-javascript-plain' },
        { name: 'Python Flask', icon: 'devicon-flask-original' },
      ],
    },
    {
      id: 'mplads',
      num: '03',
      title: 'MPLADS Sentinel – AI Risk Intelligence System',
      tech: 'React/Next.js, Python (FastAPI), PostgreSQL',
      badge: 'Smart India Hackathon 2026 Qualifier',
      image: 'assets/images/thumbs/mplads-real.png',
      liveUrl: 'https://santhosh18-ram.github.io/SIH-26MPLAD/',
      githubUrl: 'https://github.com/Santhosh18-ram/SIH-26MPLAD',
      bullets: [
        'Designing an explainable AI risk-scoring system for government infrastructure project monitoring using rule-based checks, financial anomaly detection, and NLP duplicate-work detection.',
        'Architected a 5-pillar composite risk engine producing an auditable evidence card per flagged case.',
        'Built interactive prototype dashboards and workflow visualizations for the SIH presentation.',
      ],
      tags: [
        { name: 'React / Next.js', icon: 'devicon-react-original colored' },
        { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'SIH 2026 Qualifier', icon: 'devicon-python-plain' },
      ],
    },
  ];

  // Mouse spotlight positioning per card
  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`project-card-${index}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="py-28 bg-[#050505] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2 block">
            03. The Showpiece
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F5]">
            Featured Projects
          </h2>
        </div>

        {/* Project Cards List */}
        <div className="space-y-16">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              id={`project-card-${idx}`}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              className="spotlight-card glass-card rounded-2xl overflow-hidden p-8 border border-white/14"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left: Real Screenshot Image with Live Demo Hover Badge */}
                <div className="lg:col-span-6">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block group overflow-hidden rounded-xl bg-black aspect-[16/10] border border-white/10"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 group-hover:brightness-75 transition-all duration-700 ease-out"
                    />
                    
                    {/* Hover Circular Live Demo Badge */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-28 h-28 rounded-full bg-white text-black font-bold flex flex-col items-center justify-center text-xs shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight className="w-6 h-6 mb-1" />
                        <span>Live Demo</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Right: Details & Action Links */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="font-mono text-sm text-[#9A9A9A] font-bold">
                        {proj.num}
                      </span>
                      {proj.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
                          <Trophy className="w-3.5 h-3.5" />
                          {proj.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-2">
                      {proj.title}
                    </h3>

                    <p className="text-sm font-mono text-[#9A9A9A]">
                      {proj.tech}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 text-sm text-[#9A9A9A] list-disc list-inside font-sans leading-relaxed">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((t, tIdx) => (
                      <span key={tIdx} className="chip-glow text-xs px-3 py-1 rounded-md flex items-center gap-1.5">
                        <i className={t.icon} />
                        {t.name}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-white text-xs"
                    >
                      Live Demo <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-white text-xs"
                    >
                      <Github className="w-4 h-4" /> GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
