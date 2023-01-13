import "./ContactList.css";
import MyCard from "../MyCard/MyCard";
import Contact from "../Contact/Contact";
import getContacts from "../../services/getContactsService";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import ListingWithThumbnail from "../ListingWithThumbnail";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      const filteredContacts = allContacts.filter((c) => {
        console.log(Object.values(c).join(" "));
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  };

  return (
    <>
      <div className="searchBox">
        <BiSearch />
        <input
          type="text"
          placeholder="Search"
          onChange={searchHandler}
          value={searchTerm}
        />
        <FaMicrophone />
      </div>
      <hr />
      <MyCard />
      <hr />
      {contacts ? (
        contacts.map((contact) => {
          return <Contact contact={contact} key={contact.id} />;
        })
      ) : (
        <div>
          <ListingWithThumbnail/>
        </div>
      )}
    </>
  );
};

export default ContactList;
