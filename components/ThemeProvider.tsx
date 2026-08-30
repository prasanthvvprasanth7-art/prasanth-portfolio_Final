"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
const ThemeContext = createContext<{ theme:Theme; toggleTheme:()=>void }>({ theme:"dark", toggleTheme:()=>{} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme]   = useState<Theme>("dark");
  const [ready, setReady]   = useState(false);

  useEffect(() => {
    const stored  = localStorage.getItem("theme") as Theme | null;
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(stored ?? (prefers ? "dark" : "light"));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, ready]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme((t) => t === "dark" ? "light" : "dark") }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
