import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image, { StaticImageData } from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

type ProductCardProps = {
  id: number;
  title: string;
  coverImg: StaticImageData;
  tags: string[];
};

export default function ProductCard({ coverImg, tags, id, title }: ProductCardProps) {
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
    <Link href="">
      <FadeIn delay={delay}>
        <Card className="w-full gap-[11px] cursor-pointer border-none bg-transparent pt-0 pb-0" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
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
              <motion.div 
              initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className='w-full absolute bottom-0 z-10 px-4 pb-4 pt-20 bg-gradient-to-b from-[#0A0A0A]/0 to-[#0A0A0A]/70'>
                <motion.p
                  className="text-white text-sm font-medium leading-[20px]"
                >
                  {title}
                </motion.p>
              </motion.div>

              {/* <motion.div
                className="absolute bottom-0 inset-0 bg-gradient-to-b from-[#0A0A0A]/0 to-[#0A0A0A]/100"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.8 : 0 }}
                transition={{ duration: 0.3 }}
              /> */}
            </div>
          </motion.div>

          <CardContent className="flex flex-wrap items-start justify-start gap-1.5 p-0">
            {tags.map(tag => (
              <Badge variant="tagsStyle" key={tag}>
                {tag}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </FadeIn>
    </Link>
  );
}
