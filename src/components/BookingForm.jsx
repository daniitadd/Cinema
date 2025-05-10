import { useState } from "react";
import { toast } from "react-toastify";

export default function BookingForm({ selectedSeats, onConfirm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      toast.error("Усі поля обов'язкові!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Некоректний email.");
      return;
    }

    onConfirm({ name, phone, email });
    toast.success("Бронювання успішно збережено!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Підтвердження бронювання</h3>
      <p>Місця: {selectedSeats.join(", ")}</p>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="bron-ctr"><button type="submit" className="bron">Підтвердити</button></div>
    </form>
  );
}
