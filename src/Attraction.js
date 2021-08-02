import { useState } from "react";
import AtrractionBox from "./AtrractionBox";
import AttractionDropdown from "./AttractionDropdown";

const Attraction = ({ props }) => {
  const [Dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!Dropdown);
  };

  return (
    <>
      {Dropdown ? (
        <AttractionDropdown
          handleClick={handleClick}
          Product_Url={props.Product_Url}
          Opening_Hours={props.Opening_Hours}
          Address={props.Address}
        />
      ) : (
        <AtrractionBox
          handleClick={handleClick}
          Name={props.Name}
          VendorId={props.VendorId}
          distance={props.distance}
        />
      )}
    </>
  );
};

export default Attraction;
