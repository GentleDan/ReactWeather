import "./Sidebar.css";
import { useState } from "react";
import CityButton from "../CityButton/CityButton";

interface SidebarProps {
  onCityChange: (weatherData: string) => void;
}

export default function Sidebar({ onCityChange }: SidebarProps) {
  const [searchCity, setSearchCity] = useState<string>("");

  const defaultCitiesList = [
    "Ulyanovsk",
    "Moscow",
    "New York",
    "Vladivostok",
    "London",
    "Abu Dhabi",
    "Bangkok",
    "Barcelona",
    "Berlin",
    "Dubai",
    "Frankfurt",
    "Geneva",
  ];

  const handleCityButtonClick = async (cityName: string) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${cityName}&aqi=no`,
      );
      const data = await response.json();
      onCityChange(JSON.stringify(data));
    } catch (error) {
      alert(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <div className="sidebar">
      <div className="search-container">
        <input
          className="city-input"
          type="search"
          placeholder="Enter city name..."
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button
          className="search-button"
          disabled={!searchCity}
          onClick={() => handleCityButtonClick(searchCity)}
        >
          Search
        </button>
      </div>

      <hr className="divider" />
      <div className="city-list">
        <ul>
          {defaultCitiesList.map((city) => (
            <li key={city}>
              <CityButton
                cityName={city}
                selected={false}
                onCityButtonClick={() => handleCityButtonClick(city)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
