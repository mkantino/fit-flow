import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  style?: CSSProperties;
}

export function GlassCard({ children, className, glow = false, style }: GlassCardProps) {
  return (
    <div
      className={cn(
        glow ? "glass-card-glow" : "glass-card",
        "p-5",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
