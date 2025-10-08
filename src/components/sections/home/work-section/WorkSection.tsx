import { TextRevealCard } from '@/components/ui/text-reveal-card';
import FadeIn from '@/components/animations/fade-in';
import ScrollableTabs from './scrollable-tabs';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
// import LetChatBtn from '@/components/buttons/LetChatBtn';
import DribbleBtn from '@/components/buttons/DribbleBtn';
import WhatsAppMessageBtn from '@/components/buttons/WhatsAppMessageBtn';

export default function WorkSection() {
  return (
    <section id="work" className="section pb-[256px] scroll-mt-20">
      <div className="inner-section flex flex-col gap-13">
        <FadeIn delay={0.3} direction="up" className="flex items-center justify-center pb-[30px]">
          <TextRevealCard text="Projects" revealText="Case Studies" />
          {/* <p className="text-[60px] x320:text-[80px] md:text-[100px] 2xl:text-[156px] text-white font-extralight">Case Studies</p> */}
        </FadeIn>
        <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2}>
          <ScrollableTabs />
        </StaggeredFadeIn>
        <div className="flex flex-col gap-10 items-center justify-center pt-6 md:pt-10">
          <FadeIn delay={0.4} direction="up">
            <h3 className="max-w-[450px] text-center justify-center text-white text-[20px] x320:text-[32px] md:text-4xl font-light x320:leading-[40px] md:leading-[48px]">
              Tell me about your project You are just a click away
            </h3>
          </FadeIn>
          <div className="flex items-center flex-col x320:flex-row justify-center gap-1.5">
            <FadeIn delay={0.5} direction="up">
              <WhatsAppMessageBtn />
            </FadeIn>
            <FadeIn delay={0.6} direction="up">
              <DribbleBtn />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
