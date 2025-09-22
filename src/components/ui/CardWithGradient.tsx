
interface StatsCardProps {
  children: React.ReactNode;
}

export default function CardWithGradient({ children }: StatsCardProps) {
  return (
    <div className="relative">
      {/* Card content */}
      <div className="w-full">{children}</div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-500 to-primary rounded-t-2xl z-10"></div>

      {/* Left border */}
      <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-primary rounded-l-2xl z-10"></div>

      {/* Right border - only half height */}
      <div className="absolute top-0 right-0 h-1/2 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-primary rounded-tr-2xl z-10"></div>
    </div>
  );
}
