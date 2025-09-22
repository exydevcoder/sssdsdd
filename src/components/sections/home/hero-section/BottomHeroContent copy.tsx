'use client';

import { AnimatedCounter } from '@/components/animations/AnimatedCounter';
import { AvailableCollabIcon, BrandDesignIcon, EmailIcon, MotionDesignIcon, ProductDesignIcon, StarIcon, UiUxDesignIcon, WebDevelopmentIcon } from '@/components/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function BottomHeroContent() {
  const topRow = [
    { title: 'UI/UX Design', icon: <UiUxDesignIcon /> },
    { title: 'Product Design', icon: <ProductDesignIcon /> },
    { title: 'Motion Design', icon: <MotionDesignIcon /> }
  ];

  const bottomRow = [
    { title: 'Brand Design & Strategy', icon: <BrandDesignIcon /> },
    { title: 'Web Development (Low-Code + AI)', icon: <WebDevelopmentIcon /> }
  ];

  return (
    <section className="section border py-[128px] md:py-[256px]">
      <div className="inner-section flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="justify-center text-white text-4xl font-medium leading-[48px]">Senior UI/UX & Product Designer.</h1>
          <p className="max-w-[580px] text-center justify-center text-neutral-400 text-lg font-normal leading-7">
            I design scalable, aesthetic digital experiences across brand, product, and web, driven by strategy and clean execution.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2">
            {topRow.map((item, idx) => (
              <div key={idx} className="max-w-full flex items-center gap-2 bg-[#121212] border border-white/10 rounded-[6px] px-[13px] py-[7px]">
                {item.icon}
                <span className="justify-center text-neutral-400 text-xs font-normal leading-1.5">{item.title}</span>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Columns */}
          <div className="flex items-center justify-center gap-2">
            {bottomRow.map((item, idx) => (
              <div key={idx} className="max-w-full flex items-center gap-2 bg-[#121212] border border-white/10 rounded-[6px] px-[13px] py-[7px]">
                {item.icon}
                <span className="justify-center text-neutral-400 text-xs font-normal leading-1.5">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button variant="customBtn">
            <StarIcon />
            <span>View My Work</span>
          </Button>
          <Button variant="customBtn" className="w-[119px] bg-neutral-900 border border-white/10">
            <EmailIcon />
            <span className="text-white">Let's Talk</span>
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="animated-border-card">
            <div className="card-content flex">
              <div className="max-w-full pr-7">
                <AnimatedCounter from={0} to={10} suffix="+" duration={2.5} />
                <span className="text-zinc-500 text-nowrap text-xs font-normal">Years Experience</span>
              </div>
              <div className="max-w-full pr-7">
                <AnimatedCounter from={0} to={50} suffix="+" duration={2.8} />
                <span className="text-zinc-500 text-nowrap text-xs font-normal">Projects Completed</span>
              </div>
              <div className="max-w-full">
                <AnimatedCounter from={0} to={100} suffix="%" duration={3} />
                <span className="text-zinc-500 text-nowrap text-xs font-normal">Happy Clients</span>
              </div>
            </div>
          </div>
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