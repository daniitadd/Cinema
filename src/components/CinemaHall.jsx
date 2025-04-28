import { useState } from "react";

export default function CinemaHall() {
  const rows = 5;
  const cols = 8;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div>
      <div className="hall">
        {[...Array(rows * cols)].map((_, i) => {
          const seat = i + 1;
          return (
            <div
              key={seat}
              className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>
      <p>Вибрані місця: {selectedSeats.join(", ")}</p>
    </div>
  );
}
