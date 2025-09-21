'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { DockIcons } from '../FloatingDockRight/DockIcons';

interface NavItem {
  icon: 'Home' | 'Work' | 'Linkedin' | 'Twitter' | 'Dribble';
  label: string;
  id: string;
  href: string;
  active?: boolean;
}

export default function FloatingDockDemo() {
  const dockRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const labelsRef = useRef<HTMLParagraphElement[]>([]);

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
      gsap.fromTo(dockRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.8
      }, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.5
      });

      // Stagger animation for dock items
      gsap.fromTo(itemsRef.current, {
        scale: 0,
        rotation: 180,
        opacity: 0
      }, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 1
      });

      // Set initial state for labels
      gsap.set(labelsRef.current, {
        opacity: 0,
        scale: 0.8
      });

    }, dockRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index: number) => {
    const item = itemsRef.current[index];
    const label = labelsRef.current[index];
    const icon = item?.querySelector('svg');

    // Animate the dock item - shift it left out of container
    gsap.to(item, {
      x: -20,
      scale: 1.1,
      duration: 0.3,
      ease: "back.out(1.7)"
    });

    // Animate the icon
    if (icon) {
      gsap.to(icon, {
        scale: 1.2,
        rotation: 5,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    }

    // Animate the label - show in place
    gsap.to(label, {
      opacity: 1,
      scale: 1,
      duration: 0.25,
      ease: "back.out(1.7)"
    });

    // Add a subtle bounce to neighboring items
    const prevItem = itemsRef.current[index - 1];
    const nextItem = itemsRef.current[index + 1];

    if (prevItem) {
      gsap.to(prevItem, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out"
      });
    }

    if (nextItem) {
      gsap.to(nextItem, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    const item = itemsRef.current[index];
    const label = labelsRef.current[index];
    const icon = item?.querySelector('svg');

    // Reset the dock item position and scale
    gsap.to(item, {
      x: 0,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)"
    });

    // Reset the icon
    if (icon) {
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    }

    // Hide the label in place
    gsap.to(label, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      ease: "power2.out"
    });

    // Reset neighboring items
    const prevItem = itemsRef.current[index - 1];
    const nextItem = itemsRef.current[index + 1];

    if (prevItem) {
      gsap.to(prevItem, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    }

    if (nextItem) {
      gsap.to(nextItem, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current[index] = el;
    }
  };

  const addToLabelRefs = (el: HTMLParagraphElement | null, index: number) => {
    if (el && !labelsRef.current.includes(el)) {
      labelsRef.current[index] = el;
    }
  };

  return (
    <div className="fixed xl:right-[144px] 2xl:right-[350px] top-1/2 transform -translate-y-1/2 z-50">
      <div 
        ref={dockRef}
        className="w-[72px] p-4 bg-neutral-900 rounded-2xl outline outline-offset-[-1px] outline-white/10 backdrop-blur-md flex flex-col justify-end items-center gap-0 overflow-visible"
      >
        {navItems.map((item, index) => (
          <div 
            key={item.id} 
            className='flex flex-col items-center justify-center gap-1.5 relative'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <p 
              ref={(el) => addToLabelRefs(el, index)}
              className="text-center px-1.5 py-0.5 bg-[#20302A] rounded justify-center items-center gap-2.5 text-emerald-400 text-[10px] font-medium leading-3.5 whitespace-nowrap"
            >
              {item.label}
            </p>
            <Link 
              href={item.href} 
              ref={(el) => addToRefs(el, index)}
              className="w-10 h-10 bg-neutral-800 rounded-xl flex justify-center items-center hover:bg-[#20302A] transition-colors duration-200"
            >
              <DockIcons name={item.icon} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}