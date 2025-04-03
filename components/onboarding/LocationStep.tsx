import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

type LocationStepProps = {
  formData: {
    primaryAddress: string;
    city: string;
    state: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

const LocationStep = ({ formData, onChange, onNext, onBack }: LocationStepProps) => {
  const { theme } = useTheme();
  const [useCurrent, setUseCurrent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.primaryAddress || !formData.city || !formData.state) {
      alert('Please fill out all address fields');
      return;
    }
    
    onNext();
  };

  const handleUseCurrentLocation = () => {
    setLoading(true);
    setUseCurrent(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // This would typically use a geocoding service like Google Maps API
            // For demo purposes, we'll just set a placeholder
            onChange('primaryAddress', '123 Main St');
            onChange('city', 'Anytown');
            onChange('state', 'CA');
            setLoading(false);
          } catch (error) {
            console.error('Error getting address from coordinates:', error);
            setLoading(false);
            alert('Failed to get your location. Please enter manually.');
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          setLoading(false);
          setUseCurrent(false);
          alert('Failed to get your location. Please enter manually.');
        }
      );
    } else {
      setLoading(false);
      setUseCurrent(false);
      alert('Geolocation is not supported by your browser. Please enter your address manually.');
    }
  };

  return (
    <div className="themed-bg-primary themed-text-primary rounded-lg themed-shadow p-8 max-w-xl mx-auto transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-center themed-text-primary">Where Are You Located?</h2>
      
      <div className="mb-6">
        <button
          type="button"
          onClick={handleUseCurrentLocation}
          disabled={loading}
          className="w-full themed-accent-secondary themed-text-primary font-medium py-3 px-4 rounded-lg flex items-center justify-center hover:opacity-90 transition-colors mb-4"
        >
          {loading ? 'Getting location...' : 'Use My Current Location'}
        </button>
        
        <div className="text-center themed-text-tertiary mb-4">Or</div>
        
        <div className="border themed-border rounded-lg p-4 themed-bg-primary">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="primaryAddress" className="block themed-text-secondary mb-2">Enter your primary address</label>
              <input
                type="text"
                id="primaryAddress"
                value={formData.primaryAddress}
                onChange={(e) => onChange('primaryAddress', e.target.value)}
                className="w-full p-2 border themed-border rounded themed-bg-primary themed-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Street address"
              />
            </div>
            
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <label htmlFor="city" className="block themed-text-secondary mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={(e) => onChange('city', e.target.value)}
                  className="w-full p-2 border themed-border rounded themed-bg-primary themed-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="w-1/3">
                <label htmlFor="state" className="block themed-text-secondary mb-2">State</label>
                <input
                  type="text"
                  id="state"
                  value={formData.state}
                  onChange={(e) => onChange('state', e.target.value)}
                  maxLength={2}
                  className="w-full p-2 border themed-border rounded themed-bg-primary themed-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="CA"
                />
              </div>
            </div>
            
            <p className="text-sm themed-text-tertiary mb-6">
              You'll be directed here, you'll be set.
              We use this info for alerts that match your exact location.
            </p>
            
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
      </div>
    </div>
  );
};

export default LocationStep; 