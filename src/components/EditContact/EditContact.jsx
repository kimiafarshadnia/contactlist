import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import "./EditContact.css";
import getOneContact from "./../../services/getOneContact";
import { Link } from "react-router-dom";
import deleteOneContact from "../../services/deleteContactService";
import getContacts from "../../services/getContactsService";
import updateContact from "../../services/updateContact";
const EditContact = ({ history, match }) => {
  const [contacts, setContacts] = useState([]);

  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    categori: "",
    tel: "",
    birthday: "",
  });

  const deleteContactHandler = async (id) => {
    try {
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
      await deleteOneContact(id);
      toast.success("Contact deleted ");
    } catch (error) {}
  };

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
      await updateContact(match.params.id, contact);
      toast.success("Contact updated ");
      await getContacts();
      history.push("/");
    } catch (error) {}
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(match.params.id);
        setContact({ ...data });
      } catch (error) {}
    };
    localFetch();
  }, []);

  return (
    <>
      <div className="editContact">
        <form onSubmit={submitForm} className="contactForm">
          <div className="headerForm">
            <Link to="/">
              <button style={{ color: "#2563eb" }} type="button">
                Cancle
              </button>
            </Link>

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
                value={contact.name}
                onChange={changeHandler}
              />
              <hr />
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                value={contact.lastname}
                onChange={changeHandler}
              />
              <hr />
              <input
                type="tel"
                name="tel"
                placeholder="Phone"
                value={contact.tel}
                onChange={changeHandler}
              />
              <hr />
              <input
                type="date"
                name="birthday"
                placeholder="Birthday"
                value={contact.birthday}
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
        <Link to="/">
          <button
            className="btnDelete"
            onClick={() => deleteContactHandler(contact.id)}
          >
            Delete contact
          </button>
        </Link>
      </div>
    </>
  );
};

export default EditContact;
