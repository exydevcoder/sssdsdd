'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatedGradientBorder } from '../../animations/AnimatedGradientBorder';
import FadeIn from '@/components/animations/fade-in';
import { AudioPlayWaveIcon, AudioPlayWaveIconAnimated } from './icons';

export default function PlayerButton({ currentStep }: { currentStep: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // Track scroll state
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio('/Music.mp3');
    
    // Add event listener for when audio ends
    const handleEnded = () => {
      setIsPlaying(false);
    };

    audioRef.current.addEventListener('ended', handleEnded);

    // Scroll event listener to trigger audio play after scroll
    const handleScroll = () => {
      if (window.scrollY > 200 && !hasScrolled) { // Check if scrolled more than 200px
        setHasScrolled(true);
        // Trigger audio play with a small delay
        setTimeout(() => playAudio(), 100);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [hasScrolled]);

  const playAudio = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Autoplay failed, user needs to interact:', error);
      // Allow manual control through button if autoplay fails
    }
  };

  const handleToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      playAudio(); // Trigger play when user clicks the button
    }
  };

  const inactiveColor = '#FFFFFF';
  const activeColor = '#6EE7B7';

  return (
    <FadeIn
      direction="left"
      delay={2.8}
      distance={40}
      duration={0.8}
      className={`fixed
      right-6 
      sm:right-6 
      md:right-[80px] 
      lg:right-[100px] 
      xl:right-[120px] 
      [@media(min-width:1600px)]:right-[160px]
      [@media(min-width:1900px)]:right-[300px]
      bottom-21 
      xs:bottom-4 
      z-50 ${currentStep === 0 ? 'flex' : 'hidden'}`}
    >
      <AnimatedGradientBorder>
        <div 
          className="p-1.5 flex items-center justify-between w-[76px] h-[52px] bg-[#121212] rounded-2xl relative z-10 cursor-pointer" 
          onClick={handleToggle}
        >
          <button className="cta-btn !w-full !h-full">
            {isPlaying ? (
              <AudioPlayWaveIconAnimated fill={activeColor} />
            ) : (
              <AudioPlayWaveIcon fill={inactiveColor} />
            )}
          </button>
        </div>
      </AnimatedGradientBorder>
    </FadeIn>
  );
}
