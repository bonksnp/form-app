import React from 'react';
import { useTheme } from '../ThemeContext';

type ReviewInfoStepProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    primaryAddress: string;
    city: string;
    state: string;
    zipCode: string;
    mobilityNeeds: boolean;
    visionNeeds: boolean;
    hearingNeeds: boolean;
    medicalNeeds: boolean;
    cognitiveNeeds: boolean;
    communicationNeeds: boolean;
    otherNeeds: string;
    needsDescription: string;
    temperature?: number;
    humidity?: number;
    weather_condition?: string;
    weather_description?: string;
    wind_speed?: number;
    weather_timestamp?: string;
  };
  isSubmitting: boolean;
  error: string;
  onSubmit: () => void;
  onBack: () => void;
};

const ReviewInfoStep = ({ 
  formData, 
  isSubmitting, 
  error, 
  onSubmit, 
  onBack 
}: ReviewInfoStepProps) => {
  const { theme } = useTheme();
  
  const { 
    firstName, 
    lastName, 
    email, 
    phoneNumber, 
    primaryAddress, 
    city, 
    state,
    zipCode,
    mobilityNeeds,
    visionNeeds,
    hearingNeeds,
    medicalNeeds,
    cognitiveNeeds,
    communicationNeeds,
    otherNeeds,
    needsDescription,
    temperature,
    humidity,
    weather_condition,
    weather_description,
    wind_speed
  } = formData;

  const hasSupportNeeds = mobilityNeeds || visionNeeds || hearingNeeds || 
                           medicalNeeds || cognitiveNeeds || communicationNeeds || 
                           (otherNeeds && otherNeeds.length > 0);
  
  const hasWeatherData = temperature !== undefined;

  const renderSupportNeeds = () => {
    if (!hasSupportNeeds) return <p className="themed-text-secondary">No special needs selected</p>;
    
    return (
      <div className="space-y-1">
        {mobilityNeeds && <p className="themed-text-secondary">• Mobility needs</p>}
        {visionNeeds && <p className="themed-text-secondary">• Vision needs</p>}
        {hearingNeeds && <p className="themed-text-secondary">• Hearing needs</p>}
        {medicalNeeds && <p className="themed-text-secondary">• Medical needs</p>}
        {cognitiveNeeds && <p className="themed-text-secondary">• Cognitive/Developmental needs</p>}
        {communicationNeeds && <p className="themed-text-secondary">• Communication needs</p>}
        {otherNeeds && (
          <div>
            <p className="themed-text-secondary">• Other needs</p>
            {needsDescription && (
              <p className="themed-text-secondary ml-4 text-sm italic">"{needsDescription}"</p>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="themed-bg-primary themed-text-primary rounded-lg themed-shadow p-8 max-w-xl mx-auto transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-center themed-text-primary">Check Your Information</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2 themed-text-primary">Basic Information</h3>
        <div className="themed-bg-secondary p-4 rounded-lg mb-6">
          <p className="themed-text-secondary"><span className="font-medium">Name:</span> {firstName} {lastName}</p>
          <p className="themed-text-secondary"><span className="font-medium">Email:</span> {email}</p>
          <p className="themed-text-secondary"><span className="font-medium">Phone:</span> {phoneNumber}</p>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 themed-text-primary">Location</h3>
        <div className="themed-bg-secondary p-4 rounded-lg mb-6">
          <p className="themed-text-secondary"><span className="font-medium">Address:</span> {primaryAddress}</p>
          <p className="themed-text-secondary"><span className="font-medium">City:</span> {city}</p>
          <p className="themed-text-secondary"><span className="font-medium">State:</span> {state}</p>
          <p className="themed-text-secondary"><span className="font-medium">ZIP Code:</span> {zipCode}</p>
        </div>
        
        {hasWeatherData && (
          <>
            <h3 className="text-lg font-semibold mb-2 themed-text-primary">Local Weather Conditions</h3>
            <div className="themed-bg-secondary p-4 rounded-lg mb-6">
              <p className="themed-text-secondary"><span className="font-medium">Current Weather:</span> {weather_description}</p>
              <p className="themed-text-secondary"><span className="font-medium">Temperature:</span> {temperature}°F</p>
              <p className="themed-text-secondary"><span className="font-medium">Humidity:</span> {humidity}%</p>
              <p className="themed-text-secondary"><span className="font-medium">Wind Speed:</span> {wind_speed} mph</p>
            </div>
          </>
        )}
        
        <h3 className="text-lg font-semibold mb-2 themed-text-primary">Support Needs</h3>
        <div className="themed-bg-secondary p-4 rounded-lg">
          {renderSupportNeeds()}
        </div>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="themed-bg-tertiary themed-text-primary px-6 py-2 rounded-md hover:opacity-80 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="themed-accent px-6 py-2 rounded-md transition-colors disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Confirm & Finish'}
        </button>
      </div>
    </div>
  );
};

export default ReviewInfoStep; 