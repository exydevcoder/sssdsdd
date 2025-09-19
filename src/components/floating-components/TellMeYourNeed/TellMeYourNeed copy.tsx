'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../../ui/button';
import { LeftArrowIcon, ProgressStepFourIcon, ProgressStepThreeIcon, MsgIcon } from '../../icon';
import CloseButton from './CloseButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function TellMeYourNeed() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = default step, 1-5 for the steps

  const stepThreeList = [
    {
      id: '01',
      label: "to design my app or website so it's simple and easy to use for our target audience"
    },
    {
      id: '02',
      label: 'a logo & brand identity assets that represents our business and connects with our target audience'
    },
    {
      id: '03',
      label: 'a modern, responsive landing page or website built in Webflow, Framer, or Shopify for my business'
    },
    {
      id: '04',
      label: 'animations and motion graphics that bring our brand to life and connects with our target audience'
    },
    {
      id: '05',
      label: 'something else'
    }
  ];

  const stepFourList = [
    {
      id: '01',
      label: 'I need this ASAP.'
    },
    {
      id: '02',
      label: 'My budget is tight'
    },
    {
      id: '03',
      label: "I don't want it to feel generic"
    },
    {
      id: '04',
      label: "I can't change platform"
    },
    {
      id: '05',
      label: "I don't have brand guidelines"
    },
    {
      id: '06',
      label: 'I want to keep my logo & colors'
    },
    {
      id: '07',
      label: 'No but'
    }
  ];

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetToDefault = () => {
    setCurrentStep(0);
  };

  return (
    <>
      {/* default: Step 0 */}
      {currentStep === 0 && (
        <div className="p-1.5 pl-4 mb-5 flex items-center justify-between w-[279px] min-h-[52px] bg-[#121212] border border-white/10 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
          <p className="text-neutral-300 text-nowrap text-base font-normal leading-7">Tell me about your needs</p>
          <div className="w-full flex items-end justify-end">
            <button className="cta-btn" onClick={nextStep}>
              <MsgIcon />
            </button>
          </div>
        </div>
      )}

      {/* Step 1 */}
      {currentStep === 1 && (
        <div className="p-6 mb-5 flex flex-col items-center justify-between max-w-[450px] min-h-[100px] bg-[#121212] border border-emerald-300 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="text-white text-xl font-medium leading-7">
            <p>Welcome 👋 I'm Olawale</p>
            <p>To save you time, tell me a bit about your needs so we can focus on the right things</p>
            <Button variant="customBtn" className="mt-4" onClick={nextStep}>
              Yeap! No Problem
            </Button>
          </div>

          <div className="w-full flex items-end justify-end mt-6">
            <CloseButton onClick={resetToDefault} />
          </div>
        </div>
      )}

      {/* Step 2 */}
      {currentStep === 2 && (
        <div className="p-6 mb-5 flex flex-col items-center justify-between max-w-[491px] min-h-[100px] bg-[#121212] border border-emerald-300 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col gap-6 w-full">
            <p className="text-white text-xl font-medium leading-7">I need...</p>
            <div className="flex flex-col gap-6 w-full">
              {stepThreeList.map(list => (
                <button key={list.id} className="flex cursor-pointer bg-transparent text-left gap-6 text-stone-500 text-base font-normal leading-5 break-words whitespace-normal">
                  <span>{list.id}</span>
                  <span>{list.label}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <button className="cta-btn" onClick={prevStep}>
                <LeftArrowIcon />
              </button>
              <button className="cta-btn">
                <ProgressStepThreeIcon />
              </button>

              <div className="ml-auto flex items-center gap-4 group">
                <span className="text-white text-base font-normal leading-tight hidden group-hover:inline">Is that all?</span>

                <Button
                  variant="customBtn"
                  className="bg-[#262626] group-hover:bg-[#15251F] group-hover:border group-hover:border-[#6EE7B7]/20 max-w-max text-neutral-300 border border-[#686868]/12 shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)]"
                  onClick={nextStep}
                >
                  <span className="block group-hover:hidden">Continue</span>
                  <span className="hidden group-hover:block">Yeah! Continue</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full flex items-end justify-end mt-6">
            <CloseButton onClick={resetToDefault} />
          </div>
        </div>
      )}

      {/* Step 3 */}
      {currentStep === 3 && (
        <div className="p-6 mb-5 flex flex-col items-center justify-between min-w-[491px] min-h-[100px] bg-[#121212] border border-emerald-300 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col gap-6 w-full">
            <p className="text-white text-xl font-medium leading-7">But...</p>
            <div className="flex flex-col gap-6 w-full">
              {stepFourList.map(list => (
                <button key={list.id} className="flex cursor-pointer bg-transparent text-left gap-6 text-stone-500 text-base font-normal leading-5 break-words whitespace-normal">
                  <span>{list.id}</span>
                  <span>{list.label}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <button className="cta-btn" onClick={prevStep}>
                <LeftArrowIcon />
              </button>
              <button className="cta-btn">
                <ProgressStepFourIcon />
              </button>

              <div className="ml-auto flex items-center gap-4 group">
                <span className="text-white text-base font-normal leading-tight hidden group-hover:inline">Is that all?</span>

                <Button
                  variant="customBtn"
                  className="bg-[#262626] group-hover:bg-[#15251F] group-hover:border group-hover:border-[#6EE7B7]/20 max-w-max text-neutral-300 border border-[#686868]/12 shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)]"
                  onClick={nextStep}
                >
                  <span className="block group-hover:hidden">Continue</span>
                  <span className="hidden group-hover:block">Yeah! Continue</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full flex items-end justify-end mt-6">
            <CloseButton onClick={resetToDefault} />
          </div>
        </div>
      )}

      {/* Step 4 */}
      {currentStep === 4 && (
        <div className="p-6 mb-5 flex flex-col z-50 items-center justify-between min-w-[491px] min-h-[100px] bg-[#121212] border border-emerald-300 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col gap-6 w-full">
            <p className="max-w-[320px] text-white text-xl font-medium leading-7">Almost there! Tell me a bit about yourself to wrap it up.</p>
            <div className="flex flex-col gap-6 w-full">
              <Input
                type="text"
                placeholder="Your name"
                className="h-12 p-4 bg-neutral-900 text-[#6EE7B7] border border-white/10 rounded-2xl shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)] outline outline-offset-[-1px] outline-white/10 backdrop-blur-md
            placeholder:text-stone-500 text-base font-normal leading-tight"
              />
              <Input
                type="email"
                placeholder="Your email"
                className="h-12 p-4 bg-neutral-900 text-[#6EE7B7] border border-white/10 rounded-2xl shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)] outline outline-offset-[-1px] outline-white/10 backdrop-blur-md
            placeholder:text-stone-500 text-base font-normal leading-tight"
              />
              <Textarea
                placeholder="Any other thing? (Optional)"
                className="h-[172px] p-4 bg-neutral-900 text-[#6EE7B7] border border-white/10 rounded-2xl shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)] outline outline-offset-[-1px] outline-white/10 backdrop-blur-md
            placeholder:text-stone-500 text-base font-normal leading-tight"
              />
            </div>
            <div className="flex items-center gap-1">
              <button className="cta-btn" onClick={prevStep}>
                <LeftArrowIcon />
              </button>
              <button className="cta-btn">
                <ProgressStepFourIcon />
              </button>

              <div className="ml-auto flex items-center gap-4">
                <Button
                  variant="customBtn"
                  className="bg-[#262626] group-hover:bg-[#15251F] group-hover:border group-hover:border-[#6EE7B7]/20 max-w-max text-neutral-300 border border-[#686868]/12 shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.10)]"
                  onClick={nextStep}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full flex items-end justify-end mt-6">
            <CloseButton onClick={resetToDefault} />
          </div>
        </div>
      )}

      {/* Step 5 */}
      {currentStep === 5 && (
        <div className="p-6 mb-5 flex flex-col z-50 items-center justify-between max-w-[491px] bg-[#121212] border border-emerald-300 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col gap-6 w-full">
            <p className="lastStepStyle text-emerald-300 text-6xl font-medium leading-[128px]">Thank you 🙌</p>

            <p className='max-w-[443px] text-white text-xl font-medium leading-7"'>Allow me to review your request and get back to you shortly. See you in a bit</p>
          </div>

          <div className="w-full flex items-end justify-end mt-6">
            <CloseButton onClick={resetToDefault} />
          </div>
        </div>
      )}
    </>
  );
}
