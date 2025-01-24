import "./WeatherInfo.css";

interface WeatherInfoProps {
  weatherData: string;
}

export default function WeatherInfo({ weatherData }: WeatherInfoProps) {
  const json = weatherData ? JSON.parse(weatherData) : undefined;
  const cityName = json?.location.name;

  return <>{json && <h1>Weather in {cityName}</h1>}</>;
}
