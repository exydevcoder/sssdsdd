'use client';

import Image from 'next/image';
import olawalePic from '../../../../assets/new-olawale-pic.png';
// import olawalePicMobile from '../../../../assets/olawale-pic-mobile.png';
import FadeIn from '@/components/animations/fade-in';
// import { OlawaleMobileName } from '@/components/icon';
import HeroBannerCircleShape, { HeroBannerCircleShapeTwo } from '@/components/CircleShape';
import { OlawaleDesktopName } from '@/components/OlawaleNameAnimate';

export default function HeroBanner() {
  return (
    <>
      <section id="home" className="relative section scroll-mt-24 flex items-center justify-center">
        <HeroBannerCircleShapeTwo />
        <HeroBannerCircleShape />
        <div className="inner-section flex items-center justify-between w-full">
          <div className="relative w-full flex flex-col gap-7 px-2 sm:px-8 py-6">
            {/* <FadeIn direction="up" delay={1.3} distance={30} duration={0.8} className="hidden text-center">
              <p className="text-stone-500 text-2xl sm:text-3xl font-medium">Hello! my name is</p>
            </FadeIn> */}
            <div className="relative flex flex-col items-center justify-center">
              {/* SVG Container - Made responsive with mobile stretch */}
              <OlawaleDesktopName />
              {/* <OlawaleMobileName /> */}

              {/* Image Container - Adjusted for stretched SVG */}
              <div className="absolute -bottom-[150px] xs:-bottom-[200px] xl:-bottom-[160px] 2xl:-bottom-[390px] flex justify-center w-full">
                <div className="relative flex items-center justify-center w-[320.83px] h-[320.62px] xs:w-[400.83px] xs:h-[400.62px] xl:w-[600.83px] xl:h-[600.62px] 2xl:w-[925.83px] 2xl:h-[925.62px]">
                  <Image src={olawalePic.src} alt="Olawale profile picture" fill className="object-cover object-top" />
                </div>
              </div>

              {/* <div className="hidden absolute -bottom-43 xs:-bottom-37 sm:-bottom-8 md:-bottom-12 lg:-bottom-16 xl:-bottom-18 2xl:-bottom-3 flex justify-center w-full">
                <div className="relative flex items-center justify-center w-[500px] h-[350px] sm:w-[350px] sm:h-[365px] md:w-[400px] md:h-[415px] lg:w-[450px] lg:h-[470px] xl:w-[480px] xl:h-[500px]">
                  <Image
                    src={olawalePicMobile}
                    fill
                    className="object-cover object-top block sm:hidden"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, 480px"
                    alt="Olawale profile picture"
                    priority
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
