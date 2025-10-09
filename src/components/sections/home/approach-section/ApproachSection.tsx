import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import GlowingWrapper from '@/components/GlowingBadge';
import { AlignIcon, ExploreIcon, ShipIcon, ValidateIcon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { TextRevealCard } from '@/components/ui/text-reveal-card';

export default function ApproachSection() {
  const data = [
    {
      icon: AlignIcon,
      title: 'Align',
      desc: 'Define goals, constraints and  success metrics. Map risks & dependencies.'
    },
    {
      icon: ExploreIcon,
      title: 'Explore',
      desc: 'Diverge thoughtfully, test assumptions fast. Converge with evidence.'
    },
    {
      icon: ValidateIcon,
      title: 'Validate',
      desc: 'Prototype with real data. Iterate with qualitative and quantitative signals.'
    },
    {
      icon: ShipIcon,
      title: 'Ship',
      desc: 'Polish details, document decisions. Hand off cleanly with tokens and specs.'
    }
  ];
  return (
    <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="relative section pb-[206px] sm:pb-[356px] 2xl:pb-[556px]">
      <div className="inner-section">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center justify-center gap-16">
            <FadeIn delay={0.3} direction="up">
              <TextRevealCard text="Process" revealText="Approach" />
              {/* <p className="text-[60px] x320:text-[80px] md:text-[100px] 2xl:text-[156px] text-white font-extralight">Approach</p> */}
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <p className="max-w-[820px] text-center justify-center text-white text-[20px] x320:text-[32px] md:text-4xl font-light x320:leading-[40px] md:leading-[48px]">
                Opinionated where it matters, flexible where it counts. I focus on clarity, speed, and measurable outcomes.
              </p>
            </FadeIn>
          </div>

          {/* desktop view */}
          <div className="hidden lg:block">
            <div className="relative w-full flex h-0.5 bg-gradient-to-l from-emerald-300 via-lime-300 to-amber-300/0 rounded-[100px]">
              <div className="relative flex gap-6 w-full">
                {data.map((list, index) => (
                  <FadeIn key={index} delay={0.4 + index * 0.4} direction="left" className="w-full">
                    <div className="relative flex-1 w-full">
                      <div className="relative -top-2 w-4 h-4 bg-emerald-400 rounded-full shadow-[0px_0px_0px_12px_rgba(104,104,104,0.10)]" />
                      <GlowingWrapper containerClassName="rounded-xl w-full">
                        <div className="mt-6 p-5 w-full bg-neutral-900 rounded-xl outline outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-3">
                          <Button variant="customBtn" className="hover:!bg-[#15251F] max-w-max h-[30px] rounded-[6px] cursor-default">
                            <list.icon />
                            <span className="text-emerald-300 text-xs font-medium leading-[16.5px]">{list.title}</span>
                          </Button>
                          <p className="max-w-[210px] mt-0.5 text-neutral-300 text-sm font-normal leading-[20px]">{list.desc}</p>
                        </div>
                      </GlowingWrapper>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* tablet & mobile view */}
          <div className="pl-6 block lg:hidden">
            <div className="relative flex flex-col gradient-vertical-line pt-10 pb-5">
              <div className="relative flex flex-col gap-6">
                {data.map((list, index) => (
                  <FadeIn key={index} delay={0.4 + index * 0.4} direction="up">
                    <div className="relative flex gap-6 flex-1">
                      <span className="block relative -left-[8px] size-3 rounded-full bg-emerald-400 shadow-[0px_0px_0px_12px_rgba(52,211,153,0.10)]"></span>
                      <div className="p-5 w-full lg:w-[286px] bg-neutral-900 rounded-xl outline outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-3">
                        <Button variant="customBtn" className="max-w-max h-[30px] rounded-[6px]">
                          <list.icon />
                          <span className="text-emerald-300 text-xs font-medium leading-[16.5px]">{list.title}</span>
                        </Button>
                        <p className="mt-0.5 text-neutral-300 text-sm font-normal leading-[20px]">{list.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StaggeredFadeIn>
  );
}
