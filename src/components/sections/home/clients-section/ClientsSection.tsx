import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import { TextRevealCard } from '@/components/ui/text-reveal-card';

export default function ClientsSection() {
  return (
    <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="section pb-[128px] md:pb-[256px]">
      <div className="inner-section">
        <div className="">
          <FadeIn delay={0.3} direction="up" className="flex items-center justify-center">
            <TextRevealCard text="Clients" revealText="Stories" />
          </FadeIn>

        </div>
      </div>
    </StaggeredFadeIn>
  );
}
