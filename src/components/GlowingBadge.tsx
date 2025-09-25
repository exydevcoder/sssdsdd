import { ReactNode } from "react";
import { Badge } from "./ui/badge";
import { GlowingEffect } from "./ui/glowing-effect";

type GlowingBadgeProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function GlowingBadge({ children, className, containerClassName }: GlowingBadgeProps) {
  return (
    <div className={`relative rounded-[6px] ${containerClassName}`}>
      <GlowingEffect
        blur={0}
        borderWidth={2}
        spread={50}
        glow={true}
        disabled={false}
        proximity={0}
        inactiveZone={0.01}
      />
      <Badge variant="customBadge" className={className}>
        {children}
      </Badge>
    </div>
  );
}
