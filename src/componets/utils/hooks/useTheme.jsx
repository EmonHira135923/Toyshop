"use client";
import { ThemeContext } from "@/componets/Provider/ThemeProvider";
import { useContext } from "react";

const useTheme = () => {
  const context = useContext(ThemeContext);

  // যদি কনটেক্সট খুঁজে না পায় (যেমন লোডিং এর সময়), তবে এরর না দিয়ে ডিফল্ট ভ্যালু দিবে
  if (!context) {
    return { theme: "light", toggleTheme: () => {}, setTheme: () => {} };
  }

  return context;
};

export default useTheme;