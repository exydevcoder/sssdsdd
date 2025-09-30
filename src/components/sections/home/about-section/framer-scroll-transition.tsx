'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FramerScrollTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Transform scroll progress to different panel states
  const panel1Opacity = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const panel1Scale = useTransform(scrollYProgress, [0, 0.33], [1, 0.8]);

  const panel2Opacity = useTransform(scrollYProgress, [0, 0.33, 0.33, 0.66], [0, 1, 1, 0]);
  const panel2Scale = useTransform(scrollYProgress, [0, 0.33, 0.33, 0.66], [0.9, 1, 1, 0.8]);

  const panel3Opacity = useTransform(scrollYProgress, [0.66, 1], [0, 1]);
  const panel3Scale = useTransform(scrollYProgress, [0.66, 1], [0.9, 1]);

  return (
    <div className="bg-gray-900">
      {/* Normal scrollable section before */}
      <section className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Framer Motion Scroll</h1>
          <p className="text-xl">Scroll down to see the transition effect</p>
          <div className="mt-8 animate-bounce">↓</div>
        </div>
      </section>

      {/* Transition section with scroll lock */}
      <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Panel 1 */}
          <motion.div
            style={{ opacity: panel1Opacity, scale: panel1Scale }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-500 to-pink-500"
          >
            <div className="text-center text-white">
              <h2 className="text-7xl font-bold mb-4">01</h2>
              <p className="text-2xl">First Panel</p>
              <p className="mt-4 text-lg opacity-80">Keep scrolling...</p>
            </div>
          </motion.div>

          {/* Panel 2 */}
          <motion.div
            style={{ opacity: panel2Opacity, scale: panel2Scale }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500"
          >
            <div className="text-center text-white">
              <h2 className="text-7xl font-bold mb-4">02</h2>
              <p className="text-2xl">Second Panel</p>
              <p className="mt-4 text-lg opacity-80">Almost there...</p>
            </div>
          </motion.div>

          {/* Panel 3 */}
          <motion.div
            style={{ opacity: panel3Opacity, scale: panel3Scale }}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500"
          >
            <div className="text-center text-white">
              <h2 className="text-7xl font-bold mb-4">03</h2>
              <p className="text-2xl">Final Panel</p>
              <p className="mt-4 text-lg opacity-80">Continue scrolling to exit</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Normal scrollable section after */}
      <section className="min-h-screen bg-gradient-to-b from-violet-900 to-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Transition Complete!</h2>
          <p className="text-xl">Normal scrolling resumes</p>
        </div>
      </section>
    </div>
  );
}