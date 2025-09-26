import GlowingWrapper from '../GlowingBadge';
import { StarIcon } from '../icon';
import { Button } from '../ui/button';

export default function ViewMyWorkBtn() {
  return (
    <GlowingWrapper containerClassName="rounded-[11px]">
      <Button variant="customBtn">
        <StarIcon />
        <span>View My Work</span>
      </Button>
    </GlowingWrapper>
  );
}
