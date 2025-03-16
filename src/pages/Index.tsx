
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
