import { Link } from "react-router-dom";

const MovieCard = ({ id, title, description, genre, poster, datetime }) => {
  return (
    <div className="movie-card">
      <div className="content">
        <img src={poster} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Жанр:</strong> {genre}</p>
        <p><strong>Сеанс:</strong> {datetime}</p>
      </div>
      <div className="bron-center">
        <Link to={`/booking/${id}`}>
          <button className="bron">Забронювати</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
