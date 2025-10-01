import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image, { StaticImageData } from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import { motion } from 'framer-motion';
import { useState } from 'react';

type ProductCardProps = {
  id: number;
  coverImg: StaticImageData;
  tags: string[];
};

export default function ProductCard({ coverImg, tags, id }: ProductCardProps) {
  const delay = 0.1 + ((id - 1) % 4) * 0.1;
  const [isHovered, setIsHovered] = useState(false);

  const createGradientWithGaps = (angle: number) => {
    return `conic-gradient(from ${angle}deg, 
      #6EE7B7 0deg 30deg, 
      #CCF544 30deg 120deg,
      #FFC548 120deg 210deg, 
      transparent 210deg 360deg
    )`;
  };

  return (
    <FadeIn delay={delay}>
      <Card className="w-full cursor-pointer border-none bg-transparent pt-0" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <motion.div
          className="relative w-full min-h-[165px] rounded-[8px] p-[2px]"
          style={{
            background: isHovered ? createGradientWithGaps(0) : 'transparent'
          }}
          animate={
            isHovered
              ? {
                  background: [createGradientWithGaps(0), createGradientWithGaps(360)],
                  scale: 0.98
                }
              : {
                  scale: 1
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
            scale: {
              duration: 0.3,
              ease: 'easeInOut'
            }
          }}
        >
          <div className="w-full h-full rounded-[6px] overflow-hidden bg-white relative">
            <Image src={coverImg} width={297} height={222.75} className="w-full object-cover" alt="card image" />
            <motion.div className="absolute inset-0 bg-black" initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 0.3 : 0 }} transition={{ duration: 0.3 }} />
          </div>
        </motion.div>

        <CardContent className="flex flex-wrap items-start justify-start gap-1.5 p-0 mt-2">
          {tags.map(tag => (
            <Badge variant="tagsStyle" key={tag}>
              {tag}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </FadeIn>
  );
}
