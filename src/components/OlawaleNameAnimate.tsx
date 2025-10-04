'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SVGProps } from 'react';

export const OlawaleDesktopName = (props: SVGProps<SVGSVGElement>) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    if (!svgRef.current) return;

    // Get all path elements
    const paths = Array.from(svgRef.current.querySelectorAll('path'));
    pathsRef.current = paths;

    // Set initial state - hide all paths
    gsap.set(paths, {
      strokeDasharray: (i, target) => {
        const length = target.getTotalLength();
        return `${length} ${length}`;
      },
      strokeDashoffset: (i, target) => target.getTotalLength(),
      fillOpacity: 0
    });

    // Create the animation timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut' }
    });

    // Animate each path with staggered delays
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.1
    }).to(
      paths,
      {
        fillOpacity: 0.25,
        duration: 1,
        stagger: 0.05
      },
      '-=1'
    ).to(
      paths,
      {
        strokeWidth: 0, // Remove the stroke by setting width to 0
        duration: 0.5,
        stagger: 0.02
      },
      '-=0.5' // Start removing stroke slightly before fill completes
    );

    return () => {
      // Clean up animations on unmount
      tl.kill();
    };
  }, []);

  const addToPathsRef = (el: SVGPathElement | null) => {
    if (el && !pathsRef.current.includes(el)) {
      pathsRef.current.push(el);
    }
  };

  return (
    <svg
      ref={svgRef}
      className="w-full h-auto mt-15 md:mt-0 transform sm:scale-y-100 scale-y-160 sm:scale-x-100 scale-x-90"
      viewBox="0 0 1122 578"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        ref={addToPathsRef}
        d="M82.7367 578C27.4814 578 0 534.872 0 446.197V132.609C0 43.5314 27.4814 0 82.7367 0C138.284 0 165.766 43.5314 165.766 132.609V446.197C165.766 534.872 138.284 578 82.7367 578ZM83.029 524.795C105.54 524.795 116.358 501.417 116.358 451.84V127.37C116.358 76.9861 105.54 52.8019 83.029 52.8019C60.5176 52.8019 49.4081 76.9861 49.4081 127.37V451.84C49.4081 501.417 60.5176 524.795 83.029 524.795Z"
        fill="url(#paint0_linear_855_1856)"
        fillOpacity={0.25}
        stroke="url(#paint0_linear_855_1856)"
        strokeWidth="2"
      />
      <path
        ref={addToPathsRef}
        d="M180.519 571.148V6.85216H229.928V515.121H296V571.148H180.519Z"
        fill="url(#paint1_linear_855_1856)"
        fillOpacity={0.25}
        stroke="url(#paint1_linear_855_1856)"
        strokeWidth="2"
      />
      <path
        ref={addToPathsRef}
        d="M289.996 571.148L346.129 6.85216H408.401L465.41 571.148H414.54L405.477 468.365H347.006L337.943 571.148H289.996ZM351.684 418.788H400.799L388.52 280.536C384.427 218.463 381.796 175.738 378.873 107.619H373.61C370.979 175.738 368.348 218.463 363.962 280.536L351.684 418.788Z"
        fill="url(#paint2_linear_855_1856)"
        fillOpacity={0.25}
        stroke="url(#paint2_linear_855_1856)"
        strokeWidth="2"
      />
      <path
        ref={addToPathsRef}
        d="M493.612 571.148L443.034 6.85216H492.15L513.492 305.526C517.293 360.746 519.339 401.456 521.093 465.947H526.941C528.695 401.456 530.449 360.343 534.249 305.526L555.007 6.85216H608.215L629.265 305.526C632.773 360.343 634.527 401.456 635.989 465.947H641.836C644.175 401.456 646.222 360.746 650.022 305.526L671.364 6.85216H718.726L669.318 571.148H611.431L593.598 305.526C589.505 241.841 586.873 199.519 584.242 133.416H578.395C575.764 199.519 573.425 241.841 569.04 305.526L550.914 571.148H493.612Z"
        fill="url(#paint3_linear_855_1856)"
        fillOpacity={0.25}
        stroke="url(#paint3_linear_855_1856)"
        strokeWidth="2"
      />
      <path
        ref={addToPathsRef}
        d="M696.643 571.148L752.775 6.85216H815.047L872.056 571.148H821.186L812.123 468.365H753.652L744.589 571.148H696.643ZM758.33 418.788H807.446L795.167 280.536C791.074 218.463 788.443 175.738 785.519 107.619H780.257C777.625 175.738 774.994 218.463 770.609 280.536L758.33 418.788Z"
        fill="url(#paint4_linear_855_1856)"
        fillOpacity={0.25}
        stroke="url(#paint4_linear_855_1856)"
        strokeWidth="2"
      />
      <path
        ref={addToPathsRef}
        d="M875.7 571.148V6.85216H925.109V515.121H991.181V571.148H875.7Z"
        fill="url(#paint5_linear_855_1856)"
        fillOpacity={0.25}
        stroke="url(#paint5_linear_855_1856)"
        strokeWidth="2"
      />
      <path
        ref={addToPathsRef}
        d="M1046.86 515.121H1122V571.148H997.456V6.85216H1118.49V62.8787H1046.86V244.259H1110.6V296.658H1046.86V515.121Z"
        fill="url(#paint6_linear_855_1856)"
        fillOpacity={0.25}
        stroke="url(#paint6_linear_855_1856)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient id="paint0_linear_855_1856" x1={696.5} y1={38} x2={709.781} y2={673.57} gradientUnits="userSpaceOnUse">
          <stop offset={0.0240385} stopColor="#6EE7B7" />
          <stop offset={0.341346} stopColor="#CCF544" stopOpacity={0.5} />
          <stop offset={0.644231} stopColor="#FFC548" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="paint1_linear_855_1856" x1={696.5} y1={38} x2={709.781} y2={673.57} gradientUnits="userSpaceOnUse">
          <stop offset={0.0240385} stopColor="#6EE7B7" />
          <stop offset={0.341346} stopColor="#CCF544" stopOpacity={0.5} />
          <stop offset={0.644231} stopColor="#FFC548" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="paint2_linear_855_1856" x1={696.5} y1={38} x2={709.781} y2={673.57} gradientUnits="userSpaceOnUse">
          <stop offset={0.0240385} stopColor="#6EE7B7" />
          <stop offset={0.341346} stopColor="#CCF544" stopOpacity={0.5} />
          <stop offset={0.644231} stopColor="#FFC548" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="paint3_linear_855_1856" x1={696.5} y1={38} x2={709.781} y2={673.57} gradientUnits="userSpaceOnUse">
          <stop offset={0.0240385} stopColor="#6EE7B7" />
          <stop offset={0.341346} stopColor="#CCF544" stopOpacity={0.5} />
          <stop offset={0.644231} stopColor="#FFC548" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="paint4_linear_855_1856" x1={696.5} y1={38} x2={709.781} y2={673.57} gradientUnits="userSpaceOnUse">
          <stop offset={0.0240385} stopColor="#6EE7B7" />
          <stop offset={0.341346} stopColor="#CCF544" stopOpacity={0.5} />
          <stop offset={0.644231} stopColor="#FFC548" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="paint5_linear_855_1856" x1={696.5} y1={38} x2={709.781} y2={673.57} gradientUnits="userSpaceOnUse">
          <stop offset={0.0240385} stopColor="#6EE7B7" />
          <stop offset={0.341346} stopColor="#CCF544" stopOpacity={0.5} />
          <stop offset={0.644231} stopColor="#FFC548" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="paint6_linear_855_1856" x1={696.5} y1={38} x2={709.781} y2={673.57} gradientUnits="userSpaceOnUse">
          <stop offset={0.0240385} stopColor="#6EE7B7" />
          <stop offset={0.341346} stopColor="#CCF544" stopOpacity={0.5} />
          <stop offset={0.644231} stopColor="#FFC548" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};