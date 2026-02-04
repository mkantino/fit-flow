import { cn } from "@/lib/utils";

interface EffortSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function EffortSlider({ value, onChange }: EffortSliderProps) {
  const percentage = (value / 10) * 100;

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Low effort</span>
        <span>High effort</span>
      </div>
      <div className="relative">
        <div className="effort-track">
          <div 
            className="effort-fill transition-all duration-200" 
            style={{ width: `${percentage}%` }} 
          />
        </div>
        <input
          type="range"
          min="0"
          max="10"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={cn(
            "absolute inset-0 w-full opacity-0 cursor-pointer"
          )}
        />
        {/* Thumb indicator */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 pointer-events-none transition-all duration-200"
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>
    </div>
  );
}
