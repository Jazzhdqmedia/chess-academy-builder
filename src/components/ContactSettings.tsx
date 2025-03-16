
import React, { useState } from "react";
import { useAcademy } from "@/context/AcademyContext";
import { useToast } from "@/hooks/use-toast";

const ContactSettings: React.FC = () => {
  const { contactInfo, updateContactInfo } = useAcademy();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    address: contactInfo.address,
    city: contactInfo.city,
    zipCode: contactInfo.zipCode,
    email: contactInfo.email,
    phone: contactInfo.phone,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.email.includes('@') || !formData.phone) {
      toast({
        title: "Invalid input",
        description: "Please provide a valid email and phone number",
        variant: "destructive",
      });
      return;
    }

    updateContactInfo(formData);
    
    toast({
      title: "Contact info updated",
      description: "Your contact information has been saved successfully",
    });
  };

  return (
    <section className="chess-card">
      <h2 className="text-xl font-serif mb-6">Contact Information</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="chess-input w-full"
              placeholder="Street address"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="chess-input w-full"
                placeholder="City, State"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="chess-input w-full"
                placeholder="Zip Code"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="chess-input w-full"
              placeholder="contact@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="chess-input w-full"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>
        
        <div className="pt-4">
          <button onClick={handleSubmit} className="chess-btn-primary px-5 py-2">
            Save Contact Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSettings;
