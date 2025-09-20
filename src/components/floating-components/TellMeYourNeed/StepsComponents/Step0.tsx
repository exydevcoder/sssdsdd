import { MsgIcon } from '@/components/icon';
import { forwardRef } from 'react';

interface Step0Props {
  onNext: () => void;
  isAnimating: boolean;
}

const Step0 = forwardRef<HTMLDivElement, Step0Props>(({ onNext, isAnimating }, ref) => {
  return (
    <div 
      ref={ref}
      className="p-1.5 pl-4 flex items-center justify-between w-[279px] min-h-[52px] bg-[#121212] border border-white/10 rounded-2xl"
    >
      <p className="text-neutral-300 text-nowrap text-base font-normal leading-7">Tell me about your needs</p>
      <div className="w-full flex items-end justify-end">
        <button className="cta-btn" onClick={onNext} disabled={isAnimating}>
          <MsgIcon />
        </button>
      </div>
    </div>
  );
});

Step0.displayName = 'Step0';

export default Step0;