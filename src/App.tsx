import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkoutCheckIn from "./pages/WorkoutCheckIn";
import FeedbackView from "./pages/FeedbackView";
import CoachOverview from "./pages/CoachOverview";
import CoachMessage from "./pages/CoachMessage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* Athlete Flow */}
          <Route path="/workout" element={<WorkoutCheckIn />} />
          <Route path="/feedback" element={<FeedbackView />} />
          
          {/* Coach Flow */}
          <Route path="/coach" element={<CoachOverview />} />
          <Route path="/coach/message/:athleteId" element={<CoachMessage />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
