import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background glow effect */}
      <div className="fixed inset-0 bg-glow animate-pulse-glow" />
      
      {/* Mobile container */}
      <div className="mobile-frame relative z-10">
        {children}
      </div>
    </div>
  );
}
