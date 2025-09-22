'use client';

import { useState } from 'react';
import { AudioPlayWaveIcon, AudioPlayWaveIconAnimated } from '../icon';

export default function PlayerButton() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="animated-border-button">
      <div
        className="p-1.5 button-content flex items-center justify-between w-[76px] h-[52px] bg-[#121212] border border-white/10 rounded-2xl fixed 
  right-4 
  sm:right-6 
  md:right-[80px] 
  lg:right-[100px] 
  xl:right-[135px] 
  [@media(min-width:1900px)]:right-[330px] 
  bottom-4 
  z-50"
        onClick={handleToggle}
      >
        <button className="cta-btn !w-full !h-full">{toggle ? <AudioPlayWaveIconAnimated /> : <AudioPlayWaveIcon />}</button>
      </div>
    </div>
  );
}
