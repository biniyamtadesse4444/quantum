import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  distance?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.65,
  distance = 28,
}: RevealProps) {
  const { ref, visible } = useScrollReveal();

  const translateMap = {
    up: `0, ${distance}px`,
    down: `0, -${distance}px`,
    left: `${distance}px, 0`,
    right: `-${distance}px, 0`,
  };

  return (
    <div
      ref={ref}
      className={cn("transition-[transform,opacity] ease-out will-change-transform", className)}
      style={{
        transform: visible ? "translate(0, 0)" : `translate(${translateMap[direction]})`,
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
