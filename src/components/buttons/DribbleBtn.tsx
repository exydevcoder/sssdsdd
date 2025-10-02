import GlowingWrapper from '../GlowingBadge';
import { DribbleIcon } from '../icon';
import { Button } from '../ui/button';

export default function DribbleBtn() {
  return (
    <GlowingWrapper>
      <Button variant="customBtn" className="w-[113px] bg-neutral-900 border border-white/10 hover:!bg-neutral-900">
        <DribbleIcon className="text-white" />
        <span className="text-white">Dribble</span>
      </Button>
    </GlowingWrapper>
  );
}
