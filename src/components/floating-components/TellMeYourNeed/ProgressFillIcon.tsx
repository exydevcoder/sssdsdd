'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ProgressFillIconProps {
  icon: React.ReactNode;
  progress?: number; // 0 to 1
  duration?: number;
}

export const ProgressFillIcon = ({ icon, progress = 1, duration = 1 }: ProgressFillIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the rotation and scale
      gsap.fromTo(containerRef.current,
        { rotation: -50, scale: 0.8 },
        { 
          rotation: 0, 
          scale: 1, 
          duration,
          ease: "back.out(1.7)",
          transformOrigin: "center center"
        }
      );

      // You could also animate SVG paths here if needed
    }, containerRef);

    return () => ctx.revert();
  }, [duration, progress]);

  return (
    <div ref={containerRef} className="progress-fill-icon">
      {icon}
    </div>
  );
};