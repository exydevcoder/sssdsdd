import { Button } from '@/components/ui/button';
import { forwardRef } from 'react';
import CloseButton from '../CloseButton';
import { stepFourList } from '../stepLists';
import { CheckedIcon, LeftArrowIcon } from '@/components/icon';
import { ProgressStepThreeIcon } from '../icons';
import { ProgressFillIcon } from '../ProgressFillIcon';

interface Step3Props {
  selectedOptions: string[];
  onSelection: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  isAnimating: boolean;
}

const Step3 = forwardRef<HTMLDivElement, Step3Props>(({ selectedOptions, onSelection, onNext, onPrev, onClose, isAnimating }, ref) => {
  return (
    <div ref={ref} className="p-6 flex flex-col items-center justify-between min-w-[491px] min-h-[100px] bg-[#121212] border border-emerald-300 rounded-2xl">
      <div className="flex flex-col gap-6 w-full">
        <p className="text-white text-xl font-medium leading-7">But...</p>
        <div className="flex flex-col gap-6 w-full">
          {stepFourList.map(list => (
            <button
              key={list.id}
              className={`flex cursor-pointer bg-transparent text-left gap-6 text-base font-normal leading-5 break-words whitespace-normal transition-colors duration-200 ${
                selectedOptions.includes(list.id) ? 'text-emerald-300' : 'text-stone-500'
              }`}
              onClick={() => onSelection(list.id)}
              disabled={isAnimating}
            >
              {selectedOptions.includes(list.id) ? (
                <div className="">
                  <CheckedIcon />
                </div>
              ) : (
                <span>{list.id}</span>
              )}
              <span>{list.label}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <button className="cta-btn" onClick={onPrev} disabled={isAnimating}>
            <LeftArrowIcon />
          </button>
          <button className="cta-btn !cursor-default">
            <ProgressFillIcon icon={<ProgressStepThreeIcon />} progress={0.66} duration={1.5} />
          </button>

          <div className={`ml-auto flex items-center gap-4 ${selectedOptions.length > 0 ? 'group' : ''}`}>
            <span className={`text-white text-base font-normal leading-tight transition-opacity duration-200 ${selectedOptions.length > 0 ? 'group-hover:inline hidden' : 'hidden'}`}>
              {selectedOptions.length === 1 ? 'Is that all?' : 'Anything else?'}
            </span>

            <Button
              variant="customBtn"
              className={`max-w-max text-neutral-300 border border-[#686868]/12 shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)] transition-all duration-200 ${
                selectedOptions.length > 0 ? 'bg-[#15251F] border-[#6EE7B7]/20 hover:bg-[#15251F] hover:border hover:border-[#6EE7B7]/20' : 'bg-[#262626] cursor-not-allowed opacity-50'
              }`}
              onClick={onNext}
              disabled={selectedOptions.length === 0 || isAnimating}
            >
              {selectedOptions.length > 0 ? (
                <>
                  <span className="block group-hover:hidden">Continue</span>
                  <span className="hidden group-hover:block">Yeah! Continue</span>
                </>
              ) : (
                'Continue'
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full flex items-end justify-end mt-6">
        <CloseButton onClick={onClose} />
      </div>
    </div>
  );
});

Step3.displayName = 'Step3';

export default Step3;
