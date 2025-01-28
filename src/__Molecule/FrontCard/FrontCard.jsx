import React from "react";
import "./FrontCard.css";

function FrontCard({ cardData }) {
  return (
    <div className="front_side">
      <div className="circles">
        <div className="white"></div>
        <div className="border"></div>
      </div>
      <h1 className="numb">{cardData.number}</h1>
      <div className="name_exp">
        <h1 className="name">{cardData.name}</h1>
        <h1 className="name">
          {cardData.expMM}/{cardData.expYr}
        </h1>
      </div>
    </div>
  );
}
export default FrontCard;
