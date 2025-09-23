'use client';

import * as React from 'react';
import { SVGProps } from 'react';

interface AudioIconProps extends SVGProps<SVGSVGElement> {
  fill?: string;
}

export const AudioPlayWaveIcon = ({ fill = "#FFFFFF", ...props }: AudioIconProps) => (
  <svg width={32} height={20} viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      {/* Bar 1 - Short */}
      <rect x={5.166504} y={8} width={1.66667} height={4} rx={0.833333} fill={fill} />
      {/* Bar 2 - Medium */}
      <rect x={10.1665} y={6} width={1.66667} height={8} rx={0.833333} fill={fill} />
      {/* Bar 3 - Tall (center bar) */}
      <rect x={15.1665} y={2} width={1.66667} height={16} rx={0.833333} fill={fill} />
      {/* Bar 4 - Medium-tall */}
      <rect x={20.1665} y={6} width={1.66667} height={8} rx={0.833333} fill={fill} />
      {/* Bar 5 - Medium */}
      <rect x={25.1665} y={8} width={1.66667} height={4} rx={0.833333} fill={fill} />
    </g>
  </svg>
);

// Alternative animated version
export const AudioPlayWaveIconAnimated = ({ fill = "#FFFFFF", ...props }: AudioIconProps) => (
  <svg width={32} height={20} viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <style>
      {`
        .wave-bar {
          animation: wave 1.2s ease-in-out infinite;
          transform-origin: center;
        }
        .wave-bar-1 { animation-delay: 0s; }
        .wave-bar-2 { animation-delay: 0.15s; }
        .wave-bar-3 { animation-delay: 0.3s; }
        .wave-bar-4 { animation-delay: 0.45s; }
        .wave-bar-5 { animation-delay: 0.6s; }
        
        @keyframes wave {
          0%, 100% { 
            transform: scaleY(0.3);
            opacity: 0.7;
          }
          50% { 
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}
    </style>
    <g>
      {/* Bar 1 - Short */}
      <rect className="wave-bar wave-bar-1" x={5.166504} y={8} width={1.66667} height={4} rx={0.833333} fill={fill} />
      {/* Bar 2 - Medium */}
      <rect className="wave-bar wave-bar-2" x={10.1665} y={6} width={1.66667} height={8} rx={0.833333} fill={fill} />
      {/* Bar 3 - Tall (center bar) */}
      <rect className="wave-bar wave-bar-3" x={15.1665} y={2} width={1.66667} height={16} rx={0.833333} fill={fill} />
      {/* Bar 4 - Medium-tall */}
      <rect className="wave-bar wave-bar-4" x={20.1665} y={6} width={1.66667} height={8} rx={0.833333} fill={fill} />
      {/* Bar 5 - Medium */}
      <rect className="wave-bar wave-bar-5" x={25.1665} y={8} width={1.66667} height={4} rx={0.833333} fill={fill} />
    </g>
  </svg>
);