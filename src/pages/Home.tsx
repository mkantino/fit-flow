import { MobileFrame } from "@/components/layout/MobileFrame";
import { GlassCard } from "@/components/ui/GlassCard";
import { useNavigate } from "react-router-dom";
import { Dumbbell, Users } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="px-6 py-12 flex flex-col min-h-screen screen-enter">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
            <Dumbbell className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome
          </h1>
          <p className="text-muted-foreground text-sm">
            Choose your role to get started
          </p>
        </div>

        {/* Role Selection */}
        <div className="space-y-4 flex-1">
          <GlassCard
            glow
            className="cursor-pointer hover:bg-secondary/30 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <button
              onClick={() => navigate("/workout")}
              className="w-full text-left flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Dumbbell className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground">
                  I'm an Athlete
                </h2>
                <p className="text-sm text-muted-foreground">
                  Log workouts and get personalized feedback
                </p>
              </div>
            </button>
          </GlassCard>

          <GlassCard
            className="cursor-pointer hover:bg-secondary/30 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <button
              onClick={() => navigate("/coach")}
              className="w-full text-left flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground">
                  I'm a Coach
                </h2>
                <p className="text-sm text-muted-foreground">
                  Monitor athletes and send guidance
                </p>
              </div>
            </button>
          </GlassCard>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Your fitness journey, simplified
        </p>
      </div>
    </MobileFrame>
  );
};

export default Home;
