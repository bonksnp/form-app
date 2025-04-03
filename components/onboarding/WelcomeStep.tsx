import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher';
import { useTheme } from '../ThemeContext';

type WelcomeStepProps = {
  onNext: () => void;
};

const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  const { theme } = useTheme();
  
  return (
    <div className="themed-bg-primary themed-text-primary rounded-lg themed-shadow p-8 max-w-xl mx-auto transition-colors">
      <div className="flex flex-col items-center text-center">
        <ThemeSwitcher />
        
        <div className="w-20 h-20 rounded-full themed-bg-secondary flex items-center justify-center mb-6">
          <span className="themed-text-tertiary">logo</span>
        </div>
        
        <h1 className="text-2xl font-bold mb-2 themed-text-primary">Welcome to DisasterPrep!</h1>
        
        <p className="themed-text-secondary mb-8">
          This setup helps us personalize alerts and resources for you during
          an emergency.
        </p>
        
        <p className="themed-text-secondary mb-8">
          Your information is kept secure and used only to help you prepare
          and stay safe.
        </p>
        
        <button
          onClick={onNext}
          className="themed-accent px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Let's get you setup for safety!
        </button>
      </div>
    </div>
  );
};

export default WelcomeStep; 