"use client";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

interface AppContextType {
  language: string;
  setLanguage: (lang: string) => void;
  loading: boolean;
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("en");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    return setLoading(false);
  }, []);

  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language);
    }
  }, [language]);

  return (
    <AppContext.Provider value={{ language, setLanguage, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
