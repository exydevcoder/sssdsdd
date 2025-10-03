import GlowingWrapper from '../GlowingBadge';
import { DribbleIcon } from '../icon';
import { Button } from '../ui/button';

export default function DribbleBtnTwo() {
  return (
    <GlowingWrapper containerClassName='rounded-[8px]'>
      <Button variant="customBtn" className="w-[92px] h-[28px] rounded-[8px] !px-3 py-1.5 bg-neutral-900 border border-white/10 hover:!bg-neutral-900">
        <DribbleIcon className="text-[#D4D4D4] !w-3.5 !h-3.5" />
        <span className="text-neutral-300 text-xs font-normal leading-[16px]">Dribble</span>
      </Button>
    </GlowingWrapper>
  );
}
