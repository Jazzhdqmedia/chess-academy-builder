
import React from "react";
import { useAcademy } from "@/context/AcademyContext";
import { Image } from "lucide-react";

const GallerySection: React.FC = () => {
  const { galleryImages } = useAcademy();

  return (
    <section id="gallery" className="py-20 scroll-mt-20">
      <div className="chess-container">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-chess-light text-chess-mahogany">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">Academy Moments</h2>
          <div className="w-16 h-1 bg-chess-mahogany/30 rounded-full"></div>
          <p className="max-w-2xl mt-4 text-chess-charcoal/70">
            Glimpses of learning, competition, and achievement from our academy
          </p>
        </div>

        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chess-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-chess-ivory">
                    <p className="font-medium">Image {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="chess-card flex flex-col items-center justify-center py-16 bg-chess-light/20 border-dashed">
            <Image className="h-16 w-16 text-chess-charcoal/20 mb-4" />
            <h3 className="text-xl font-serif mb-2">No Images Yet</h3>
            <p className="text-chess-charcoal/60 text-center max-w-md mb-6">
              Add images through the settings page to showcase your academy
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
