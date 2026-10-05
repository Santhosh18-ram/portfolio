import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-28 bg-[#050505] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2 block">
            05. Academic Journey
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F5]">
            Education
          </h2>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-start gap-5">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>

              <div className="space-y-3 w-full">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Acharya Institute of Technology
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-white border border-white/14">
                    <Calendar className="w-3.5 h-3.5" /> 2024 – 2028
                  </span>
                </div>

                <p className="text-base font-semibold text-[#F5F5F5]">
                  Bachelor of Engineering in Computer Science & Engineering
                </p>

                <div className="flex items-center gap-6 text-sm text-[#9A9A9A] flex-wrap">
                  <div>
                    CGPA: <strong className="text-white">8.45 / 10.0</strong>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-white/60" /> Bengaluru, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
