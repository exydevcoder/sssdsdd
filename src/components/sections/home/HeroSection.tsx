'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Image from 'next/image';
import olawalePic from '../../../assets/olawale-pic.png';
import { Button } from '@/components/ui/button';

// Register TextPlugin
gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  const svgRef = useRef(null);
  const [currentEffect, setCurrentEffect] = useState('default');

  useEffect(() => {
    // Reset all animations first
    gsap.set('.letter-path', { clearProps: "all" });
    
    switch(currentEffect) {
      case 'default':
        applyDefaultEffect();
        break;
      case 'typewriter':
        applyTypewriterEffect();
        break;
      case 'wave':
        applyWaveEffect();
        break;
      case 'morph':
        applyMorphEffect();
        break;
      case 'staggerScale':
        applyStaggerScaleEffect();
        break;
      case 'spinIn':
        applySpinInEffect();
        break;
      case 'bounce':
        applyBounceEffect();
        break;
      case 'glitch':
        applyGlitchEffect();
        break;
      case 'rainbow':
        applyRainbowEffect();
        break;
      case 'explode':
        applyExplodeEffect();
        break;
      case 'scribble':
        applyScribbleEffect();
        break;
      case 'neon':
        applyNeonEffect();
        break;
      case 'puzzle':
        applyPuzzleEffect();
        break;
      default:
        applyDefaultEffect();
    }
  }, [currentEffect]);

  const applyDefaultEffect = () => {
    gsap.set('.letter-path', {
      rotationX: -90,
      opacity: 0,
      transformOrigin: 'center center',
    });
    
    gsap.to('.letter-path', {
      rotationX: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });
  };

  const applyTypewriterEffect = () => {
    gsap.set('.letter-path', { opacity: 0 });
    
    gsap.to('.letter-path', {
      opacity: 1,
      duration: 0.2,
      stagger: 0.1,
      ease: 'power1.inOut'
    });
  };

  const applyWaveEffect = () => {
    gsap.set('.letter-path', { 
      y: 100,
      opacity: 0,
      transformOrigin: 'center center'
    });
    
    gsap.to('.letter-path', {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: 'elastic.out(1, 0.3)'
    });
  };

  const applyMorphEffect = () => {
    gsap.set('.letter-path', { 
      scale: 0,
      opacity: 0,
      transformOrigin: 'center center'
    });
    
    gsap.to('.letter-path', {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      stagger: 0.05,
      ease: 'back.out(1.7)'
    });
  };

  const applyStaggerScaleEffect = () => {
    gsap.set('.letter-path', { 
      scale: 0.2,
      opacity: 0,
      transformOrigin: 'center center'
    });
    
    gsap.to('.letter-path', {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: {
        amount: 1.5,
        from: "random"
      },
      ease: 'power2.out'
    });
  };

  const applySpinInEffect = () => {
    gsap.set('.letter-path', { 
      rotation: 360,
      scale: 0,
      opacity: 0,
      transformOrigin: 'center center'
    });
    
    gsap.to('.letter-path', {
      rotation: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    });
  };

  const applyBounceEffect = () => {
    gsap.set('.letter-path', { 
      y: -300,
      opacity: 0,
      transformOrigin: 'center center'
    });
    
    gsap.to('.letter-path', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'bounce.out'
    });
  };

  const applyGlitchEffect = () => {
    gsap.set('.letter-path', { 
      x: () => gsap.utils.random(-20, 20),
      y: () => gsap.utils.random(-20, 20),
      opacity: 0,
      transformOrigin: 'center center'
    });
    
    gsap.to('.letter-path', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out'
    });
  };

  const applyRainbowEffect = () => {
    const colors = ['#ff6b6b', '#ff9e6b', '#ffd56b', '#a4ff6b', '#6bffb8', '#6bd5ff', '#6b88ff', '#b56bff', '#ff6be1'];
    
    gsap.set('.letter-path', { 
      opacity: 0,
      fill: '#6EE7B7'
    });
    
    gsap.to('.letter-path', {
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      fill: (i) => colors[i % colors.length],
      ease: 'power2.out'
    });
  };

  const applyExplodeEffect = () => {
    gsap.set('.letter-path', { 
      x: () => gsap.utils.random(-500, 500),
      y: () => gsap.utils.random(-500, 500),
      scale: 3,
      opacity: 0,
      transformOrigin: 'center center'
    });
    
    gsap.to('.letter-path', {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out'
    });
  };

  const applyScribbleEffect = () => {
    gsap.set('.letter-path', { 
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      fill: 'transparent',
      stroke: '#6EE7B7',
      strokeWidth: 2
    });
    
    gsap.to('.letter-path', {
      strokeDashoffset: 0,
      duration: 2,
      stagger: 0.2,
      onComplete: function() {
        gsap.to(this.targets()[0], {
          fill: '#6EE7B7',
          duration: 0.5
        });
      }
    });
  };

  const applyNeonEffect = () => {
    gsap.set('.letter-path', { 
      opacity: 0,
      filter: 'drop-shadow(0 0 5px #6EE7B7)'
    });
    
    gsap.to('.letter-path', {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });
    
    // Add pulsing glow effect
    gsap.to('.letter-path', {
      filter: 'drop-shadow(0 0 15px #6EE7B7)',
      duration: 1,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  };

  const applyPuzzleEffect = () => {
    gsap.set('.letter-path', { 
      scale: 0,
      rotation: 90,
      opacity: 0,
      transformOrigin: 'center center'
    });
    
    gsap.to('.letter-path', {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 0.8,
      stagger: {
        each: 0.1,
        from: "edges"
      },
      ease: 'elastic.out(1, 0.5)'
    });
  };

  const effects = [
    { id: 'default', name: 'Default' },
    { id: 'typewriter', name: 'Typewriter' },
    { id: 'wave', name: 'Wave' },
    { id: 'morph', name: 'Morph' },
    { id: 'staggerScale', name: 'Stagger Scale' },
    { id: 'spinIn', name: 'Spin In' },
    { id: 'bounce', name: 'Bounce' },
    { id: 'glitch', name: 'Glitch' },
    { id: 'rainbow', name: 'Rainbow' },
    { id: 'float', name: 'Float' },
    { id: 'explode', name: 'Explode' },
    { id: 'scribble', name: 'Scribble' },
    { id: 'neon', name: 'Neon' },
    { id: 'puzzle', name: 'Puzzle' }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      text: 'TW'
    },
    {
      name: 'GitHub',
      text: 'GH',
      url: 'https://github.com/yourusername'
    },
    {
      name: 'LinkedIn',
      text: 'LI',
      url: 'https://linkedin.com/in/yourprofile'
    },
    {
      name: 'Email',
      text: 'EM',
      url: 'mailto:your.email@example.com'
    }
  ];

  return (
    <>
      {/* Fixed Social Buttons Container */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="hidden flex-col gap-4">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              rel="noopener noreferrer"
              className="social-button group relative w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-emerald-400 hover:border-emerald-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/25"
              aria-label={social.name}
            >
              <span className="text-xs font-bold tracking-wide">{social.text}</span>

              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {social.name}
                <span className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></span>
              </span>
            </Button>
          ))}
        </div>

        {/* Vertical line decoration */}
        <div className="w-px hidden h-20 bg-gradient-to-b from-emerald-400 to-transparent mx-auto mt-6"></div>
      </div>

      {/* Effect Selection Buttons */}
      <div className="fixed right-6 top-6 z-50 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
        <h3 className="text-white text-sm font-bold mb-2">SVG Effects</h3>
        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
          {effects.map(effect => (
            <Button
              key={effect.id}
              onClick={() => setCurrentEffect(effect.id)}
              className={`text-xs h-8 ${currentEffect === effect.id ? 'bg-emerald-400' : 'bg-white/10'}`}
              size="sm"
            >
              {effect.name}
            </Button>
          ))}
        </div>
      </div>

      <section className="section flex items-center justify-center">
        <div className="inner-section flex items-center justify-between px-8 py-6">
          <div className="relative w-full xl:h-[500px] 2xl:h-[641px] flex flex-col gap-3 px-8 py-6">
            <p className="text-stone-500 text-3xl font-medium">Hello! my name is</p>
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