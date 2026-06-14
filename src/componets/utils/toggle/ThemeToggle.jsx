"use client";

import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="btn btn-primary">
      {theme}
    </button>
  );
};

export default ThemeToggle;