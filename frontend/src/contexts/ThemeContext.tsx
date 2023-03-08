import useLocalStorage from '@/hooks/useLocalStorage';
import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { light, dark } from '../theme';

const CACHE_KEY = 'IS_DARK';

interface ThemeType {
  isDark: boolean | null;
  toggleTheme: () => void;
}

const initialState: ThemeType = {
  isDark: null,
  toggleTheme: () => null,
};

const ThemeContext = React.createContext(initialState);

const ThemeContextProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useLocalStorage(CACHE_KEY, false);
  const toggleTheme = () => {
    setIsDark((prevState: any) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState));
      return !prevState;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
