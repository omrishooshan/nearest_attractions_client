import "./css/AttractionTypes.css";


const Attraction_types = (props) => {
  const handleClick = (e) => {
    props.handleTypes(e.target.value);
  };

  return (
    <div className="types_box" >
        <p>איזו אטרקציה אתם מחפשים?</p>
        <select onChange={handleClick}>
          {props.types &&  props.types.map((item,index)=> (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

    </div>
  );
};

export default Attraction_types;
