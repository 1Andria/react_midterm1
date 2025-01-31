import React, { useState } from "react";
import "./Informational.css";
import NameInput from "../../__atom/Name/NameInput";
import CardNumber from "../../__atom/CardNumber/CardNumber";
import ExpDate from "../../__atom/ExpDate/ExpDate";
import CVCInput from "../../__atom/CVCInput/CVCInput";
import Button from "../../__atom/Button/Button";
import Thank from "../Thank/Thank";

function Informational({ cardData, setCardData, change }) {
  const [passed, setPassed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validations, setValidations] = useState({
    name: true,
    cardNumber: true,
    expMM: true,
    expYr: true,
    cvc: true,
  });

  function PassValidations(e) {
    e.preventDefault();
    setIsSubmitted(true);

    const nameValid =
      cardData.name.trim() !== "" && /^[a-zA-Z\s]+$/.test(cardData.name);
    const cardNumberValid = /^\d{16}$/.test(cardData.number.replace(/\s/g, ""));
    const expMMValid =
      /^\d+$/.test(cardData.expMM) && cardData.expMM.length === 2;
    const expYrValid =
      /^\d+$/.test(cardData.expYr) && cardData.expYr.length === 2;
    const cvcValid = /^\d{3}$/.test(cardData.cvc);

    setValidations({
      name: nameValid,
      cardNumber: cardNumberValid,
      expMM: expMMValid,
      expYr: expYrValid,
      cvc: cvcValid,
    });

    if (nameValid && cardNumberValid && expMMValid && expYrValid && cvcValid) {
      setPassed(true);
    }
  }

  return (
    <div className="info_div">
      {passed ? (
        <Thank />
      ) : (
        <form className="form" onSubmit={PassValidations}>
          <NameInput
            cardData={cardData}
            setCardData={setCardData}
            change={change}
            isSubmitted={isSubmitted}
            valid={validations.name}
          />
          <CardNumber
            change={change}
            isSubmitted={isSubmitted}
            valid={validations.cardNumber}
          />
          <div className="exp">
            <ExpDate
              change={change}
              isSubmitted={isSubmitted}
              valid={validations.expMM && validations.expYr}
              validMM={validations.expMM}
              validYr={validations.expYr}
            />
            <CVCInput
              change={change}
              isSubmitted={isSubmitted}
              valid={validations.cvc}
            />
          </div>
          <Button txt="Confirm" />
        </form>
      )}
    </div>
  );
}
export default Informational;
