import React from 'react';
import { useTheme } from '../ThemeContext';

type PersonalInfoStepProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

const PersonalInfoStep = ({ formData, onChange, onNext, onBack }: PersonalInfoStepProps) => {
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber) {
      alert('Please fill out all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Phone validation (simple)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber.replace(/\D/g, ''))) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }
    
    onNext();
  };

  return (
    <div className="themed-bg-primary themed-text-primary rounded-lg themed-shadow p-8 max-w-xl mx-auto transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-center themed-text-primary">Tell Us About You</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block themed-text-secondary mb-2">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            className="w-full p-2 border themed-border rounded themed-bg-primary themed-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="lastName" className="block themed-text-secondary mb-2">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            className="w-full p-2 border themed-border rounded themed-bg-primary themed-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block themed-text-secondary mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full p-2 border themed-border rounded themed-bg-primary themed-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block themed-text-secondary mb-2">Phone number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => onChange('phoneNumber', e.target.value)}
            placeholder="(123) 456-7890"
            className="w-full p-2 border themed-border rounded themed-bg-primary themed-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="themed-bg-tertiary themed-text-primary px-6 py-2 rounded-md hover:opacity-80 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="themed-accent px-6 py-2 rounded-md transition-colors"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoStep; 