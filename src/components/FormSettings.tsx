
import React, { useState } from "react";
import { useAcademy } from "@/context/AcademyContext";
import { useToast } from "@/hooks/use-toast";

const FormSettings: React.FC = () => {
  const { googleFormUrl, setGoogleFormUrl } = useAcademy();
  const { toast } = useToast();
  
  const [url, setUrl] = useState(googleFormUrl);
  
  const handleSave = () => {
    // Basic validation
    if (!url.includes('docs.google.com/forms')) {
      toast({
        title: "Invalid Google Form URL",
        description: "Please enter a valid Google Form URL",
        variant: "destructive",
      });
      return;
    }
    
    setGoogleFormUrl(url);
    
    toast({
      title: "Form URL saved",
      description: "Your Google Form has been successfully saved",
    });
  };
  
  const handlePreview = () => {
    if (!url) {
      toast({
        title: "No form URL",
        description: "Please enter a Google Form URL first",
        variant: "destructive",
      });
      return;
    }
    
    window.open('/admission', '_blank');
  };
  
  return (
    <section className="chess-card">
      <h2 className="text-xl font-serif mb-6">Admission Form</h2>
      
      <div className="space-y-6">
        <p className="text-sm text-chess-charcoal/70">
          Enter the URL of your Google Form for student admissions. This form will be embedded on the Admission page.
        </p>
        
        <div>
          <label className="block text-sm font-medium mb-2">Google Form URL</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="chess-input w-full"
            placeholder="https://docs.google.com/forms/d/e/your-form-id/viewform"
          />
          <p className="text-xs text-chess-charcoal/60 mt-1">
            Tip: Use the "Send" button in your Google Form to get the shareable link
          </p>
        </div>
        
        <div className="flex space-x-4">
          <button onClick={handleSave} className="chess-btn-primary px-5 py-2">
            Save Form URL
          </button>
          
          <button 
            onClick={handlePreview} 
            className="chess-btn-outline px-5 py-2"
            disabled={!url}
          >
            Preview Form Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default FormSettings;
