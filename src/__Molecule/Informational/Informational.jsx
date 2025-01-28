import React from "react";
import "./Informational.css";
import NameInput from "../../__atom/Name/NameInput";
import CardNumber from "../../__atom/CardNumber/CardNumber";
import ExpDate from "../../__atom/ExpDate/ExpDate";
import CVCInput from "../../__atom/CVCInput/CVCInput";
import Button from "../../__atom/Button/Button";

function Informational({ cardData, setCardData, change }) {
  return (
    <div className="info_div">
      <form className="form">
        <NameInput
          cardData={cardData}
          setCardData={setCardData}
          change={change}
        />
        <CardNumber change={change} />
        <div className="exp">
          <ExpDate change={change} />
          <CVCInput change={change} />
        </div>
        <Button />
      </form>
    </div>
  );
}
export default Informational;
