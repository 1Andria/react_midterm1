import React from "react";
import "./ExpDate.css";
function ExpDate({ change, isSubmitted, validMM, validYr, setTouched }) {
  return (
    <div className="month_year">
      <label className="exp_m_y" htmlFor="exp">
        Exp. Date (MM/YY)
      </label>
      <div className="m_y">
        <input
          className={`mm_yy ${
            isSubmitted && !validMM ? "error_date_border" : ""
          }`}
          type="number"
          placeholder="MM"
          onChange={change}
          name="expMM"
          id="exp"
          max={12}
          min={10}
          onFocus={() => {
            setTouched("expMM");
          }}
        />
        <input
          className={`mm_yy ${
            isSubmitted && !validYr ? "error_date_border" : ""
          }`}
          type="number"
          placeholder="YY"
          onChange={change}
          name="expYr"
          max={99}
          min={10}
          onFocus={() => {
            setTouched("expYr");
          }}
          inputMode="numeric"
        />
      </div>
      {(isSubmitted && !validYr) || (isSubmitted && !validMM) ? (
        <h1 className="nameError">
          {isSubmitted && !validMM && !validYr
            ? "MM and YY are invalid."
            : "MM or YY is invalid."}
        </h1>
      ) : null}
    </div>
  );
}
export default ExpDate;
