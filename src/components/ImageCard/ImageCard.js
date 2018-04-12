import React from "react";
import "./ImageCard.css";


const ImageCard = props => {
    return <div>
      <img className="images" alt={props.name} src={props.image} />
    </div>
};

export default ImageCard;
