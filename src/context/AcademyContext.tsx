
import React, { createContext, useContext, useState, useEffect } from "react";

interface Program {
  id: string;
  title: string;
  description: string;
}

interface ContactInfo {
  address: string;
  city: string;
  zipCode: string;
  email: string;
  phone: string;
}

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
  programs: Program[];
  addProgram: (program: Program) => void;
  updateProgram: (id: string, program: Partial<Program>) => void;
  removeProgram: (id: string) => void;
  contactInfo: ContactInfo;
  updateContactInfo: (info: Partial<ContactInfo>) => void;
  googleFormUrl: string;
  setGoogleFormUrl: (url: string) => void;
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

  const [programs, setPrograms] = useState<Program[]>(() => {
    const saved = localStorage.getItem("programs");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: "beginners",
            title: "Beginners",
            description: "Introduction to chess fundamentals and basic strategies.",
          },
          {
            id: "intermediate",
            title: "Intermediate",
            description: "Advanced tactics and positional play for experienced players.",
          },
          {
            id: "advanced",
            title: "Advanced",
            description: "Tournament preparation and master-level strategies.",
          },
          {
            id: "private",
            title: "Private Lessons",
            description: "One-on-one coaching tailored to your specific needs.",
          },
        ];
  });

  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem("contactInfo");
    return saved
      ? JSON.parse(saved)
      : {
          address: "123 Chess Street",
          city: "New York, NY",
          zipCode: "10001",
          email: "info@chessacademy.com",
          phone: "(123) 456-7890",
        };
  });

  const [googleFormUrl, setGoogleFormUrl] = useState<string>(() => {
    const saved = localStorage.getItem("googleFormUrl");
    return saved || "";
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

  useEffect(() => {
    localStorage.setItem("programs", JSON.stringify(programs));
  }, [programs]);

  useEffect(() => {
    localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
  }, [contactInfo]);

  useEffect(() => {
    localStorage.setItem("googleFormUrl", googleFormUrl);
  }, [googleFormUrl]);

  const addGalleryImage = (image: string) => {
    setGalleryImages((prev) => [...prev, image]);
  };

  const removeGalleryImage = (index: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const addProgram = (program: Program) => {
    setPrograms((prev) => [...prev, program]);
  };

  const updateProgram = (id: string, updatedProgram: Partial<Program>) => {
    setPrograms((prev) =>
      prev.map((program) =>
        program.id === id ? { ...program, ...updatedProgram } : program
      )
    );
  };

  const removeProgram = (id: string) => {
    setPrograms((prev) => prev.filter((program) => program.id !== id));
  };

  const updateContactInfo = (info: Partial<ContactInfo>) => {
    setContactInfo((prev) => ({ ...prev, ...info }));
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
        programs,
        addProgram,
        updateProgram,
        removeProgram,
        contactInfo,
        updateContactInfo,
        googleFormUrl,
        setGoogleFormUrl,
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
