import { TextRevealCard } from '@/components/ui/text-reveal-card';
import EmailMeBtn from '@/components/buttons/EmailMeBtn';
import BookMeBtn from '@/components/buttons/BookMeBtn';
import FadeIn from '@/components/animations/fade-in';
import ScrollableTabs from './scrollable-tabs';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';

export default function WorkSection() {
  return (
    <section id="work" className="section pb-[128px] md:pb-[256px]">
      <div className="inner-section flex flex-col gap-13">
        <FadeIn delay={0.3} direction="up" className="flex items-center justify-center">
          <TextRevealCard text="Projects" revealText="Case Studies" />
        </FadeIn>
        <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2}>
          <ScrollableTabs />
        </StaggeredFadeIn>
        <div className="flex flex-col gap-10 items-center justify-center py-6 md:py-10">
          <FadeIn delay={0.4} direction="up">
            <h3 className="max-w-[500px] text-center justify-center text-white text-[20px] x320:text-[32px] md:text-4xl font-light x320:leading-[40px] md:leading-[48px]">
              You can send a mail or book a quick call with me
            </h3>
          </FadeIn>
          <div className="flex items-center flex-col x320:flex-row justify-center gap-1.5">
            <FadeIn delay={0.5} direction="up">
              <EmailMeBtn />
            </FadeIn>
            <FadeIn delay={0.6} direction="up">
              <BookMeBtn />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
