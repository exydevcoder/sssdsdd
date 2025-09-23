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
  className = 'p-[1px]',
  borderWidth = 2,
  duration = 10,
  backgroundSize = '300% 300%',
  borderRadius = 'rounded-2xl',
  ...props
}: AnimatedGradientBorderProps) {
  // Create gradient with gaps between colors
  const createGradientWithGaps = (angle: number) => {
    return `conic-gradient(from ${angle}deg, 
      #CCF544 0deg 0deg, 
      #6EE7B7 60deg 90deg,
      #6EE7B7 90deg 150deg, 
      #6EE7B7 150deg 180deg,
      #CCF544 0deg 0deg, 
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