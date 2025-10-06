import Link from 'next/link';
import GlowingWrapper from '../GlowingBadge';
import { Button } from '../ui/button';

export default function CheckRateCardBtn() {
  return (
    <Link href="#">
      <GlowingWrapper>
        <Button variant="customBtn">Check Rate Card</Button>
      </GlowingWrapper>
    </Link>
  );
}
