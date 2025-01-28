import React from "react";
import "./CVCInput.css";
function CVCInput({ change }) {
  return (
    <div className="cvc_div">
      <label htmlFor="cvc" className="txt_cvc">
        CVC
      </label>
      <input
        type="number"
        className="CVC_inp"
        placeholder="e.g. 123"
        id="cvc"
        name="cvc"
        onChange={change}
      />
    </div>
  );
}
export default CVCInput;
