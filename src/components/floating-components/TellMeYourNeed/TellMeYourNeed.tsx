'use client';
import CloseButton from './CloseButton';

export default function TellMeYourNeed() {

  return (
    <>
      {/* default step */}
      <div className="p-1.5 pl-4 mb-5 flex items-center justify-between w-[279px] min-h-[52px] bg-[#121212] border border-white/10 rounded-2xl fixed bottom-3 left-1/2 transform -translate-x-1/2">
        <p className="text-neutral-300 text-nowrap text-base font-normal leading-7">Tell me about your needs</p>
        {/* this close icon image to go back to default step */}
        <div className="w-full flex items-end justify-end">
          <CloseButton />
        </div>
      </div>
    </>
  );
}
