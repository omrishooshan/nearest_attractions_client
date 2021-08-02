import { useDispatch } from "react-redux";
import "./css/Buttons.css";

const BtnGeolocation = ({ displayAttractionBtn }) => {
  const dipsatch = useDispatch();

  const handleClick = () => {
    if (!navigator.geolocation) {
      alert("לא ניתן להשתמש במיקום שלך, אנא אפשר שימוש ב Geolocation");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dipsatch({
            type: "SET_GEOLOCATIONS",
            payload: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
          alert(
            `latitude:${position.coords.latitude}, longitude:${position.coords.longitude}`
          );
          displayAttractionBtn();
        },
        () => {}
      );
    }
  };

  return (
    <>
      <input
        className="btn btn_green"
        type="button"
        value="הצג מיקום"
        onClick={handleClick}
      />
    </>
  );
};

export default BtnGeolocation;
