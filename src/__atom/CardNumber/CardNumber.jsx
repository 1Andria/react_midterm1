import "./CardNumber.css";
import InputMask from "react-input-mask";

function CardNumber({ change, valid, isSubmitted }) {
  return (
    <div className="num_div">
      <label htmlFor="card_num" className="card_nm">
        Card Number
      </label>
      <InputMask
        mask="9999 9999 9999 9999"
        replacement={{ 9: /\d/ }}
        onChange={(e) => change(e)}
      >
        {(inputProps) => (
          <input
            {...inputProps}
            id="card_num"
            className={`number_inp ${
              isSubmitted && !valid ? "number_error_border" : ""
            }`}
            name="number"
            placeholder="e.g. 1234 5678 9123 0000"
            minLength={16}
          />
        )}
      </InputMask>
      {isSubmitted && !valid && <h1 className="nameError">wrong format</h1>}
    </div>
  );
}
export default CardNumber;
