import { Button } from '@/components/ui/button';
import { forwardRef } from 'react';
import CloseButton from '../CloseButton';


interface Step1Props {
  onNext: () => void;
  onClose: () => void;
  isAnimating: boolean;
}

const Step1 = forwardRef<HTMLDivElement, Step1Props>(({ onNext, onClose, isAnimating }, ref) => {
  return (
    <div 
      ref={ref}
      className="p-6 flex flex-col items-center justify-between max-w-[450px] min-h-[100px] bg-[#121212] border border-emerald-300 rounded-2xl"
    >
      <div className="text-white text-xl font-medium leading-7">
        <p>Welcome 👋 I'm Olawale</p>
        <p>To save you time, tell me a bit about your needs so we can focus on the right things</p>
        <Button variant="customBtn" className="mt-4" onClick={onNext} disabled={isAnimating}>
          Yeap! No Problem
        </Button>
      </div>

      <div className="w-full flex items-end justify-end mt-6">
        <CloseButton onClick={onClose} />
      </div>
    </div>
  );
});

Step1.displayName = 'Step1';

export default Step1;