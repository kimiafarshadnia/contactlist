import "./KeyPadComponent.css";
import { BsTelephoneFill } from "react-icons/bs";
import Modal from "../Modal/Modal";
import { useState } from "react";
const KeyPadComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="keypad">
      <div className="writhNumber">
        <input type="tel" name="phoneNumber" />
        <button
          type="submit"
          className="addPhoneNumber"
          onClick={() => {
            setShow(true);
          }}
        >
          Add Number
        </button>
        {show && <Modal closeModal={setShow} />}
      </div>
      <div></div>

      <div className="numberPad">
        <div className="numbersOfKeypad">
          <div className="number">1</div>
          <div className="number">2</div>
          <div className="number">3</div>
        </div>
        <div className="numbersOfKeypad">
          <div className="number">4</div>
          <div className="number">5</div>
          <div className="number">6</div>
        </div>
        <div className="numbersOfKeypad">
          <div className="number">7</div>
          <div className="number">8</div>
          <div className="number">9</div>
        </div>
        <div className="numbersOfKeypad">
          <div className="number">*</div>
          <div className="number">0</div>
          <div className="number">#</div>
        </div>
      </div>

      <div className="call">
        <BsTelephoneFill />
      </div>
    </div>
  );
};

export default KeyPadComponent;
