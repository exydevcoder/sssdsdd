'use client';
import { ReactNode, CSSProperties } from 'react';

interface StaticGradientBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  borderRadius?: string;
  gradientAngle?: number;
  colors?: {
    color: string;
    startDeg: number;
    endDeg: number;
  }[];
  customGradient?: string;
}

export function StaticGradientBorder({ 
  children, 
  className = '', 
  borderWidth = 2, 
  borderRadius = 'rounded-2xl',
  gradientAngle = 0,
  colors,
  customGradient,
  ...props 
}: StaticGradientBorderProps) {
  
  // Default gradient configuration
  const defaultColors = [
    { color: '#6EE7B7', startDeg: 30, endDeg: 68 },
    { color: '#CCF544', startDeg: 60, endDeg: 0 },
    { color: 'transparent', startDeg: 90, endDeg: 258 },
    { color: 'transparent', startDeg: 180, endDeg: 256 },
    { color: '#6EE7B7', startDeg: 330, endDeg: 360 },
    { color: '#CCF544', startDeg: 0, endDeg: 0 },
  ];

  // Create gradient with gaps between colors
  const createGradientWithGaps = (angle: number, colorStops = defaultColors) => {
    const stops = colorStops
      .map(({ color, startDeg, endDeg }) => `${color} ${startDeg}deg ${endDeg}deg`)
      .join(', ');
    
    return `conic-gradient(from ${angle}deg, ${stops})`;
  };

  // Determine which gradient to use
  const getGradient = () => {
    if (customGradient) return customGradient;
    if (colors) return createGradientWithGaps(gradientAngle, colors);
    return createGradientWithGaps(gradientAngle);
  };

  const borderStyle: CSSProperties = {
    padding: `${borderWidth}px`,
  };

  return (
    <div
      className={`${borderRadius} relative overflow-hidden w-full ${className}`}
      style={{
        ...borderStyle,
        background: getGradient()
      }}
      {...props}
    >
      {children}
    </div>
  );
}