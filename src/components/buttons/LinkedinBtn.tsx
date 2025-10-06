import GlowingWrapper from '../GlowingBadge';
import { Button } from '../ui/button';

export default function LinkedinBtn() {
  return (
    <a href="#">
      <GlowingWrapper>
        <Button variant="customBtn" className="w-[89px]">
          Linkedin
        </Button>
      </GlowingWrapper>
    </a>
  );
}
