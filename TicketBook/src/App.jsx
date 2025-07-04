import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import Navbar from "./components/Navbar";
import AllBookings from "./pages/AllBookings";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/bookings" element={<AllBookings/>} />
      </Routes>
    </Router>
  );
}
