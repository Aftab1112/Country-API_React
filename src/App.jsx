import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { themeContext } from "./contexts/ThemeContext";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  return (
    <>
      <themeContext.Provider value={[isDark, setIsDark]}>
        <Header />
        <Outlet />
      </themeContext.Provider>
    </>
  );
};

export default App;
