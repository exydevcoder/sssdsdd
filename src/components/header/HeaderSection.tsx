import Image from 'next/image';
import logo from '../../assets/new-logo.png';
import FadeIn from '../animations/fade-in';
import Link from 'next/link';
import ViewMyWorkBtn from '../buttons/ViewMyWorkBtn';

export default function HeaderSection() {
  return (
    <FadeIn direction="down" distance={20} duration={0.6} className="section fixed z-50 flex items-center justify-center top-0 bg-neutral-950/25 backdrop-blur-md">
      <div className="inner-section flex items-center justify-between h-[72px]">
        <FadeIn direction="right" delay={0.2} duration={0.5}>
          <Link href="" className="flex items-center gap-1.5">
            <Image src={logo} width={42} height={42} alt="header-logo" />
            <span className="text-white text-lg font-semibold">Olawale</span>
          </Link>
        </FadeIn>

        <FadeIn direction="left" delay={0.9} duration={0.5} className="">
          <ViewMyWorkBtn />
        </FadeIn>
      </div>
    </FadeIn>
  );
}
