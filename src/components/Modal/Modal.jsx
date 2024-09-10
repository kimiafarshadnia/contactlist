import "./Modal.css";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import addOneContact from "../../services/addContactService";

const Modal = ({ closeModal, phoneNumber }) => {  // Accept phoneNumber as a prop
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    categori: "",
    tel: "",   // Initially blank
    email: "", // Add email field
  });

  // UseEffect to prefill the phone number when the modal opens
  useEffect(() => {
    if (phoneNumber) {
      setContact((prevContact) => ({
        ...prevContact,
        tel: phoneNumber,
      }));
    }
  }, [phoneNumber]);

  // Function to handle input changes
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // Function to submit the form and add the contact
  const submitForm = async (e) => {
    e.preventDefault();

    // Validate the input
    if (!contact.name || !contact.tel || !contact.email) {
      toast.error("All fields are mandatory!");
      return;
    }

    // Prepare the data for submission
    const contactData = {
      id: Date.now(),               // Generate a unique ID based on timestamp
      name: contact.name,
      lastname: contact.lastname,
      tel: contact.tel,
      email: contact.email,         // Send email to the backend
      categori: contact.categori,
    };

    try {
      console.log("Submitting contact:", contactData);  // Check what's being submitted
      await addOneContact(contactData);  // Add the contact via API call
      toast.success("Contact added successfully!");

      // Reset the form and close modal
      setContact({
        name: "",
        lastname: "",
        categori: "",
        tel: "",
        email: "",
      });
      
      closeModal(false);  // Close the modal after successful submission
    } catch (error) {
      console.error("Error adding contact:", error);  // Log the error for debugging
      toast.error("Failed to add contact. Please try again.");
    }
  };

  return (
    <div className="modal">
      <div className="modalBody">
        <form onSubmit={submitForm} className="contactForm">
          <div className="headerForm">
            <button
              style={{ color: "#2563eb" }}
              onClick={() => closeModal(false)}
              type="button"
            >
              Cancel
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
                value={contact.name}  // Bind the value to contact.name
                onChange={changeHandler}
              />
              <hr />
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                value={contact.lastname}  // Bind the value to contact.lastname
                onChange={changeHandler}
              />
              <hr />
              <input
                type="tel"
                name="tel"
                placeholder="Phone"
                value={contact.tel}  // Prefill the phone number and bind the value
                onChange={changeHandler}
              />
              <hr />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contact.email}  // Bind the value to contact.email
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
              <label htmlFor="family">Family</label>
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
              <label htmlFor="friend">Friend</label>
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
              <label htmlFor="work">Work</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
