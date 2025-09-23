'use client';

import FadeIn from "@/components/animations/fade-in";
import Step0 from './StepsComponents/Step0';
import Step1 from './StepsComponents/Step1';
import Step2 from './StepsComponents/Step2';
import Step3 from './StepsComponents/Step3';
import Step4 from './StepsComponents/Step4';
import Step5 from './StepsComponents/Step5';
import { FormValidationData } from './formValidation';
import { UseFormRegister, UseFormHandleSubmit, FieldErrors } from 'react-hook-form';

interface TellMeYourNeedProps {
  currentStep: number;
  selectedOptionsStep2: string[];
  selectedOptionsStep3: string[];
  isAnimating: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  setStepRef: (index: number) => (el: HTMLDivElement | null) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetToDefault: () => void;
  handleStep2Selection: (id: string) => void;
  handleStep3Selection: (id: string) => void;
  register: UseFormRegister<FormValidationData>;
  errors: FieldErrors<FormValidationData>;
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<FormValidationData>;
  onSubmit: (data: FormValidationData) => void;
}

export default function TellMeYourNeed({
  currentStep,
  selectedOptionsStep2,
  selectedOptionsStep3,
  isAnimating,
  containerRef,
  setStepRef,
  nextStep,
  prevStep,
  resetToDefault,
  handleStep2Selection,
  handleStep3Selection,
  register,
  errors,
  isValid,
  handleSubmit,
  onSubmit
}: TellMeYourNeedProps) {

  return (
    <FadeIn direction="up" delay={2.4} distance={40} duration={0.8} className="fixed flex items-center justify-center z-50 bottom-5 xs:bottom-4 w-full">
      <div ref={containerRef} className='w-full sm:w-[491px] px-5 flex items-center justify-center'>
        {/* Step 0 - Has animation */}
        {currentStep === 0 && <Step0 ref={setStepRef(0)} onNext={nextStep} isAnimating={isAnimating} />}

        {/* Step 1 - Has animation */}
        {currentStep === 1 && <Step1 ref={setStepRef(1)} onNext={nextStep} onClose={resetToDefault} isAnimating={isAnimating} />}

        {/* Step 2 - No animation */}
        {currentStep === 2 && (
          <Step2 ref={setStepRef(2)} selectedOptions={selectedOptionsStep2} onSelection={handleStep2Selection} onNext={nextStep} onPrev={prevStep} onClose={resetToDefault} isAnimating={isAnimating} />
        )}

        {/* Step 3 - No animation */}
        {currentStep === 3 && (
          <Step3 ref={setStepRef(3)} selectedOptions={selectedOptionsStep3} onSelection={handleStep3Selection} onNext={nextStep} onPrev={prevStep} onClose={resetToDefault} isAnimating={isAnimating} />
        )}

        {/* Step 4 - No animation */}
        {currentStep === 4 && (
          <Step4 ref={setStepRef(4)} register={register} errors={errors} isValid={isValid} onSubmit={handleSubmit(onSubmit)} onPrev={prevStep} onClose={resetToDefault} isAnimating={isAnimating} />
        )}

        {/* Step 5 - Has animation */}
        {currentStep === 5 && <Step5 ref={setStepRef(5)} onClose={resetToDefault} />}
      </div>
    </FadeIn>
  );
}