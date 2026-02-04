import { GlassCard } from "@/components/ui/GlassCard";
import { MobileFrame } from "@/components/layout/MobileFrame";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";

interface AthleteCard {
  id: string;
  name: string;
  summary: string;
  needsAttention: boolean;
  lastActivity: string;
}

const mockAthletes: AthleteCard[] = [
  {
    id: "1",
    name: "Alex Chen",
    summary: "Reported pain in lower back after deadlifts",
    needsAttention: true,
    lastActivity: "2h ago",
  },
  {
    id: "2",
    name: "Jordan Smith",
    summary: "Completed strength session, felt strong",
    needsAttention: false,
    lastActivity: "4h ago",
  },
  {
    id: "3",
    name: "Sam Williams",
    summary: "Missed planned cardio, feeling fatigued",
    needsAttention: true,
    lastActivity: "6h ago",
  },
  {
    id: "4",
    name: "Casey Martinez",
    summary: "Hit new PR on bench press, great session",
    needsAttention: false,
    lastActivity: "1d ago",
  },
  {
    id: "5",
    name: "Riley Johnson",
    summary: "Light recovery session completed",
    needsAttention: false,
    lastActivity: "1d ago",
  },
];

const CoachOverview = () => {
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
          <span className="text-sm">Athlete View</span>
        </button>

        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Coach Dashboard
          </p>
          <h1 className="text-2xl font-bold text-foreground">
            Your Athletes
          </h1>
          <p className="text-sm text-muted-foreground">
            {mockAthletes.filter(a => a.needsAttention).length} need attention
          </p>
        </div>

        {/* Athletes list */}
        <div className="space-y-3">
          {mockAthletes.map((athlete, index) => (
            <GlassCard
              key={athlete.id}
              glow={athlete.needsAttention}
              className="animate-fade-up cursor-pointer hover:bg-secondary/30 transition-colors"
              style={{ animationDelay: `${index * 0.05}s` } as React.CSSProperties}
            >
              <div
                onClick={() => navigate(`/coach/message/${athlete.id}`)}
                className="flex items-start gap-4"
              >
                {/* Status indicator */}
                <div className="pt-1">
                  <div
                    className={
                      athlete.needsAttention
                        ? "status-dot-alert"
                        : "status-dot-normal"
                    }
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground text-sm">
                      {athlete.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {athlete.lastActivity}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {athlete.summary}
                  </p>
                </div>

                {/* Action hint */}
                <div className="flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </MobileFrame>
  );
};

export default CoachOverview;
