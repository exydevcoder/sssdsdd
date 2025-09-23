import Image from 'next/image';
import headerLogo from '../../assets/header-logo.png';
import { Button } from '../ui/button';
import { StarIcon } from '../icon';
import { AnimatedGradientBorder } from '../animations/AnimatedGradientBorder';
import FadeIn from '../animations/fade-in';
import Link from 'next/link';

export default function HeaderSection() {
  return (
    <FadeIn direction="down" distance={20} duration={0.6} className="section fixed z-50 flex items-center justify-center top-0 bg-neutral-950/25 backdrop-blur-md">
      <div className="inner-section flex items-center justify-between">
        <FadeIn direction="right" delay={0.2} duration={0.5}>
          <Link href="" className="flex items-center gap-1.5">
            <Image src={headerLogo} width={36} height={36} alt="header-logo" />
            <span className="text-white text-sm font-medium leading-tight">Olawale</span>
          </Link>
        </FadeIn>

        <FadeIn direction="left" delay={0.9} duration={0.5} className="">
          <AnimatedGradientBorder>
            <Button variant="customBtn">
              <StarIcon />
              <span>View My Work</span>
            </Button>
          </AnimatedGradientBorder>
        </FadeIn>
      </div>
    </FadeIn>
  );
}
