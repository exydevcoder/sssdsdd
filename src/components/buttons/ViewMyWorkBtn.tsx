import { AnimatedGradientBorder } from '../animations/AnimatedGradientBorder';
import { StarIcon } from '../icon';
import { Button } from '../ui/button';

export default function ViewMyWorkBtn() {
  return (
    <AnimatedGradientBorder>
      <Button variant="customBtn">
        <StarIcon />
        <span>View My Work</span>
      </Button>
    </AnimatedGradientBorder>
  );
}
