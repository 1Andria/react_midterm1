import React from "react";
import "./NameInput.css";
function NameInput({ change }) {
  return (
    <div className="name_div">
      <label htmlFor="name" className="cardholder">
        Cardholder Name
      </label>
      <input
        id="name"
        type="text"
        className="name_inp"
        placeholder="e.g. Jane Appleseed"
        name="name"
        onChange={change}
        maxLength={22}
      />
    </div>
  );
}
export default NameInput;
