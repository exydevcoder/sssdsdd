'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';
import { cn } from '@/lib/utils';

interface TextRevealCardProps {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
  threshold?: number; // How much of the element should be visible before triggering (0-1)
  duration?: number; // Animation duration in seconds
}

export const TextRevealCard = ({ text, revealText, children, className, threshold = 0.3, duration = 3.5 }: TextRevealCardProps) => {
  const [revealPercentage, setRevealPercentage] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const animationDuration = duration * 1000; // Convert to milliseconds

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);

        // Easing function for smoother animation (ease-out)
        const eased = 1 - Math.pow(1 - progress, 3);

        setRevealPercentage(eased * 100);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, duration]);

  const rotateDeg = (revealPercentage - 50) * 0.1;
  const isAnimationComplete = revealPercentage >= 100;

  return (
    <div ref={cardRef} className={cn('relative overflow-visible', className)}>
      {children}

      {/* Container that accommodates the longer text */}
      <div className="relative flex items-center overflow-visible min-w-max">
        {/* Hidden text to establish container width - uses the longer of the two texts */}
        <p className="font-extralight text-[50px] xs:text-[60px] md:text-[100px] 2xl:text-[156px] whitespace-nowrap opacity-0 pointer-events-none">{revealText.length > text.length ? revealText : text}</p>

        {/* Reveal Text Layer - Shows complete text with mask */}
        <motion.div
          className="absolute z-20 will-change-transform overflow-visible flex items-center"
          style={{
            opacity: revealPercentage > 2 ? 1 : 0,
            maskImage: `linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${revealPercentage}%, rgba(255,255,255,0) ${revealPercentage + 2}%, rgba(255,255,255,0) 100%)`,
            WebkitMaskImage: `linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${revealPercentage}%, rgba(255,255,255,0) ${revealPercentage + 2}%, rgba(255,255,255,0) 100%)`
          }}
        >
          <p
            style={{
              textShadow: '4px 4px 15px rgba(0,0,0,0.5)',
              filter: `brightness(${100 + revealPercentage * 0.3}%)`
            }}
            className="font-extralight text-[#FFFFFF] bg-clip-text text-[50px] xs:text-[60px] md:text-[100px] 2xl:text-[156px] bg-gradient-to-b from-white to-neutral-300 whitespace-nowrap"
          >
            {revealText}
          </p>
        </motion.div>

        {/* Enhanced Separator Line - Hidden after animation completes */}
        {!isAnimationComplete && (
          <motion.div
            style={{
              left: `${revealPercentage}%`,
              rotate: `${rotateDeg}deg`,
              opacity: revealPercentage > 0 ? Math.min(revealPercentage / 8, 1) : 0,
              width: `${4 + revealPercentage / 100}px`
            }}
            className="h-full bg-gradient-to-b from-transparent via-[#FFFFFF] to-transparent absolute z-50 will-change-transform blur-[1px]"
          ></motion.div>
        )}

        {/* Background Text - Fades out as reveal happens */}
        <div className="absolute inset-0 overflow-visible flex items-center justify-center [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p
            className="font-extralight bg-clip-text text-[50px] xs:text-[60px] md:text-[100px] 2xl:text-[156px] text-transparent bg-[#323238] whitespace-nowrap"
            style={{
              opacity: revealPercentage > 5 ? Math.max(0, 1 - revealPercentage / 80) : 1
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h2 className={twMerge('text-white text-lg mb-2', className)}>{children}</h2>;
};

export const TextRevealCardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={twMerge('text-white xs:text-[#a9a9a9] text-sm', className)}>{children}</p>;
};