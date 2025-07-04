import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SeatSelector from "../components/SeatSelector";
import BookingSummary from "../components/BookingSummary";

export default function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    if (!movie) {
      navigate("/");
    }
  }, [movie, navigate]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        ← Go Back
      </button>

      <h1 className="text-2xl font-bold mb-2">Book for: {movie?.title}</h1>
      <img src={movie?.poster} alt={movie?.title} className="w-40 rounded mb-4" />
      <SeatSelector
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
      />
      
        <label className="block text-sm font-medium mb-1">Show Time</label>
        <select
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        >
          <option value="">Select a time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
        </select>
      
      <BookingSummary selectedSeats={selectedSeats} selectedTime={selectedTime} movie={movie} />
    </div>
  );
}
