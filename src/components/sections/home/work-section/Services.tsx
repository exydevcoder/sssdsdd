import Image from 'next/image';
import { servicesList } from './data';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { DribbleIcon } from '@/components/icon';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import HoverCard from '@/components/animations/hover-card';
import FadeIn from '@/components/animations/fade-in';

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto">
      <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2}>
        <div className="columns-1 sm:columns-2" style={{ columnGap: '3rem' }}>
          {servicesList.map(list => (
            <HoverCard key={list.id} hoverScale={1.03} hoverElevation={true} className={`flex flex-col gap-6 mb-10`}>
              {list.desktopDribbleLink && (
                <FadeIn delay={0.1} direction="right" className="hidden sm:flex items-center justify-end py-4">
                  <a
                    href="/dribble.com"
                    className="w-28 px-4 py-2.5 bg-[#15251F] rounded-xl text-emerald-300 text-sm font-medium leading-tight shadow-[inset_0px_0px_0px_0px_rgba(255,255,255,1.00)] border border-emerald-300/20 flex justify-start items-center gap-2"
                  >
                    <DribbleIcon />
                    <span>Dribble</span>
                  </a>
                </FadeIn>
              )}
              {list.mobileDribbleLink && (
                <FadeIn delay={0.1} direction="right" className="block sm:hidden items-center justify-end py-4">
                  <a
                    href="/dribble.com"
                    className="w-28 px-4 py-2.5 bg-[#15251F] rounded-xl text-emerald-300 text-sm font-medium leading-tight shadow-[inset_0px_0px_0px_0px_rgba(255,255,255,1.00)] border border-emerald-300/20 flex justify-start items-center gap-2"
                  >
                    <DribbleIcon />
                    <span>Dribble</span>
                  </a>
                </FadeIn>
              )}
              <FadeIn delay={0.2} direction="up" className="overflow-hidden rounded-lg">
                <div className="relative group">
                  <Image
                    src={list.image}
                    width={590}
                    height={468.52}
                    alt={list.title}
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-105"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.3} direction="up" className="flex flex-col gap-3">
                <h3 className="text-white text-2xl font-light hover:text-emerald-300 transition-colors duration-300">{list.title}</h3>
                <p className="max-w-[465px] text-stone-500 text-sm font-normal leading-tight">{list.description}</p>
              </FadeIn>

              {/* Tags */}
              <FadeIn delay={0.4} direction="up" className="flex flex-wrap items-center gap-1.5">
                {list.tags.map((tag, index) => (
                  <Badge key={index} variant="tagsStyle" className="hover:scale-105 transition-transform duration-200">
                    {tag}
                  </Badge>
                ))}
              </FadeIn>
            </HoverCard>
          ))}
        </div>
      </StaggeredFadeIn>
    </div>
  );
}
