'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';
import { cn } from '@/lib/utils';

interface TextRevealCardProps {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}

export const TextRevealCard = ({ text, revealText, children, className }: TextRevealCardProps) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }
  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      // onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn('relative overflow-hidden', className)}
    >
      {children}

      <div className="relative flex items-center overflow-hidden">
        <motion.div
          style={{
            width: '100%'
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: '4px 4px 15px rgba(0,0,0,0.5)'
            }}
            className="font-bold text-white bg-clip-text text-[80px] md:text-[100px] lg:text-[150px] 2xl:text-[256px] lastStepStyle bg-gradient-to-b from-white to-neutral-300"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="flex items justify-center bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
        ></motion.div>

        <div className="overflow-hidden flex items justify-center [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="font-bold bg-clip-text text-[80px] md:text-[100px] lg:text-[150px] 2xl:text-[256px] lastStepStyle text-transparent bg-[#323238]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h2 className={twMerge('text-white text-lg mb-2', className)}>{children}</h2>;
};

export const TextRevealCardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={twMerge('text-[#a9a9a9] text-sm', className)}>{children}</p>;
};
