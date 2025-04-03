import React from 'react';
import { useTheme } from '../ThemeContext';

type SupportNeedsCheckStepProps = {
  formData: {
    hasSupportNeeds: boolean;
  };
  onChange: (field: string, value: boolean) => void;
  onNext: () => void;
  onBack: () => void;
};

const SupportNeedsCheckStep = ({ formData, onChange, onNext, onBack }: SupportNeedsCheckStepProps) => {
  const { theme } = useTheme();
  
  const handleYes = () => {
    onChange('hasSupportNeeds', true);
    onNext();
  };
  
  const handleNo = () => {
    onChange('hasSupportNeeds', false);
    onNext();
  };

  return (
    <div className="themed-bg-primary themed-text-primary rounded-lg themed-shadow p-8 max-w-xl mx-auto transition-colors">
      <h2 className="text-2xl font-bold mb-4 text-center themed-text-primary">Support Needs</h2>
      
      <p className="themed-text-secondary mb-6 text-center">
        This information is optional but strongly recommended. It helps emergency responders 
        provide appropriate support during a disaster and find resources or special shelter 
        needs. This information is kept confidential.
      </p>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-center themed-text-primary">
          Do you, or does anyone in your household you are registering, 
          have any conditions or needs that might require special assistance in 
          an emergency?
        </h3>
        
        <div className="flex flex-col space-y-4 mt-8">
          <button
            onClick={handleYes}
            className="themed-accent py-3 px-6 rounded-md transition-colors w-full"
          >
            Yes
          </button>
          
          <button
            onClick={handleNo}
            className="themed-bg-tertiary themed-text-primary py-3 px-6 rounded-md hover:opacity-80 transition-colors w-full"
          >
            No
          </button>
        </div>
      </div>
      
      <div className="flex justify-start">
        <button
          type="button"
          onClick={onBack}
          className="themed-bg-tertiary themed-text-primary px-6 py-2 rounded-md hover:opacity-80 transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SupportNeedsCheckStep; 