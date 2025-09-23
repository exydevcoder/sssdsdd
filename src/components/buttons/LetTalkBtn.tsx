import { AnimatedGradientBorder } from '../animations/AnimatedGradientBorder';
import { EmailIcon } from '../icon';
import { Button } from '../ui/button';

export default function LetTalkBtn() {
  return (
    <AnimatedGradientBorder colors={['#FFFFFF', '#FFFFFF']}>
      <Button variant="customBtn" className="w-[119px] bg-neutral-900 border border-white/10">
        <EmailIcon />
        <span className="text-white">Let's Talk</span>
      </Button>
    </AnimatedGradientBorder>
  );
}
