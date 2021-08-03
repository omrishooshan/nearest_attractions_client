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

  const handleClick=()=>{
    props.clickFavorites()
    setOrangeHeart(!orangeheart)
  }
  return (
    <>
      <img
        className={orangeheart ? "heart blank" : "heart orange"}
        onClick={handleClick}
        src={heart}
        alt="heart"
      />
    </>
  );
};

export default FavoritesHeart;
