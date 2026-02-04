import { cn } from "@/lib/utils";

interface TapButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function TapButton({ label, active = false, onClick }: TapButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        active ? "tap-button-active" : "tap-button"
      )}
    >
      {label}
    </button>
  );
}
