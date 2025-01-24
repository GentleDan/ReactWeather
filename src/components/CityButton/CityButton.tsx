import "./CityButton.css";

interface CityButtonProps {
  cityName: string;
  selected: boolean;
  onCityButtonClick?: () => void;
}

export default function CityButton({
  cityName,
  selected,
  onCityButtonClick,
}: CityButtonProps) {
  const selectedStyle = selected ? "cityButtonActive" : "cityButton";

  return (
    <button onClick={onCityButtonClick} className={selectedStyle}>
      {cityName}
    </button>
  );
}
