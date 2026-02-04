import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function PrimaryButton({ children, onClick, className, disabled }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full py-4 px-6 rounded-2xl font-semibold text-base",
        "bg-primary text-primary-foreground",
        "transition-all duration-300",
        "hover:opacity-90 active:scale-[0.98]",
        "shadow-lg shadow-primary/30",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
