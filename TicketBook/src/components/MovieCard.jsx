import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/booking", { state: { movie } });
  };

  const handleQuickBook = () => {
    const totalSeats = 50;
    const seatCount = Math.floor(Math.random() * 3) + 2; // book 2 to 4 seats
    const randomSeats = Array.from(
      { length: seatCount },
      () => Math.floor(Math.random() * totalSeats) + 1
    );

    const newBooking = {
      movie: movie.title,
      seats: randomSeats,
      time: new Date().toISOString(),
      quick: true,
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    alert(`🎉 Quick Booked ${movie.title}!\nSeats: ${randomSeats.join(", ")}`);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img src={movie.poster} alt={movie.title} className="rounded-md" />
      <h3 className="mt-2 font-bold">{movie.title}</h3>
      <div className="flex flex-col gap-2 mt-3">
        <button
          onClick={handleBook}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Book Ticket
        </button>
        <button
          onClick={handleQuickBook}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Quick Book
        </button>
      </div>
    </div>
  );
}
