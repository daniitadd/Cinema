import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import { BookingService } from "../services/BookingService";
import { useParams } from "react-router-dom";

export default function CinemaHall() {
  const rows = 5;
  const cols = 8;
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const booked = BookingService.getBookings(id);
    setBookedSeats(booked);
  }, [id]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleConfirm = (userData) => {
    BookingService.saveBooking(id, selectedSeats);
    setBookedSeats((prev) => [...prev, ...selectedSeats]);
    setSelectedSeats([]);
    setShowForm(false);
  };

  return (
    <div>
      <div className="centered-hall">
        <div className="hall">
          {[...Array(rows * cols)].map((_, i) => {
            const seat = i + 1;
            let className = "seat";
            if (bookedSeats.includes(seat)) className += " booked";
            else if (selectedSeats.includes(seat)) className += " selected";

            return (
              <div
                key={seat}
                className={className}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </div>
            );
          })}
        </div>
      </div>
      <p className="seat-choice">Вибрані місця: {selectedSeats.join(", ")}</p>
      {!showForm && selectedSeats.length > 0 && (
        <div className="bron-ctr"><button onClick={() => setShowForm(true)} className="bron">Забронювати</button></div>
      )}
      {showForm && (
        <BookingForm selectedSeats={selectedSeats} onConfirm={handleConfirm} />
      )}
    </div>
  );
}
