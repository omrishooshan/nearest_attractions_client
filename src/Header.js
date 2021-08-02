import "./css/Header.css";

import logo from "./logo.png";
import heart from "./heart.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const [favorits, setFavorites] = useState(0);
  const widgetCounter = useSelector((state) => state.widgetCounter);

  useEffect(() => {
    setFavorites(widgetCounter);
  }, [widgetCounter]);
  return (
    <nav className="header">
      <div className="favorits--a" href="/attractions/favorites">
        <span>
          {" "}
          <img src={heart} className="header--a-heart" alt="logo" />
          <span className="heart_widget">{favorits > 0 && favorits}</span>{" "}
          אטרקציות שאהבתי
        </span>
      </div>
      <a className="header--a" href="/">
        <img src={logo} className="header--a-logo" alt="logo" />
      </a>
    </nav>
  );
}

export default Header;
