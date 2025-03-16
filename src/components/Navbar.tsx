
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChessKnight, Settings } from "lucide-react";
import { useAcademy } from "@/context/AcademyContext";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { academyName, logo } = useAcademy();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        scrolled
          ? "bg-chess-ivory/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="chess-container">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 transition-opacity hover:opacity-80"
          >
            {logo ? (
              <img src={logo} alt={academyName} className="h-10 w-auto" />
            ) : (
              <ChessKnight className="h-8 w-8 text-chess-mahogany" />
            )}
            <span className="text-xl font-serif font-medium tracking-tight">
              {academyName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium chess-transition hover:text-chess-mahogany",
                location.pathname === "/" && "text-chess-mahogany"
              )}
            >
              Home
            </Link>
            <a
              href="#about"
              className="text-sm font-medium chess-transition hover:text-chess-mahogany"
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium chess-transition hover:text-chess-mahogany"
            >
              Gallery
            </a>
            <Link
              to="/settings"
              className="inline-flex items-center text-sm font-medium chess-transition hover:text-chess-mahogany"
            >
              <Settings className="mr-1 h-4 w-4" />
              Settings
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden chess-transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={cn(
                  "text-base chess-transition hover:text-chess-mahogany px-2 py-1",
                  location.pathname === "/" && "text-chess-mahogany"
                )}
              >
                Home
              </Link>
              <a
                href="#about"
                className="text-base chess-transition hover:text-chess-mahogany px-2 py-1"
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-base chess-transition hover:text-chess-mahogany px-2 py-1"
              >
                Gallery
              </a>
              <Link
                to="/settings"
                className={cn(
                  "inline-flex items-center text-base chess-transition hover:text-chess-mahogany px-2 py-1",
                  location.pathname === "/settings" && "text-chess-mahogany"
                )}
              >
                <Settings className="mr-1 h-4 w-4" />
                Settings
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
