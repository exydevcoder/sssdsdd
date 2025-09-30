import { StaticGradientBorder } from '@/components/animations/StaticGradientBorder';
import aboutImg from '../../../../assets/about1.png';
import Image from 'next/image';
import SmallAbout from './SmallAbout';

export default function StepOne() {
  return (
    <StaticGradientBorder
      borderWidth={4}
      colors={[
        { color: '#6EE7B7', startDeg: 30, endDeg: 75 },
        { color: '#CCF544', startDeg: 60, endDeg: 0 },
        { color: 'transparent', startDeg: 90, endDeg: 242 },
        { color: '#CCF544', startDeg: 280, endDeg: 200 },
        { color: '#6EE7B7', startDeg: 330, endDeg: 360 },
        { color: '#CCF544', startDeg: 0, endDeg: 0 }
      ]}
    >
      <div className="flex flex-col-reverse md:flex-row rounded-2xl overflow-hidden bg-gradient-to-b border-[#424242] from-neutral-900 to-neutral-950">
        <div className="flex flex-col justify-between w-[100%] lg:w-[55%] h-[474px] lg:h-[774px] relative p-6 py-8">
          <div className="flex flex-col gap-8">
            <h3 className="max-w-[330px] text-white text-6xl font-light leading-[72px]">Curiosity Sparked It</h3>
            <p className="max-w-[360px] text-stone-500 text-3xl font-light leading-[48px]">
              I started as a web lover, curious about how the internet connects people and ideas. That curiosity led me into graphic and brand design, where I learned to shape visual stories.
            </p>
          </div>
          <SmallAbout />
        </div>
        <div className="w-[100%] lg:w-[55%] h-[298px] md:h-[474px] lg:h-[774px] relative">
          <Image src={aboutImg} className="object-cover object-top" alt="Olawale profile picture" priority fill />
        </div>
      </div>
    </StaticGradientBorder>
  );
}
