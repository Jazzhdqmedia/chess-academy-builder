
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAcademy } from "@/context/AcademyContext";

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Simple admin credentials (in a real app, this would be handled securely)
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "chess2024";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdminLoggedIn", "true");
      toast({
        title: "Login successful",
        description: "Welcome to the admin panel",
      });
      navigate("/settings");
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-chess-light/20">
      <div className="max-w-md w-full mx-4">
        <div className="chess-card">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-chess-mahogany/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-chess-mahogany" />
            </div>
            
            <h1 className="text-2xl font-serif mb-2">Admin Login</h1>
            <p className="text-chess-charcoal/70">
              Access the academy settings panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="chess-input w-full"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="chess-input w-full pr-10"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-chess-charcoal/60 hover:text-chess-charcoal"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="chess-btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
              
              <button
                type="button"
                onClick={() => navigate("/")}
                className="chess-btn-outline w-full py-3"
              >
                Back to Home
              </button>
            </div>
          </form>

          <div className="mt-8 p-4 bg-chess-light/30 rounded-lg">
            <p className="text-xs text-chess-charcoal/60 text-center">
              <strong>Demo Credentials:</strong><br />
              Username: admin<br />
              Password: chess2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
