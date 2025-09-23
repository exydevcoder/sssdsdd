'use client';

import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface AnimatedGradientBorderProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  colors?: string[];
  duration?: number;
  backgroundSize?: string;
  borderRadius?: string;
}

export function AnimatedGradientBorder({
  children,
  className = 'p-[2px]',
  borderWidth = 2,
  colors = ['#CCF544', '#6EE7B7'], // Default green colors
  duration = 10,
  backgroundSize = '300% 300%',
  borderRadius = 'rounded-2xl',
  ...props
}: AnimatedGradientBorderProps) {
  // Create gradient with gaps between colors
  const createGradientWithGaps = (angle: number) => {
    const [color1, color2] = colors;
    return `conic-gradient(from ${angle}deg, 
      ${color1} 0deg 0deg, 
      ${color2} 60deg 90deg,
      ${color2} 90deg 150deg, 
      ${color2} 150deg 180deg,
      ${color1} 0deg 0deg, 
      transparent 240deg 270deg,
      transparent 270deg 330deg, 
      transparent 330deg 360deg
    )`;
  };
  
  return (
    <motion.div
      className={`p-[${borderWidth}px] ${borderRadius} relative ${className}`}
      style={{
        background: createGradientWithGaps(0),
        backgroundSize: backgroundSize,
      }}
      animate={{
        background: [
          createGradientWithGaps(0),
          createGradientWithGaps(360)
        ],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}