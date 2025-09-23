import { AnimatedGradientBorder } from '@/components/animations/AnimatedGradientBorder';
import { MsgIcon } from '@/components/icon';
import { forwardRef } from 'react';

interface Step0Props {
  onNext: () => void;
  isAnimating: boolean;
}

const Step0 = forwardRef<HTMLDivElement, Step0Props>(({ onNext, isAnimating }, ref) => {
  return (
    <div ref={ref} className='w-full xs:w-[279px] min-h-[52px] transform -translate-x-[0%] xs:-translate-x-[20%] sm:-translate-x-[0%]'>
    {/* <div ref={ref} className='px-6 xs:px-0 w-full xs:w-[279px] min-h-[52px] transform -translate-x-[0%] xs:-translate-x-[20%] sm:-translate-x-[0%]'> */}
      <AnimatedGradientBorder>
        <div className="cursor-pointer p-1.5 pl-4 flex gap-1.5 items-center justify-between bg-[#121212] rounded-2xl" onClick={onNext}>
          <p className="text-neutral-300 text-nowrap text-base font-normal leading-7">Tell me about your needs</p>
          <div className="w-full flex items-end justify-end">
            <button className="cta-btn" disabled={isAnimating}>
              <MsgIcon />
            </button>
          </div>
        </div>
      </AnimatedGradientBorder>
    </div>
  );
});

Step0.displayName = 'Step0';

export default Step0;
