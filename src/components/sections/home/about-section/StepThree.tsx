import { StaticGradientBorder } from '@/components/animations/StaticGradientBorder';
import aboutImg from '../../../../assets/about3.png';
import Image from 'next/image';
import SmallAbout from './SmallAbout';

export default function StepThree() {
  return (
    // <StaticGradientBorder
    //   borderWidth={4}
    //   colors={[
    //     { color: 'transparent', startDeg: 0, endDeg: 72 },

    //     { color: '#CCF544', startDeg: 85, endDeg: 60 },

    //     { color: '#6EE7B7', startDeg: 100, endDeg: 250 },

    //     { color: '#CCF544', startDeg: 0, endDeg: 0 },

    //     { color: 'transparent', startDeg: 265, endDeg: 360 }
    //   ]}
    // >
      <div className="flex flex-col-reverse md:flex-row justify-between rounded-2xl overflow-hidden bg-gradient-to-b border-[#424242] from-neutral-900 to-neutral-950">
        <div className="flex flex-col justify-between w-[100%] lg:w-[55%] h-[474px] lg:h-[774px] relative p-6 py-8">
          <div className="flex flex-col gap-8">
            <h3 className="max-w-[370px] text-white text-6xl font-light leading-[72px]">Purpose Drives It Now</h3>
            <p className="max-w-[360px] text-stone-500 text-3xl font-light leading-[48px]">
              Today, I help teams design products that align brand, function, and impact, from first idea to final launch.
            </p>
          </div>
          <SmallAbout />
        </div>
        <div className="w-[100%] lg:w-[55%] h-[474px] lg:h-[774px] relative">
          <Image src={aboutImg} className="object-cover object-top" alt="Olawale profile picture" priority fill />
        </div>
      </div>
    // </StaticGradientBorder>
  );
}
