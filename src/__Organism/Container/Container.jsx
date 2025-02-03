import React, { useEffect, useState } from "react";
import "./Container.css";
import CardSide from "../../__Molecule/CardSide/CardSide";
import Informational from "../../__Molecule/Informational/Informational";

function Container() {
  useEffect(() => {
    document.title = "Card Form";
  }, []);
  const [cardData, setCardData] = useState({
    name: "JANE APPLESEED",
    number: "0000 0000 0000 0000",
    expMM: "00",
    expYr: "00",
    cvc: "000",
  });
  function change(e) {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  }
  return (
    <div className="container">
      <CardSide cardData={cardData} />
      <Informational
        cardData={cardData}
        setCardData={setCardData}
        change={change}
      />
    </div>
  );
}
export default Container;
