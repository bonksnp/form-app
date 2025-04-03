import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center space-x-3 p-2 rounded-lg themed-bg-secondary themed-border border mb-4">
      <button
        onClick={() => setTheme('light')}
        className={`px-3 py-1 rounded-md transition-colors ${
          theme === 'light'
            ? 'themed-accent'
            : 'themed-bg-tertiary themed-text-primary hover:opacity-80'
        }`}
        aria-label="Light mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={`px-3 py-1 rounded-md transition-colors ${
          theme === 'dark'
            ? 'themed-accent'
            : 'themed-bg-tertiary themed-text-primary hover:opacity-80'
        }`}
        aria-label="Dark mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
      
      <button
        onClick={() => setTheme('high-contrast')}
        className={`px-3 py-1 rounded-md transition-colors ${
          theme === 'high-contrast'
            ? 'themed-accent'
            : 'themed-bg-tertiary themed-text-primary hover:opacity-80'
        }`}
        aria-label="High contrast mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.172 2.172a2 2 0 010 2.828l-8.486 8.486a2 2 0 01-2.828 0l-2.172-2.172a2 2 0 010-2.828L7.344 11.5M10 14l2.5 2.5" />
        </svg>
      </button>
    </div>
  );
};

export default ThemeSwitcher; 