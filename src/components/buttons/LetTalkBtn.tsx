import GlowingWrapper from '../GlowingBadge';
import { EmailIcon } from '../icon';
import { Button } from '../ui/button';

export default function LetTalkBtn() {
  return (
    <GlowingWrapper containerClassName="rounded-md">
      <Button variant="customBtn" className="w-[119px] bg-neutral-900 border border-white/10">
        <EmailIcon />
        <span className="text-white">Let's Talk</span>
      </Button>
    </GlowingWrapper>
  );
}
