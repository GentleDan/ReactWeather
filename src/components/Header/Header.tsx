import "./Header.css";
import { useEffect, useState } from "react";

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  const [date, setDate] = useState<string>(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, []);

  return (
    <header className="header">
      <div className="header-logo">
        <img
          className="react-icon"
          src="src/assets/react.svg"
          alt="React logo"
        />
        <h1>React Weather App</h1>
      </div>
      <div className="header-additional">
        <button className="theme-toggle" onClick={onToggleDarkMode}>
          {darkMode ? "Light" : "Dark"} Mode
        </button>
        <h3 className="date">{date}</h3>
      </div>
      <hr />
    </header>
  );
}
