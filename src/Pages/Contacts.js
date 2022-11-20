import ContactList from "../components/ContactList/ContactList";
import AddContact from "../components/AddContact/Addconatct";

const Contacts = () => {
  return (
    <main style={{ padding: "0.75rem" }}>
      <h1>Contacts</h1>
      <AddContact />
      <ContactList />
    </main>
  );
};

export default Contacts;
