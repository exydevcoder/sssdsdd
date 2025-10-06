import GlowingWrapper from '../GlowingBadge';
import { LinkedInIcon } from '../icon';
import { Button } from '../ui/button';

export default function LinkedinBtnTwo() {
  return (
    <a href="#">
      <GlowingWrapper containerClassName="rounded-[8px]">
        <Button variant="customBtn" className="w-[92px] h-[28px] rounded-[8px] !px-3 py-1.5 bg-neutral-900 border border-white/10 hover:!bg-neutral-900">
          <LinkedInIcon />
          <span className="text-neutral-300 text-xs font-normal leading-[16px]">LinkedIn</span>
        </Button>
      </GlowingWrapper>
    </a>
  );
}
