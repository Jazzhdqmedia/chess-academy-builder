
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
  isLoading: boolean;
}

const AcademyContext = createContext<AcademyContextType | undefined>(undefined);

// Helper function to safely get from localStorage
const getFromLocalStorage = (key: string, defaultValue: any) => {
  try {
    if (typeof window === 'undefined') return defaultValue;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

// Helper function to safely set to localStorage
const setToLocalStorage = (key: string, value: any) => {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error saving ${key} to localStorage:`, error);
  }
};

export const AcademyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize state with default values first
  const [academyName, setAcademyNameState] = useState<string>("Chess Excellence Academy");
  const [logo, setLogoState] = useState<string | null>(null);
  const [masterInfo, setMasterInfoState] = useState<{
    name: string;
    bio: string;
    image: string | null;
  }>({
    name: "Grandmaster Alexander Smith",
    bio: "International Grandmaster with over 20 years of teaching experience. Specializes in strategic thinking and endgame techniques.",
    image: null,
  });
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [programs, setPrograms] = useState<Program[]>([
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
  ]);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    address: "123 Chess Street",
    city: "New York, NY",
    zipCode: "10001",
    email: "info@chessacademy.com",
    phone: "(123) 456-7890",
  });
  const [googleFormUrl, setGoogleFormUrlState] = useState<string>("");

  // Load data from localStorage on mount
  useEffect(() => {
    const loadData = () => {
      try {
        // Load academy name
        const savedAcademyName = localStorage.getItem("academyName");
        if (savedAcademyName) {
          setAcademyNameState(savedAcademyName);
        }

        // Load logo
        const savedLogo = localStorage.getItem("academyLogo");
        if (savedLogo) {
          setLogoState(savedLogo);
        }

        // Load master info
        const savedMasterInfo = getFromLocalStorage("masterInfo", null);
        if (savedMasterInfo) {
          setMasterInfoState(savedMasterInfo);
        }

        // Load gallery images
        const savedGalleryImages = getFromLocalStorage("galleryImages", []);
        setGalleryImages(savedGalleryImages);

        // Load programs
        const savedPrograms = getFromLocalStorage("programs", null);
        if (savedPrograms && savedPrograms.length > 0) {
          setPrograms(savedPrograms);
        }

        // Load contact info
        const savedContactInfo = getFromLocalStorage("contactInfo", null);
        if (savedContactInfo) {
          setContactInfo(savedContactInfo);
        }

        // Load Google Form URL
        const savedGoogleFormUrl = localStorage.getItem("googleFormUrl");
        if (savedGoogleFormUrl) {
          setGoogleFormUrlState(savedGoogleFormUrl);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading data from localStorage:", error);
        setIsLoading(false);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadData, 100);
    return () => clearTimeout(timer);
  }, []);

  // Custom setters that also update localStorage
  const setAcademyName = (name: string) => {
    setAcademyNameState(name);
    localStorage.setItem("academyName", name);
  };

  const setLogo = (logoUrl: string | null) => {
    setLogoState(logoUrl);
    if (logoUrl) {
      localStorage.setItem("academyLogo", logoUrl);
    } else {
      localStorage.removeItem("academyLogo");
    }
  };

  const setMasterInfo = (info: {
    name: string;
    bio: string;
    image: string | null;
  }) => {
    setMasterInfoState(info);
    setToLocalStorage("masterInfo", info);
  };

  const setGoogleFormUrl = (url: string) => {
    setGoogleFormUrlState(url);
    localStorage.setItem("googleFormUrl", url);
  };

  // Gallery functions
  const addGalleryImage = (image: string) => {
    const newImages = [...galleryImages, image];
    setGalleryImages(newImages);
    setToLocalStorage("galleryImages", newImages);
  };

  const removeGalleryImage = (index: number) => {
    const newImages = galleryImages.filter((_, i) => i !== index);
    setGalleryImages(newImages);
    setToLocalStorage("galleryImages", newImages);
  };

  // Program functions
  const addProgram = (program: Program) => {
    const newPrograms = [...programs, program];
    setPrograms(newPrograms);
    setToLocalStorage("programs", newPrograms);
  };

  const updateProgram = (id: string, updatedProgram: Partial<Program>) => {
    const newPrograms = programs.map((program) =>
      program.id === id ? { ...program, ...updatedProgram } : program
    );
    setPrograms(newPrograms);
    setToLocalStorage("programs", newPrograms);
  };

  const removeProgram = (id: string) => {
    const newPrograms = programs.filter((program) => program.id !== id);
    setPrograms(newPrograms);
    setToLocalStorage("programs", newPrograms);
  };

  // Contact info function
  const updateContactInfo = (info: Partial<ContactInfo>) => {
    const newContactInfo = { ...contactInfo, ...info };
    setContactInfo(newContactInfo);
    setToLocalStorage("contactInfo", newContactInfo);
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
        isLoading,
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
