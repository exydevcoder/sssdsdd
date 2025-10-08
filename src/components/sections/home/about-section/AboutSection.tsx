'use client';
import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import { TextRevealCard } from '@/components/ui/text-reveal-card';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { TracingBeam } from '@/components/ui/tracing-beam';
// import GlowingWrapper from '@/components/GlowingBadge';
// import { Button } from '@/components/ui/button';
// import { DownloadIcon } from '@/components/icon';
import LinkedinBtn from '@/components/buttons/LinkedinBtn';
import DownloadResumeBtn from '@/components/buttons/DownloadResumeBtn';

export default function AboutSection() {
  return (
    <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="relative section pb-[256px]">
      <div className="inner-section">
        <div className="max-w-[1216px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center justify-center gap-16">
            <FadeIn delay={0.3} direction="up">
              <TextRevealCard text="About Me" revealText="Know Me" />
              {/* <p className="text-[60px] x320:text-[80px] md:text-[100px] 2xl:text-[156px] text-white font-extralight">Know Me</p> */}
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <TracingBeam>
              <div className="max-w-[342px] xs:max-w-[672px] flex flex-col gap-7 pl-10 sm:pl-20 pt-10">
                <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2}>
                  <StepOne />
                </StaggeredFadeIn>
                <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2}>
                  <StepTwo />
                </StaggeredFadeIn>
              </div>
            </TracingBeam>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center justify-center pt-[128px] md:pt-[256px]">
          <FadeIn delay={0.4} direction="up">
            <h3 className="max-w-[700px] text-center justify-center text-white text-[20px] x320:text-[32px] md:text-4xl font-light x320:leading-[40px] md:leading-[48px]">
              To learn more about me, you can download my resume or visit my LinkedIn profile
            </h3>
          </FadeIn>
          <div className="flex items-center flex-col x320:flex-row justify-center gap-1.5">
            <FadeIn delay={0.5} direction="up">
              <LinkedinBtn />
            </FadeIn>
            <FadeIn delay={0.6} direction="up">
              <DownloadResumeBtn />
            </FadeIn>
          </div>
        </div>
      </div>
    </StaggeredFadeIn>
  );
}
