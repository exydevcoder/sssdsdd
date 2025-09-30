'use client';
import { useRef } from 'react';
import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import { TextRevealCard } from '@/components/ui/text-reveal-card';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSection() {
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
    <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.2} className="relative section pb-[128px] md:pb-[256px]">
      <div className="inner-section">
        <div className="max-w-[1216px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center justify-center gap-16">
            <FadeIn delay={0.3} direction="up">
              <TextRevealCard text="Learn About Me" revealText="Know Me More" />
            </FadeIn>
          </div>

          <div ref={containerRef} className="w-full">
            {/* Panel 1 */}
            <motion.div style={{ opacity: panel1Opacity, scale: panel1Scale }}>
              <StepOne />
            </motion.div>

            {/* Panel 2 */}
            <motion.div style={{ opacity: panel2Opacity, scale: panel2Scale }}>
              <StepTwo />
            </motion.div>

            {/* Panel 3 */}
            <motion.div style={{ opacity: panel3Opacity, scale: panel3Scale }}>
              <StepThree />
            </motion.div>
          </div>
        </div>
      </div>
    </StaggeredFadeIn>
  );
}
