import React, { useRef } from "react";
import "./NameInput.css";
function NameInput({ change, valid, isSubmitted }) {
  return (
    <div className="name_div">
      <label htmlFor="name" className="cardholder">
        Cardholder Name
      </label>
      <input
        id="name"
        type="text"
        className={`name_inp ${isSubmitted && !valid ? "error_border" : ""}`}
        placeholder="e.g. Jane Appleseed"
        name="name"
        onChange={change}
        maxLength={22}
      />
      {isSubmitted && !valid && (
        <h1 className="nameError">wrong format English letters only</h1>
      )}
    </div>
  );
}
export default NameInput;
