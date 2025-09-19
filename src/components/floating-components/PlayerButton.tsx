import { Button } from '../ui/button';
import audioWaveIcon from "../../assets/icons/audio-wave-icon.svg"

export default function PlayerButton() {
  return (
    <div className="p-4 mb-5 flex items-center justify-between min-w-[96px] min-h-[72px] bg-[#121212] border border-white/10 rounded-2xl fixed bottom-3 right-36">
      <Button variant="customBtn" className="text-neutral-300 bg-[#262626] border-none flex items-center justify-center text-base font-normal leading-7 w-full">
        
      </Button>
    </div>
  );
}
