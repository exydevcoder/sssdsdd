import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import { TextRevealCard } from '@/components/ui/text-reveal-card';
import ServiceAccordion from './ServiceAccordion';
import CheckRateCardBtn from '@/components/buttons/CheckRateCardBtn';

export default function ServicesSection() {
  return (
    <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="section pb-[128px] xl:pb-[70px] 2xl:pb-[256px]">
      <div className="inner-section">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[50px] sm:px-8">
          <FadeIn delay={0.3} direction="up" className="flex items-center justify-center">
            <TextRevealCard text="Services" revealText="Specialties" />
            {/* <p className="text-[60px] x320:text-[80px] md:text-[100px] 2xl:text-[156px] text-white font-extralight">Specialties</p> */}
          </FadeIn>

          <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2}>
            <ServiceAccordion />
          </StaggeredFadeIn>
          <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="flex flex-col gap-10 items-center justify-center py-6 md:py-10">
            <FadeIn delay={0.4} direction="up">
              <h3 className="max-w-[724px] text-center justify-center text-white text-[20px] x320:text-[32px] md:text-4xl font-light x320:leading-[40px] md:leading-[48px]">
                Focused, outcome-driven engagements tailored to your team's needs.
              </h3>
            </FadeIn>
            <div className="flex items-center justify-center">
              <FadeIn delay={0.5} direction="up">
                <CheckRateCardBtn />
              </FadeIn>
            </div>
          </StaggeredFadeIn>
        </div>
      </div>
    </StaggeredFadeIn>
  );
}
