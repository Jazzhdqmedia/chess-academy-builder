
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, Upload, X, Camera, User } from "lucide-react";
import { useAcademy } from "@/context/AcademyContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import ProgramSettings from "@/components/ProgramSettings";
import ContactSettings from "@/components/ContactSettings";
import FormSettings from "@/components/FormSettings";

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    academyName,
    setAcademyName,
    logo,
    setLogo,
    masterInfo,
    setMasterInfo,
    galleryImages,
    addGalleryImage,
    removeGalleryImage
  } = useAcademy();

  const [nameInput, setNameInput] = useState(academyName);
  const [masterNameInput, setMasterNameInput] = useState(masterInfo.name);
  const [masterBioInput, setMasterBioInput] = useState(masterInfo.bio);
  const isDevelopment = import.meta.env.DEV;

  // Redirect if not in development mode
  useEffect(() => {
    if (!isDevelopment) {
      navigate('/');
      toast({
        title: "Access restricted",
        description: "Settings are only available in development mode",
        variant: "destructive"
      });
    }
  }, [isDevelopment, navigate, toast]);

  // Return early if not in development mode
  if (!isDevelopment) {
    return null;
  }

  const handleSaveAcademyInfo = () => {
    setAcademyName(nameInput);
    toast({
      title: "Settings saved",
      description: "Academy information has been updated successfully",
    });
  };

  const handleSaveMasterInfo = () => {
    setMasterInfo({
      ...masterInfo,
      name: masterNameInput,
      bio: masterBioInput,
    });
    toast({
      title: "Master info saved",
      description: "Master information has been updated successfully",
    });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setLogo(event.target.result as string);
          toast({
            title: "Logo uploaded",
            description: "Your academy logo has been updated",
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    toast({
      title: "Logo removed",
      description: "Your academy logo has been removed",
    });
  };

  const handleMasterImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setMasterInfo({
            ...masterInfo,
            image: event.target.result as string,
          });
          toast({
            title: "Image uploaded",
            description: "Master profile image has been updated",
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveMasterImage = () => {
    setMasterInfo({
      ...masterInfo,
      image: null,
    });
    toast({
      title: "Image removed",
      description: "Master profile image has been removed",
    });
  };

  const handleGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            addGalleryImage(event.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      });
      toast({
        title: "Images uploaded",
        description: `${files.length} image(s) added to gallery`,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="chess-container">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-serif mb-2">Settings</h1>
              <p className="text-chess-charcoal/70">
                Customize your academy website
              </p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="chess-btn-outline px-4 py-2"
            >
              Back to Home
            </button>
          </div>

          <div className="space-y-12">
            {/* Academy Information */}
            <section className="chess-card">
              <h2 className="text-xl font-serif mb-6">Academy Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Academy Name
                  </label>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="chess-input w-full"
                    placeholder="Enter academy name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Academy Logo
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-chess-light/50 flex items-center justify-center border border-chess-charcoal/10">
                      {logo ? (
                        <img src={logo} alt="Academy logo" className="w-full h-full object-contain" />
                      ) : (
                        <Trophy className="h-12 w-12 text-chess-charcoal/30" />
                      )}
                    </div>
                    <div className="space-y-3">
                      <label className="chess-btn-outline px-4 py-2 cursor-pointer">
                        <Upload className="mr-2 h-4 w-4" />
                        <span>Upload Logo</span>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleLogoUpload}
                        />
                      </label>
                      {logo && (
                        <button
                          onClick={handleRemoveLogo}
                          className="text-sm flex items-center text-chess-mahogany hover:underline"
                        >
                          <X className="mr-1 h-4 w-4" />
                          Remove Logo
                        </button>
                      )}
                      <p className="text-xs text-chess-charcoal/60">
                        Recommended: Square image, PNG or JPG, max 1MB
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <button
                    onClick={handleSaveAcademyInfo}
                    className="chess-btn-primary px-5 py-2"
                  >
                    Save Academy Info
                  </button>
                </div>
              </div>
            </section>
            
            {/* Contact Information */}
            <ContactSettings />
            
            {/* Program Settings */}
            <ProgramSettings />
            
            {/* Form Settings */}
            <FormSettings />
            
            {/* Master Information */}
            <section className="chess-card">
              <h2 className="text-xl font-serif mb-6">Master Information</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium mb-2">
                    Master Photo
                  </label>
                  <div className="space-y-3">
                    <div className="w-full aspect-square rounded-lg overflow-hidden bg-chess-light/50 flex items-center justify-center border border-chess-charcoal/10">
                      {masterInfo.image ? (
                        <img
                          src={masterInfo.image}
                          alt="Master profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-20 w-20 text-chess-charcoal/30" />
                      )}
                    </div>
                    <div className="flex justify-between">
                      <label className="chess-btn-outline px-3 py-1.5 cursor-pointer text-sm">
                        <Camera className="mr-1 h-4 w-4" />
                        <span>Upload Photo</span>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleMasterImageUpload}
                        />
                      </label>
                      {masterInfo.image && (
                        <button
                          onClick={handleRemoveMasterImage}
                          className="text-sm flex items-center text-chess-mahogany"
                        >
                          <X className="mr-1 h-4 w-4" />
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 md:col-span-2">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Master Name
                    </label>
                    <input
                      type="text"
                      value={masterNameInput}
                      onChange={(e) => setMasterNameInput(e.target.value)}
                      className="chess-input w-full"
                      placeholder="Enter master's name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Master Bio
                    </label>
                    <textarea
                      value={masterBioInput}
                      onChange={(e) => setMasterBioInput(e.target.value)}
                      className="chess-input w-full min-h-[120px]"
                      placeholder="Enter master's biography"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button
                      onClick={handleSaveMasterInfo}
                      className="chess-btn-primary px-5 py-2"
                    >
                      Save Master Info
                    </button>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Gallery Management */}
            <section className="chess-card">
              <h2 className="text-xl font-serif mb-6">Gallery Management</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="chess-btn-outline px-4 py-2 cursor-pointer inline-flex items-center">
                    <Upload className="mr-2 h-4 w-4" />
                    <span>Add Gallery Images</span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleGalleryImageUpload}
                    />
                  </label>
                  <p className="text-xs text-chess-charcoal/60 mt-2">
                    You can select multiple images. Recommended: JPG or PNG, landscape orientation
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-3">Current Gallery Images ({galleryImages.length})</h3>
                  
                  {galleryImages.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {galleryImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full aspect-square object-cover rounded-md"
                          />
                          <button
                            onClick={() => {
                              removeGalleryImage(index);
                              toast({
                                title: "Image removed",
                                description: "Gallery image has been removed",
                              });
                            }}
                            className="absolute top-2 right-2 bg-chess-charcoal/80 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label="Remove image"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-chess-charcoal/70 italic">
                      No gallery images added yet
                    </p>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
