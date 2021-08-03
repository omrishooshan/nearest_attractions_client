import useFetch from "./hooks/useFetch";
import Attraction from "./Attraction";
import AttractionTypes from "./AttractionTypes";
import "./css/AttractionsPage.css";
import { useState } from "react";

const AttractionsPage = () => {
  // const { data } = useFetch("http://localhost:3001/");
  const { data } = useFetch("https://attractionserver.herokuapp.com/");
  
  const { attractions, types } = data;

  const [filter, setFilter] = useState("הכל");

  const handleTypes = (type) => {
    setFilter(type);
  };

  return (
    <>
      <ul className="attractions_Wrapper">
        <li>
          <AttractionTypes types={types} handleTypes={handleTypes} />
        </li>

        {attractions &&
          attractions
            .sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
            .filter((item) => {
              /* 3 filter conditions= 1-all/2-by atraction / 3-by favorite */
              if (filter === "אטרקציות שאהבתי") {
                return localStorage
                  .getItem("favorits")
                  .split(",")
                  .includes(item.Name);
              } else if (filter === "הכל") {
                return item;
              } else {
                return item.Attraction_Type.includes(filter);
              }
            })
            .map((item) => {
              return (
                <li key={item.Id}>
                  <Attraction props={item} />
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default AttractionsPage;
