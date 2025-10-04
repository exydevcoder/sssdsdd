import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import WhatsAppMessageBtn from '@/components/buttons/WhatsAppMessageBtn';
import { TextRevealCard } from '@/components/ui/text-reveal-card';
import FAQAccordion from './FaqAccordion';

export default function QuestionsSection() {
  return (
    <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="relative section pb-[128px] xl:pb-[70px] 2xl:pb-[256px]">
      <div className="inner-section flex flex-col gap-16 lg:gap-32">
        <div className="flex flex-col items-center justify-center">
          <FadeIn delay={0.3} direction="up" className='mb-10 xl:mb-16 2xl:mb-32'>
            <TextRevealCard text="Questions" revealText="Answers" />
          </FadeIn>
          <FadeIn delay={0.3} direction="up" className='mb-[42px]'>
            <p className="max-w-[385px] sm:max-w-[591px] text-center text-white text-4xl font-light leading-[48px]">Send a direct message via WhatsApp for quick response</p>
          </FadeIn>
          <WhatsAppMessageBtn />
        </div>
        <div className="flex items-center justify-center">
          <FAQAccordion />
        </div>
      </div>
    </StaggeredFadeIn>
  );
}
