import Header from "./components/Header/Header.tsx";
import CityButton from "./components/CityButton/CityButton.tsx";
import "./App.css";

export default function App() {
  const cities = ["Ulyanovsk", "Moscow", "New York", "Vladivostok", "London"];
  const handleCityButtonClick = () => {};

  return (
    <div className="mainFragment">
      <Header />
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <CityButton
              cityName={city}
              selected={false}
              onCityButtonClick={handleCityButtonClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
