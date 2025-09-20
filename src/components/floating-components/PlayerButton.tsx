'use client';

import { useState } from 'react';
import { AudioPlayWaveIcon, AudioPlayWaveIconAnimated } from '../icon';

export default function PlayerButton() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="p-4 flex items-center justify-between w-[96px] h-[72px] bg-[#121212] border border-white/10 rounded-2xl fixed bottom-4 xl:right-[144px] 2xl:right-[350px]" onClick={handleToggle}>
      <button className="cta-btn !w-full !h-full">{toggle ? <AudioPlayWaveIconAnimated /> : <AudioPlayWaveIcon />}</button>
    </div>
  );
}
