import "./InfoContact.css";
import { FaUserCircle, FaDollarSign, FaVideo, FaComment } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
const InfoContact = ({ location }) => {
  const { contact } = location.state;
  return (
    <div className="contactInfo">
      <div className="header">
        <div>
          <Link to="/" className="links " style={{ color: "#2563eb" }}>
            <MdOutlineKeyboardArrowLeft /> Contacts
          </Link>
        </div>
        <div>
          <Link
            to={`/edit/${contact.id}`}
            className="links "
            style={{ color: "#2563eb" }}
          >
            <button>Edit</button>
          </Link>
        </div>
      </div>
      <div className="imgContact">
        <FaUserCircle className="avatar" />
      </div>

      <div className="boxName">
        <div className="nameContact">
          <p>{contact.name} </p>
          <p className="lastname"> {contact.lastname}</p>
        </div>
        <p className="categori">{contact.categori}</p>
      </div>

      <div className="operations">
        <div className="operation">
          <FaComment />
          <p>message</p>
        </div>

        <div className="operation">
          <BsTelephoneFill />
          <p>call</p>
        </div>

        <div className="operation">
          <FaVideo />
          <p>video</p>
        </div>

        <div className="operation disable">
          <HiMail />
          <p>mail</p>
        </div>

        <div className="operation">
          <FaDollarSign />
          <p>pay</p>
        </div>
      </div>

      <div className="box">
        <p style={{ marginBottom: "0.5rem" }}>phone</p>
        <p style={{ color: "#2563eb" }}>{contact.tel}</p>
      </div>

      <div className="box">
        <p style={{ marginBottom: "0.5rem" }}>birthday</p>
        <p style={{ color: "#2563eb" }}>{contact.birthday}</p>
      </div>

      <div className="box">
        <p style={{ marginBottom: "0.5rem" }}>mail</p>
        <p style={{ color: "#2563eb" }}>{contact.birthday}</p>
      </div>
    </div>
  );
};

export default InfoContact;
