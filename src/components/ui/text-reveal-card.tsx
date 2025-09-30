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
}

export const TextRevealCard = ({ text, revealText, children, className }: TextRevealCardProps) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }
  
  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  
  // Enhanced reveal effect - reveals more text with smoother progression
  const revealWidth = Math.min(widthPercentage * 1.5, 100); // Boost the reveal area
  const clipPathPercentage = Math.max(0, 100 - revealWidth);
  
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn('relative overflow-visible', className)}
    >
      {children}

      {/* Container that accommodates the longer text */}
      <div className="relative flex items-center overflow-visible min-w-max">
        {/* Hidden text to establish container width - uses the longer of the two texts */}
        <p className="font-bold text-[60px] x320:text-[80px] md:text-[100px] lg:text-[150px] 2xl:text-[256px] lastStepStyle whitespace-nowrap opacity-0 pointer-events-none">
          {revealText.length > text.length ? revealText : text}
        </p>
        
        {/* Reveal Text Layer - Shows complete text with mask */}
        <motion.div
          className="absolute inset-0 z-20 will-change-transform overflow-visible flex items-center"
          animate={{
            opacity: widthPercentage > 2 ? 1 : 0
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.3 }}
          style={{
            maskImage: `linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${widthPercentage}%, rgba(255,255,255,0) ${widthPercentage + 2}%, rgba(255,255,255,0) 100%)`,
            WebkitMaskImage: `linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${widthPercentage}%, rgba(255,255,255,0) ${widthPercentage + 2}%, rgba(255,255,255,0) 100%)`
          }}
        >
          <p
            style={{
              textShadow: '4px 4px 15px rgba(0,0,0,0.5)',
              filter: `brightness(${100 + widthPercentage * 0.3}%)`
            }}
            className="font-bold text-[#6EE7B7] bg-clip-text text-[60px] x320:text-[80px] md:text-[100px] lg:text-[150px] 2xl:text-[256px] lastStepStyle bg-gradient-to-b from-white to-neutral-300 whitespace-nowrap"
          >
            {revealText}
          </p>
        </motion.div>
        
        {/* Enhanced Separator Line */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? Math.min(widthPercentage / 8, 1) : 0,
            width: `${4 + (widthPercentage / 10)}px`
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.3 }}
          className="h-full bg-gradient-to-b from-transparent via-[#6EE7B7] to-transparent absolute z-50 will-change-transform blur-[1px]"
        ></motion.div>

        {/* Background Text - Fades out as reveal happens */}
        <div className="absolute inset-0 overflow-visible flex items-center justify-center [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <motion.p 
            className="font-bold bg-clip-text text-[60px] x320:text-[80px] md:text-[100px] lg:text-[150px] 2xl:text-[256px] lastStepStyle text-transparent bg-[#323238] whitespace-nowrap"
            animate={{
              opacity: widthPercentage > 5 ? Math.max(0, 1 - (widthPercentage / 80)) : 1
            }}
            transition={isMouseOver ? { duration: 0 } : { duration: 0.2 }}
          >
            {text}
          </motion.p>
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