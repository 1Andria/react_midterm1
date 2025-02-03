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
  const [touched, setTouched] = useState({
    name: false,
    cardNumber: false,
    expMM: false,
    expYr: false,
    cvc: false,
  });
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
      touched.name &&
      cardData.name.trim() !== "" &&
      /^[a-zA-Z\s]+$/.test(cardData.name);
    const cardNumberValid =
      touched.cardNumber && /^\d{16}$/.test(cardData.number.replace(/\s/g, ""));
    const expMMValid =
      touched.expMM &&
      /^\d+$/.test(cardData.expMM) &&
      cardData.expMM.length === 2 &&
      cardData.expMM <= 12;
    const expYrValid =
      touched.expYr &&
      /^\d+$/.test(cardData.expYr) &&
      cardData.expYr.length === 2 &&
      cardData.expYr >= 25;
    const cvcValid = touched.cvc && /^\d{3}$/.test(cardData.cvc);

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

  function IsEmpty(...inputName) {
    setTouched((oldCondition) => {
      const newCondition = { ...oldCondition };
      inputName.forEach((inputName) => {
        newCondition[inputName] = true;
      });
      return newCondition;
    });
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
            setTouched={() => IsEmpty("name")}
          />
          <CardNumber
            change={change}
            isSubmitted={isSubmitted}
            valid={validations.cardNumber}
            setTouched={() => IsEmpty("cardNumber")}
          />
          <div className="exp">
            <ExpDate
              change={change}
              isSubmitted={isSubmitted}
              valid={validations.expMM && validations.expYr}
              validMM={validations.expMM}
              validYr={validations.expYr}
              setTouched={() => IsEmpty("expMM", "expYr")}
            />
            <CVCInput
              change={change}
              isSubmitted={isSubmitted}
              valid={validations.cvc}
              setTouched={() => IsEmpty("cvc")}
            />
          </div>
          <Button txt="Confirm" />
        </form>
      )}
    </div>
  );
}
export default Informational;
