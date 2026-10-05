import React, { useState, useEffect, useRef } from 'react';
import { Award, BookOpen, Code2, GraduationCap } from 'lucide-react';

export default function About() {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [counters, setCounters] = useState({ projects: 0, languages: 0, cgpa: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // 3D Card Tilt Effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 18;
    const tiltY = (centerX - x) / 18;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Counter Count-up animation on scroll into view
  useEffect(() => {
    const handleScroll = () => {
      if (hasAnimated || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setHasAnimated(true);

        let p = 0;
        let l = 0;
        let c = 0;

        const timer = setInterval(() => {
          if (p < 3) p += 1;
          if (l < 8) l += 1;
          if (c < 8.45) c = Math.min(8.45, Number((c + 0.35).toFixed(2)));

          setCounters({ projects: p, languages: l, cgpa: c });

          if (p >= 3 && l >= 8 && c >= 8.45) {
            clearInterval(timer);
          }
        }, 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef} className="py-28 bg-[#050505] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2 block">
            01. Background
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F5]">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 3D Tilting Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="glass-card p-3 rounded-2xl max-w-sm w-full cursor-pointer transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-black">
                <img
                  src="assets/images/thumbs/santhosh-about.jpg"
                  alt="Santhosh Ram K"
                  className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-lg font-bold text-white mb-0">Santhosh Ram K</p>
                  <p className="text-xs text-[#9A9A9A] font-mono mb-0">Acharya Institute of Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Animated Counters */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg text-[#F5F5F5] leading-relaxed mb-6 font-sans">
                I am a third-year Computer Science Engineering student at <strong>Acharya Institute of Technology, Bengaluru</strong>, passionate about full-stack web engineering, database architecture, and AI-driven platforms.
              </p>
              <p className="text-base text-[#9A9A9A] leading-relaxed mb-6 font-sans">
                My work ranges from normalized 8-table MySQL engines for peer-to-peer skill matching (<strong>SkillSphere</strong>) to multilingual AI voice symptom triage web apps (<strong>Talk To Heal</strong>) and explainable AI risk intelligence for government infrastructure (<strong>MPLADS Sentinel</strong>).
              </p>
              <p className="text-base text-[#9A9A9A] leading-relaxed font-sans">
                Currently deepening full-stack engineering through Angela Yu's Bootcamp on Udemy and seeking a <strong>Web Development Internship</strong> to deliver real-world impact.
              </p>
            </div>

            {/* Animated Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card p-4 rounded-xl text-center">
                <p className="font-serif text-3xl font-bold text-white mb-1">
                  {counters.projects}
                </p>
                <p className="text-xs text-[#9A9A9A] font-mono uppercase tracking-wider">Major Projects</p>
              </div>

              <div className="glass-card p-4 rounded-xl text-center">
                <p className="font-serif text-3xl font-bold text-white mb-1">
                  {counters.languages}
                </p>
                <p className="text-xs text-[#9A9A9A] font-mono uppercase tracking-wider">Talk To Heal Languages</p>
              </div>

              <div className="glass-card p-4 rounded-xl text-center">
                <p className="font-serif text-3xl font-bold text-white mb-1">
                  {counters.cgpa}
                </p>
                <p className="text-xs text-[#9A9A9A] font-mono uppercase tracking-wider">BE CGPA / 10.0</p>
              </div>

              <div className="glass-card p-4 rounded-xl text-center">
                <p className="font-serif text-xl font-bold text-white mb-1 mt-1">
                  SIH 2026
                </p>
                <p className="text-xs text-[#9A9A9A] font-mono uppercase tracking-wider">National Qualifier</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
