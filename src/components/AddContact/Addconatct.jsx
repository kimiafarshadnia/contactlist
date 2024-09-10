import "./AddContact.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddContact = () => {
  const [show, setShow] = useState(false);  // State to control modal visibility

  return (
    <div>
      <button
        className="btnAdd"
        onClick={() => {
          setShow(true);  // Open the modal
        }}
      >
        <AiOutlinePlus />
      </button>
      {show && <Modal closeModal={setShow} />}  {/* Modal to add a new contact */}
    </div>
  );
};

export default AddContact;
