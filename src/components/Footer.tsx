
import React from "react";
import { Link } from "react-router-dom";
import { ChessKnight, Settings, Instagram, Facebook, Twitter } from "lucide-react";
import { useAcademy } from "@/context/AcademyContext";

const Footer: React.FC = () => {
  const { academyName, logo } = useAcademy();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-chess-charcoal text-chess-ivory py-12">
      <div className="chess-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              {logo ? (
                <img src={logo} alt={academyName} className="h-10 w-auto invert" />
              ) : (
                <ChessKnight className="h-8 w-8 text-chess-gold" />
              )}
              <span className="text-xl font-serif font-medium">
                {academyName}
              </span>
            </Link>
            <p className="text-chess-ivory/70 text-sm">
              Providing exceptional chess instruction and fostering strategic thinking in players of all levels.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="text-chess-ivory/60 hover:text-chess-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-chess-ivory/60 hover:text-chess-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-chess-ivory/60 hover:text-chess-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-chess-ivory mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-chess-ivory/70 hover:text-chess-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#about" className="text-chess-ivory/70 hover:text-chess-gold transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-chess-ivory/70 hover:text-chess-gold transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <Link to="/settings" className="text-chess-ivory/70 hover:text-chess-gold transition-colors flex items-center">
                    <Settings className="mr-1 h-3 w-3" />
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-chess-ivory mb-4">Programs</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-chess-ivory/70 hover:text-chess-gold transition-colors">
                    Beginners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-chess-ivory/70 hover:text-chess-gold transition-colors">
                    Intermediate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-chess-ivory/70 hover:text-chess-gold transition-colors">
                    Advanced
                  </a>
                </li>
                <li>
                  <a href="#" className="text-chess-ivory/70 hover:text-chess-gold transition-colors">
                    Private Lessons
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-chess-ivory mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-chess-ivory/70">
                  123 Chess Street
                </li>
                <li className="text-chess-ivory/70">
                  New York, NY 10001
                </li>
                <li className="text-chess-ivory/70">
                  info@chessacademy.com
                </li>
                <li className="text-chess-ivory/70">
                  (123) 456-7890
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-chess-ivory/10 mt-12 pt-6 text-center text-sm text-chess-ivory/50">
          <p>© {year} {academyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
