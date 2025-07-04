import { useNavigate } from "react-router-dom";

export default function BookingSummary({ selectedSeats, movie, selectedTime }) {
  const navigate = useNavigate();
  const pricePerSeat = 150;
  const total = selectedSeats.length * pricePerSeat;

  const handleConfirm = () => {
    const newBooking = {
      movie: movie.title,
      seats: selectedSeats,
      time: new Date().toISOString(),
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    alert("Booking Confirmed!");
    navigate("/"); // go to home after confirmation
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md mt-4">
      <h2 className="text-lg font-semibold mb-2">Booking Summary</h2>
      <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
      <p>Selected Seats: {selectedTime || "None"}</p>

      <p>Total Price: ₹{total}</p>
      <button
        onClick={handleConfirm}
        disabled={selectedSeats.length === 0}
        className="mt-3 w-full bg-green-600 text-white py-2 rounded disabled:bg-gray-400"
      >
        Confirm Booking
      </button>
    </div>
  );
}
