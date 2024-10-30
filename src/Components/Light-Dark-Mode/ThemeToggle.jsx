import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} Mode
      </button>
    </>
  );
};

export default ThemeToggle;
