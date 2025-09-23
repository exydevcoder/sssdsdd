'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import olawalePic from '../../../../assets/olawale-pic.png';
import olawalePicMobile from '../../../../assets/olawale-pic-mobile.png';
import FadeIn from '@/components/animations/fade-in';
import { OlawaleDesktopName, OlawaleMobileName } from '@/components/icon';

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
      <section data-audio-read className="section flex items-center justify-center pb-14 sm:pb-18">
        <div className="inner-section flex items-center justify-between w-full">
          <div className="relative w-full flex flex-col gap-7 px-2 sm:px-8 py-6">
            <FadeIn direction="up" delay={1.3} distance={30} duration={0.8} className="max-w-[328px] sm:max-w-[1049px]">
              <p className="text-stone-500 text-2xl sm:text-3xl font-medium">Hello! my name is</p>
            </FadeIn>
            <div className="relative flex flex-col items-center justify-center">
              {/* SVG Container - Made responsive with mobile stretch */}
              <OlawaleDesktopName />
              <OlawaleMobileName />
              
              {/* Image Container - Adjusted for stretched SVG */}
              <div className="absolute -bottom-5 sm:-bottom-8 md:-bottom-12 lg:-bottom-16 xl:-bottom-18 2xl:-bottom-3 flex justify-center w-full">
                <div className="relative w-[500px] h-[350px] sm:w-[350px] sm:h-[365px] md:w-[400px] md:h-[415px] lg:w-[450px] lg:h-[470px] xl:w-[480px] xl:h-[500px]">
                  <Image 
                    src={olawalePic} 
                    fill
                    className="object-cover object-top hidden sm:block"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, 480px"
                    alt="Olawale profile picture"
                    priority
                  />
                  
                  <Image 
                    src={olawalePicMobile} 
                    fill
                    className="object-cover object-top block sm:hidden"
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