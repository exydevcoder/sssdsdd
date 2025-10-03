import GlowingWrapper from '../GlowingBadge';
import { WhatsAppMessageBtnIcon } from '../icon';
import { Button } from '../ui/button';

export default function WhatsAppMessageBtn() {
  return (
    <GlowingWrapper>
      <Button variant="customBtn" className="w-[191px]">
        <WhatsAppMessageBtnIcon />
        <span>WhatsApp Message</span>
      </Button>
    </GlowingWrapper>
  );
}
