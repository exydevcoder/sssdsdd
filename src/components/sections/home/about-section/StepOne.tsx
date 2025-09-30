import aboutImg from '../../../../assets/about1.png';
import aboutImgMobile from '../../../../assets/about1-mobile.png';
import Image from 'next/image';
import SmallAbout from './SmallAbout';

export default function StepOne() {
  return (
    <div className="flex flex-col lg:flex-row rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="w-full lg:w-[696px] h-[298px] sm:h-[500px] lg:h-[774px] relative overflow-hidden">
        <Image
          src={aboutImg}
          fill
          priority
          className="hidden sm:block object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-100"
          alt="Olawale profile picture"
        />
        <Image
          src={aboutImgMobile}
          fill
          priority
          className="block sm:hidden object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-100"
          alt="Olawale profile picture"
        />
      </div>
      <div className="w-full lg:w-[520px] flex flex-col justify-between gap-16 p-4 sm:p-8 py-15 pb-10">
        <div className="flex flex-col gap-8">
          <h3 className="max-w-[270px] xs:max-w-[330px] text-white text-[45px] xs:text-[56px] sm:text-6xl font-light leading-[54px] xs:leading-[64px] sm:leading-[72px]">Curiosity Sparked It</h3>
          <p className="max-w-[360px] text-stone-500 text-lg sm:text-3xl font-light leading-[32px]:leading-[48px]">
            I started as a web lover, curious about how the internet connects people and ideas. That curiosity led me into graphic and brand design, where I learned to shape visual stories.
          </p>
        </div>
        <SmallAbout />
      </div>
    </div>
  );
}
