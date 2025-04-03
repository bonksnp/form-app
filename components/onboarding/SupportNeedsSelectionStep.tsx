import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

type SupportNeedsSelectionStepProps = {
  formData: {
    mobilityNeeds: boolean;
    visionNeeds: boolean;
    hearingNeeds: boolean;
    medicalNeeds: boolean;
    cognitiveNeeds: boolean;
    communicationNeeds: boolean;
    otherNeeds: string;
    needsDescription: string;
  };
  onChange: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
};

const SupportNeedsSelectionStep = ({ 
  formData, 
  onChange, 
  onNext, 
  onBack 
}: SupportNeedsSelectionStepProps) => {
  const { theme } = useTheme();
  
  const handleCheckboxChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(field, e.target.checked);
  };
  
  const handleTextChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(field, e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="themed-bg-primary themed-text-primary rounded-lg themed-shadow p-8 max-w-xl mx-auto transition-colors">
      <h2 className="text-2xl font-bold mb-4 text-center themed-text-primary">Support Needs</h2>
      <p className="themed-text-secondary mb-6 text-center">
        Please check any areas where you might need support.
        Select all that apply.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <input
              id="mobilityNeeds"
              type="checkbox"
              checked={formData.mobilityNeeds}
              onChange={handleCheckboxChange('mobilityNeeds')}
              className="mt-1 mr-3"
            />
            <label htmlFor="mobilityNeeds" className="themed-text-secondary">
              <span className="font-medium themed-text-primary">Mobility</span> (e.g., Use wheelchair, walker, difficulty with stairs)
            </label>
          </div>
          
          <div className="flex items-start">
            <input
              id="visionNeeds"
              type="checkbox"
              checked={formData.visionNeeds}
              onChange={handleCheckboxChange('visionNeeds')}
              className="mt-1 mr-3"
            />
            <label htmlFor="visionNeeds" className="themed-text-secondary">
              <span className="font-medium themed-text-primary">Vision</span> (e.g., Blind or have significant vision impairment)
            </label>
          </div>
          
          <div className="flex items-start">
            <input
              id="hearingNeeds"
              type="checkbox"
              checked={formData.hearingNeeds}
              onChange={handleCheckboxChange('hearingNeeds')}
              className="mt-1 mr-3"
            />
            <label htmlFor="hearingNeeds" className="themed-text-secondary">
              <span className="font-medium themed-text-primary">Hearing</span> (e.g., Deaf or hard of hearing)
            </label>
          </div>
          
          <div className="flex items-start">
            <input
              id="medicalNeeds"
              type="checkbox"
              checked={formData.medicalNeeds}
              onChange={handleCheckboxChange('medicalNeeds')}
              className="mt-1 mr-3"
            />
            <label htmlFor="medicalNeeds" className="themed-text-secondary">
              <span className="font-medium themed-text-primary">Medical</span> (e.g., Need electricity for medical equipment, cannot
              rely on regular medical treatments)
            </label>
          </div>
          
          <div className="flex items-start">
            <input
              id="cognitiveNeeds"
              type="checkbox"
              checked={formData.cognitiveNeeds}
              onChange={handleCheckboxChange('cognitiveNeeds')}
              className="mt-1 mr-3"
            />
            <label htmlFor="cognitiveNeeds" className="themed-text-secondary">
              <span className="font-medium themed-text-primary">Cognitive/Developmental</span> (e.g., May need simple instructions, get easily confused or
              disoriented)
            </label>
          </div>
          
          <div className="flex items-start">
            <input
              id="communicationNeeds"
              type="checkbox"
              checked={formData.communicationNeeds}
              onChange={handleCheckboxChange('communicationNeeds')}
              className="mt-1 mr-3"
            />
            <label htmlFor="communicationNeeds" className="themed-text-secondary">
              <span className="font-medium themed-text-primary">Communication</span> (e.g., Non-verbal, use communication device)
            </label>
          </div>
          
          <div className="flex items-start">
            <input
              id="otherNeeds"
              type="checkbox"
              checked={!!formData.otherNeeds}
              onChange={(e) => {
                if (!e.target.checked) {
                  onChange('otherNeeds', '');
                } else {
                  onChange('otherNeeds', 'Other');
                }
              }}
              className="mt-1 mr-3"
            />
            <label htmlFor="otherNeeds" className="themed-text-secondary">
              <span className="font-medium themed-text-primary">Other Needs</span> (Optional)
            </label>
          </div>
          
          {!!formData.otherNeeds && (
            <div className="ml-6 mt-2">
              <textarea
                id="needsDescription"
                value={formData.needsDescription}
                onChange={handleTextChange('needsDescription')}
                placeholder="Please provide a brief description..."
                className="w-full p-2 border themed-border rounded themed-bg-primary themed-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
          )}
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

export default SupportNeedsSelectionStep; 