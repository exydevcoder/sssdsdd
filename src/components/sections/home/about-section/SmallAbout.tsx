import Image from 'next/image';
import smallImg from '../../../../assets/small-image.png';

export default function SmallAbout() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10">
        <Image src={smallImg} width={40} height={40} className="object-cover object-top rounded-sm" alt="Olawale profile picture" priority />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-white text-base font-medium leading-none">Product Designer</p>
        <p className="text-stone-500 text-[10px] font-medium leading-none">Olawale Timothy Morenikeji</p>
      </div>
    </div>
  );
}
