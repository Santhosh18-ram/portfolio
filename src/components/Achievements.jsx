import React, { useState } from 'react';
import { Award, Trophy, Medal, Eye } from 'lucide-react';
import CertificateModal from './CertificateModal';

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  const achievements = [
    {
      title: 'Complete Web Development Bootcamp',
      subtitle: 'Udemy – Instructor Angela Yu',
      icon: <Award className="w-5 h-5 text-white" />,
    },
    {
      title: 'Qualified for Next Round – Smart India Hackathon 2026 (SIH26102)',
      subtitle: 'MPLADS Sentinel – AI Risk Intelligence System for Government Infrastructure Monitoring',
      icon: <Trophy className="w-5 h-5 text-white" />,
      hasCert: true,
      certData: {
        title: 'Smart India Hackathon 2026 Certificate of Participation',
        issuer: 'Acharya Institute of Technology (SIH 2026)',
        image: 'assets/images/certs/sih-cert.png',
      },
    },
    {
      title: 'Participant, Srishti Hackathon',
      subtitle: 'Built Talk To Heal – Multilingual AI Voice Healthcare Triage System',
      icon: <Medal className="w-5 h-5 text-white" />,
    },
    {
      title: 'Complete Guide to C Programming Foundations',
      subtitle: 'LinkedIn Learning Certification (C++ & C Foundations)',
      icon: <Award className="w-5 h-5 text-white" />,
      hasCert: true,
      certData: {
        title: 'LinkedIn Learning - C Programming Foundations Certificate',
        issuer: 'Issued by LinkedIn Learning to Santhosh Ram K',
        image: 'assets/images/certs/c-cert.png',
      },
    },
  ];

  return (
    <section id="achievements" className="py-28 bg-[#050505] relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9A9A9A] mb-2 block">
            04. Recognitions
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F5F5]">
            Certifications & Achievements
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9A9A9A]">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {item.hasCert && (
                <button
                  onClick={() => setSelectedCert(item.certData)}
                  className="btn-outline-white text-xs shrink-0 py-2 px-3"
                >
                  <Eye className="w-3.5 h-3.5" /> View Certificate
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        cert={selectedCert}
      />
    </section>
  );
}
