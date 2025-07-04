import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/bookings" className="hover:underline">My Bookings</Link>
    </nav>
  );
}
