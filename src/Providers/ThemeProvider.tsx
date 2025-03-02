"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { json } from "stream/consumers";

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storedTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  const lastTheme =
    storedTheme && storedTheme !== "undefined"
      ? JSON.parse(storedTheme)
      : "light";

  const [theme, setTheme] = useState(lastTheme);

  // Synchronize theme state with HTML data attribute
  useEffect(() => {
    if (theme == "light") document.documentElement.classList.remove("dark");
    else if (theme == "dark")
      document.documentElement.classList.remove("light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // Provide theme context to children
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easy theme access
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
