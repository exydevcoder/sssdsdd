'use client';
import Image from 'next/image';
import { Button } from '../../ui/button';
import { LeftArrowIcon, ProgressStepThreeIcon } from '../../icon';
import CloseButton from './CloseButton';

export default function TellMeYourNeed() {
  const stepThreList = [];

  return (
    <>
      {/* default step */}
      <div className="p-1.5 pl-4 mb-5 hidden items-center justify-between w-[279px] min-h-[52px] bg-[#121212] border border-white/10 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
        <p className="text-neutral-300 text-nowrap text-base font-normal leading-7">Tell me about your needs</p>
        {/* this close icon image to go back to default step */}

        <CloseButton />
      </div>
      {/* Second step */}
      <div className="p-6 mb-5 hidden flex-col items-center justify-between max-w-[450px] min-h-[100px] bg-[#121212] border border-white/10 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
        <div className="text-white text-xl font-medium leading-7">
          <p>Welcome 👋 I’m Olawale</p>
          <p>To save you time, tell me a bit about your needs so we can focus on the right things</p>
          {/* button to go to next step */}
          <Button variant="customBtn" className="mt-4">
            Yeap! No Problem
          </Button>
        </div>

        {/* this close icon image to go back to default step */}

        <CloseButton />
      </div>

      {/* Third step */}
      <div className="p-6 mb-5 flex flex-col items-center justify-between max-w-[491px] min-h-[100px] bg-[#121212] border border-white/10 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col gap-6">
          <p className="text-white text-xl font-medium leading-7">I need...</p>
          {/* list to select from  */}
          <div className="border flex flex-col gap-6 w-full">
            <Button className="flex items-center gap-6 text-stone-500 text-base font-normal leading-5">
              <span>01</span>
              <span>to design my app or website so it’s simple and easy to use for our target audience</span>
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <button className="cta-btn">
              {/* button to go to prev step */}
              <LeftArrowIcon />
            </button>
            <button className="cta-btn">
              <ProgressStepThreeIcon />
            </button>
          </div>
        </div>

        {/* this close icon image to go back to default step */}

        <CloseButton />
      </div>
    </>
  );
}
