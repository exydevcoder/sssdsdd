import FadeIn from '@/components/animations/fade-in';
import logo from '../../../assets/new-logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section pb-16">
      <div className="inner-section flex flex-col gap-1.5">
        <FadeIn direction="right" delay={0.2} duration={0.5}>
          <Link href="" className="flex flex-col items-center justify-center gap-1.5">
            <Image src={logo} width={42} height={42} alt="header-logo" />
            <span className="text-white text-lg font-semibold">Olawale</span>
          </Link>
        </FadeIn>
        <p className="self-stretch text-center justify-center text-neutral-500 text-xs font-normal leading-none">© 2025 Olawale Design. All rights reserved.</p>
      </div>
    </footer>
  );
}
