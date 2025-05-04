import { useParams } from "react-router-dom";
import CinemaHall from "../components/CinemaHall";
import { movies } from "../data/movies";

export default function Booking() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id == id);

  return (
    <div>
      <h2>Бронювання для фільму: {movie.title}</h2>
      <CinemaHall />
    </div>
  );
}
