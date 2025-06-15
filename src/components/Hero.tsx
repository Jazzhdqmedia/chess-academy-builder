
import React from "react";
import { Trophy } from "lucide-react";
import { useAcademy } from "@/context/AcademyContext";
import ChessBackground from "./ChessBackground";

const Hero: React.FC = () => {
  const { academyName } = useAcademy();

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-br from-chess-charcoal via-chess-dark to-chess-mahogany">
      {/* 3D Chess Background */}
      <ChessBackground />
      
      {/* Enhanced chessboard pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-chess-pattern"></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-chess-charcoal/30 via-transparent to-chess-charcoal/20"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute -top-20 -right-20 opacity-10 animate-chess-float">
        <Trophy className="w-96 h-96 text-chess-gold" />
      </div>
      <div className="absolute -bottom-20 -left-20 opacity-10 animate-chess-float animation-delay-1000">
        <Trophy className="w-96 h-96 text-chess-ivory" />
      </div>
      
      {/* Additional decorative chess squares */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-chess-gold/20 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-chess-ivory/20 rotate-12 animate-chess-pulse"></div>
      <div className="absolute top-2/3 left-1/6 w-8 h-8 bg-chess-mahogany/30 rotate-45 animate-chess-float"></div>
      
      <div className="chess-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-wider uppercase rounded-full bg-gradient-to-r from-chess-gold/20 to-chess-mahogany/20 text-chess-ivory border border-chess-gold/30 backdrop-blur-sm">
              Welcome to
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up text-chess-ivory font-serif bg-gradient-to-b from-chess-ivory to-chess-light bg-clip-text text-transparent drop-shadow-2xl">
            {academyName}
          </h1>
          <p className="text-lg md:text-xl text-chess-light/90 mb-8 max-w-2xl mx-auto animate-fade-up leading-relaxed drop-shadow-lg" style={{ animationDelay: "150ms" }}>
            Elevate your game with expert instruction from experienced masters.
            Our academy offers personalized training programs for players of all levels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <a href="#about" className="group chess-btn-primary px-8 py-4 bg-gradient-to-r from-chess-gold to-chess-mahogany hover:from-chess-mahogany hover:to-chess-gold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-chess-gold/50">
              <span className="font-medium">Discover More</span>
            </a>
            <a href="#gallery" className="group chess-btn-outline px-8 py-4 border-2 border-chess-ivory/50 text-chess-ivory hover:bg-chess-ivory/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-xl">
              <span className="font-medium">View Gallery</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
