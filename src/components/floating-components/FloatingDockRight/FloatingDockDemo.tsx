'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { DockIcons } from '../FloatingDockRight/DockIcons';
import { handleMouseEnter, handleMouseLeave } from './dockAnimations';
import { AnimatedGradientBorder } from '@/components/animations/AnimatedGradientBorder';

interface NavItem {
  icon: 'Home' | 'Work' | 'Linkedin' | 'Twitter' | 'Dribble';
  label: string;
  id: string;
  href: string;
  active?: boolean;
}

export default function FloatingDockDemo() {
  const dockRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const labelsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  const navItems: NavItem[] = [
    { icon: 'Home', label: 'Home', id: 'home', href: '#home' },
    { icon: 'Work', label: 'Work', id: 'work', href: '#work' },
    { icon: 'Linkedin', label: 'Linkedin', id: 'linkedin', href: '#linkedin' },
    { icon: 'Twitter', label: 'Twitter', id: 'twitter', href: '#Twitter' },
    { icon: 'Dribble', label: 'Dribble', id: 'dribble', href: '#dribble' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial dock animation
      if (dockRef.current) {
        gsap.fromTo(
          dockRef.current,
          {
            x: 100,
            opacity: 0,
            scale: 0.8
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            delay: 2.0
          }
        );
      }

      // Stagger animation for dock items
      const validItems = itemsRef.current.filter(Boolean) as HTMLAnchorElement[];
      if (validItems.length > 0) {
        gsap.fromTo(
          validItems,
          {
            scale: 0,
            rotation: 180,
            opacity: 0
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            delay: 1
          }
        );
      }

      // Set initial state for labels - hide without taking space
      const validLabels = labelsRef.current.filter(Boolean) as HTMLParagraphElement[];
      if (validLabels.length > 0) {
        gsap.set(validLabels, {
          opacity: 0,
          scale: 0.8,
          height: 0,
          margin: 0
        });
      }
    }, dockRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLAnchorElement | null, index: number) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current[index] = el;
    }
  };

  // const addToLabelRefs = (el: HTMLParagraphElement | null, index: number) => {
  //   if (el && !labelsRef.current.includes(el)) {
  //     labelsRef.current[index] = el;
  //   }
  // };

  return (
    <div
      ref={dockRef}
      className="fixed 
  right-5 
  sm:right-6 
  md:right-[80px] 
  lg:right-[100px] 
  xl:right-[135px] 
  [@media(min-width:1900px)]:right-[330px] 
  top-[45%]
  x320:top-[45%]
  xs:top-1/3 md:top-1/2 
  transform -translate-y-1/2
  z-40 
  sm:z-50"
    >
      <AnimatedGradientBorder>
        <div className="w-[72px] p-3 sm:p-4 pt-3 bg-neutral-900 rounded-2xl outline outline-offset-[-1px] outline-white/10 backdrop-blur-md flex flex-col justify-end items-center gap-4 overflow-visible">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center gap-1.5 relative group"
              onMouseEnter={() => handleMouseEnter(index, itemsRef, labelsRef)}
              onMouseLeave={() => handleMouseLeave(index, itemsRef, labelsRef)}
            >
              <p className="text-center hidden md:hidden md:group-hover:block px-1.5 py-0.5 bg-[#20302A] rounded justify-center items-center gap-2.5 text-emerald-400 text-[10px] font-medium leading-3.5 whitespace-nowrap overflow-hidden">
                {item.label}
              </p>
              <Link
                href={item.href}
                ref={el => addToRefs(el, index)}
                className="w-10 h-10 bg-neutral-800 rounded-xl flex justify-center items-center hover:bg-[#20302A] transition-colors duration-200"
              >
                <DockIcons name={item.icon} />
              </Link>
            </div>
          ))}
        </div>
      </AnimatedGradientBorder>
    </div>
  );
}
