import { useState, useEffect } from "react";
import "./DarkMode.scss";

const DarkMode = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    () => localStorage.getItem("selectedTheme") || "light"
  );

  useEffect(() => {
    const currentTheme = localStorage.getItem("selectedTheme") || "light";
    document.querySelector("body").setAttribute("data-theme", currentTheme);
    setSelectedTheme(currentTheme);
  }, []);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setSelectedTheme("dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setSelectedTheme("light");
    localStorage.setItem("selectedTheme", "light");
  };

  const handleThemeChange = (e) => {
    if (e.target.value === "dark") setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <div className="radio-btn">
        <label>
          <input
            className="dark_mode_input"
            type="radio"
            name="theme"
            value="light"
            checked={selectedTheme === "light"}
            onChange={handleThemeChange}
          />
          Light
        </label>
      </div>
      <div className="radio-btn">
        <label>
          <input
            className="dark_mode_input"
            type="radio"
            name="theme"
            value="dark"
            checked={selectedTheme === "dark"}
            onChange={handleThemeChange}
          />
          Dark
        </label>
      </div>
    </div>
  );
};

export default DarkMode;
