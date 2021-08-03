import "./css/AtrractionBox.css";
import imgPlaceholder from "./img_placeholder.jpg";
import FavoritesHeart from "./FavoritesHeart";
import { useDispatch } from "react-redux";




const AtrractionBox = (props) => {

  const handleClick = () => {
    props.handleClick();
  };

  const dipsatch = useDispatch();

  const clickFavorites = () => {
    let existing = localStorage.getItem("favorits");
    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? existing.split(",") : [];
    //add attraction only if its not in the array allready
    if (!existing.includes(props.Name)) {
      existing.push(props.Name);
      dipsatch({
        type: "INCREMENT_WIDGET",
      });
    } else {
      let index = existing.indexOf(props.Name);
      if (index !== -1) {
        existing.splice(index, 1);
      }
      dipsatch({
        type: "DECREMENT_WIDGET",
      });
    }
    // Save back to localStorage
    localStorage.setItem("favorits", existing.toString());
    // UPDATE WIDGET

  };

  return (
    <div className="ee">
          <FavoritesHeart Name={props.Name} clickFavorites={clickFavorites} />
    <div className="box" onClick={handleClick}>

      <div className="img_wrap">
        <img
          src={imgPlaceholder}
          className="img_placeholder"
          alt="placeholder"
        />
      </div>
      <div className="attraction_name">
        <p className="attraction_name-p">{props.Name}</p>
      </div>
      <div className="attraction_id">
        <p> &nbsp;&nbsp;{props.VendorId} </p>
      </div>
      <div className="attraction_distance">
        <p>&nbsp;&nbsp; {props.distance} ק"מ</p>
      </div>
    </div>
    </div>
  );
};

export default AtrractionBox;
