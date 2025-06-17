import { useState, useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import { v4 as uuidv4 } from "uuid";

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);
  const [form, setForm] = useState({ name: "", email: "", phone: "", image: "" });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    addContact({ ...form, id: uuidv4() });
    setForm({ name: "", email: "", phone: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-xl shadow space-y-3 w-80">
      <label htmlFor="Name">Name</label>
      <input name="name" placeholder="FullName" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" />
      
      <label htmlFor="email">Email</label>
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" />
      
      <label htmlFor="phone">Contact No.</label>
      <input name="phone" placeholder="Contact No." value={form.phone} onChange={handleChange} className="w-full p-2 border rounded" />
      
      <label htmlFor="file">Choose image</label>
      <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full" />
      
      <button className="bg-blue-600 text-white w-full py-2 rounded-3xl">Add Contact</button>
    </form>
  );
};

export default ContactForm;
