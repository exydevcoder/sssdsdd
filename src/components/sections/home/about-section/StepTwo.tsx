import { StaticGradientBorder } from '@/components/animations/StaticGradientBorder';
import aboutImg from '../../../../assets/about2.png';
import Image from 'next/image';
import SmallAbout from './SmallAbout';

export default function StepTwo() {
  return (
    // <StaticGradientBorder
    //   borderWidth={4}
    //   colors={[
    //     { color: '#6EE7B7', startDeg: 0, endDeg: 140 },

    //     { color: '#CCF544', startDeg: 200, endDeg: 217 },

    //     { color: 'transparent', startDeg: 0, endDeg: 325 },

    //     { color: '#CCF544', startDeg: 100, endDeg: 321 }
    //   ]}
    // >
      <div className="flex flex-col-reverse lg:flex-row justify-between rounded-2xl overflow-hidden bg-gradient-to-b border-[#424242] from-neutral-900 to-neutral-950">
        <div className="flex flex-col justify-between w-[100%] lg:w-[55%] h-[474px] lg:h-[774px] relative p-6 py-8">
          <div className="flex flex-col gap-8">
            <h3 className="lg:max-w-[370px] text-white text-6xl font-light leading-[72px]">Craft Took Shape</h3>
            <p className="lg:max-w-[360px] text-stone-500 text-3xl font-light leading-[48px]">
              Over time, I grew into product design, blending UI/UX, motion, and strategy to build seamless, scalable experiences. I also picked up low-code and AI tools to ship smarter, faster.
            </p>
          </div>
          <SmallAbout />
        </div>
        <div className="w-[100%] lg:w-[55%] h-[298px] md:h-[474px] lg:h-[774px] relative">
          <Image src={aboutImg} className="object-cover object-top" alt="Olawale profile picture" priority fill />
        </div>
      </div>
    // {/* </StaticGradientBorder> */}
  );
}
