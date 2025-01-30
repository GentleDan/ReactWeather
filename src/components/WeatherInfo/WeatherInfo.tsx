import "./WeatherInfo.css";

interface WeatherInfoProps {
  weatherData: string | null;
}

export default function WeatherInfo({ weatherData }: WeatherInfoProps) {
  const json = weatherData ? JSON.parse(weatherData) : null;
  const cityName = json?.location?.name;
  const cityCountry = json?.location?.country;
  const cityCoordinates = json?.location?.lat + "; " + json?.location?.lon;
  const celsiusTemperature = json?.current?.temp_c;
  const fahrenheitTemperature = json?.current?.temp_f;
  const condition = json?.current?.condition.text;
  const weatherIcon = json?.current?.condition.icon;

  return (
    <div className="weather-info">
      {json && !json.error ? (
        <>
          <div className="weather-info-header">
            <h1>{`Weather in ${cityName}, ${cityCountry}`}</h1>
          </div>
          <div className="weather-details">
            <div className="description">
              <h3>{`Temp °C: ${celsiusTemperature}`}</h3>
              <h3>{`Temp °F: ${fahrenheitTemperature}`}</h3>
              <h3>{`Coordinates: ${cityCoordinates}`}</h3>
            </div>
            <div className="visual">
              <img
                className="weather-icon"
                src={weatherIcon}
                alt="Weather icon"
              />
              <h3>{condition}</h3>
            </div>
          </div>
        </>
      ) : (
        <div className="no-available-data">No data available.</div>
      )}
    </div>
  );
}
