import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeType = 'light' | 'dark' | 'high-contrast';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('disasterprep-theme', theme);
      
      // Apply appropriate classes to the document body
      const body = document.body;
      body.classList.remove('theme-light', 'theme-dark', 'theme-high-contrast');
      body.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  // Load theme preference from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('disasterprep-theme') as ThemeType | null;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 