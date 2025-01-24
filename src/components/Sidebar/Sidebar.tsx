import "./Sidebar.css";
import CityButton from "../CityButton/CityButton.tsx";

interface SideBarProps {
  onCityChange: (weatherData: string) => void;
  onError: (error: string) => void;
}

export default function Sidebar({ onCityChange, onError }: SideBarProps) {
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
      const json = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${cityName}&aqi=no`,
      ).then((res) => res.json());

      onCityChange(JSON.stringify(json));
    } catch (error) {
      if (error instanceof Error) {
        onError(error.message);
        alert(error.message);
      }
    }
  };

  return (
    <div className="citiesContainer">
      <input
        className="cityInput"
        type="search"
        placeholder="Type here city name..."
      />
      <hr className="citiesContent-hr" />
      <div className="citiesContainerContent">
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
