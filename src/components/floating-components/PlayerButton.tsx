'use client';

import { useState } from 'react';
import { AudioPlayWaveIcon, AudioPlayWaveIconAnimated } from '../icon';
import { AnimatedGradientBorder } from '../animations/AnimatedGradientBorder';

export default function PlayerButton() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="fixed 
      right-12 
      sm:right-6 
      md:right-[80px] 
      lg:right-[100px] 
      xl:right-[135px] 
      [@media(min-width:1900px)]:right-[330px] 
      bottom-4 
      z-40"
    >
      <AnimatedGradientBorder>
        <div
          className="p-1.5 flex items-center justify-between w-[76px] h-[52px] bg-[#121212] rounded-2xl relative z-10"
          onClick={handleToggle}
        >
          <button className="cta-btn !w-full !h-full">
            {toggle ? <AudioPlayWaveIconAnimated /> : <AudioPlayWaveIcon />}
          </button>
        </div>
      </AnimatedGradientBorder>
    </div>
  );
}