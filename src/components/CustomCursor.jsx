import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 border border-white/40 rounded-full pointer-events-none z-[9998] transition-all duration-300 cubic-bezier(0.165, 0.84, 0.44, 1) ${
          isHovered
            ? 'w-14 h-14 bg-white/10 border-white/80'
            : 'w-8 h-8 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${
            position.x - (isHovered ? 28 : 16)
          }px, ${position.y - (isHovered ? 28 : 16)}px, 0)`,
        }}
      />
    </>
  );
}
