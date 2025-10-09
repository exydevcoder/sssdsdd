import HeroBanner from './banner';
import BottomHeroContent from './BottomHeroContent';

export default function HeroSection() {
  return (
    <div className='pb-[256px] 2xl:pb-[456px]'>
      <HeroBanner />
      <BottomHeroContent />
    </div>
  );
}
