
import React, { createContext, useContext, useState, useEffect } from "react";

interface AcademyContextType {
  academyName: string;
  setAcademyName: (name: string) => void;
  logo: string | null;
  setLogo: (logo: string | null) => void;
  masterInfo: {
    name: string;
    bio: string;
    image: string | null;
  };
  setMasterInfo: (info: {
    name: string;
    bio: string;
    image: string | null;
  }) => void;
  galleryImages: string[];
  addGalleryImage: (image: string) => void;
  removeGalleryImage: (index: number) => void;
}

const AcademyContext = createContext<AcademyContextType | undefined>(undefined);

export const AcademyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize state with localStorage values or defaults
  const [academyName, setAcademyName] = useState<string>(() => {
    const saved = localStorage.getItem("academyName");
    return saved || "Chess Excellence Academy";
  });

  const [logo, setLogo] = useState<string | null>(() => {
    const saved = localStorage.getItem("academyLogo");
    return saved;
  });

  const [masterInfo, setMasterInfo] = useState<{
    name: string;
    bio: string;
    image: string | null;
  }>(() => {
    const saved = localStorage.getItem("masterInfo");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Grandmaster Alexander Smith",
          bio: "International Grandmaster with over 20 years of teaching experience. Specializes in strategic thinking and endgame techniques.",
          image: null,
        };
  });

  const [galleryImages, setGalleryImages] = useState<string[]>(() => {
    const saved = localStorage.getItem("galleryImages");
    return saved ? JSON.parse(saved) : [];
  });

  // Update localStorage when state changes
  useEffect(() => {
    localStorage.setItem("academyName", academyName);
  }, [academyName]);

  useEffect(() => {
    if (logo) {
      localStorage.setItem("academyLogo", logo);
    } else {
      localStorage.removeItem("academyLogo");
    }
  }, [logo]);

  useEffect(() => {
    localStorage.setItem("masterInfo", JSON.stringify(masterInfo));
  }, [masterInfo]);

  useEffect(() => {
    localStorage.setItem("galleryImages", JSON.stringify(galleryImages));
  }, [galleryImages]);

  const addGalleryImage = (image: string) => {
    setGalleryImages((prev) => [...prev, image]);
  };

  const removeGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <AcademyContext.Provider
      value={{
        academyName,
        setAcademyName,
        logo,
        setLogo,
        masterInfo,
        setMasterInfo,
        galleryImages,
        addGalleryImage,
        removeGalleryImage,
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
};

export const useAcademy = (): AcademyContextType => {
  const context = useContext(AcademyContext);
  if (context === undefined) {
    throw new Error("useAcademy must be used within an AcademyProvider");
  }
  return context;
};
