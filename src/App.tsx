import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

export default function App() {
  const [weatherData, setWeatherData] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
      <div className="main-content">
        <Sidebar onCityChange={setWeatherData} />
        <WeatherInfo weatherData={weatherData} />
      </div>
    </div>
  );
}
