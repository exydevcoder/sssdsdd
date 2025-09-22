'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import olawalePic from '../../../../assets/olawale-pic.png';
import FadeIn from '@/components/animations/fade-in';
import { OlawaleDesktopName } from '@/components/icon';

export default function HeroBanner() {
  useEffect(() => {
    // Apply scribble effect on component mount
    applyScribbleEffect();
  }, []);

  const applyScribbleEffect = () => {
    gsap.set('.letter-path', {
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      fill: 'transparent',
      stroke: '#6EE7B7',
      strokeWidth: 2
    });

    // Create a timeline for each letter
    document.querySelectorAll('.letter-path').forEach((letter, index) => {
      const tl = gsap.timeline({ delay: index * 0.2 });

      tl.to(letter, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'none'
      }).to(
        letter,
        {
          fill: '#6EE7B7',
          duration: 0.5,
          ease: 'power2.out'
        },
        '-=0.3'
      );
    });
  };

  return (
    <>
      <section data-audio-read className="section border flex items-center justify-center pb-18">
        <div className="inner-section flex items-center justify-between sm:px-8 py-6 w-full">
          <div className="relative w-full flex flex-col gap-7 px-8 py-6">
            <FadeIn direction="up" delay={0.8} distance={60} duration={0.8} className="px-6 sm:px-0 max-w-[328px] sm:max-w-[1049px]">
              <p className="text-stone-500 text-2xl sm:text-3xl font-medium">Hello! my name is</p>
            </FadeIn>
            <div className="relative flex flex-col items-center justify-center">
              {/* SVG Container - Made responsive with mobile stretch */}
              <div className="w-full max-w-[1122px] mx-auto border top-20 sm:top-0 relative">
                <OlawaleDesktopName />
              </div>

              {/* Image Container - Adjusted for stretched SVG */}
              <div className="absolute -bottom-35 sm:-bottom-8 md:-bottom-12 lg:-bottom-16 xl:-bottom-18 2xl:-bottom-3 flex justify-center w-full">
                <div className="relative w-[350px] h-[290px] sm:w-[350px] sm:h-[365px] md:w-[400px] md:h-[415px] lg:w-[450px] lg:h-[470px] xl:w-[480px] xl:h-[500px]">
                  <Image
                    src={olawalePic}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, 480px"
                    alt="Olawale profile picture"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
