
import React from "react";
import { ChessKnight } from "lucide-react";
import { useAcademy } from "@/context/AcademyContext";

const Hero: React.FC = () => {
  const { academyName } = useAcademy();

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background chessboard pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-chess-pattern"></div>
      
      {/* Floating chess pieces decoration */}
      <div className="absolute -top-20 -right-20 opacity-5 animate-chess-float">
        <ChessKnight className="w-96 h-96 text-chess-mahogany" />
      </div>
      <div className="absolute -bottom-20 -left-20 opacity-5 animate-chess-float animation-delay-1000">
        <ChessKnight className="w-96 h-96 text-chess-charcoal" />
      </div>
      
      <div className="chess-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase rounded-full bg-chess-mahogany/10 text-chess-mahogany">
              Welcome to
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up">
            {academyName}
          </h1>
          <p className="text-lg md:text-xl text-chess-charcoal/80 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "150ms" }}>
            Elevate your game with expert instruction from experienced masters.
            Our academy offers personalized training programs for players of all levels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <a href="#about" className="chess-btn-primary px-6 py-3">
              Discover More
            </a>
            <a href="#gallery" className="chess-btn-outline px-6 py-3">
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
