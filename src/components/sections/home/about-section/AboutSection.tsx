'use client';
import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import { TextRevealCard } from '@/components/ui/text-reveal-card';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { TracingBeam } from '@/components/ui/tracing-beam';
import GlowingWrapper from '@/components/GlowingBadge';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@/components/icon';

export default function AboutSection() {
  return (
    <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="relative section pb-[128px] md:pb-[256px]">
      <div className="inner-section">
        <div className="max-w-[1216px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center justify-center gap-16">
            <FadeIn delay={0.3} direction="up">
              <TextRevealCard text="About Me" revealText="Know Me" />
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <TracingBeam>
              <div className="max-w-[342px] xs:max-w-[672px] flex flex-col gap-7 pl-10 sm:pl-20 pt-10">
                <StepOne />
                <StepTwo />
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
              <GlowingWrapper containerClassName="rounded-[11px]">
                <Button variant="customBtn" className="w-[89px] flex items-center justify-center gap-2 border border-white/10 rounded-[11px]">
                  Linkedin
                </Button>
              </GlowingWrapper>
            </FadeIn>
            <FadeIn delay={0.6} direction="up">
              <GlowingWrapper containerClassName="rounded-[11px]">
                <Button variant="customBtn" className="w-[181px] text-white/90 bg-[#161616] flex items-center justify-center gap-2 border border-white/10 rounded-[11px]">
                  <DownloadIcon />
                  <span>Download Resume</span>
                </Button>
              </GlowingWrapper>
            </FadeIn>
          </div>
        </div>
      </div>
    </StaggeredFadeIn>
  );
}
