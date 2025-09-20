import { forwardRef } from 'react';
import CloseButton from '../CloseButton';

interface Step5Props {
  onClose: () => void;
}

const Step5 = forwardRef<HTMLDivElement, Step5Props>(({ onClose }, ref) => {
  return (
    <div 
      ref={ref}
      className="p-6 flex flex-col z-50 items-center justify-between max-w-[491px] bg-[#121212] border border-emerald-300 rounded-2xl"
    >
      <div className="flex flex-col gap-6 w-full">
        <p className="lastStepStyle text-emerald-300 text-6xl font-medium leading-[128px]">Thank you 🙌</p>

        <p className='max-w-[443px] text-white text-xl font-medium leading-7"'>Allow me to review your request and get back to you shortly. See you in a bit</p>
      </div>

      <div className="w-full flex items-end justify-end mt-6">
        <CloseButton onClick={onClose} />
      </div>
    </div>
  );
});

Step5.displayName = 'Step5';

export default Step5;