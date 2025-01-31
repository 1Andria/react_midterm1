import React from "react";
import "./Thank.css";
import Done from "../../assets/Images/done.png";
import Button from "../../__atom/Button/Button";

function Thank() {
  function Refresh() {
    window.location.reload();
  }
  return (
    <div className="thank">
      <img className="done_image" src={Done} alt="Done" />
      <h1 className="thank_you">THANK YOU!</h1>
      <p className="thank_para">We’ve added your card details</p>
      <Button onClick={Refresh} txt="Continue" />
    </div>
  );
}
export default Thank;
