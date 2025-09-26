import { ReactNode } from "react";
import { GlowingEffect } from "./ui/glowing-effect";

type GlowingWrapperProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  // GlowingEffect props with sensible defaults
  blur?: number;
  borderWidth?: number;
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
  movementDuration?: number;
};

export default function GlowingWrapper({ 
  children, 
  className, 
  containerClassName,
  blur = 0,
  borderWidth = 2,
  spread = 50,
  glow = true,
  disabled = false,
  proximity = 0,
  inactiveZone = 0.01,
  movementDuration = 2
}: GlowingWrapperProps) {
  return (
    <div className={`relative ${containerClassName || ''}`}>
      <GlowingEffect
        blur={blur}
        borderWidth={borderWidth}
        spread={spread}
        glow={glow}
        disabled={disabled}
        proximity={proximity}
        inactiveZone={inactiveZone}
        movementDuration={movementDuration}
      />
      <div className={className}>
        {children}
      </div>
    </div>
  );
}