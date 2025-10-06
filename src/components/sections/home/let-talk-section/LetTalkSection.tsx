import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import BookMeBtn from '@/components/buttons/BookMeBtn';
import DribbleBtnTwo from '@/components/buttons/DribbleBtnTwo';
import EmailMeBtn from '@/components/buttons/EmailMeBtn';
import LinkedinBtnTwo from '@/components/buttons/LinkedinBtnTwo';
import TwitterBtn from '@/components/buttons/TwitterBtn';
import GlowingWrapper from '@/components/GlowingBadge';
import { GlobalIcon, LightningBoltIcon, LocationIcon, PaymentIcon, QuickResponseIcon, SpeechBubbleIcon } from '@/components/icon';
import { Badge } from '@/components/ui/badge';
import { TextRevealCard } from '@/components/ui/text-reveal-card'

export default function LetTalkSection() {
  return (
    <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="relative section pb-[25px]">
      <div className="inner-section flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center gap-16">
          <FadeIn delay={0.3} direction="up" className="">
            <TextRevealCard text="Let’s Talk" revealText="Book Call" />
            {/* <p className="text-[60px] x320:text-[80px] md:text-[100px] 2xl:text-[156px] text-white font-extralight">Book Call</p> */}
          </FadeIn>
          <FadeIn delay={0.3} direction="up">
            <p className="max-w-[385px] sm:max-w-[591px] text-center text-white text-4xl font-light leading-[48px]">Tell me about your project goals, and timelines, I'll respond ASAP.</p>
          </FadeIn>
        </div>

        <div className="w-full flex flex-col gap-8 items-center justify-center">
          <div className="w-[318px] mx-auto flex flex-wrap items-center justify-center gap-3">
            <EmailMeBtn />
            <BookMeBtn />
            <GlowingWrapper containerClassName="rounded-[8px]">
              <Badge variant="customBadge" className="w-[134px] rounded-[8px]">
                <QuickResponseIcon />
                <span>Quick Response</span>
              </Badge>
            </GlowingWrapper>
            <GlowingWrapper containerClassName="rounded-[8px]">
              <Badge variant="customBadge" className="w-[135px] rounded-[8px]">
                <GlobalIcon />
                <span>Remote • Global</span>
              </Badge>
            </GlowingWrapper>
          </div>
          <GlowingWrapper className='rounded-xl'>
            <div className="w-[384px] p-6 mx-auto flex flex-col gap-3 bg-neutral-900 rounded-xl outline outline-offset-[-1px] outline-white/10">
              <h2 className="text-white text-sm font-semibold leading-[20px]">Details</h2>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2">
                  <LightningBoltIcon />
                  <span className="justify-center text-neutral-300 text-sm font-normal leading-[20px]">Available for collaborations</span>
                </li>
                <li className="flex items-center gap-2">
                  <LocationIcon />
                  <span className="justify-center text-neutral-300 text-sm font-normal leading-[20px]">Flexible time zones</span>
                </li>
                <li className="flex items-center gap-2">
                  <SpeechBubbleIcon />
                  <span className="justify-center text-neutral-300 text-sm font-normal leading-[20px]">Weekly syncs & clear milestones</span>
                </li>
                <li className="flex items-center gap-2">
                  <PaymentIcon />
                  <span className="justify-center text-neutral-300 text-sm font-normal leading-[20px]">Flexible Payment </span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 pt-2">
                <h3 className="self-stretch justify-center text-neutral-400 text-xs font-medium uppercase leading-[16px] tracking-[0.6px]">Elsewhere</h3>
                <div className="flex items-center gap-1">
                  <LinkedinBtnTwo />
                  <TwitterBtn />
                  <DribbleBtnTwo />
                </div>
              </div>
            </div>
          </GlowingWrapper>
        </div>
      </div>
    </StaggeredFadeIn>
  );
}
