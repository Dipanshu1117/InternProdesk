import { useContext, useState, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactCard from "./ContactCard";
import SearchBar from "./SearchBar";

const ContactList = () => {
  const { contacts } = useContext(ContactContext);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(contacts);

  useEffect(() => {
    setFiltered(
      contacts.filter(c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.email.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, contacts]);

  return (
    <div className="mt-6 w-80">
      <SearchBar query={query} setQuery={setQuery} />
      <div className="space-y-4">
        {filtered.map(contact => <ContactCard key={contact.id} contact={contact} />)}
        {filtered.length === 0 && <p className="text-gray-500">No contacts found.</p>}
      </div>
    </div>
  );
};

export default ContactList;
