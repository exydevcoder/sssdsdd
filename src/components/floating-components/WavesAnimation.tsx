export default function WavesAnimation() {
  return (
    <div className="flex items-end justify-center gap-[6px] h-[80px]">
      {/* Left Short */}
      <div className="w-[10px] h-[30px] bg-black rounded-full" />
      {/* Left Tall */}
      <div className="w-[10px] h-[70px] bg-black rounded-full" />
      {/* Middle Medium */}
      <div className="w-[10px] h-[50px] bg-black rounded-full" />
      {/* Right Tall */}
      <div className="w-[10px] h-[70px] bg-black rounded-full" />
      {/* Right Short */}
      <div className="w-[10px] h-[50px] bg-black rounded-full" />
    </div>
  );
}
