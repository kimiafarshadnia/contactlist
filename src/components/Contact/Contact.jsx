import { Link } from "react-router-dom";
import "./contact.css";
const Contact = ({ contact }) => {
  const { name, lastname, id } = contact;

  return (
    <div>
      <Link
        to={{
          pathname: `user/${id}`,
          state: { contact: contact },
        }}
        className="contact"
      >
        <p style={{ margin: "0 5px 0 0", textTransform: "capitalize" }}>
          {name}
        </p>
        <p style={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {lastname}
        </p>
      </Link>
      <hr />
    </div>
  );
};

export default Contact;
