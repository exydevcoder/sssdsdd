import HeroBanner from './banner';
import BottomHeroContent from './BottomHeroContent';

export default function HeroSection() {
  return (
    <div className='pb-[128px] xl:pb-[70px] md:pb-[256px] 2xl:pb-[356px]'>
      <HeroBanner />
      <BottomHeroContent />
    </div>
  );
}
