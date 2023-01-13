import { Link } from "react-router-dom";
import me from "../../assets/images/me.jpeg";
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
        <div className="eachContact">
          <div className="MyImgCard">
            <img src={me} alt="my-card-img" />
          </div>
          <div className="nameContct">
            <p style={{ margin: "0 5px 0 0", textTransform: "capitalize" }}>
              {name}
            </p>
            <p style={{ fontWeight: "bold", textTransform: "capitalize" }}>
              {lastname}
            </p>
          </div>
        </div>
      </Link>
      <hr />
    </div>
  );
};

export default Contact;
