import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleString());
    });
  }, []);

  return (
    <>
      <header>
        <div className={"headerLogo"}>
          <img src="src/assets/react.svg" alt="" />
          <h1>React Weather Application</h1>
        </div>
        <h3>Date: {date}</h3>
      </header>
      <hr />
    </>
  );
}
