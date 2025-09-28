import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import { StaticGradientBorder } from '@/components/animations/StaticGradientBorder';
import { TextRevealCard } from '@/components/ui/text-reveal-card';
import aboutImg from '../../../../assets/about.png';
import smallImg from '../../../../assets/small-image.png';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="relative section pb-[128px] md:pb-[256px]">
      <div className="inner-section">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center justify-center gap-16">
            <FadeIn delay={0.3} direction="up">
              <TextRevealCard text="About" revealText="Know Me More" />
            </FadeIn>
          </div>

          <div className="w-full p-8">
            <StaticGradientBorder>
              <div className="flex flex-col-reverse md:flex-row rounded-2xl bg-gradient-to-b border-[#424242] from-neutral-900 to-neutral-950">
                <div className="px-5 py-10 flex flex-col gap-16 w-[800px]">
                  <div className="flex flex-col gap-8">
                    <h3 className="w-[330px] text-white text-6xl font-light leading-[72px]">Curiosity Sparked It</h3>
                    <p className="w-[360px] text-stone-500 text-3xl font-light leading-[48px]">
                      I started as a web lover, curious about how the internet connects people and ideas. That curiosity led me into graphic and brand design, where I learned to shape visual stories.
                    </p>
                  </div>
                  <div className="">
                    <div className="w-10 h-10">
                      <Image src={smallImg} width={40} height={40} className="object-cover object-top" alt="Olawale profile picture" priority />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-base font-medium leading-none">Product Designer</p>
                      <p className="text-stone-500 text-[10px] font-medium leading-none">Olawale Timothy Morenikeji</p>
                    </div>
                  </div>
                </div>
                <div className="w-full relative border">
                  <Image src={aboutImg} className="object-cover object-top" alt="Olawale profile picture" priority fill />
                </div>
              </div>
            </StaticGradientBorder>
          </div>
        </div>
      </div>
    </StaggeredFadeIn>
  );
}
