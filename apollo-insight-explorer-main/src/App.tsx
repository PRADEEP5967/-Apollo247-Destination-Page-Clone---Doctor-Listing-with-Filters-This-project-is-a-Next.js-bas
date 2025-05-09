
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import UserDashboard from "./pages/UserDashboard";
import NotFound from "./pages/NotFound";
import BuyMedicines from "./pages/BuyMedicines";
import FindDoctors from "./pages/FindDoctors";
import LabTests from "./pages/LabTests";
import Membership from "./pages/Membership";
import HealthRecords from "./pages/HealthRecords";
import DiabetesReveals from "./pages/DiabetesReveals";
import BuyInsurance from "./pages/BuyInsurance";

const queryClient = new QueryClient();

// Initialize admin user if none exists
const initAdminUser = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.length === 0) {
    users.push({
      id: '1',
      name: 'Admin User',
      email: 'admin@apolloinsight.com',
      password: 'admin123', // In a real app, this would be hashed
      role: 'admin',
    });
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Admin user created');
  }
};

initAdminUser();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/buy-medicines" element={<BuyMedicines />} />
            <Route path="/find-doctors" element={<FindDoctors />} />
            <Route path="/lab-tests" element={<LabTests />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/health-records" element={<HealthRecords />} />
            <Route path="/diabetes-reveals" element={<DiabetesReveals />} />
            <Route path="/buy-insurance" element={<BuyInsurance />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
