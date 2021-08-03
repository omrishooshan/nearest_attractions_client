import "./css/AttractionDropdown.css";
import "./css/Buttons.css";
const AttractionDropdown = (props) => {
  const handleClick = () => {
    props.handleClick();
  };

  return (
    <div className="dropdown">
      <div className="dropdown_header">
        <div className="close" onClick={handleClick}></div>
      </div>

      <div className="dropdown_body">
        <div className="body_right">
          <div className="_right_address">
            <h3 className="h3_addres">כתובת:</h3>
            <p>{props.Address}</p>
          </div>
          <div className="_right_hours">
            <h3 className="h3_hours">שעות פתיחה:</h3>
            <p>{props.Opening_Hours}</p>
          </div>
        </div>
        <div className="body_left">
          <a
            href={props.Product_Url}
            target="_blank"
            rel="noreferrer"
            className="btn btn_green btn-dropdown "
          >
            לאתר האטרקציה
          </a>
        </div>
      </div>
    </div>
  );
};

export default AttractionDropdown;
