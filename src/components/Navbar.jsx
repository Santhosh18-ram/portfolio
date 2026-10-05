import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress percentage
      if (windowHeight > 0) {
        setScrollProgress((currentScrollY / windowHeight) * 100);
      }

      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Section highlighting
      const sections = ['about', 'skills', 'projects', 'achievements', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Scroll Progress Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/10 z-[1001]">
        <div
          className="h-full bg-white transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar Container */}
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          lastScrollY > 20
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Name */}
          <a
            href="#"
            className="font-serif text-xl tracking-wider text-[#F5F5F5] font-bold hover:opacity-80 transition-opacity"
          >
            SANTHOSH RAM K
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-white font-semibold'
                    : 'text-[#9A9A9A] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="btn-outline-white text-xs px-4 py-2"
            >
              Let's Talk <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#050505]/98 backdrop-blur-xl z-[999] flex flex-col justify-center items-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-white hover:text-white/70 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-white text-sm mt-4"
          >
            Let's Talk <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </>
  );
}
