import React from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '../ThemeContext';

const CompletionStep = () => {
  const router = useRouter();
  const { theme } = useTheme();

  const handleStartUsingApp = () => {
    // Redirect to main app page
    router.push('/dashboard');
  };

  return (
    <div className="themed-bg-primary themed-text-primary rounded-lg themed-shadow p-8 max-w-xl mx-auto text-center transition-colors">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-4 themed-text-primary">You're All Set!</h1>
        
        <p className="themed-text-secondary mb-8">
          Thank you! Your profile is set up and ready to use. Now explore the app and find resources to help you prepare.
        </p>
        
        <button
          onClick={handleStartUsingApp}
          className="themed-accent px-6 py-3 rounded-md transition-colors mb-4 w-full"
        >
          Show me around the App
        </button>
        
        <button
          onClick={() => router.push('/')}
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default CompletionStep; 