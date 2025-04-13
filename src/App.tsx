
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DonationsPage from "./pages/DonationsPage";
import RequestPage from "./pages/RequestPage";
import JoinDonorPage from "./pages/JoinDonorPage";
import JoinNGOPage from "./pages/JoinNGOPage";
import NotFound from "./pages/NotFound";
import HowItWorksPage from "./pages/HowItWorksPage";
import AboutPage from "./pages/AboutPage";
import FindMatchDashboard from "./pages/FindMatchDashboard";
import DonateItemsDashboard from "./pages/DonateItemsDashboard";
import CoordinatePickupDashboard from "./pages/CoordinatePickupDashboard";
import TrackImpactDashboard from "./pages/TrackImpactDashboard";
import DonorsAndChatPage from "./pages/DonorsAndChatPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/join-donor" element={<JoinDonorPage />} />
          <Route path="/join-ngo" element={<JoinNGOPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/find-match" element={<FindMatchDashboard />} />
          <Route path="/donate-items" element={<DonateItemsDashboard />} />
          <Route path="/coordinate-pickup" element={<CoordinatePickupDashboard />} />
          <Route path="/track-impact" element={<TrackImpactDashboard />} />
          <Route path="/community" element={<DonorsAndChatPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
