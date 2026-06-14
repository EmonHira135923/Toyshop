"use client";
import Loading from "@/app/loading";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  // SSR এরর এড়াতে এবং দ্রুত থিম পেতে এই লজিকটি জরুরি
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("toyshop_theme") || "light";
    }
    return "light";
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("toyshop_theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {!mounted ? <Loading /> : children}
    </ThemeContext.Provider>
  );
}
