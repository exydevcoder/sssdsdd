import { forwardRef } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { LeftArrowIcon, ProgressStepFourIcon } from '@/components/icon';
import CloseButton from '../CloseButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormValidationData } from '../formValidation';

interface Step4Props {
  register: UseFormRegister<FormValidationData>;
  errors: FieldErrors<FormValidationData>;
  isValid: boolean;
  onSubmit: () => void;
  onPrev: () => void;
  onClose: () => void;
  isAnimating: boolean;
}

const Step4 = forwardRef<HTMLDivElement, Step4Props>(({ register, errors, isValid, onSubmit, onPrev, onClose, isAnimating }, ref) => {
  return (
    <div ref={ref} className="p-6 flex flex-col items-center justify-between min-w-[491px] min-h-[100px] bg-[#121212] border border-emerald-300 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col gap-6 w-full">
        <p className="max-w-[320px] text-white text-xl font-medium leading-7">Almost there! Tell me a bit about yourself to wrap it up.</p>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Your name"
              {...register('name')}
              disabled={isAnimating}
              className="h-12 p-4 bg-neutral-900 text-[#6EE7B7] border border-white/10 rounded-2xl shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)] outline outline-offset-[-1px] outline-white/10 backdrop-blur-md
            placeholder:text-stone-500 text-base font-normal leading-tight transition-all duration-200"
            />
            {errors.name && <span className="text-red-400 text-sm animate-in fade-in duration-200">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="Your email"
              {...register('email')}
              disabled={isAnimating}
              className="h-12 p-4 bg-neutral-900 text-[#6EE7B7] border border-white/10 rounded-2xl shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)] outline outline-offset-[-1px] outline-white/10 backdrop-blur-md
            placeholder:text-stone-500 text-base font-normal leading-tight transition-all duration-200"
            />
            {errors.email && <span className="text-red-400 text-sm animate-in fade-in duration-200">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <Textarea
              placeholder="Any other thing? (Optional)"
              {...register('message')}
              disabled={isAnimating}
              className="h-[172px] p-4 bg-neutral-900 text-[#6EE7B7] border border-white/10 rounded-2xl shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)] outline outline-offset-[-1px] outline-white/10 backdrop-blur-md
            placeholder:text-stone-500 text-base font-normal leading-tight transition-all duration-200"
            />
            {errors.message && <span className="text-red-400 text-sm animate-in fade-in duration-200">{errors.message.message}</span>}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="cta-btn" onClick={onPrev} disabled={isAnimating}>
            <LeftArrowIcon />
          </button>
          <button className="cta-btn !cursor-default">
            <ProgressStepFourIcon />
          </button>

          <div className="ml-auto flex items-center gap-4">
            <Button
              variant="customBtn"
              className={`max-w-max text-neutral-300 border border-[#686868]/12 shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)] transition-all duration-200 ${
                isValid && !isAnimating ? 'bg-[#15251F] border-[#6EE7B7]/20 hover:bg-[#15251F] hover:border hover:border-[#6EE7B7]/20' : 'bg-[#262626] cursor-not-allowed opacity-50'
              }`}
              onClick={onSubmit}
              disabled={!isValid || isAnimating}
            >
              Send
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

Step4.displayName = 'Step4';

export default Step4;
