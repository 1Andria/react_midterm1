import React from "react";
import "./ExpDate.css";
function ExpDate({ change }) {
  return (
    <div className="month_year">
      <label className="exp_m_y" htmlFor="exp">
        Exp. Date (MM/YY)
      </label>
      <div className="m_y">
        <input
          className="mm_yy"
          type="number"
          placeholder="MM"
          onChange={change}
          name="expMM"
          id="exp"
        />
        <input
          className="mm_yy"
          type="number"
          placeholder="YY"
          onChange={change}
          name="expYr"
          id="exp"
        />
      </div>
    </div>
  );
}
export default ExpDate;
