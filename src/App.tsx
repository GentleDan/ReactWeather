import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo.tsx";

export default function App() {
  const [weatherCity, setWeatherCity] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (e: string) => {
    // for modal

    setError(true);
    setErrorMessage(e);
  };

  return (
    <div className="mainContainer">
      <Header />
      <div className="contentContainer">
        <Sidebar onCityChange={setWeatherCity} onError={handleError} />
        <WeatherInfo weatherData={weatherCity} />
      </div>
    </div>
  );
}
