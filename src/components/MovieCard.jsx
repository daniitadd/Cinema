import { Link } from "react-router-dom";

const MovieCard = ({ id, title, description, genre, poster, datetime }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Жанр:</strong> {genre}</p>
      <p><strong>Сеанс:</strong> {datetime}</p>
      <Link to={`/booking/${id}`}>
        <button>Забронювати</button>
      </Link>
    </div>
  );
};

export default MovieCard;
