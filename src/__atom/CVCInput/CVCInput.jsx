import React from "react";
import "./CVCInput.css";
function CVCInput({ change, valid, isSubmitted, setTouched }) {
  return (
    <div className="cvc_div">
      <label htmlFor="cvc" className="txt_cvc">
        CVC
      </label>
      <input
        type="text"
        className={`cvc_inp ${isSubmitted && !valid ? "cvc_inp_err" : ""}`}
        placeholder="e.g. 123"
        id="cvc"
        name="cvc"
        onChange={change}
        onFocus={() => setTouched()}
        maxLength={3}
      />
      {isSubmitted && !valid && <h1 className="nameError">Invalid CVC</h1>}
    </div>
  );
}
export default CVCInput;
