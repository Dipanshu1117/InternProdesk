import { useEffect, useState } from "react";

export default function AllBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🎫 All Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-600">No bookings found.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking, index) => (
            <li key={index} className="p-4 bg-white rounded shadow">
              <h2 className="font-semibold text-lg">{booking.movie}</h2>
              <h2 className="font-semibold text-lg">
                {booking.movie} {booking.quick && <span className="text-sm text-green-600">(Quick Book)</span>}
              </h2>

              <p>Seats: {booking.seats.join(", ")}</p>
              <p className="text-sm text-gray-500">
                Booked on: {new Date(booking.time).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
