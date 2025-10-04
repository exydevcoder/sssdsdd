import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import { TextRevealCard } from '@/components/ui/text-reveal-card';
import { TestimonialCarousel } from './TestimonialCarousel';

export default function ClientsSection() {
  return (
    <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="flex flex-col gap-16 lg:gap-32 pb-[128px] xl:pb-[70px] 2xl:pb-[256px]">
      <div className="section">
        <div className="inner-section">
          <div className="flex flex-col gap-16 items-center justify-center">
            <FadeIn delay={0.3} direction="up" className="flex items-center justify-center">
              <TextRevealCard text="Clients" revealText="Stories" />
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <p className="max-w-[385px] sm:max-w-[558px] text-center text-white text-4xl font-light leading-[48px]">A few words from partners and teams I’ve worked with.</p>
            </FadeIn>
          </div>
        </div>
      </div>
      <TestimonialCarousel />
    </StaggeredFadeIn>
  );
}
