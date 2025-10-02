'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import img1 from '../../../../assets/testimonial/1.png';
import img2 from '../../../../assets/testimonial/2.png';
import img3 from '../../../../assets/testimonial/3.png';
import { StaticImageData } from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Olawale brings clarity to complex problems. We shipped faster with higher confidence. Our team still uses the system he set up.',
    author: 'Aisha Bello',
    role: 'VP Product',
    company: 'Nimbus',
    avatar: img1
  },
  {
    id: 2,
    quote: 'He elevated our product and brand in weeks. The handoff was pristine, engineering had everything they needed.',
    author: 'David Kim',
    role: 'Founder',
    company: 'Volt',
    avatar: img2
  },
  {
    id: 3,
    quote: 'Olawale brings clarity to complex problems. We shipped faster with higher confidence. Our team still uses the system he set up.',
    author: 'Aisha Bello',
    role: 'VP Product',
    company: 'Nimbus',
    avatar: img3
  },
  {
    id: 4,
    quote: 'Working with Olawale transformed our approach to product development. His insights were invaluable.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'Apex',
    avatar: img2
  }
];

const CARD_WIDTH = 384;
const GAP = 24;
const ITEM_WIDTH = CARD_WIDTH + GAP;

export function TestimonialCarousel() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const testimonialsCount = testimonials.length;
  const list = [...testimonials, ...testimonials]; // duplicated list
  const listLength = list.length;

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalWidth = ITEM_WIDTH * listLength - GAP;
      const maxLeft = -(totalWidth - containerWidth);
      setConstraints({ left: maxLeft, right: 0 });
    }
  }, [listLength]);

  useEffect(() => {
    const halfWidth = ITEM_WIDTH * testimonialsCount;

    return x.onChange(latestX => {
      if (latestX <= -halfWidth) {
        x.set(latestX + halfWidth);
      } else if (latestX > 0) {
        x.set(0);
      }
    });
  }, [x, testimonialsCount]);

  return (
    <div className="overflow-hidden w-full pl-5 sm:pl-25" ref={containerRef}>
      <motion.div className="flex gap-6 cursor-grab active:cursor-grabbing" drag="x" dragConstraints={constraints} style={{ x }}>
        {list.map((testimonial, idx) => (
          <div
            key={`${testimonial.id}-${idx}`}
            className="flex-shrink-0 flex flex-col gap-6 w-80 xs:w-96 bg-neutral-900 rounded-xl h-48 p-6 justify-between outline outline-offset-[-1px] outline-white/10"
          >
            <p className="text-neutral-300 text-sm font-normal leading-[20px]">"{testimonial.quote}"</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={testimonial.avatar?.src || '/placeholder.svg'} alt={testimonial.author} />
                <AvatarFallback className="bg-zinc-800 text-zinc-100">
                  {testimonial.author
                    .split(' ')
                    .map(n => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-white text-sm font-medium leading-[20px]">{testimonial.author}</p>
                <p className="text-neutral-400 text-xs font-normal leading-[16px]">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
