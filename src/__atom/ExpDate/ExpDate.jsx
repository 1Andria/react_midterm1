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
          type="text"
          placeholder="MM"
          onChange={change}
          name="expMM"
          id="exp"
          onFocus={() => {
            setTouched("expMM");
          }}
          maxLength={2}
        />
        <input
          className={`mm_yy ${
            isSubmitted && !validYr ? "error_date_border" : ""
          }`}
          type="text"
          placeholder="YY"
          onChange={change}
          name="expYr"
          onFocus={() => {
            setTouched("expYr");
          }}
          maxLength={2}
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
