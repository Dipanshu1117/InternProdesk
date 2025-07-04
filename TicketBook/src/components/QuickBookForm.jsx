import { useState } from "react";

export default function QuickBookForm({ movie }) {
  const [seatCount, setSeatCount] = useState(2);
  const [showTime, setShowTime] = useState("");
  const [screen, setScreen] = useState("Screen 1");
  const [success, setSuccess] = useState(false);

  const handleQuickBook = () => {
    console.log("Booking triggered with:", { seatCount, showTime, screen });

    if (!showTime) {
      alert("Please select a show time.");
      return;
    }

    const totalSeats = 50;
    const selectedSeats = [];

    while (selectedSeats.length < seatCount) {
      const seat = Math.floor(Math.random() * totalSeats) + 1;
      if (!selectedSeats.includes(seat)) {
        selectedSeats.push(seat);
      }
    }

    const booking = {
      movie: movie.title,
      seats: selectedSeats,
      showTime,
      screen,
      quick: true,
      time: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="bg-gray-100 p-4 rounded mt-3">
      <h3 className="font-semibold mb-2 text-gray-800">Quick Book</h3>

      {/* Seat Count */}
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Number of Seats</label>
        <select
          value={seatCount}
          onChange={(e) => setSeatCount(Number(e.target.value))}
          className="w-full px-2 py-1 border rounded"
        >
          {[2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num} seat{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Show Time */}
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Show Time</label>
        <select
          value={showTime}
          onChange={(e) => setShowTime(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        >
          <option value="">Select a time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
        </select>
      </div>

      {/* Screen */}
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Screen</label>
        <select
          value={screen}
          onChange={(e) => setScreen(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        >
          <option value="Screen 1">Screen 1</option>
          <option value="Screen 2">Screen 2</option>
          <option value="IMAX">IMAX</option>
        </select>
      </div>

      {/* Button */}
      <button
        onClick={handleQuickBook}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Confirm Quick Book
      </button>

      {/* Success Message */}
      {success && (
        <p className="mt-3 text-green-700 font-medium">
          ✅ Booking Confirmed!
        </p>
      )}
    </div>
  );
}
