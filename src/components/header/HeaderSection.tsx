import Image from 'next/image';
import headerLogo from '../../assets/header-logo.png';
import { Button } from '../ui/button';
import { StarIcon } from '../icon';

export default function HeaderSection() {
  return (
    <header className="section fixed z-50 flex items-center justify-center top-0 bg-neutral-950/25 backdrop-blur-md">
      <div className="inner-section flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-1.5">
          <Image src={headerLogo} width={36} height={36} alt="header-logo" />
          <span className="text-white text-sm font-medium leading-tight">Olawale</span>
        </div>

        <div className="">
          <Button variant="customBtn">
            <StarIcon />
            <span>View My Work</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
