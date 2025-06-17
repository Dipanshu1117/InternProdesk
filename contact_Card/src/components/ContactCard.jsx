import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);

  const createSMSLink = () => {
    const message = `Contact Info:\nName: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}`;
    return `sms:?body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white shadow rounded p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={contact.image || "https://via.placeholder.com/80"}
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold">{contact.name}</h2>
          <p className="text-sm text-gray-600">{contact.email}</p>
          <p className="text-sm text-gray-600">{contact.phone}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <a
          href={createSMSLink()}
          className="text-green-600 text-sm hover:underline"
        >
          Share via SMS
        </a>
        <button
          onClick={() => deleteContact(contact.id)}
          className="text-red-600 text-sm hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
