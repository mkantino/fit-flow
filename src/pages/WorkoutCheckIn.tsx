import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { TapButton } from "@/components/ui/TapButton";
import { EffortSlider } from "@/components/ui/EffortSlider";
import { MobileFrame } from "@/components/layout/MobileFrame";
import { useNavigate } from "react-router-dom";

type FeelingOption = "easy" | "normal" | "hard" | "pain" | null;

const WorkoutCheckIn = () => {
  const navigate = useNavigate();
  const [feeling, setFeeling] = useState<FeelingOption>(null);
  const [effort, setEffort] = useState(5);
  const [notes, setNotes] = useState("");

  const feelingOptions: { value: FeelingOption; label: string }[] = [
    { value: "easy", label: "Easy" },
    { value: "normal", label: "Normal" },
    { value: "hard", label: "Hard" },
    { value: "pain", label: "Pain / Discomfort" },
  ];

  const handleSubmit = () => {
    navigate("/feedback");
  };

  return (
    <MobileFrame>
      <div className="px-4 py-8 space-y-8 screen-enter">
        {/* Header */}
        <div className="text-center space-y-2 pt-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Daily Check-in
          </p>
          <h1 className="text-2xl font-bold text-foreground leading-tight">
            How did your workout<br />feel today?
          </h1>
        </div>

        {/* Main card */}
        <GlassCard glow className="space-y-6">
          {/* Quick tap options */}
          <div className="space-y-3">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Overall feeling
            </label>
            <div className="flex flex-wrap gap-2">
              {feelingOptions.map((option) => (
                <TapButton
                  key={option.value}
                  label={option.label}
                  active={feeling === option.value}
                  onClick={() => setFeeling(option.value)}
                />
              ))}
            </div>
          </div>

          {/* Effort slider */}
          <div className="space-y-3">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Effort level
            </label>
            <EffortSlider value={effort} onChange={setEffort} />
          </div>

          {/* Notes input */}
          <div className="space-y-3">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Quick notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Felt strong on squats, tight hamstring..."
              className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-1 focus:ring-primary/50"
              rows={2}
            />
          </div>
        </GlassCard>

        {/* CTA */}
        <PrimaryButton onClick={handleSubmit}>
          View Feedback
        </PrimaryButton>

        {/* Subtle footer */}
        <p className="text-center text-xs text-muted-foreground">
          Your data helps personalize your training
        </p>
      </div>
    </MobileFrame>
  );
};

export default WorkoutCheckIn;
