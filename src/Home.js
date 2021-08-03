import { useState } from "react";
import "./css/Home.css";
import BtnGeolocation from "./BtnGeolocation";
import BtnAttractions from "./BtnAttractions";

const Home = () => {
  const [display, setdisplay] = useState(false);

  const displayAttractionBtn = () => {
    setdisplay(true);
  };
  return (
    <div className="container">
      <h1 className="title">
        בא לך למצוא
        <br />
        <strong>אטרקציה קרובה</strong>?
      </h1>
      <BtnGeolocation displayAttractionBtn={displayAttractionBtn} />
      {display && <BtnAttractions />}
    </div>
  );
};

export default Home;
