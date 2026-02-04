import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { MobileFrame } from "@/components/layout/MobileFrame";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";

const athleteData: Record<string, { name: string; issue: string; suggestion: string }> = {
  "1": {
    name: "Alex Chen",
    issue: "Reported pain in lower back after deadlifts",
    suggestion:
      "Hey Alex — I saw your note about the lower back discomfort. Let's dial back the deadlift weight by 20% for the next session and focus on form. Try adding some cat-cow stretches before you lift. Let me know how it feels!",
  },
  "2": {
    name: "Jordan Smith",
    issue: "Completed strength session, felt strong",
    suggestion:
      "Nice work today, Jordan! Keep that energy going. You're ready to push a bit harder next time if it feels right.",
  },
  "3": {
    name: "Sam Williams",
    issue: "Missed planned cardio, feeling fatigued",
    suggestion:
      "Hey Sam — no worries about missing today. Listen to your body. Let's swap tomorrow's session for light mobility work and get you back on track feeling fresh.",
  },
  "4": {
    name: "Casey Martinez",
    issue: "Hit new PR on bench press, great session",
    suggestion:
      "That PR is huge, Casey! 🔥 Take pride in that. Rest up well tonight — you earned it.",
  },
  "5": {
    name: "Riley Johnson",
    issue: "Light recovery session completed",
    suggestion:
      "Good recovery work, Riley. Keep prioritizing these days — they're building your foundation for bigger gains.",
  },
};

const CoachMessage = () => {
  const navigate = useNavigate();
  const { athleteId } = useParams();
  const data = athleteData[athleteId || "1"];
  
  const [message, setMessage] = useState(data?.suggestion || "");
  const [sending, setSending] = useState(false);

  const handleSend = () => {
    setSending(true);
    setTimeout(() => {
      toast.success(`Message sent to ${data.name}!`);
      setSending(false);
      navigate("/coach");
    }, 1000);
  };

  if (!data) {
    return (
      <MobileFrame>
        <div className="px-4 py-8 text-center">
          <p className="text-muted-foreground">Athlete not found</p>
        </div>
      </MobileFrame>
    );
  }

  return (
    <MobileFrame>
      <div className="px-4 py-8 space-y-6 screen-enter">
        {/* Back button */}
        <button
          onClick={() => navigate("/coach")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Athletes</span>
        </button>

        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Send Message
          </p>
          <h1 className="text-2xl font-bold text-foreground">{data.name}</h1>
        </div>

        {/* Context card */}
        <GlassCard className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Latest update
          </p>
          <p className="text-sm text-secondary-foreground">{data.issue}</p>
        </GlassCard>

        {/* AI Suggestion */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Suggested message
            </p>
          </div>

          <GlassCard glow className="space-y-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent text-sm text-foreground resize-none focus:outline-none min-h-[120px] leading-relaxed"
              rows={5}
            />
          </GlassCard>
        </div>

        {/* Send button */}
        <PrimaryButton onClick={handleSend} disabled={sending || !message.trim()}>
          <span className="flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            {sending ? "Sending..." : "Send to Athlete"}
          </span>
        </PrimaryButton>

        {/* Hint */}
        <p className="text-center text-xs text-muted-foreground">
          Tap to edit the message before sending
        </p>
      </div>
    </MobileFrame>
  );
};

export default CoachMessage;
