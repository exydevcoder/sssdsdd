import GlowingWrapper from '../GlowingBadge';
import { EmailIcon } from '../icon';
import { Button } from '../ui/button';

export default function EmailMeBtn() {
  return (
    <a href="#">
      <GlowingWrapper>
        <Button variant="customBtn" className="w-[117px]">
          <EmailIcon />
          <span>Email me</span>
        </Button>
      </GlowingWrapper>
    </a>
  );
}
