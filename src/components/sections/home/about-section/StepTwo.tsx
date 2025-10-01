import aboutImg from '../../../../assets/about2.png';
import Image from 'next/image';

export default function StepTwo() {
  return (
    <div className="flex flex-col gap-6 pb-[32px] sm:pb-[56px] border-b border-[#FFFFFF]/12">
      <h3 className="text-white text-[32px] sm:text-[42px] font-light leading-[54px] xs:leading-[64px] sm:leading-[72px]">Craft Took Shape</h3>
      <p className="max-w-[570px] text-stone-500 text-lg sm:text-3xl font-light leading-[32px]:leading-[48px]">
        Over time, I grew into product design, blending UI/UX, motion, and strategy to build seamless, scalable experiences. I also picked up low-code and AI tools to ship smarter, faster.
      </p>
      <div className="w-full relative rounded-[12px] overflow-hidden">
        {/* <Image src={aboutImg} fill priority className="object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-100" alt="Olawale profile picture" /> */}
        <Image
          src={aboutImg}
          width={672}
          height={673}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 672px"
          className="object-cover transition-all duration-500 ease-out transform group-hover:scale-100"
          alt="Olawale profile picture"
        />
      </div>
      <h3 className="text-white text-[32px] sm:text-[42px] font-light leading-[54px] xs:leading-[64px] sm:leading-[72px]">Purpose Drives It Now</h3>
      <p className="max-w-[570px] text-stone-500 text-lg sm:text-3xl font-light leading-[32px]:leading-[48px]">
        Today, I help teams design products that align brand, function, and impact, from first idea to final launch.
      </p>
    </div>
  );
}
