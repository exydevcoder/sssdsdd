import GlowingWrapper from '../GlowingBadge';
import { ChatIcon } from '../icon';
import { Button } from '../ui/button';

export default function LetChatBtn() {
  return (
    <GlowingWrapper>
      <Button variant="customBtn" className="w-[123px]">
        <ChatIcon />
        <span className="text-white">Let’s Chat</span>
      </Button>
    </GlowingWrapper>
  );
}
