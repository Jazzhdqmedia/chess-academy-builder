
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Trophy, Settings } from "lucide-react";
import { useAcademy } from "@/context/AcademyContext";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { academyName, logo } = useAcademy();
  const location = useLocation();
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled || mobileMenuOpen ? "bg-chess-dark/80 backdrop-blur-sm shadow-lg py-2" : "bg-transparent py-4"
      )}
    >
      <div className="chess-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 text-chess-ivory">
            {logo ? (
              <img src={logo} alt={academyName} className="h-10 w-auto" />
            ) : (
              <Trophy className="h-8 w-8 text-chess-gold" />
            )}
            <span className="text-xl font-serif font-medium tracking-tight">
              {academyName}
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <a href="#about" className="nav-link">About</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <Link to="/admission" className="nav-link">Admission</Link>
            <Link 
              to={isAdminLoggedIn ? "/settings" : "/admin-login"}
              className="flex items-center space-x-1 nav-link"
            >
              <Settings className="h-4 w-4" />
              <span>Admin</span>
            </Link>
          </div>
          
          <button 
            className="md:hidden p-2 focus:outline-none text-chess-ivory"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link-mobile">Home</Link>
              <a href="#about" className="nav-link-mobile">About</a>
              <a href="#gallery" className="nav-link-mobile">Gallery</a>
              <Link to="/admission" className="nav-link-mobile">Admission</Link>
              <Link 
                to={isAdminLoggedIn ? "/settings" : "/admin-login"}
                className="flex items-center space-x-2 nav-link-mobile"
              >
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
