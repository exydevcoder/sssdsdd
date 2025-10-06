import aboutImg from '../../../../assets/new-photos/About-First-4x.webp';
import Image from 'next/image';

export default function StepOne() {
  return (
    <div className="flex flex-col gap-6 pb-[32px] sm:pb-[56px] border-b border-[#FFFFFF]/12">
      <div className="w-full relative rounded-[12px] overflow-hidden">
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
      <h3 className="text-white text-[32px] sm:text-[42px] font-light leading-[54px] xs:leading-[64px] sm:leading-[72px]">Curiosity Sparked It</h3>
      <p className="max-w-[570px] text-stone-500 text-lg sm:text-3xl font-light leading-[32px]:leading-[48px]">
        I started as a web lover, curious about how the internet connects people and ideas. That curiosity led me into graphic and brand design, where I learned to shape visual stories.
      </p>
    </div>
  );
}
