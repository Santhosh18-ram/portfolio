import React from 'react';
import { X, ExternalLink } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, cert }) {
  if (!isOpen || !cert) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative glass-card max-w-4xl w-full p-6 rounded-2xl border border-white/20 bg-[#11141d] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <h3 className="font-serif text-xl font-bold text-white">
            {cert.title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-[#9A9A9A] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Image */}
        <div className="flex justify-center p-2 max-h-[70vh] overflow-auto">
          <img
            src={cert.image}
            alt={cert.title}
            className="max-w-full max-h-[65vh] object-contain rounded-lg border border-white/10"
          />
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-xs text-[#9A9A9A]">
          <span>{cert.issuer}</span>
          <a
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white text-xs py-1.5 px-3"
          >
            Open Full Image <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
