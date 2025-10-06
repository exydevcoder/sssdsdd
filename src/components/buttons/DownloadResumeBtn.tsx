import GlowingWrapper from '../GlowingBadge';
import { DownloadIcon } from '../icon';
import { Button } from '../ui/button';

export default function DownloadResumeBtn() {
  return (
    <a href="#">
      <GlowingWrapper>
        <Button variant="customBtn" className="w-[181px] bg-neutral-900 border border-white/10 hover:!bg-neutral-900">
          <DownloadIcon />
          <span className="text-white">Download Resume</span>
        </Button>
      </GlowingWrapper>
    </a>
  );
}
