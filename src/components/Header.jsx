import React, { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export default function Header() {
  const [isDark, setIsDark] = useContext(themeContext);

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="tittle">
          <a href="/">Where In The World ?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp;&nbsp;{`${isDark ? "Light Mode" : "Dark Mode"}`}
        </p>
      </div>
    </header>
  );
}
