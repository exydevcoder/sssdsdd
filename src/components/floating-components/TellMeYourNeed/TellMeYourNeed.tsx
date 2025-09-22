'use client';
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { gsap } from 'gsap';
import { formValidation, FormValidationData } from './formValidation';
import Step0 from './StepsComponents/Step0';
import Step1 from './StepsComponents/Step1';
import Step2 from './StepsComponents/Step2';
import Step3 from './StepsComponents/Step3';
import Step4 from './StepsComponents/Step4';
import Step5 from './StepsComponents/Step5';
import { stepThreeList, stepFourList } from './stepLists';
import FadeIn from '@/components/animations/fade-in';

interface UserSubmissionData extends FormValidationData {
  needs: string[];
  buts: string[];
}

export default function TellMeYourNeed() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptionsStep2, setSelectedOptionsStep2] = useState<string[]>([]);
  const [selectedOptionsStep3, setSelectedOptionsStep3] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<FormValidationData>({
    resolver: zodResolver(formValidation),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  // Check if a step should have animation
  const shouldAnimateStep = (step: number): boolean => {
    // Only animate steps 0, 1, and 5
    return step === 0 || step === 1 || step === 5;
  };

  const animateStepTransition = (fromStep: number, toStep: number) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const currentStepEl = stepRefs.current[fromStep];
    const nextStepEl = stepRefs.current[toStep];

    // If neither step needs animation, skip GSAP and just update state
    if (!shouldAnimateStep(fromStep) && !shouldAnimateStep(toStep)) {
      setCurrentStep(toStep);
      setIsAnimating(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentStep(toStep);
        setIsAnimating(false);
      }
    });

    if (currentStepEl && shouldAnimateStep(fromStep)) {
      tl.to(currentStepEl, {
        scale: 0.8,
        opacity: 0,
        y: toStep > fromStep ? -30 : 30,
        duration: 0.8,
        ease: 'back.in(1.7)'
      });
    } else if (currentStepEl) {
      // Hide non-animated step immediately
      gsap.set(currentStepEl, { opacity: 0 });
    }

    if (nextStepEl && shouldAnimateStep(toStep)) {
      gsap.set(nextStepEl, {
        scale: 0.8,
        opacity: 0,
        y: toStep > fromStep ? 30 : -30
      });

      tl.to(
        nextStepEl,
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'back.out(1.7)'
        },
        '-=0.1'
      );
    } else if (nextStepEl) {
      // Show non-animated step immediately
      gsap.set(nextStepEl, { opacity: 1 });
      setCurrentStep(toStep);
      setIsAnimating(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 5 && !isAnimating) {
      animateStepTransition(currentStep, currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0 && !isAnimating) {
      animateStepTransition(currentStep, currentStep - 1);
    }
  };

  const resetToDefault = () => {
    if (!isAnimating) {
      const currentStepEl = stepRefs.current[currentStep];

      if (currentStepEl && shouldAnimateStep(currentStep)) {
        gsap.to(currentStepEl, {
          scale: 0.8,
          opacity: 0,
          y: -30,
          duration: 0.3,
          ease: 'back.in(1.7)',
          onComplete: () => {
            setCurrentStep(0);
            setSelectedOptionsStep2([]);
            setSelectedOptionsStep3([]);
            reset();

            const step0El = stepRefs.current[0];
            if (step0El) {
              gsap.fromTo(step0El, { scale: 0.8, opacity: 0, y: 30 }, { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' });
            }
          }
        });
      } else {
        // Immediate reset for non-animated steps
        setCurrentStep(0);
        setSelectedOptionsStep2([]);
        setSelectedOptionsStep3([]);
        reset();
      }
    }
  };

  const getLabelsFromIds = (ids: string[], list: Array<{ id: string; label: string }>) => {
    return ids
      .map(id => {
        const item = list.find(item => item.id === id);
        return item ? item.label : '';
      })
      .filter(label => label !== '');
  };

  const onSubmit = (formData: FormValidationData) => {
    const needs = getLabelsFromIds(selectedOptionsStep2, stepThreeList);
    const buts = getLabelsFromIds(selectedOptionsStep3, stepFourList);

    const userData: UserSubmissionData = {
      ...formData,
      needs,
      buts
    };

    console.log('User submission data:', userData);
    nextStep();
  };

  useEffect(() => {
    const currentStepEl = stepRefs.current[currentStep];
    if (currentStepEl && currentStep === 0 && shouldAnimateStep(0)) {
      gsap.fromTo(currentStepEl, { scale: 0.8, opacity: 0, y: 30 }, { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' });
    }
  }, [currentStep]);

  const setStepRef = (index: number) => (el: HTMLDivElement | null) => {
    stepRefs.current[index] = el;
  };

  const handleStep2Selection = (id: string) => {
    if (!isAnimating) {
      setSelectedOptionsStep2(prev => {
        if (prev.includes(id)) {
          return prev.filter(item => item !== id);
        } else {
          return [...prev, id];
        }
      });
    }
  };

  const handleStep3Selection = (id: string) => {
    if (!isAnimating) {
      setSelectedOptionsStep3(prev => {
        if (prev.includes(id)) {
          return prev.filter(item => item !== id);
        } else {
          return [...prev, id];
        }
      });
    }
  };

  return (
    <FadeIn direction="up" delay={0.2} distance={40} duration={0.8} className="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2">
      <div ref={containerRef}>
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