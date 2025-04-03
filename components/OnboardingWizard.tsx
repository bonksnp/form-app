import { useState } from 'react';
import supabase from '../lib/supabase';
import WelcomeStep from './onboarding/WelcomeStep';
import PersonalInfoStep from './onboarding/PersonalInfoStep';
import LocationStep from './onboarding/LocationStep';
import SupportNeedsCheckStep from './onboarding/SupportNeedsCheckStep';
import SupportNeedsSelectionStep from './onboarding/SupportNeedsSelectionStep';
import ReviewInfoStep from './onboarding/ReviewInfoStep';
import CompletionStep from './onboarding/CompletionStep';

type OnboardingData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  primaryAddress: string;
  city: string;
  state: string;
  hasSupportNeeds: boolean;
  mobilityNeeds: boolean;
  visionNeeds: boolean;
  hearingNeeds: boolean;
  medicalNeeds: boolean;
  cognitiveNeeds: boolean;
  communicationNeeds: boolean;
  otherNeeds: string;
  needsDescription: string;
}

const OnboardingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    primaryAddress: '',
    city: '',
    state: '',
    hasSupportNeeds: false,
    mobilityNeeds: false,
    visionNeeds: false,
    hearingNeeds: false,
    medicalNeeds: false,
    cognitiveNeeds: false,
    communicationNeeds: false,
    otherNeeds: '',
    needsDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleChange = (field: keyof OnboardingData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('onboarding_data')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          primary_address: formData.primaryAddress,
          city: formData.city,
          state: formData.state,
          mobility_needs: formData.mobilityNeeds,
          vision_needs: formData.visionNeeds,
          hearing_needs: formData.hearingNeeds,
          medical_needs: formData.medicalNeeds,
          cognitive_needs: formData.cognitiveNeeds,
          communication_needs: formData.communicationNeeds,
          other_needs: formData.otherNeeds,
          needs_description: formData.needsDescription
        });

      if (error) throw error;

      // Move to completion step
      handleNext();
    } catch (err) {
      console.error('Error submitting onboarding data:', err);
      setError('Failed to save your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeStep onNext={handleNext} />;
      case 2:
        return (
          <PersonalInfoStep
            formData={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <LocationStep
            formData={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <SupportNeedsCheckStep
            formData={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 5:
        return formData.hasSupportNeeds ? (
          <SupportNeedsSelectionStep
            formData={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        ) : (
          <ReviewInfoStep
            formData={formData}
            isSubmitting={isSubmitting}
            error={error}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        );
      case 6:
        return formData.hasSupportNeeds ? (
          <ReviewInfoStep
            formData={formData}
            isSubmitting={isSubmitting}
            error={error}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        ) : (
          <CompletionStep />
        );
      case 7:
        return <CompletionStep />;
      default:
        return <WelcomeStep onNext={handleNext} />;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen themed-bg-secondary transition-colors">
      <div className="w-full max-w-4xl mx-auto">
        {renderStep()}
      </div>
    </div>
  );
};

export default OnboardingWizard; 