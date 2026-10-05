import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';

export default function Hero3D() {
  const mountRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Full-Stack Developer', 'AI Systems Builder', 'SIH 2026 Qualifier'];

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  // Three.js Interactive 3D Wireframe Scene (Monochrome Only)
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Outer Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(5.5, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerMesh);

    // 2. Inner Nested Icosahedron Wireframe
    const innerGeo = new THREE.IcosahedronGeometry(3.2, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xcccccc,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    // 3. Faint Particle Field
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 120 : 350;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 35;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
    });
    const particleMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0015;
      mouseY = (e.clientY - windowHalfY) * 0.0015;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Render Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      outerMesh.rotation.y += 0.002;
      outerMesh.rotation.x += 0.001;

      innerMesh.rotation.y -= 0.004;
      innerMesh.rotation.z += 0.002;

      particleMesh.rotation.y += 0.0005;

      scene.rotation.y = targetX;
      scene.rotation.x = targetY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Radial Background Vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none z-[1]" style={{
        background: 'radial-gradient(circle at center, transparent 30%, #050505 85%)'
      }} />

      {/* Hero Text Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Top Tagline */}
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/14 bg-white/[0.02] text-xs font-mono tracking-widest text-[#9A9A9A] uppercase">
          Acharya Institute of Technology • CSE
        </div>

        {/* Large Serif Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#F5F5F5] mb-6 leading-tight">
          Santhosh Ram K
        </h1>

        {/* Typewriter Role Line */}
        <div className="h-10 mb-8 flex items-center justify-center">
          <p className="text-xl sm:text-2xl font-mono text-[#F5F5F5]">
            <span className="text-[#9A9A9A]">&gt; </span>
            <span>{typedText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Brief Pitch */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9A9A9A] mb-10 leading-relaxed font-sans">
          Building responsive web applications, normalized relational database engines, and AI-powered voice & risk intelligence platforms.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="btn-white">
            View Projects <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/Santhosh18-ram"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            <Github className="w-4 h-4" /> GitHub Profile
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
        <a href="#about" className="pointer-events-auto text-[#9A9A9A] hover:text-white transition-colors flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest">
          Scroll Down
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
