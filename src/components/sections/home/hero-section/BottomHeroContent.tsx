'use client';

import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { StaticGradientBorder } from '@/components/animations/StaticGradientBorder';
import LetTalkBtn from '@/components/buttons/LetTalkBtn';
import ViewMyWorkBtn from '@/components/buttons/ViewMyWorkBtn';
import { AvailableCollabIcon, BrandDesignIcon, EmailIcon, MotionDesignIcon, ProductDesignIcon, UiUxDesignIcon, WebDevelopmentIcon } from '@/components/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function BottomHeroContent() {
  return (
    <section className="section flex items-center justify-center py-[128px] md:py-[256px]">
      <div className="inner-section flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="max-w-[274px] sm:max-w-[570px] text-center text-white text-[32px] sm:text-4xl font-medium sm:leading-[48px]">Senior UI/UX & Product Designer.</h1>
          <p className="max-w-[385px] sm:max-w-[580px] text-center justify-center text-neutral-400 text-lg font-normal leading-7">
            I design scalable, aesthetic digital experiences across brand, product, and web, driven by strategy and clean execution.
          </p>
        </div>
        <div className="max-w-[498px] mx-auto flex flex-wrap items-center justify-center gap-2">
          <Badge className="w-[124px] flex items-center justify-center gap-2 border border-white/10 rounded-[6px] px-[13px] py-[7px]">
            <UiUxDesignIcon />
            <span>UI/UX Design</span>
          </Badge>
          <Badge className="w-[135px] flex items-center justify-center gap-2 border border-white/10 rounded-[6px] px-[13px] py-[7px]">
            <ProductDesignIcon />
            <span>Product Design</span>
          </Badge>
          <Badge className="w-[130px] flex items-center justify-center gap-2 border border-white/10 rounded-[6px] px-[13px] py-[7px]">
            <MotionDesignIcon />
            <span>Motion Design</span>
          </Badge>
          <Badge className="w-[187px] flex items-center justify-center gap-2 border border-white/10 rounded-[6px] px-[13px] py-[7px]">
            <BrandDesignIcon />
            <span>Brand Design & Strategy</span>
          </Badge>
          <Badge className="w-[249px] flex items-center justify-center gap-2 border border-white/10 rounded-[6px] px-[13px] py-[7px]">
            <WebDevelopmentIcon />
            <span>Web Development (Low-Code + AI)</span>
          </Badge>
        </div>

        <div className="flex items-center justify-center gap-3">
          <ViewMyWorkBtn />
          <LetTalkBtn />
        </div>

        <div className="flex justify-center">
          <StaticGradientBorder>
            <div className="w-full xs:min-w-96 min-h-28 p-5 xs:p-6 flex bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-xl backdrop-blur-md">
              <div className="max-w-full pr-5 xs:pr-7">
                <AnimatedCounter from={0} to={10} suffix="+" duration={2.5} />
                <span className="text-zinc-500 text-nowrap text-xs font-normal">Years Experience</span>
              </div>
              <div className="max-w-full pr-5 xs:pr-7">
                <AnimatedCounter from={0} to={50} suffix="+" duration={2.8} />
                <span className="text-zinc-500 text-nowrap text-xs font-normal">Projects Completed</span>
              </div>
              <div className="max-w-full">
                <AnimatedCounter from={0} to={100} suffix="%" duration={3} />
                <span className="text-zinc-500 text-nowrap text-xs font-normal">Happy Clients</span>
              </div>
            </div>
          </StaticGradientBorder>
        </div>

        <div className="flex items-center justify-center">
          <Badge variant="customBadge" className="">
            <AvailableCollabIcon />
            <span>Available for collaboration</span>
          </Badge>
        </div>
      </div>
    </section>
  );
}
