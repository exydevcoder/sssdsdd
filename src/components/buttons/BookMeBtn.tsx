import Link from 'next/link';
import GlowingWrapper from '../GlowingBadge';
import { BooMeIcon } from '../icon';
import { Button } from '../ui/button';

export default function BookMeBtn() {
  return (
    <Link href="">
      <GlowingWrapper>
        <Button variant="customBtn" className="w-[188px] bg-neutral-900 border border-white/10 hover:!bg-neutral-900">
          <BooMeIcon />
          <span className="text-white">Book a 30‑min intro</span>
        </Button>
      </GlowingWrapper>
    </Link>
  );
}
