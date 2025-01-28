import React from "react";
import "./BackCard.css";
import Info from "../../assets/Images/info.png";
function BackCard({ cardData }) {
  return (
    <div className="back_side">
      <div className="line"></div>
      <div className="CVC_div">
        <h1 className="cvc">{cardData.cvc}</h1>
      </div>
      <img src={Info} alt="information" />
    </div>
  );
}
export default BackCard;
