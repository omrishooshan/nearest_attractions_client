import heart from "./heart.svg";
import "./css/Buttons.css";
import { useState } from "react";

const FavoritesHeart = (props) => {
  const [orangeheart, setOrangeHeart] = useState(() =>
    localStorage.getItem("favorits") &&
    localStorage.getItem("favorits").split(",").includes(props.Name)
      ? false
      : true
  );
  return (
    <>
      <img
        className={orangeheart ? "heart" : "heart orange"}
        onClick={() => props.clickFavorites()}
        src={heart}
        alt="heart"
      />
    </>
  );
};

export default FavoritesHeart;
