import "./CardNumber.css";
import InputMask from "react-input-mask";

function CardNumber({ change }) {
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
            className="number_inp"
            name="number"
            placeholder="e.g. 1234 5678 9123 0000"
            minLength={16}
          />
        )}
      </InputMask>
    </div>
  );
}
export default CardNumber;
