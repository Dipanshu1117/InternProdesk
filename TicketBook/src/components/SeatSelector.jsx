import { useState } from "react";

export default function SeatSelector({ selectedSeats, setSelectedSeats }) {
  const rows = 5;
  const cols = 10;
  const totalSeats = rows * cols;

  const handleSelect = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div className="grid grid-cols-10 gap-2 p-4 bg-gray-100 rounded-lg">
      {[...Array(totalSeats)].map((_, i) => {
        const seatNum = i + 1;
        const isSelected = selectedSeats.includes(seatNum);

        return (
          <button
            key={seatNum}
            onClick={() => handleSelect(seatNum)}
            className={`w-10 h-10 rounded ${
              isSelected ? "bg-green-500" : "bg-gray-300"
            } hover:bg-green-300 transition`}
          >
            {seatNum}
          </button>
        );
      })}
    </div>
  );
}
