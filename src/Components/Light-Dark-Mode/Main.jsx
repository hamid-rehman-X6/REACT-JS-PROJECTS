import React from "react";
import { useTheme } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import "./style.css";

const Main = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`theme-container ${theme}`}>
        <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
        <ThemeToggle />
      </div>
    </>
  );
};

export default Main;
