import "./AddContact.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const AddContact = () => {
  const [show, setShow] = useState(false);

  return (
    
    <div>
      <button
        className="btnAdd"
        onClick={() => {
          setShow(true);
        }}
      >
        <AiOutlinePlus />
      </button>
      {show && <Modal closeModal={setShow} />}
    </div>
  );
};

export default AddContact;
