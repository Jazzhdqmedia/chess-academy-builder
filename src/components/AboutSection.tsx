
import React from "react";
import { useAcademy } from "@/context/AcademyContext";
import { GraduationCap, ChessPawn, Target, Book, User } from "lucide-react";

const AboutSection: React.FC = () => {
  const { masterInfo } = useAcademy();

  return (
    <section id="about" className="py-20 bg-chess-light/40 scroll-mt-20">
      <div className="chess-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-chess-gold/20 text-chess-mahogany">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">Meet Our Chess Master</h2>
          <div className="w-16 h-1 bg-chess-mahogany/30 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-serif mb-4">{masterInfo.name}</h3>
            <p className="text-chess-charcoal/80 mb-6">{masterInfo.bio}</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-chess-gold/20 p-2 rounded-lg mr-4">
                  <GraduationCap className="h-5 w-5 text-chess-mahogany" />
                </div>
                <div>
                  <h4 className="font-medium">Expert Instruction</h4>
                  <p className="text-sm text-chess-charcoal/70">Personalized training approaches for players of all skill levels</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-chess-gold/20 p-2 rounded-lg mr-4">
                  <Target className="h-5 w-5 text-chess-mahogany" />
                </div>
                <div>
                  <h4 className="font-medium">Tournament Preparation</h4>
                  <p className="text-sm text-chess-charcoal/70">Strategic guidance and practice for competitive play</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-chess-gold/20 p-2 rounded-lg mr-4">
                  <Book className="h-5 w-5 text-chess-mahogany" />
                </div>
                <div>
                  <h4 className="font-medium">Comprehensive Curriculum</h4>
                  <p className="text-sm text-chess-charcoal/70">From opening theory to endgame mastery</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {masterInfo.image ? (
                <img 
                  src={masterInfo.image} 
                  alt={masterInfo.name}
                  className="rounded-lg object-cover w-full max-w-md h-80 md:h-96 shadow-lg" 
                />
              ) : (
                <div className="rounded-lg bg-chess-charcoal/5 border border-chess-charcoal/10 w-full max-w-md h-80 md:h-96 flex flex-col items-center justify-center">
                  <User className="w-20 h-20 text-chess-charcoal/20 mb-4" />
                  <p className="text-chess-charcoal/40 text-sm">Master Image</p>
                </div>
              )}
              
              {/* Decorative element */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-chess-gold/10 rounded-lg -z-10"></div>
              <div className="absolute -top-5 -left-5 w-20 h-20 border border-chess-charcoal/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
