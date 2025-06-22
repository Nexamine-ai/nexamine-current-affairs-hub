
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UPSC from "./pages/UPSC";
import CurrentAffairs from "./pages/CurrentAffairs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upsc" element={<UPSC />} />
          <Route path="/current-affairs" element={<CurrentAffairs />} />
          {/* Placeholder routes for future pages */}
          <Route path="/upsc/prelims" element={<NotFound />} />
          <Route path="/upsc/mains" element={<NotFound />} />
          <Route path="/upsc/mock-tests" element={<NotFound />} />
          <Route path="/upsc/interview" element={<NotFound />} />
          <Route path="/upsc/past-papers" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
