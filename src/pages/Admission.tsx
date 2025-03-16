
import React from "react";
import { useAcademy } from "@/context/AcademyContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Admission: React.FC = () => {
  const { googleFormUrl } = useAcademy();

  // Function to transform a Google Form URL into an embed URL
  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    
    // Handle already embedded URLs
    if (url.includes("/viewform") && !url.includes("embedded=true")) {
      // Replace viewform with viewform?embedded=true
      return url.replace("/viewform", "/viewform?embedded=true");
    }
    
    return url;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="chess-container">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif mb-4">Admission</h1>
            <p className="text-chess-charcoal/70 max-w-2xl mx-auto">
              Join our chess academy by filling out the application form below. We'll review your application and contact you with next steps.
            </p>
          </div>

          {googleFormUrl ? (
            <div className="bg-white rounded-lg shadow-sm border border-chess-charcoal/10 overflow-hidden">
              <iframe
                src={getEmbedUrl(googleFormUrl)}
                title="Admission Form"
                className="w-full min-h-[600px]"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading form...
              </iframe>
            </div>
          ) : (
            <div className="text-center py-16 bg-chess-light/30 rounded-lg border border-dashed border-chess-charcoal/20">
              <h3 className="text-xl font-medium mb-2">No Form Available</h3>
              <p className="text-chess-charcoal/70">
                The admission form has not been set up yet. Please check back later or contact us directly.
              </p>
              <p className="mt-4 text-sm text-chess-charcoal/60">
                (Administrators: Please add a Google Form URL in the Settings page)
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admission;
