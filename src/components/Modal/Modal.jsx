import "./Modal.css";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import addOneContact from "../../services/addContactService";
import getContacts from "./../../services/getContactsService";

const Modal = ({ closeModal }) => {
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    categori: "",
    tel: "",
    birthday: "",
  });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.tel) {
      toast.error(" all fildes are mandatory ! ");
      return;
    }
    e.preventDefault();
    try {
      await addOneContact(contact);
      setContact({
        name: "",
        lastname: "",
        categori: "",
        tel: "",
        birthday: "",
      });
      closeModal(false);
      toast.success("Contact added ");
    } catch (error) {}
  };
  return (
    <>
      <div className="modal">
        <div className="modalBody">
          <form onSubmit={submitForm} className="contactForm">
            <div className="headerForm">
              <button
                style={{ color: "#2563eb" }}
                onClick={() => closeModal(false)}
                type="button"
              >
                Cancle
              </button>
              <h5>New Contact</h5>
              <button type="submit" style={{ fontWeight: "bolder" }}>
                Done
              </button>
            </div>

            <div className="imgContacts">
              <FaUserCircle className="avatar" />
            </div>

            <div className="BoxInputs">
              <div className="inputs">
                <input
                  type="text"
                  name="name"
                  placeholder="First name"
                  onChange={changeHandler}
                />
                <hr />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  onChange={changeHandler}
                />
                <hr />
                <input
                  type="tel"
                  name="tel"
                  placeholder="Phone"
                  onChange={changeHandler}
                />
                <hr />
                <input
                  type="date"
                  name="birthday"
                  placeholder="Birthday"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="categori">
              <div className="eachCategori">
                <input
                  type="radio"
                  name="categori"
                  id="family"
                  value="Family"
                  checked={contact.categori === "Family"}
                  onChange={changeHandler}
                />
                <label htmlFor="family">family</label>
              </div>

              <div className="eachCategori">
                <input
                  type="radio"
                  name="categori"
                  id="friend"
                  value="Friend"
                  checked={contact.categori === "Friend"}
                  onChange={changeHandler}
                />
                <label htmlFor="friend">friend</label>
              </div>

              <div className="eachCategori">
                <input
                  type="radio"
                  name="categori"
                  id="work"
                  value="Work"
                  checked={contact.categori === "Work"}
                  onChange={changeHandler}
                />
                <label htmlFor="work">work</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
