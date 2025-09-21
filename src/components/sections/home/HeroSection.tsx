'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import olawalePic from '../../../assets/olawale-pic.png';
import { Button } from '@/components/ui/button';
import FadeIn from '@/components/animations/fade-in';

export default function HeroSection() {
  const svgRef = useRef(null);

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
      ); // Start filling slightly before stroke completes
    });
  };

  return (
    <>
      <section data-audio-read className="section  flex items-center justify-center">
        <div className="inner-section flex items-center justify-between px-8 py-6">
          <div className="relative w-full xl:h-[500px] 2xl:h-[641px] flex flex-col gap-3 px-8 py-6">
            <FadeIn direction="up" delay={0.8} distance={60} duration={0.8} className="max-w-[328px] sm:max-w-[1049px]">
              <p className="text-stone-500 text-3xl font-medium">Hello! my name is</p>
            </FadeIn>
            <div className="relative flex flex-col items-center justify-center">
              <div className="w-full">
                <svg ref={svgRef} viewBox="0 0 1122 578" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* O */}
                  <path
                    className="letter-path"
                    d="M82.7367 578C27.4814 578 0 534.872 0 446.197V132.609C0 43.5314 27.4814 0 82.7367 0C138.284 0 165.766 43.5314 165.766 132.609V446.197C165.766 534.872 138.284 578 82.7367 578ZM83.029 524.795C105.54 524.795 116.358 501.417 116.358 451.84V127.37C116.358 76.986 105.54 52.8019 83.029 52.8019C60.5176 52.8019 49.4081 76.986 49.4081 127.37V451.84C49.4081 501.417 60.5176 524.795 83.029 524.795Z"
                    fill="#6EE7B7"
                  />
                  {/* L */}
                  <path className="letter-path" d="M180.519 571.148V6.85216H229.928V515.121H296V571.148H180.519Z" fill="#6EE7B7" />
                  {/* A */}
                  <path
                    className="letter-path"
                    d="M289.996 571.148L346.129 6.85216H408.401L465.41 571.148H414.54L405.477 468.365H347.006L337.943 571.148H289.996ZM351.684 418.788H400.799L388.52 280.536C384.427 218.463 381.796 175.738 378.873 107.619H373.61C370.979 175.738 368.348 218.463 363.962 280.536L351.684 418.788Z"
                    fill="#6EE7B7"
                  />
                  {/* W */}
                  <path
                    className="letter-path"
                    d="M493.612 571.148L443.034 6.85216H492.15L513.492 305.526C517.293 360.746 519.339 401.456 521.093 465.947H526.941C528.695 401.456 530.449 360.343 534.249 305.526L555.007 6.85216H608.215L629.265 305.526C632.773 360.343 634.527 401.456 635.989 465.947H641.836C644.175 401.456 646.222 360.746 650.022 305.526L671.364 6.85216H718.726L669.318 571.148H611.431L593.598 305.526C589.505 241.841 586.873 199.519 584.242 133.416H578.395C575.764 199.519 573.425 241.841 569.04 305.526L550.914 571.148H493.612Z"
                    fill="#6EE7B7"
                  />
                  {/* A */}
                  <path
                    className="letter-path"
                    d="M696.643 571.148L752.775 6.85216H815.047L872.056 571.148H821.186L812.123 468.365H753.652L744.589 571.148H696.643ZM758.33 418.788H807.446L795.167 280.536C791.074 218.463 788.442 175.738 785.519 107.619H780.257C777.625 175.738 774.994 218.463 770.609 280.536L758.33 418.788Z"
                    fill="#6EE7B7"
                  />
                  {/* L */}
                  <path className="letter-path" d="M875.7 571.148V6.85216H925.109V515.121H991.181V571.148H875.7Z" fill="#6EE7B7" />
                  {/* E */}
                  <path className="letter-path" d="M1046.86 515.121H1122V571.148H997.456V6.85216H1118.49V62.8787H1046.86V244.259H1110.6V296.658H1046.86V515.121Z" fill="#6EE7B7" />
                </svg>
              </div>
              <div className="absolute -bottom-18 2xl:-bottom-3 pl-7">
                <Image src={olawalePic} width={510} height={500} className="w-[480px] h-[500px]" alt="header-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
