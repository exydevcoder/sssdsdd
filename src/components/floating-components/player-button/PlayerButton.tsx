'use client';

import { useState } from 'react';
import { AnimatedGradientBorder } from '../../animations/AnimatedGradientBorder';
import FadeIn from '@/components/animations/fade-in';
import { AudioPlayWaveIcon, AudioPlayWaveIconAnimated } from './icons';

export default function PlayerButton({ currentStep }: { currentStep: number }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const inactiveColor = '#FFFFFF';
  const activeColor = '#6EE7B7';

  return (
    <FadeIn
      direction="left"
      delay={2.8}
      distance={40}
      duration={0.8}
      className={`fixed
      right-6 
      sm:right-6 
      md:right-[80px] 
      lg:right-[100px] 
      xl:right-[120px] 
      [@media(min-width:1600px)]:right-[133px]
      [@media(min-width:1900px)]:right-[300px]
      bottom-21 
      xs:bottom-4 
      z-50 ${currentStep === 0 ? 'flex' : 'hidden'}`}
    >
      <AnimatedGradientBorder>
        <div className="p-1.5 flex items-center justify-between w-[76px] h-[52px] bg-[#121212] rounded-2xl relative z-10" onClick={handleToggle}>
          <button className="cta-btn !w-full !h-full">{toggle ? <AudioPlayWaveIconAnimated fill={activeColor} /> : <AudioPlayWaveIcon fill={inactiveColor} />}</button>
        </div>
      </AnimatedGradientBorder>
    </FadeIn>
  );
}
