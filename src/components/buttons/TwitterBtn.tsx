import GlowingWrapper from '../GlowingBadge';
import { TwitterIcon } from '../icon';
import { Button } from '../ui/button';

export default function TwitterBtn() {
  return (
    <GlowingWrapper containerClassName='rounded-[8px]'>
      <Button variant="customBtn" className="w-[92px] h-[28px] rounded-[8px] !px-3 py-1.5 bg-neutral-900 border border-white/10 hover:!bg-neutral-900">
        <TwitterIcon />
        <span className="text-neutral-300 text-xs font-normal leading-[16px]">Twitter</span>
      </Button>
    </GlowingWrapper>
  );
}
