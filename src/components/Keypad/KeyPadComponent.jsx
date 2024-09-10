import "./KeyPadComponent.css";
import { BsTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "../Modal/Modal";  // To use the modal to add contact details
import http from "../../services/httpService";  // For backend communication

const KeyPadComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");  // Track the entered phone number
  const [showModal, setShowModal] = useState(false);   // To show the add contact modal

  // Function to handle number click
  const handleNumberClick = (number) => {
    setPhoneNumber((prev) => prev + number);  // Append clicked number to the phone number
  };

  // Function to handle the 'Add to Contacts' button click
  const handleAddToContacts = () => {
    if (phoneNumber) {
      setShowModal(true);  // Open the modal to add the contact details
    }
  };

  // Function to handle form submission (optional if calling an API)
  const handleCall = async () => {
    if (phoneNumber) {
      try {
        const response = await http.post("/dial", { number: phoneNumber });
        console.log(response.data.message);
      } catch (error) {
        console.error("Error making call:", error);
      }
      setPhoneNumber("");  // Reset the phone number field after the call
    }
  };

  return (
    <div className="keypad">
      <div className="writhNumber">
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          readOnly
          placeholder="Enter phone number"
        />
        <button
          type="submit"
          className="addPhoneNumber"
          onClick={handleAddToContacts}  // Trigger the modal to add contact
        >
          Add to Contacts
        </button>
        {showModal && <Modal closeModal={setShowModal} phoneNumber={phoneNumber} />}  {/* Pass the phone number to the Modal */}
      </div>

      <div className="numberPad">
        <div className="numbersOfKeypad">
          <div className="number" onClick={() => handleNumberClick("1")}>1</div>
          <div className="number" onClick={() => handleNumberClick("2")}>2</div>
          <div className="number" onClick={() => handleNumberClick("3")}>3</div>
        </div>
        <div className="numbersOfKeypad">
          <div className="number" onClick={() => handleNumberClick("4")}>4</div>
          <div className="number" onClick={() => handleNumberClick("5")}>5</div>
          <div className="number" onClick={() => handleNumberClick("6")}>6</div>
        </div>
        <div className="numbersOfKeypad">
          <div className="number" onClick={() => handleNumberClick("7")}>7</div>
          <div className="number" onClick={() => handleNumberClick("8")}>8</div>
          <div className="number" onClick={() => handleNumberClick("9")}>9</div>
        </div>
        <div className="numbersOfKeypad">
          <div className="number" onClick={() => handleNumberClick("*")}>*</div>
          <div className="number" onClick={() => handleNumberClick("0")}>0</div>
          <div className="number" onClick={() => handleNumberClick("#")}>#</div>
        </div>
      </div>

      <div className="call" onClick={handleCall}>
        <BsTelephoneFill />
      </div>
    </div>
  );
};

export default KeyPadComponent;
