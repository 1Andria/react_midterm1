import React from "react";
import "./Button.css";
function Button({ txt, onClick }) {
  return (
    <button onClick={onClick} className="btn" type="submit">
      {txt}
    </button>
  );
}
export default Button;
