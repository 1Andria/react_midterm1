import React from "react";
import "./CardSide.css";
import FrontCard from "../FrontCard/FrontCard";
import BackCard from "../BackCard/BackCard";

function CardSide({ cardData }) {
  return (
    <div className="cards">
      <FrontCard cardData={cardData} />
      <BackCard cardData={cardData} />
    </div>
  );
}
export default CardSide;
