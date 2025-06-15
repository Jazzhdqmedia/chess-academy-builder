
import React from "react";
import { useAcademy } from "@/context/AcademyContext";
import ChessBackground from "./ChessBackground";

const Hero: React.FC = () => {
  const { academyName } = useAcademy();

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-chess-charcoal">
      {/* 3D Chess Background */}
      <ChessBackground />
      
      {/* Enhanced chessboard pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-chess-pattern"></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-chess-charcoal/80 via-transparent to-chess-charcoal/20"></div>
      
      <div className="chess-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-wider uppercase rounded-full bg-chess-dark/50 text-chess-ivory border border-chess-gold/30 backdrop-blur-sm">
              Welcome to
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-up text-chess-ivory font-serif drop-shadow-2xl">
            {academyName}
          </h1>
          <p className="text-lg md:text-xl text-chess-light mb-8 max-w-2xl mx-auto animate-fade-up leading-relaxed drop-shadow-lg" style={{ animationDelay: "150ms" }}>
            Elevate your game with expert instruction from experienced masters.
            Our academy offers personalized training programs for players of all levels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <a href="#about" className="group chess-btn-primary px-8 py-4">
              <span className="font-medium">Discover More</span>
            </a>
            <a href="#gallery" className="group chess-btn-outline px-8 py-4">
              <span className="font-medium">View Gallery</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
