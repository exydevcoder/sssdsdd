import Link from 'next/link';
import GlowingWrapper from '../GlowingBadge';
import { StarIcon } from '../icon';
import { Button } from '../ui/button';

export default function ViewMyWorkBtn() {
  return (
    <Link href="#work">
      <GlowingWrapper>
        <Button variant="customBtn">
          <StarIcon />
          <span>View My Work</span>
        </Button>
      </GlowingWrapper>
    </Link>
  );
}
