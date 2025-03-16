
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Settings from "./pages/Settings";
import Admission from "./pages/Admission";
import NotFound from "./pages/NotFound";
import { AcademyProvider } from "./context/AcademyContext";

const queryClient = new QueryClient();

const App = () => {
  const isDevelopment = import.meta.env.DEV;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AcademyProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/admission" element={<Admission />} />
              {/* Settings route - only accessible in development mode */}
              <Route 
                path="/settings" 
                element={isDevelopment ? <Settings /> : <Navigate to="/" replace />} 
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AcademyProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
