
import React from "react";
import { Trophy, Crown, Flag, ChevronDown } from "lucide-react";
import { useAcademy } from "@/context/AcademyContext";

const Hero: React.FC = () => {
  const { academyName } = useAcademy();

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background chessboard pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-chess-pattern"></div>
      
      {/* Floating chess pieces decoration */}
      <div className="absolute -top-20 -right-20 opacity-5 animate-chess-float">
        <Trophy className="w-96 h-96 text-chess-mahogany" />
      </div>
      <div className="absolute -bottom-20 -left-20 opacity-5 animate-chess-float animation-delay-1000">
        <Trophy className="w-96 h-96 text-chess-charcoal" />
      </div>
      
      {/* Added more floating chess pieces */}
      <div className="absolute top-1/4 right-1/4 opacity-10 animate-chess-float" style={{ animationDelay: "1.5s" }}>
        <Crown className="w-24 h-24 text-chess-gold" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 opacity-10 animate-chess-float" style={{ animationDelay: "2s" }}>
        <Flag className="w-20 h-20 text-chess-mahogany" />
      </div>
      
      {/* Chess board decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-5 bg-chess-pattern rounded"></div>
      
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
          <div className="flex justify-center items-center animate-fade-up" style={{ animationDelay: "300ms" }}>
            <a href="#about" className="chess-btn-primary px-6 py-3 flex items-center gap-2">
              Discover More
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
