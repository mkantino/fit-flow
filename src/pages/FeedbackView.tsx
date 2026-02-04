import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { MobileFrame } from "@/components/layout/MobileFrame";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap, Heart, TrendingUp } from "lucide-react";

const FeedbackView = () => {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="px-4 py-8 space-y-6 screen-enter">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>

        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Your Feedback
          </p>
          <h1 className="text-2xl font-bold text-foreground">
            Session Summary
          </h1>
        </div>

        {/* Feedback Summary Card */}
        <GlassCard glow className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-semibold text-foreground">Analysis</h2>
          </div>
          <p className="text-secondary-foreground text-sm leading-relaxed">
            Great effort today! Your body handled the increased intensity well. 
            The workout felt challenging but sustainable — that's exactly where 
            you want to be for progressive gains without burnout.
          </p>
        </GlassCard>

        {/* Guidance Card */}
        <GlassCard className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <h2 className="font-semibold text-foreground">Next Step</h2>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4">
            <p className="text-sm font-medium text-foreground mb-1">
              Maintain intensity
            </p>
            <p className="text-xs text-muted-foreground">
              You're in a good rhythm. Keep this pace for the next 2-3 sessions 
              before considering any increases.
            </p>
          </div>
        </GlassCard>

        {/* Encouragement Card */}
        <GlassCard className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-semibold text-foreground">Keep Going</h2>
          </div>
          <p className="text-secondary-foreground text-sm leading-relaxed">
            Consistency beats perfection. You showed up today — that's what 
            matters most. Keep building momentum.
          </p>
        </GlassCard>

        {/* Navigation */}
        <div className="pt-4 space-y-3">
          <PrimaryButton onClick={() => navigate("/")}>
            Log Another Session
          </PrimaryButton>
          <button
            onClick={() => navigate("/coach")}
            className="w-full py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Switch to Coach View →
          </button>
        </div>
      </div>
    </MobileFrame>
  );
};

export default FeedbackView;
