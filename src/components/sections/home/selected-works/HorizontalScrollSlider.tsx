'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { services } from './data';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalScrollSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollTweenRef = useRef<gsap.core.Tween | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Touch/Mouse event handlers
  const startX = useRef(0);
  const currentX = useRef(0);
  const initialTranslate = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    if (!container || !slider) return;

    // Calculate total scroll width for the multi-slide view
    const slideWidth = window.innerWidth * 0.5; // Each slide base width
    const totalWidth = slideWidth * services.length;
    const containerWidth = window.innerWidth;
    const scrollWidth = totalWidth - containerWidth;

    // Create the scroll-triggered animation
    const scrollTween = gsap.to(slider, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth + window.innerHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: self => {
          setIsScrollActive(true);
          // Update current index based on scroll progress
          const progress = self.progress;
          const newIndex = Math.min(Math.round(progress * (services.length - 1)), services.length - 1);
          setCurrentIndex(newIndex);
        },
        onToggle: self => {
          if (!self.isActive) {
            setIsScrollActive(false);
          }
        }
      }
    });

    scrollTweenRef.current = scrollTween;

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Manual navigation functions
  const goToSlide = useCallback(
    (index: number) => {
      if (isScrollActive || isDragging) return;

      const slider = sliderRef.current;
      if (!slider) return;

      const slideWidth = window.innerWidth * 0.4; // Base slide width
      const activeOffset = window.innerWidth * 0.1; // Extra width for active slide
      let targetX = 0;

      // Calculate position based on active slide
      for (let i = 0; i < index; i++) {
        if (i === index - 1) {
          targetX -= (slideWidth + activeOffset); // Active slide is wider
        } else {
          targetX -= slideWidth;
        }
      }

      gsap.to(slider, {
        x: targetX,
        duration: 0.8,
        ease: 'power2.out'
      });

      setCurrentIndex(index);
    },
    [isScrollActive, isDragging]
  );

  const nextSlide = useCallback(() => {
    const nextIndex = Math.min(currentIndex + 1, services.length - 1);
    goToSlide(nextIndex);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    goToSlide(prevIndex);
  }, [currentIndex, goToSlide]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isScrollActive) return;

    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    const slider = sliderRef.current;
    if (slider) {
      const transform = gsap.getProperty(slider, 'x') as number;
      initialTranslate.current = transform;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isScrollActive) return;

    e.preventDefault();
    currentX.current = e.touches[0].clientX;
    const diffX = currentX.current - startX.current;
    const newTranslate = initialTranslate.current + diffX;

    const slider = sliderRef.current;
    if (slider) {
      gsap.set(slider, { x: newTranslate });
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || isScrollActive) return;

    setIsDragging(false);
    const diffX = currentX.current - startX.current;
    const threshold = 100; // Minimum swipe distance

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && currentIndex > 0) {
        prevSlide();
      } else if (diffX < 0 && currentIndex < services.length - 1) {
        nextSlide();
      } else {
        goToSlide(currentIndex);
      }
    } else {
      goToSlide(currentIndex);
    }
  };

  // Mouse event handlers (for desktop dragging)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isScrollActive) return;

    setIsDragging(true);
    startX.current = e.clientX;
    const slider = sliderRef.current;
    if (slider) {
      const transform = gsap.getProperty(slider, 'x') as number;
      initialTranslate.current = transform;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isScrollActive) return;

    currentX.current = e.clientX;
    const diffX = currentX.current - startX.current;
    const newTranslate = initialTranslate.current + diffX;

    const slider = sliderRef.current;
    if (slider) {
      gsap.set(slider, { x: newTranslate });
    }
  };

  const handleMouseUp = () => {
    if (!isDragging || isScrollActive) return;

    setIsDragging(false);
    const diffX = currentX.current - startX.current;
    const threshold = 100;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && currentIndex > 0) {
        prevSlide();
      } else if (diffX < 0 && currentIndex < services.length - 1) {
        nextSlide();
      } else {
        goToSlide(currentIndex);
      }
    } else {
      goToSlide(currentIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrollActive) return;

      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isScrollActive, nextSlide, prevSlide]);

  return (
    <div ref={containerRef} className="relative overflow-hidden pt-30">
      <div
        ref={sliderRef}
        className="flex h-full items-center will-change-transform cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ width: `${services.length * 100}vw` }}
      >
        {services.map((service, index) => {
          const isActive = index === currentIndex;
          // const isVisible = Math.abs(index - currentIndex) <= 1; // Show current and adjacent slides
          
          return (
            <div 
              key={service.id} 
              className={`flex-shrink-0 relative transition-all duration-500 mx-2 flex items-center ${
                isActive 
                  ? 'w-[600px] 2xl:w-[800px] h-[380px]' // Active slide dimensions
                  : 'w-[380px] h-[380px]'  // Inactive slide dimensions
              }`}
              onClick={() => !isActive && !isScrollActive && goToSlide(index)}
            >
              {/* Background Image */}
              <div className={`w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                isActive ? 'scale-100' : 'scale-100'
              }`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  // sizes="(max-width: 768px) 60vw, 50vw"
                  priority={index <= 2}
                />
                
                {/* Dark overlay - stronger and more visible */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive ? 'opacity-85' : 'opacity-80'
                  }`}
                  style={{
                    background: isActive 
                      ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%)'
                      : 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%)'
                  }}
                />
                
                {/* Additional solid overlay for better contrast */}
                <div className={`absolute inset-0 bg-black transition-all duration-500 ${
                  isActive ? 'opacity-20' : 'opacity-40'
                }`} />
              </div>

              {/* Content Overlay */}
              <div className={`absolute inset-0 z-10 flex items-end p-6 md:p-8 transition-all duration-500 ${
                isActive ? 'opacity-100' : 'opacity-80'
              }`}>
                <div className="w-full">
                  {/* Category */}
                  <span className={`inline-block text-xs font-medium text-white/80 uppercase tracking-wider mb-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm transition-all duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {service.category}
                  </span>

                  {/* Title */}
                  <h2 className={`font-bold text-white mb-3 text-balance leading-tight transition-all duration-500 ${
                    isActive 
                      ? 'text-2xl md:text-4xl lg:text-5xl' 
                      : 'text-lg md:text-2xl lg:text-3xl'
                  }`}>
                    {service.title}
                  </h2>

                  {/* Description - Only show on active slide */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isActive 
                      ? 'max-h-32 opacity-100 mb-4' 
                      : 'max-h-0 opacity-0 mb-0'
                  }`}>
                    <p className="text-sm md:text-base text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Tags - Only show on active slide */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isActive 
                      ? 'max-h-20 opacity-100 mb-4' 
                      : 'max-h-0 opacity-0 mb-0'
                  }`}>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium backdrop-blur-sm border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons - Only show on active slide */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isActive 
                      ? 'max-h-20 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="flex gap-3">
                      <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 text-sm md:text-base">
                        Learn More
                      </button>
                      <button className="border border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm md:text-base">
                        View Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Click indicator for inactive slides */}
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12l-6-6m0 0l-6 6m6-6v18" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}