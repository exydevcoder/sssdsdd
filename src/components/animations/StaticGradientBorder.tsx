'use client';

import { ReactNode } from 'react';

interface StaticGradientBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  colors?: string[];
  borderRadius?: string;
  gradientAngle?: number;
}

export function StaticGradientBorder({ children, className = 'p-[1px]', borderWidth = 2, borderRadius = 'rounded-2xl', ...props }: StaticGradientBorderProps) {
  // Create gradient with gaps between colors
  const createGradientWithGaps = (angle: number) => {
    return `conic-gradient(from ${angle}deg, 
      #6EE7B7 30deg 68deg, 
      #CCF544 60deg 0deg, 
      transparent 90deg 258deg,
      transparent 180deg 256deg, 
      #6EE7B7 330deg 360deg,
      #CCF544 0deg 0deg
    )`;
  };

  return (
    <div
      className={`p-[${borderWidth}px] ${borderRadius} relative overflow-hidden w-full ${className}`}
      style={{
        background: createGradientWithGaps(0)
      }}
      {...props}
    >
      {children}
    </div>
  );
}
