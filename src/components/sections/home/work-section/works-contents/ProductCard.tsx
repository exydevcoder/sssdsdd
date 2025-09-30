import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image, { StaticImageData } from 'next/image';
import FadeIn from '@/components/animations/fade-in';

type ProductCardProps = {
  id: number; // Add this to the type
  coverImg: StaticImageData;
  tags: string[];
};

export default function ProductCard({ coverImg, tags, id }: ProductCardProps) {
  const delay = 0.1 + ((id - 1) % 4) * 0.1;

  return (
    <FadeIn delay={delay}>
      <Card className="w-full border-none bg-transparent pt-0">
        <div className="w-full min-h-[165px] rounded-[8px] overflow-hidden">
          <Image src={coverImg} width={297} height={222.75} className="w-full object-cover" alt="card image" />
        </div>
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
