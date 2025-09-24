'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ from = 0, to, duration = 2, suffix = '', className = '' }: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const rounded = useSpring(count, {
    damping: 100,
    stiffness: 100,
    duration: duration * 1000
  });
  const [displayValue, setDisplayValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      count.set(to);
    }
  }, [count, to, isInView]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', latest => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [rounded]);

  return (
    <motion.h3
      ref={ref}
      className={`text-emerald-300 text-2xl xs:text-3xl font-medium ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
      {suffix}
    </motion.h3>
  );
}
